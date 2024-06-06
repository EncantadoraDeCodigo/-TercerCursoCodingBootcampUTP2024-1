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
presenta la secuencia de numeros
1 1 1
2 1 2
3 1 3
4 2 1
5 2 2
6 2 3
7 3 1
8 3 2
9 3 3


//Salvedad: Si y solo si se garantizan resultados sin cambios en el codigo */

function mostrarTernasEnteros() {
    // Se inicializan las variables k y l
    let k = 0
    let l = 1

    // Se inicia un bucle externo que se ejecuta 3 veces
    for (i = 1; i < 4; i++) {
        // Se incrementa el valor de k en cada iteración del bucle externo
        k++
        
        // Se inicia un bucle interno que se ejecuta 3 veces
        for (j = 1; j <= 3; j++) {
            // Se imprimen tres números en cada iteración del bucle interno:
            // El primero es el valor de l incrementado, el segundo es el valor de k y el tercero es el valor de j
            console.log(l++, k, j)
        }
    }
}

mostrarTernasEnteros();

