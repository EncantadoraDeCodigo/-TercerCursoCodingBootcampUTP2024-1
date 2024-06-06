/*
- Fecha de publicación: 19 de abril del 2024
- Hora: 2:00 PM
- Versión de su código: 1
- Autores del lenguaje utilizado: ECMASCRIPT 6.0 (JavaScript 6.0)
- Versión del lenguaje utilizado: 6.0
- Presentado por:
    - Ingeniera Luisa Victoria
    - Ingeniera Lizeth
    - Ingeniera Andrea
    - Ingeniero Juan Manuel
    - Ingeniero Santiago Castaño
    - Ingeniero Andres
    - Ingeniero Camilo
- Universidad Tecnológica de Pereira
- Programa de Ingeniería de Sistemas y Computación
- Descripción del programa:
    Presenta el patrón:

    z                   z
     z                 z
      z               z
       z             z
        z           z
         z         z
          z       z
           z     z
            z   z
              z
*/
//Salvedad: Si y solo si se garantizan resultados sin cambios en el codigo

// Definición de la función MostrarZs
function MostrarZs() {
    // Definición de variables
    let contadorFilas = 9;
    let contadorColumnas = 1;
    let condZizquierda = 0;
    // Cambiar a 20 para poner al centro
    let condZderecha = 20;

    // Bucle para las filas
    while (contadorFilas > 0) {
        contadorFilas--;

        contadorColumnas = 0;

        // Bucle para las columnas
        while (contadorColumnas <= 20) {
            // Verifica si se debe imprimir 'z' en la posición actual
            if (condZizquierda == contadorColumnas || condZderecha == contadorColumnas) {
                process.stdout.write('z');
            } else {
                process.stdout.write(' ');
            }
            
            contadorColumnas++;
        }

        console.log(); // Salto de línea para cambiar de fila

        // Actualiza las condiciones para imprimir 'z' en la siguiente fila
        condZderecha--;
        condZizquierda++;
    }

    // Ajuste para centrar el último 'z' en la línea central
    condZizquierda++;
    condZderecha--;

    // Bucle para imprimir ' ' hasta llegar a la posición del último 'z'
    for (let i = 0; i < 10; i++) {
        process.stdout.write(' ');
    }

    // Imprime el último 'z' en el centro
    process.stdout.write('z');
}

// Llama a la función para ejecutarla
MostrarZs();
