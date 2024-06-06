/*
- Fecha de publicación: 14.4.2024
- Hora de publicación: 8:00pm
- Versión de su código: 2
- Autores: Ing(c): Luisa Victoria Sánchez Ramírez - Juan Manuel Hurtado Isaza
- Nombre del lenguaje utilizado: “ECMASCRIPT 6.0” (javascript 6.0)
- Versión del lenguaje utilizado: 6.0
- Universidad Tecnológica de Pereira
- Programa de Ingeniería de Sistemas y Computación
- Descripción de la funcionalidad del programa: 
  En primer lugar se instaló prompt-sync de Node js para almacenar los datos de entrada del usuario.
  Este programa se encarga de llevar a cabo 4 funciones:

    1. Función que Adivina el Número [0, 100)'usando esta formula Math.floor(Math.random() * 100) + 1: 
    const numeroUsuario = parseInt(prompt('Dígita un número entre 1 y 100 que quieres adivinar:')); Se le pide al usuario ingresar el número que cree lanzará
    numeroAleatorio: 65
    Input: 55
      Output: 'El número que ingresaste es menor al número a adivinar.'

    2. Crea un programa que calcule el factorial de un número ingresado por el usuario. Utiliza tanto un ciclo for como un ciclo while para realizar el cálculo.
El factorial de un entero positivo n, el factorial de n o n factorial se define en principio como el producto de todos los números enteros positivos desde 1 hasta n
Ejemplo de datos de entrada:

      Input: 6
      Output: 12

    3.  Desarrolla un programa que cuente cuántas vocales distintas hay en una frase proporcionada por el usuario y muestre las vocales encontradas.
Ejemplo de datos de entrada
*/
const prompt = require('prompt-sync')();

//Adivina el numero 0-100
function getRamdomInt() {
  const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
  console.log('Adivina un número entre 1 y 100');

  function funcionamiento() {
      const numeroUsuario = parseInt(prompt('Dígita un número entre 1 y 100 que quieres adivinar:'));

      if (numeroUsuario === numeroAleatorio) {
          console.log('¡Nice! Adivinaste el número ' + numeroAleatorio);
          return;
      } else if (numeroUsuario < numeroAleatorio) {
          console.log('El número que ingresaste es menor al número a adivinar.');
      } else {
          console.log('El número que ingresaste es mayor al número a adivinar.');
      }

      funcionamiento();
  }
funcionamiento();
}


   // getRamdomInt();


//Calculadora de Factorial
function CalcularFactorial() {
    let n = prompt("Ingrese el numero para calcular su factorial: ")
    let factorial = 1
    let resultado = 1

    while(factorial <= n) {
        resultado = factorial * resultado
        factorial ++
    }
    console.log("el factorial del numero " + n + " es: " + resultado)
}

//CalcularFactorial()

//Contador de Vocales

function contarVocales(){
    let cadena = prompt("Por favor ingrese un frase para contar sus vocales: ");
    let numeroA = (cadena.match(/[a]/gi) ?? []).length;
    let numeroE = (cadena.match(/[e]/gi) ?? []).length;
    let numeroI = (cadena.match(/[i]/gi) ?? []).length;
    let numeroO = (cadena.match(/[o]/gi) ?? []).length;
    let numeroU = (cadena.match(/[u]/gi) ?? []).length;

    console.log("a esta " + numeroA + " vez");
    console.log("e esta " + numeroE + " veces");
    console.log("i esta " + numeroI + " veces");
    console.log("o esta " + numeroO + " veces");
    console.log("u esta " + numeroU + " veces");
    }

//contarVocales()

//Menu

function ejecutarOpcion() {
    console.log("¡Bienvenido!")
    console.log('♥ ♥ ♥ Menú ♥ ♥ ♥');
    console.log('1. Adivina el Número [0, 100)');
    console.log('2. Calculadora de Factorial');
    console.log('3. Contador de Vocales');
    console.log('4. Salir');

    let opcion = prompt("Dìgite la opción que desee: ")

    switch (opcion) {
      case '1':
        console.log('Has seleccionado "Adivina el Número [0, 100)"')
         getRamdomInt();
        ejecutarOpcion();

      case '2':
        console.log('Has seleccionado la sección "Calculadora de Factorial"')
        CalcularFactorial();
        ejecutarOpcion();

        case '3':
        console.log('Has seleccionado la sección "Contador de Vocales"')
        contarVocales();
        ejecutarOpcion();
        
        case '4':
            console.log('¡Hasta luego :)!');
        break;
        default:
            console.log('Opción no válida. Por favor, selecciona una opción del menú.');
            ejecutarOpcion();
    }
  }
  
  ejecutarOpcion()

