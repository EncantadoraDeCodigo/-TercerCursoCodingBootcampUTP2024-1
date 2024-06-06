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

                                       Z
                                      ZZ
                                     ZZZ
                                    ZZZZ
                                   ZZZZZ
                                  ZZZZZZ
                                   ZZZZZ
                                    ZZZZ
                                     ZZZ
                                      ZZ
                                       Z

*/
//Salvedad: Si y solo si se garantizan resultados sin cambios en el codigo

// Definición de la función triangulo
function triangulo() {
    // Altura de la 1era Mitad del Triangulo
    let Altura = 6;
    // Espacio que tiene para dar la impresión de un triángulo
    let espacio = Altura - 1 + 34;
    // Número de Z a imprimir en cada línea
    let Numerito = 1;
    // Cadena que representa la forma actual
    let Forma = '';
    
    // Bucle para la primera mitad del triángulo
    for (let i = 0; i < Altura; i++) {
        // Agrega espacios en blanco para centrar la forma
        for (let j = 0; j < espacio; j++) {
            Forma += ' ';
        }
        // Agrega la cantidad correspondiente de 'Z' para la línea actual
        for (let j = 0; j < Numerito; j++) {
            Forma += 'Z';
        }
        espacio--; // Reduce la cantidad de espacios para la siguiente línea
        Numerito++; // Aumenta el número de 'Z' para la siguiente línea
        console.log(Forma); // Imprime la línea actual
        Forma = ''; // Reinicia la variable Forma para la próxima iteración
    }

    // Reinicializa los valores de espacio y Numerito para la segunda mitad del triángulo
    espacio = 35;
    Numerito = Altura * 2 - 7;
    
    // Bucle para la segunda mitad del triángulo
    for (let i = 0; i < Altura - 1; i++) {
        // Agrega espacios en blanco para centrar la forma
        for (let j = 0; j < espacio; j++) {
            Forma += ' ';
        }
        // Agrega la cantidad correspondiente de 'Z' para la línea actual
        for (let j = 0; j < Numerito; j++) {
            Forma += 'Z';
        }
        espacio++; // Aumenta la cantidad de espacios para la siguiente línea
        Numerito--; // Reduce el número de 'Z' para la siguiente línea
        console.log(Forma); // Imprime la línea actual
        Forma = ''; // Reinicia la variable Forma para la próxima iteración
    }
}

// Llama a la función para ejecutarla y mostrar el triángulo
triangulo();
