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
Este programa pide 15 numero enteros positivos al usuario y evalua e imprime
-Cantidad de números Mayores a 150
-Número mayor y número menor encontrado en el grupo
-Cantidad de Números negativos encontrados
-Promedio de los Positivos Encontrados.


//Salvedad: Si y solo si se garantizan resultados sin cambios en el codigo

*/
 
 const prompt = require('prompt-sync')()
function comprobarNumeros() {
//---Get numbers to array---

 let arrayNumbers = [] 
 //Los numeros negativos en el array se declararon pero ya no son necesarios y se usa un contador acumulativo para saber cuantos son
 let arrayNegativeNumbers = []
 let negativesLenght = 0

for (iGetNumbers = 0 ; iGetNumbers < 15 ; iGetNumbers++) {
    let inputNumber = prompt("Ingresa un numero: ")
    if (inputNumber > 0) {
        //se ingresan numeros positivos en el array positivo
        arrayNumbers.push(parseInt(inputNumber))
    }

    //condicion para numeros <= 0
    else if (inputNumber <= 0) {
        //se reduce en uno el contador para entrar en bucle infinito si no se cumple la condicion
        iGetNumbers = iGetNumbers - 1
        console.log("Ingrese un numero mayor que 0")
        arrayNegativeNumbers.push(parseInt(inputNumber))
        negativesLenght++
    }
    //cuando no es numero (no se guarda en un array)
    else {
        iGetNumbers -= 1
        console.log("Por favor ingrese un numero: ")
    }
}

//---Check if numbers are higher than 150---

let iMayores = 0
let contadorMayores150 = 0
while (iMayores <= arrayNumbers.length) {

    if(arrayNumbers[iMayores] >= 150) {
        contadorMayores150++
    }
    iMayores++
}
//Here was output for higher than 150


//---Sume all the numbers in ArrayNumbers---

//iActualReducePosition = arrayNumbers [valor del numero en laposicion actual desde 0]

//iReduce = arrayNumbers [posicion actual desde 0]
let suma = arrayNumbers.reduce(function(iReduce,iActualReducePosition){
    // me suma posicion actual desde 0 + valor del numero en laposicion actual desde 0
    return iReduce + iActualReducePosition
    //indica desde donde quiero contar
},0)

//---All outputs to user (Only those outputs are out of a conditional or function)---

console.log("Cantidad de numeros mayores a 150: " + contadorMayores150)

//---To know what is the hights and lowest number---

/*Math.max() es un método estático en JavaScript que devuelve el número más grande de los argumentos pasados ​​a la función.
El operador de propagación (...) se utiliza para expandir una expresión iterable, como un array, en lugares donde se esperan múltiples argumentos.*/

console.log("Numero mayor encontrado: " + Math.max(...arrayNumbers))
console.log("Numero menor encontrado: " + Math.min(...arrayNumbers))

//---Quantity of negative numbers---

console.log("La cantidad de numeros negativos fue: " + negativesLenght)

//---Average---

console.log("El promedio de los 15 numeros positivos valores que ingreso es: " + (suma / arrayNumbers.length).toFixed(2))
}

comprobarNumeros()