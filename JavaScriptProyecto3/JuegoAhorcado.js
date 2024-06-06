/*
- Fecha de publicación: 22 de abril del 2024
- Hora: 2PM
- Versión de su codigo: 03
- Versión del lenguaje utilizado: 6.0
- Presentado por:   
                    Ingeniera Luisa Victoria
                    Ingeniero Juan Manuel

- Universidad Tecnológica de Pereira
- Programa de Ingenieria de Sistemas y Computación
- Descripcion del programa:
En el programa se puede jugar el juego triqui o 3 en raya*/

const prompt = require("prompt-sync")();

let p1 = ["sol", "mar", "luz", "oir", "rey", "ore", "sal", "ron", "ola", "mal"];
let posicionRandom = Math.floor(Math.random() * 9);
let string;
let espacio1;
let espacio2;
let espacio3;
let contador = 0;

for (
  ;
  espacio1 == undefined || espacio2 == undefined || espacio3 == undefined;

) {
  console.log("");
  console.log("JUEGO DE AHORCADO");
  let letraUser = prompt("Por favor ingrese una letra: ");

  for (y = 0; y < 5; y++) {
    for (x = 0; x < 13; x++) {
      if (x < 4 && x > 0 && y == 0) {
        process.stdout.write("-");
      } else if ((y == 0 && x == 0) || (y == 0 && x == 4)) {
        process.stdout.write("+");
      } else if (x == 0) {
        process.stdout.write("|");
      }
      if ((y >= 0 && y <= 3 && x > 7 && x < 11) || (x >= 1 && x <= 4)) {
        string = p1[posicionRandom][x - 8];

        if (string == espacio1 && x == 8 && y == 2) {
          process.stdout.write(espacio1);
        } else if (string == espacio2 && x == 9 && y == 2) {
          process.stdout.write(espacio2);
        } else if (string == espacio3 && x == 10 && y == 2) {
          process.stdout.write(espacio3);
        }

        //--------------------------
        else if (letraUser == string && x == 8 && y == 2) {
          process.stdout.write(string);
          espacio1 = string;
        } else if (letraUser == string && x == 9 && y == 2) {
          process.stdout.write(string);
          espacio2 = string;
        } else if (letraUser == string && x == 10 && y == 2) {
          process.stdout.write(string);
          espacio3 = string;
        }

        //------------------------

        if (x == 4 && y == 1 && letraUser !== string) {
          process.stdout.write("O");
        } else if (x == 2 && y == 2 && letraUser !== string) {
          process.stdout.write("|");
        } else if (x == 1 && y == 2 && letraUser !== string) {
          process.stdout.write("/");
        } else if (x == 3 && y == 2 && letraUser !== string) {
          process.stdout.write("\\");
        } else if (x == 3 && y == 3 && letraUser !== string) {
          process.stdout.write("\\");
        } else if (x == 2 && y == 3 && letraUser !== string) {
          process.stdout.write("/");
        }

        //----------------------

        if (espacio1 == undefined && x == 8 && y == 2) {
          process.stdout.write("-");
        } else if (espacio2 == undefined && x == 9 && y == 2) {
          process.stdout.write("-");
        } else if (espacio3 == undefined && x == 10 && y == 2) {
          process.stdout.write("-");
        }
      } else if (y != 0) {
        process.stdout.write(" ");
      }
    }

    console.log("");
  }
  console.log(p1[posicionRandom]);
}

console.log("FELICIDADES HAS GANADO!");
console.log("☻☻☻");

//console.log(posicionRandom)
//console.log(espacio1)
