/*- Versión del lenguaje utilizado: 6.0
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
presenta el patron:

PPPPPPPPPPPPP 
 NNNNNNNNNNN
  LLLLLLLLL
   JJJJJJJ
    HHHHH
     FFF
      D

Salvedad: Si y solo si se garantizan resultados sin cambios en el codigo*/

function mostrarLetras() {
    // Se inicializan las variables
let i = -1 // Controla el número de espacios en blanco antes de imprimir las letras en cada fila
    let iAux; // Variable auxiliar para ayudar a imprimir los espacios en blanco
    let j = 14 // Controla el número de letras que se imprimirán en cada fila
    let jAux = 14 // Variable auxiliar para ayudar a controlar el número de letras a imprimir en cada fila
    let k = 0 // Controla el índice del array de letras que se imprimirá en cada fila

    // Array que contiene las letras a imprimir
    let arrayLetras = ['P','N','L','J','H','F','D']
    
    // Comienza un bucle externo que se ejecuta mientras i sea menor que 6
    while (i < 6) {
        i++ 
        iAux = i

        // Imprime espacios en blanco basado en el valor de i
        while (iAux > 0) {
            process.stdout.write(" ")
            iAux--
        }

        j = jAux -= 2

        // Imprime las letras del array
        while (j >= 0){
            process.stdout.write(arrayLetras[k])
            j--
        }
        // Imprime un salto de línea al final de cada iteración del bucle externo
        console.log(' ')
       k++ // aumenta el indice del array para cambiar de letras
    }
}

// Llama a la función para ejecutarla
mostrarLetras()