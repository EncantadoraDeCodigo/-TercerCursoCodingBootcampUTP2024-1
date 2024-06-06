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
  Este programa contiene 5 funciones:
    1. Función que convierte grados Celsius a Fahrenheit teniendo en cuenta la fórmula: 
      (9/5 * C°) + 32. Donde el dato de C° se le pide ingresarlo al usuario.
      Input: 32
      Output: 32C° son 89.6 grados Fahrenheit
    2. Función que calcula el Indece de Masa Corporal (IMC) teniendo en cuenta la fórmula:
      peso/(altura)^2. Donde peso es pedido en kilogramos y altura en metros y se le pide ingresarlo al usuario.
      Input: 70
            1.75
      Output: Tu indice de masa corporal (IMC) es 22.86
    3. Función que genera un nombre de usuario concatenando los datos de nombre, apellido y año de nacimiento.
      Estos datos se le pide ingresarlo al usuario.
      Input: Juan
            Victorio
            2001
      Output: JuanVictorio2001
    4. Función que retorna el n-ésimo número de Fibonacci ingresado por el usuario.
      Input: 7
      Output: 8
    5. Función que crea un Menú en la consola con 5 opciones que se pueden seleccionar escribiendo el número
      de la opcíon. Cada opción le corresponde a cada una de las funciones descritas anteriormente.
      Este menú solo se deja de mostrar al usuario cuando se selecciona la opción 5. 
*/

const prompt = require('prompt-sync')();


//calculo de celsius a fareheint
function calcularCelsciusAfar(){
    //variable temperatura
    let temperatura = prompt("Por favor ingrese el valor de su temperatura en Celsius: ");
    let resultado = (9/5 * temperatura) + 32;
    console.log(temperatura + "°C son " + resultado + " grados en Farehenint");
};

//calcularCelsciusAfar()


//input funcion calculadora IMC
function calcularIMC (){
    let peso = prompt("Por favor, ingresa tu peso en kilogramos: ");
    let altura = prompt("Por favor, ingresa tu altura en metro: ");
    let resultado = peso/(altura)**2
    console.log("Su indice de masa corporal es: " + resultado.toFixed(2));
}

//calcularIMC()


//generar nombre de usuario
function generarNombreUsuario (){
    let nombre = prompt("Nombre: ")
    let apellido = prompt("Apellido: ")
    let anoDenacimiento = prompt("Año de nacimiento: ")
    console.log(nombre + apellido + anoDenacimiento)
}

//generarNombreUsuario()

//Sucesion de fibonacci

function mostrarPosicionFibo(){
    let a=0,b=1,c,s=1
    let number = prompt("Por favor ingree el coeficiente de n: ")
    for(i = 3; i<=number; i++){
    c=a+b
    s = s + c;
    a = b;
    b = c;
   }
   console.log("El " + number + "-esimo numero de la sucesion de Fibonacci es: " + c)
}

//mostrarPosicionFibo(prompt("Por favor ingrese el numero n: "))

//Menú
  
function ejecutarOpcion() {
    console.log("¡Bienvenido!")
    console.log('♥ ♥ ♥ Menú ♥ ♥ ♥');
    console.log('1. Conversor de Temperatura');
    console.log('2. Calculadora de IMC');
    console.log('3. Generador de Nombre de Usuario');
    console.log('4. Función Fibonacci (con ciclos)');
    console.log('5. Salir');

    let opcion = prompt("Dìgite la opciòn que desee: ")

    switch (opcion) {
      case '1':
        console.log('Has seleccionado "Conversor de Temperatura"')
        calcularCelsciusAfar()
        ejecutarOpcion();

      case '2':
        console.log('Has seleccionado la sección "Calculadora de IMC"')
        calcularIMC()
        ejecutarOpcion();

        case '3':
        console.log('Has seleccionado la sección "Generador de Nombre de Usuario"')
        generarNombreUsuario()
        ejecutarOpcion();
        
        case '4':
        console.log('Has seleccionado la sección "Función Fibonacci (con ciclos)"')
        mostrarPosicionFibo()
        ejecutarOpcion();

      case '5':
        console.log('¡Hasta luego :)!');
        break;

      default:
        console.log('Opción no válida. Por favor, selecciona una opción del menú.');
        ejecutarOpcion();
    }
  }
  
  ejecutarOpcion()