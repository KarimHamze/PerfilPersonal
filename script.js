"use strict";

// /// meming ///
// //array
// let frutas = ["banana", "manzana", "pera "];
// // document.write(frutas);

// //array asociativo {obejtos}
// // let pc = {
// //   nombre: "karim",
// //   apellido: "hamze",
// //   deporte: "futbol",
// //   edad: 28,
// // };

// // let nombre = pc["nombre"];
// // let apellido = pc["apellido"];
// // let deporte = pc["deporte"];
// // // let edad = pc["edad"];

// // let frase = `Mi nombre es ${nombre}<br>
// // y mi apellido ${apellido} <br>
// // me gusta el ${deporte} <br>
// // y tengo ${edad} anhos <br>`;

// //Para llamar el objeto hay que poner el nombre del elemento
// // document.write(pc["edad"]);

// let pc1 = ["karim", "hamze", "futbol", 28];
// // Para llamar el array hay que poner la posicion
// // document.write(pc1[0]);

// //-------------------------
// // Bucle while
// // se ejecutara hasta que llegue a 10 debido a la condicion MIENTRAS QUE .....
// // Primero se pregunta despues se ejecuta
// let numeroBucle = 0;

// while (numeroBucle < 10) {
//   numeroBucle++;
//   //   document.write(numeroBucle + "<br>");
// }

// // Bucle doWhile
// // Primero se ejecuta despues pregunta
// let numeroDo = 0;
// do {
//   //   document.write(numeroDo + "<br>");

//   numeroDo++;
// } while (numeroDo <= 6);

// // Break
// // El break le pone fin el bucle y tienes que ponerle la condicion para el break con if
// let numeroBreak = 0;

// while (numeroBreak < 10) {
//   numeroBreak++;
//   //   document.write(numeroBreak + "<br>");
//   if (numeroBreak == 5) {
//     break;
//   }
// }

// // Bucle for
// // Consta de 3 partes, la declaramos, la iniciamos, la iteramos
// // "Continue" es para saltar la posicion que queramos
// let i = 0;

// for (i = 0; i < 5; i++) {
//   if (i == 4) {
//     continue;
//   }
//   //   document.write(i + "<br>");
// }

// // For in / off
// // Es una estructura for

// // In devuelve la posicion
// let animal;
// let animales = ["gatos", "perros", "pajaros"];

// for (animal in animales) {
//   // document.write(animal + "<br>");
//   // Para devolver los animales como "animal" es numero y esto es un array seria
//   // document.write(animales[animal] + "<br>");
// }

// document.write("<br>");

// // Off devuelve el elemento
// for (animal of animales) {
//   // document.write(animal + "<br>");
// }

// document.write("<br>");

// // Label
// // Nos permite asociar un bucle a un nombre

// let array1 = ["Maria", "Josefa", "Karim"];
// let array2 = ["Pedro", "Marcelo", array1, "Josefina"];

// forLabel: for (let array in array2) {
//   if (array == 2) {
//     for (let array of array1) {
//       document.write(array + "<br>");
//       continue forLabel;
//     }
//   } else {
//     // document.write(array2[array] + "<br>");
//   }
// }

// document.write("<br>");

// // Funcion
// function saludar() {
//   document.write("Hola");
// }

// // saludar();
// // saludar();
// // saludar();
// document.write("<br>");

// // Return
// // Es para devolver el valor / para que vuelta un tipo de dato

// function saludarReturn() {
//   return "Hola estoy retornando en un valor";
// }

// let saludo = saludarReturn();

// // document.write(saludo);
// // document.write("<br>");

// // Otro ejemplo de return y con parametros

// function sumaReturn(a, b) {
//   // document.write(a + b);
//   // document.write("<br>");
// }

// let suma1 = sumaReturn(30, 50);
// let suma2 = sumaReturn(50, 50);

// // Otro ejemplo de return con temple

// function saludarReturn(nombre) {
//   let frase = `Hola ${nombre}!`;
//   // document.write(frase);
//   // document.write("<br>");
// }

// saludarReturn("Juan");

// // Functions expression
// const saludarEX = function (nombre, apellido) {
//   let freaseEX = `Hola ${nombre} ${apellido} como estas?`;
//   // document.write(freaseEX);
//   // document.write("<br>");
// };

// saludarEX("karim", "hamze");

// // Arrow functions

// const saludarArrow = (nombre) => {
//   let fraseArrow = `Hola ${nombre} como estas?`;
//   // document.write(fraseArrow);
//   // document.write("<br>");
// };

// saludarArrow("Jose");

// // Ejercicios
// // Fiesta donde solo puede entrar los mayores de edad
// // la primera persona despues de las 2am no paga

