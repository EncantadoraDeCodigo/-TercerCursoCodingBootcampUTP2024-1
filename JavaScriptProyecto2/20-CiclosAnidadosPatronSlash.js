/*
- Fecha de publicación: 19 de abril del 2024
- Hora: 2:00 PM
- Versión de su codigo: 1
- Autores del lenguaje utilizado: ECMASCRIPT 6.0 (javascrit 6.0)
- Versión del lenguaje utilizado: 6.0
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
Crea una un patron con datos numericos columnas y filas pedidas por teclado por el usuario rectangulo 
con asteriscos y las esquinas con slash y back slash

ejemplo
( rush x=20 y=30 ) 
/******************\
*                  *
*                  *
*                  *
*                  *
*                  *
*                  *
*                  *
*                  *
*                  *
*                  *
*                  *
*                  *
*                  *
*                  *
*                  *
*                  *
*                  *
*                  * 
*                  *
*                  *
*                  *
*                  *
*                  *
*                  *
*                  *
*                  *
*                  *
*                  *
*                  *
*                  *
\******************/


//Salvedad: Si y solo si se garantizan resultados cuando los datos ingresados son NUMEROS ENTEROS Y MAYORES QUE 0 Y POSITIVOS

// Se requiere la función prompt del módulo 'prompt-sync' para solicitar datos al usuario

const prompt = require('prompt-sync')();

// Definición de la función rush
let rush = () => {
    
    // Se solicita al usuario ingresar el número de columnas
    let x = prompt('Por favor ingrese el numero de columnas: ');
    // Se solicita al usuario ingresar el número de filas
    let y = prompt('Por favor ingrese el numero de filas: ');

    // Se utiliza xAuxiliar porque la primera 'x' cambia su valor
    let xAux = x;
    let xAux2 = x;
    let xAux3 = x;
    let xAux4 = x;
    // Variable de la que depende la condición
    let xcond = x;

    // Condición cuando x es 1
    if (xcond == 1) {
        process.stdout.write('/');
    }
    // Condición cuando x es diferente de 1
    else {
        // Impresión en x /
        process.stdout.write('/');
        while (x > 2) {
            // Impresión en x *
            process.stdout.write('*');
            x--;
        }
        // Impresión en x \
        process.stdout.write('\\');
    }

    // Impresión en y

    // Condición cuando y es  1
    if (xcond == 1) {
        
    }
    // El ciclo para en 2 porque los slash no están en el ciclo
    while (y > 2) {
        // Impresión de x repetida en y si x es 1
        if (xcond == 1) {
            // Salto de línea
            console.log(' ');
            // Impresión *
            process.stdout.write('*');
            // Auxiliar de x para retornar al valor inicial
            xAux = x;
            y--;
        }
        // Condición cuando x es diferente de 1
        else {
            // Salto de línea
            console.log(' ');
            // Impresión asterisco
            process.stdout.write('*');
            // Auxiliar de x para retornar al valor inicial
            xAux = x;
            y--;

            xAux3 = xAux4;
            //
            while (xAux3 > 2) {
                // Impresión en x para de los espacios de la mitad
                process.stdout.write(' ');
                xAux3--;
            }
            // Último asterisco
            process.stdout.write('*');
        }
    }
    console.log(' ');
    // Impresión en x abajo
    
    // Impresión si x o y es 1
    if ((xcond == 1) && (y == 1)) {
        return;
    }
    // Impresión última línea si x es 1
    else if (x == 1) {
        process.stdout.write('\\');
    }

    // Impresión última línea si y es 1
    else if (y == 1) {
        return;
    }
    else {
        // Impresión última línea si ninguno es 1
        process.stdout.write('\\');
        while (xAux2 > 2) {
            process.stdout.write('*');
            xAux2--;
        }
        process.stdout.write('/');
    }
}

// Llama a la función rush para ejecutarla
rush();
