// Fecha y Hora de publicación: [22 de Abril de 2024 13:59pm]
// Versión de su código: [1.0]
// Autores: Ing(c) [Luisa Victoria Sánchez Ramírez, Juan Manuel Hurtado]
// Nombre del lenguaje utilizado: JavaScript
// Versión del lenguaje utilizado: [6.0]
// Universidad Tecnológica de Pereira
// Programa de Ingeniería de Sistemas y Computación
// Un descriptivo de qué hace el programa:
// Este programa genera una representación de un código QR en forma de matriz de píxeles

//Salvedad: Al hacer la comprobación, el codigo se corre y no se alinean los los numeros, y crea un espacio de más en y=0 y x=0
//Salvedad la comprobación se realiza con el primer QR
//Salvedad: El segundo QR no esta exactamente como en el contrato
// Definición de la función matriz que genera una matriz de píxeles representando un código QR.
// Parámetros:
//   - fila: El número de filas de la matriz.
//   - columna: El número de columnas de la matriz.
//   - min: El valor mínimo posible para los píxeles (inclusive).
//   - max: El valor máximo posible para los píxeles (inclusive).
// Retorna:
//   - Una matriz de píxeles que representa un código QR.

function matriz(fila, columna, min, max) {
    // Inicialización de variables para el conteo de errores y la validación del código QR
    let errores = 0; // Contador de errores
    let qrValido = true; // Bandera para verificar si el código QR es válido

    // Creación de la matriz de píxeles usando Array.from() y funciones de flecha
    let m = Array.from({ length: fila }, (x, posicionx) =>
        Array.from({ length: columna }, (y, posiciony) => {
            // Generación aleatoria del valor del píxel dentro del rango dado
            let valor = Math.floor(Math.random() * (max - min + 1)) + min;

            // Condiciones para determinar el valor de cada píxel en la matriz

            // Píxeles en la periferia siempre están en blanco
            if (posicionx === 0 || posicionx === fila - 1 || posiciony === 0 || posiciony === columna - 1) {
                if (valor !== " ") { // Si el valor generado no es un espacio en blanco, se marca como inválido
                    qrValido = false;
                    errores++;
                }
                return ' '; // Espacio en blanco
            }

            // Cuadrado de 7x7 píxeles en la parte más externa superior derecha
            if (posicionx <= 6 && posiciony >= 23 && posiciony <= 28) {
                if (valor === 1) {
                    return "█"; // Píxel negro
                } else {
                    return " "; // Espacio en blanco
                }
            }

            // En la séptima fila, las columnas 2, 4 y 25 son píxeles de color negro
            if (posicionx === 6 && (posiciony === 2 || posiciony === 4 || posiciony === 25)) {
                if (valor !== 1) { // Si el valor generado no es 1 (píxel negro), se marca como inválido
                    qrValido = false;
                    errores++;
                }
                return " "; // Espacio en blanco
            }
            
            // Agregar los puntos
            if (posiciony === 3 || posiciony === 33) {
                return '| '; // Píxeles de borde vertical
            }

            // Condición para no imprimir píxeles en posiciones específicas
            if (posicionx === 0 || posicionx === 29 || posiciony === 2 || posiciony === 32 || posiciony === 34 || posiciony === 1) {
                return ' '; // Espacio en blanco
            }
            
            // Resto de los píxeles con valor aleatorio o píxeles negros dependiendo del valor generado
            if (valor === 1) {
                return "█"; // Píxel negro
            } else {
                return " "; // Espacio en blanco
            }
        })
    );

    // Comprobar si el código QR es válido y mostrar el número de errores
    if (qrValido) {
        console.log("Condición a: NO se cumple");
        console.log("Condición b: NO se cumple. Número de pixeles negros = " + errores);
        console.log("Condición c: NO se cumple.");
        console.log("Errores: " + errores + " No es original");
    } else {
        console.log("Condición a: Se cumple");
        console.log("Condición b: Se cumple");
        console.log("Condición c: Se cumple");
        console.log("No hay errores. Es original");
    }

    return m; // Retorna la matriz generada
}

// Llamada a la función matriz para crear un código QR de 30x35 píxeles
let m = matriz(30, 35, 0, 1);

// Impresión de la matriz generada junto con su índice de fila
console.log("     012345678901234567890123456789 ");  
console.log("     +------------------------------+");

for (let i = 0; i < 30; i++) {
    let oString = m[i].join("");
    
    console.log(i.toString().padStart(2, '  ') + oString + "  " + i);
}

console.log("     +------------------------------+");
console.log("     012345678901234567890123456789 ");







//Segunda Impresión:
// Debido a que en esta función no permite el patrón de cada línea par contenga más de un caracter el patrón será: --------------------------------------


function matriz(fila, columna, min, max) {
return Array.from({ length: fila }, (x, posicionx) =>
    Array.from({ length: columna }, (y, posiciony) => { 
        let valor = Math.floor(Math.random() * (max - min + 1) + min);
        if(posiciony === 59 || posiciony === 1){
            return ' '
        }
        if(posicionx % 2 === 0){
            return "-"
        }
        if(posiciony % 2 === 0) {
            return '|'
        } 
        
        
            
        if (posiciony === 0 || posicionx === 29) {
            return ' ';
        }
            
        if (valor === 1) {
            return "█";
        } else {
            return " ";
        }
        
    }) 
)
}
    


let m = matriz(32, 61, 0, 1);

console.log("    |0|1|2|3|4|5|6|7|8|9|0|1|2|3|4|5|6|7|8|9|0|1|2|3|4|5|6|7|8|9|");
console.log("    +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+");
console.log("    | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | |")

for(let cont of m){//of para recorrer los elementos de objetos iterables, recorre la array
    let contString = cont.join(' ');//Toma los elementos de la array cont  y los une en una sola string
    console.log(contString);
}
for (let i = 0; i < 30; i++) { 
    let oString = m[i].join("");
    console.log(i.toString().padEnd(4, '   ')+ oString + " " + i);
}
console.log("    +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+");

console.log("    |0|1|2|3|4|5|6|7|8|9|0|1|2|3|4|5|6|7|8|9|0|1|2|3|4|5|6|7|8|9|");
