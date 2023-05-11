//FUNCIONES

//Función de bievenida
function saludo(){
    let nombre = prompt("Ingresá tu nombre.")
    alert(
        "Hola! " + nombre + ", bienvenid@ a la casa de instrumentos musicales Creedence ♫ "
    )
}

//Selección de productos

function seleccionInstrumento() {
    instrumento = prompt(`
    Selecciona tu nuevo instrumento:
    1: Bateria
    2: Bajo
    3: Guitarra
    4: Piano

    0: Salir
    `)
    switch (instrumento) { 
        case "1":
            alert("Elegiste Bateria")
            break;
        case "2":
            alert("Elegiste Bajo")
            break;
        case "3":
            alert("Elegiste Guitarra")
            break;
        case "4":
            alert("Elegiste Piano")
            break;
        case "0":
            alert("¡Gracias por visitar la Casa de Instrumentos musicales Creedence!")
            break;
    
        default:
            alert("Ingresá una opción válida")
            break;
    }
}

 function finalizarOperacion() {
    if(instrumento === "1"){
        alert("Elegiste una bateria incluyendo costo de envío por un monto de " + bateria
        )
    } else if (instrumento === "2"){
        alert("Elegiste un bajo incluyendo costo de envío por un monto de " + bajo
        )
    } else if (instrumento === "3"){
        alert("Elegiste una guitarra incluyendo costo de envío por un monto de " + guitarra
        )
    } else if (instrumento === "4"){
        alert("Elegiste un piano incluyendo costo de envío por un monto de " + piano
        )
    }
    
 }

//MAIN

//VARIABLES GLOBALES    
let instrumento
let bateria = 100000
let bajo = 70000
let guitarra = 75000
let piano = 65000 
saludo()
seleccionInstrumento()
finalizarOperacion()
alert("¡Gracias por visitar la Casa de Instrumentos musicales Creedence!")