/*
- Fecha de publicación: 18 de abril del 2024
- Hora: 4:00 PM
- Versión de su código: 10
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
    Crea una una imagen de un Rombo, con la letra Z y en la cantidad de líneas solicitadas

    Z
   ZZZ
  ZZZZZ
 ZZZZZZZ
  ZZZZZ
   ZZZ
    Z
*/
//Salvedad: Si y solo si se garantizan resultados sin cambios en el codigo

function Rombo() {
    // La longitud de la primera mitad del Rombo
    let Altura = 4;

    // Los espacios que debe tener
    let espacio = Altura - 1 + 7;

    // El Numero de Z
    let Numerito = 1;

    // El espacio Definido y al cual se le va a sumar los espacios y las Z
    let Forma = '';

    // Bucle para la primera mitad del rombo
    for (let i = 0; i < Altura; i++) {
        // Añade los espacios antes de las letras Z en cada línea
        for (let j = 0; j < espacio; j++) {
            Forma += ' ';
        }

        // Añade las letras Z en cada línea
        for (let j = 0; j < Numerito; j++) {
            Forma += 'Z';
        }

        // Decrementa la cantidad de espacios en blanco para la siguiente línea
        espacio--;

        // Incrementa el número de letras Z para la siguiente línea
        Numerito += 2;

        // Imprime la línea del rombo
        console.log(Forma);

        // Reinicia la variable Forma para la siguiente línea
        Forma = '';
    }          

    // Espacio de la segunda mitad
    espacio = 8;

    // Numero de Z a Imprimir 
    Numerito = Altura * 2 - 3;

    // Bucle para la segunda mitad del rombo
    for (let i = 0; i < Altura - 1; i++) {
        // Añade los espacios antes de las letras Z en cada línea
        for (let j = 0; j < espacio; j++) {
            Forma += ' ';
        }

        // Añade las letras Z en cada línea
        for (let j = 0; j < Numerito; j++) {
            Forma += 'Z';
        }

        // Incrementa la cantidad de espacios en blanco para la siguiente línea
        espacio++;

        // Decrementa el número de letras Z para la siguiente línea
        Numerito -= 2;

        // Imprime la línea del rombo
        console.log(Forma);

        // Reinicia la variable Forma para la siguiente línea
        Forma = '';
    }
}

// Llama a la función para ejecutarla
Rombo();
