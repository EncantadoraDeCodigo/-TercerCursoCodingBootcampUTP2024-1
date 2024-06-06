 /*
- Fecha de publicación: 19 de abril del 2024
- Hora: 6:00 AM
- Versión de su codigo: 03
- Autores del lenguaje utilizado: ECMASCRIPT 6.0 (javascrit 6.0)
- Versión del lenguaje utilizado: 6.0
- Presentado por:   
                    Ingeniera Luisa Victoria
                    Ingeniera Lizeth 
                    Ingeniera Andrea
                    Ingeniero Juan Manuel
                    Ingeniero Santiago Castaño
                    Ingeniero Andres
                    Ingeniero Camilo

- Universidad Tecnológica de Pereira
- Programa de Ingenieria de Sistemas y Computación
- Descripcion del programa:
presenta el resultado del factorial del numero ingresado por el usuario


//Salvedad: Si y solo si se garantizan resultados sin cambios en el codigo
//salveda los valores mas decimales se aproximan al numero inmediatamente anterior (5.7 = 5)

*/
const prompt = require('prompt-sync')()

function CalcularFactorial() {

    let n = prompt("Ingrese el numero para calcular su factorial: ")
    let factorial = 1
    let resultado = 1
//cuando n es negativo
    if (n < 0) {

        while(n < 0){
         n = prompt("Ingrese un numero entero: ")}
         while(factorial <= n) {
            resultado = factorial * resultado
            factorial ++
        }
        console.log("el factorial del numero " + n + " es: " + resultado)
        
    }
//n es un numero positivo
    else if (Number.isInteger((parseInt(n)))) {
    while(factorial <= n) {
        resultado = factorial * resultado
        factorial ++
    }
    console.log("el factorial del numero " + n + " es: " + resultado)
    }
//si n no es un numero
    else {while(!Number.isInteger((parseInt(n)))){
        n = prompt("Ingrese un numero entero: ")}
        while(factorial <= n) {
           resultado = factorial * resultado
           factorial ++
       }
       console.log("el factorial del numero " + n + " es: " + resultado)}
}


CalcularFactorial()