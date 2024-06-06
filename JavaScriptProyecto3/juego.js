
// Fecha y Hora de publicación: [22 de Abril de 2024 13:59pm]
// Versión de su código: [1.0]
// Autores: Ing(c) [Luisa Victoria Sánchez Ramírez, Juan Manuel Hurtado]
// Nombre del lenguaje utilizado: JavaScript
// Versión del lenguaje utilizado: [6.0]
// Universidad Tecnológica de Pereira
// Programa de Ingeniería de Sistemas y Computación
// Un descriptivo de qué hace el programa:
// El juego es encontrar todas las parejas de caracteres ocultos en un tablero

const prompt = require('prompt-sync')()

// Imprime el título del juego en la consola
console.log('JUEGO CONCENTRESE (MEMORAMA)');

// Define un arreglo con los caracteres que formarán las parejas en el juego
let caracteres = ['&', '&', '+', '+', '@', '@', '*', '*'];

// Función para generar una matriz de números consecutivos
function generarMatriz(fila, columna) {
    let valor = 0; // Inicializamos valor en 0
    return Array.from({ length: fila }, () =>
        Array.from({ length: columna }, () => {
            valor++;
            return valor;
        })
    );
}

// Crea una matriz visual de 1 fila y 8 columnas
let matrizVisual = generarMatriz(1, 8)[0];

// Función para mezclar aleatoriamente los caracteres
function mezclarCaracteres(caracteres) {
    let temp, indiceAleatorio;
    for (let i = caracteres.length - 1; i > 0; i--) {
        indiceAleatorio = Math.floor(Math.random() * (i + 1));
        temp = caracteres[i];
        caracteres[i] = caracteres[indiceAleatorio];
        caracteres[indiceAleatorio] = temp;
    }
    return caracteres;
}

// Desordena los caracteres para el juego
let cadenaAleatoria = mezclarCaracteres(caracteres);

// Función para mostrar el tablero con los números o caracteres revelados
function mostrarTablero(tablero) {
    return tablero.map((valor, index) => {
        if (typeof valor === 'string') {
            return valor;
        } else {
            return `${index + 1}: 🌠`;
        }
    }).join('   ');
}

// Función para solicitar la entrada del usuario
function pedirEntradaUsuario() {
    let indice = parseInt(prompt('Seleccione un número entre 1 y 8:'), 10);
    while (indice < 1 || indice > 8 || typeof matrizVisual[indice - 1] === 'string') {
        console.log('Entrada no válida o casilla ya descubierta, intente de nuevo.');
        indice = parseInt(prompt('Seleccione un número entre 1 y 8:'), 10);
    }
    return indice - 1; // Ajustamos para índice de arreglo
}

// Función principal del juego
function jugar() {
    let parejasEncontradas = 0;
    while (parejasEncontradas < 4) {
        console.log(mostrarTablero(matrizVisual));

        console.log('Entre primera opción:');
        let primeraOpcion = pedirEntradaUsuario();
        matrizVisual[primeraOpcion] = cadenaAleatoria[primeraOpcion];
        console.log(mostrarTablero(matrizVisual));

        console.log('Entre segunda opción:');
        let segundaOpcion = pedirEntradaUsuario();
        matrizVisual[segundaOpcion] = cadenaAleatoria[segundaOpcion];
        console.log(mostrarTablero(matrizVisual));

        if (cadenaAleatoria[primeraOpcion] === cadenaAleatoria[segundaOpcion]) {
            console.log('¡Pareja encontrada!');
            parejasEncontradas++;
        } else {
            console.log('No es una pareja. Intente nuevamente.');
        }

        if (parejasEncontradas === 4) {
            console.log('¡Juego completado! Felicidades.');
            break;
        }

        let continuar = prompt('Desea continuar (s/n):');
        if (continuar.toLowerCase() !== 's') {
            console.log('Juego terminado. Gracias por jugar.');
            break;
        }
    }
}

// Inicia el juego
jugar();



