
const Producto = function(nombre,precio,stock){
    this.nombre = nombre
    this.precio = precio
    this.stock = stock
}

let producto1 = new Producto ("Bolso", 30000, 18)
let producto2 = new Producto ("Bolso mochila", 35000, 5)
let producto3 = new Producto ("Mochila urbana", 25000, 15)
let producto4 = new Producto ("Cartera", 18000, 11)
let producto5 = new Producto ("Riñonera", 20000, 0)

let miListaProductos = [producto1,producto2,producto3,producto4,producto5]

const botonBuscar = document.getElementById("button")
botonBuscar.addEventListener("click", buscarProducto)

function buscarProducto(){
    const body = document.querySelector("body")
    const input = document.getElementById("filter").value
    const claveIngresada = input.trim().toUpperCase()
    const resultadoClave = miListaProductos.filter((producto)=> producto.nombre.toUpperCase().includes(claveIngresada))

    if(resultadoClave.length >0){
        const contenedor = document.createElement("div")

        resultadoClave.forEach((producto)=>{
            const misProductos = document.createElement("div")

            const nombre = document.createElement("h4")
            nombre.textContent = producto.nombre
            misProductos.appendChild(nombre)

            const precio = document.createElement("p")
            precio.textContent = `Precio: $ ${producto.precio}`
            misProductos.appendChild(precio)

            const stock = document.createElement("p")
            stock.textContent = `Stock disponible: ${producto.stock}`
            misProductos.appendChild(stock)

            contenedor.appendChild(misProductos)
        })

        body.appendChild(contenedor)

    }else{
        let respuesta = document.getElementById("respuesta")
        respuesta.innerText = "Lo sentimos, no contamos con ese producto."
    }
}

const inputNombre = document.getElementById("inputNombre")
const inputApellido = document.getElementById("inputApellido")
const inputTelefono = document.getElementById("inputTelefono")
const inputCorreo = document.getElementById("inputCorreo")

function guardarDatosForm(){
    localStorage.setItem("Nombre", inputNombre.value)
    localStorage.setItem("Apellido", inputApellido.value)
    localStorage.setItem("Teléfono", inputTelefono.value)
    localStorage.setItem("Correo electrónico", inputCorreo.value)
}

let boton = document.getElementById("boton")
boton.addEventListener("click", guardarDatosForm)