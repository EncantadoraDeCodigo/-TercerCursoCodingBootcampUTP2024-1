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

         z
        z z        
       z   z       
      z     z      
     z       z     
    z         z    
   z           z   
  z             z  
 z               z 
z                 z

*/
//Salvedad: Si y solo si se garantizan resultados sin cambios en el codigo

// Definición de la función MostrarZs
function MostrarZs() {
    // Definición de variables
    let contadorFilas = 10;
    let contadorColumnas = 20;
    let condZizquierda = 10;
    let condZderecha = 10;

    // Bucle para las filas
    while (contadorFilas > 0) {
        contadorFilas--;

        contadorColumnas = 1;

        // Bucle para las columnas
        while (contadorColumnas < 20) {
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

    // Ajuste para centrar un 'z' en la línea central
    condZizquierda++;
    condZderecha--;

    /*
    // Bucle para imprimir '-' y 'z' en el centro (No utilizado en esta versión)
    let iaux = 0;
    for (let i = 0; i < 20; i++) {
        iaux++;
        
        if (iaux == 1 || iaux == 20) {
            process.stdout.write('z');
        } else {
            process.stdout.write('-');
        }
    }
    */
}

// Llama a la función para ejecutarla
MostrarZs();
