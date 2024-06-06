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
0 1
1 1
2 2
3 2
4 3
5 3
6 4
7 4
8 5
9 5


//Salvedad: Si y solo si se garantizan resultados sin cambios en el codigo */


function mostrarEnteros() {
  // Este bucle se ejecuta 5 veces
  for (let i = 0; i < 5; i++) {
      // Dentro de cada iteración del primer bucle, este bucle se ejecuta 2 veces
      for (let j = 0; j < 2; j++) {
          // Imprime dos números en cada iteración: uno se basa en i y j, y el otro en i
          // El primer número es el resultado de la fórmula (i * 2 + j) y el segundo es simplemente i + 1
          console.log(i * 2 + j, i + 1);
      }
  }
}
mostrarEnteros();



// function mostrarEnteros1() {

//     //let i = 1
//     let j = 0
//     for (i = 0 ; i <= 9 ; i++) {    
//         if (i % 2 === 0) { 
//        j ++
//         }
//         console.log(i,j)
//     }
//}
//mostrarEnteros1()