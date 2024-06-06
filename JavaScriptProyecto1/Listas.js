/*
- Fecha de publicación: 14.04.2023
- Hora de publicación: 8PM
- Versión de su código: 2
- Autores: Ing(c): Juan Manuel Hurtado Isaza - Luisa Victoria Sanchez
- Nombre del lenguaje utilizado: “ECMASCRIPT 6.0” (javascript 6.0)
- Versión del lenguaje utilizado: 6.0
- Universidad Tecnológica de Pereira
- Programa de Ingeniería de Sistemas y Computación
- Descripción de la funcionalidad del programa: 
  Para realizar este proyecto instalamos prompt-sync de Node para asi poder recibir y almacenar datos que ingresa 
  el usuario por medio del teclado.
  Este programa contiene 3 funciones:

    1. Funcion que dada una lista de números, se encuentra el número más grande y el más pequeño en la lista.

      Output: [
        1,  2,  5, 45,
        86, 97, 15,  4]                    
    El numero mayor es: 97
    El numero menor es: 4   

    2. Función que tome  dos listas con diferentes elementos, y luego las combina en una sola lista y la ordea.
      Output: lista 1: 4,9,2
    lista 2: 7,5,1
    Las 2 listas juntas son: 1,2,4,5,7,9

    3. Función que  invierte los elementos de una Lista.

      Output: [ '1', '2', '4', '5', '7', '9' ]
    original: 3,6,9,12,15
    Invertida: 15,12,9,6,3
*/

const prompt = require('prompt-sync')();


// Mayores y menores
function MayorMenorLista() {
    let listaNumero = [1,2,5,45,86,97,15,4];

    let maximo = 0
    for (let i = 0; i < listaNumero.length; i++) {
        if(maximo <= listaNumero[i]){
            maximo = listaNumero[i]
        }
    }   
    
    let minimo = maximo
    for (let i2 = 0; i2 < listaNumero.length; i2++) {
        if(minimo = listaNumero[i2]) {
            minimo >= listaNumero[i2]
        }

    }
    console.log(listaNumero)
    console.log("El numero mayor es: " + maximo);
    console.log("El numero menor es: " + minimo);
}

MayorMenorLista()



 //Concatenación de Listas:
function concatenacionListas() {
//Listas a combinar
let lista1 = ["4", "9", "2"];
let lista2 = ["7", "5", "1"];
//Combinacion de lista1 y lista2
let lista3 = lista1.concat(lista2);
//Función para organizar
lista3.sort(); 

//Mostrar en pantalla
console.log("lista 1: " + lista1)
console.log("lista 2: " + lista2)
console.log("Las 2 listas juntas son: " + lista3);
}

concatenacionListas()


//Invertir uns lista:
function invertirLista() {
//Apertura de espacio de memoria
const original = ["3", "6", "9", "12", "15"];
console.log('original: '+original);

//Invertir lista
original.reverse ();
console.log('Invertida: '+original);
}

invertirLista()