// let free = true;
// let edad;

// // const validarCliente = (time) => {
// //   edad = prompt("Cual es tu edad?");
// //   if (edad >= 18) {
// //     if (time >= 2 && time < 7 && free == true) {
// //       alert("Pasas gratis");
// //       free = false;
// //     } else {
// //       alert("Tienes que pagar 1000 pesos");
// //     }
// //   } else {
// //     alert("Lo siento eres menor de edad");
// //   }
// // };

// // validarCliente(2.5);
// // validarCliente(5);

// // Ejercicio 2
// // 1. Crear mini sistema que nos permita registrar
// // los alumnos que estan Presentes (p) y ausentes (a) en clase.
// // 2. Pasado los 30 dias mostrar la situacion final de todos los
// // Alumnos (n total de presente y ausentes)
// // 3. Se puede tener un maximo de 10% de ausencias por
// // semestre, si se tienen mas aclarar que esta reprobado

// // let cantidad = prompt("cuantos alumnos son?");
// // let alumnosTotales = [];
// // let alumnos;

// // for (i = 0; i < cantidad; i++) {
// //   alumnosTotales[i] = [prompt(`Nombre del alumno` + (i + 1)), 0];
// // }

// // const tomarAsistencia = (nombre, p) => {
// //   let presencia = prompt(nombre);
// //   if (presencia == "p" || presencia == "P") {
// //     alumnosTotales[i][1]++;
// //   }
// // };

// // for (i = 0; i < 30; i++) {
// //   for (alumno in alumnosTotales) {
// //     tomarAsistencia(alumnosTotales[alumno][0], alumno);
// //   }
// // }

// // for (alumno in alumnosTotales) {
// //   let resultado = `${alumnosTotales[alumno][0]}:<br>
// //   _______Presentes: ${alumnosTotales[alumno][1]}:<br>
// //   _______Ausencias: ${30 - alumnosTotales[alumno][1]}`;
// // }
// // if (30 - alumnosTotales[alumno][i] > 18) {
// // }
// // console.log(resultado);

// // Ejercicio 3 Crear una calculadora que nos simplifique el trabajo

// // const sumar = (num1, num2) => {
// //   return parseInt(num1) + parseInt(num2);
// // };

// // const restar = (num1, num2) => {
// //   return parseInt(num1) - parseInt(num2);
// // };

// // const multiplicar = (num1, num2) => {
// //   return parseInt(num1) * parseInt(num2);
// // };

// // const dividir = (num1, num2) => {
// //   return parseInt(num1) / parseInt(num2);
// // };

// // alert("Que operacion deseas realizar?");
// // let operacion = prompt("1: suma, 2: resta, 3: multiplicar, 4: dividir");

// // if (operacion == 1) {
// //   let numero1 = prompt("primer numero para sumar");
// //   let numero2 = prompt("segundo numero para sumar");
// //   let resultado = sumar(numero1, numero2);
// //   alert(`Tu resultado es: ${resultado}`);
// // } else if (operacion == 2) {
// //   let numero1 = prompt("primer numero para restar");
// //   let numero2 = prompt("segundo numero para restar");
// //   let resultado = restar(numero1, numero2);
// //   alert(`Tu resultado es: ${resultado}`);
// // } else if (operacion == 3) {
// //   let numero1 = prompt("primer numero para multiplicar");
// //   let numero2 = prompt("segundo numero para multiplicar");
// //   let resultado = multiplicar(numero1, numero2);
// //   alert(`Tu resultado es: ${resultado}`);
// // } else if (operacion == 4) {
// //   let numero1 = prompt("primer numero para dividir");
// //   let numero2 = prompt("segundo numero para dividir");
// //   let resultado = dividir(numero1, numero2);
// //   alert(`Tu resultado es: ${resultado}`);
// // }

// Objetos
// Metodos
// Son acciones que ponemos hacer, se crean dentro de la clase
// Herencia

class animalClass {
  constructor(especie, edad, color) {
    this.especie = especie;
    this.edad = edad;
    this.color = color;
    this.info = `Soy ${this.especie}, tengo ${this.edad}, y soy de color ${this.color}`;
  }
  verInfo() {
    console.log(this.info);
  }
}

class perroClass extends animalClass {
  constructor(especie, edad, color, raza) {
    super(especie, edad, color);
    this.raza = raza;
  }
  ladrar() {
    console.log("Woof!");
  }
}

let perro = new perroClass("perro", 5, "negro", "doberman");
let gato = new animalClass("gato", 2, "marron");
perro.verInfo();
perro.ladrar();
// gato.ladrar();
