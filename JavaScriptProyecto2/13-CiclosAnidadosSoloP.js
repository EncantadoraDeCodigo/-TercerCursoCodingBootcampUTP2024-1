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

                                 P P P P P P P P P P P P P  
                                   P P P P P P P P P P P
                                     P P P P P P P P P
                                       P P P P P P P
                                         P P P P P
                                           P P P
                                             P  

Salvedad: Si y solo si se garantizan resultados sin cambios en el codigo*/

function mostrarLetras() {
    // Inicialización de variables
    let i = -1 // Controla el número de filas
    let iAux; // Variable auxiliar para imprimir espacios en blanco
    let j = 14 // Controla el número de letras por fila
    let jAux = 14 // Variable auxiliar para controlar el número de letras por fila
    let o34Espacios = 1 // Controla el número de espacios antes de comenzar la impresión de letras en cada fila

    let letra = 'P ' // Letra que se imprime en cada iteración

    // Bucle principal que controla el número de filas a imprimir
    while (i < 6) {

        // Inicializa el contador de espacios antes de la impresión de letras en cada fila
        o34Espacios = 1
        
        // Bucle interno para imprimir espacios en blanco antes de imprimir las letras
        while (o34Espacios < 34){
            process.stdout.write(" ")
            o34Espacios++
        }
    
        // Incrementa el contador de filas
        i++ 
        iAux = i

        // Bucle interno para imprimir espacios en blanco antes de la primera letra en cada fila
        while ( iAux > 0) {
            process.stdout.write("  ")
            iAux--
        }

        // Actualiza el número de letras por fila
        j = jAux -= 2

        // Bucle interno para imprimir letras en cada fila
        while (j >= 0){
            process.stdout.write(letra)
            j--
        }
        
        // Imprime un salto de línea al final de cada fila
        console.log(' ')
        
        // Incrementa el índice de la letra en el array de letras
    }
    
    // Decrementa el número de letras por fila para la siguiente iteración
    jAux--
}

// Llama a la función para ejecutarla
mostrarLetras()