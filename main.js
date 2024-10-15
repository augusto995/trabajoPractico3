/* 

//1 Introduccion a javascript
//Ejercicio 2
let a = 5;
let b = 10;
let c = a+b;
console.log(c);

//Ejercicio 3
let nombre = prompt("Ingresa tu nombre");
console.log(`Hola ${nombre}, bienvenido a la aplicacion`)

//2 Operadores logicos y condicionales
//Ejercicio 1
if(a>b){
    c = a;
    console.log(`El mayor de los tres numeros es: ${c}`);
} else if(b>a) {
    c = b;
    console.log(`El mayor de los tres numeros es: ${c}`);
} else{
    console.log("Ambos niemeros son iguales");
}
//Ejercicio 2

let numeroIngresado = prompt("Ingresar un numero para saber ses par o impar: ")
if (numeroIngresado % 2 === 0) {
    console.log(`El numero ${numeroIngresado} es par.`);
  } else {
    console.log(`El numero ${numeroIngresado} es impar.`);
  }

//3 Operadores de asignacion y bucles
//Ejercicio 1
let i = 10;
console.log("Ejercicio 3");
while (i > 0) {
    console.log(i);
    i -=1;
}

//Ejercicio 2

let numeroMayorACien;
do {
    numeroMayorACien = prompt("Ingrese un numero mayor a cien")
} while (numeroMayorACien <= 100);
console.log(`Ingresaste un numero mayor a 100: ${numeroMayorACien}`)
//4 Funciones de JavaScript
//Ejercicio 1

let numParOImpar = Number(prompt("Ingrese un numero para saber si es par o impar"))
const  esPar = (n) => n % 2 === 0;

if(esPar(numParOImpar)){
    console.log(`El numero ${numParOImpar} es par: true`)
} else{
    console.log(`El numero ${numParOImpar} es par: false`)
}

//Ejercicio 2
let celsius = Number(prompt("Ingrese grados celsius para convertir a Fahrenheit"))
const  convertirCelsiusAFahrenheit = (c) => c*1.8+32;
let fahrenheit =convertirCelsiusAFahrenheit(celsius)
console.log(`${celsius} °C son equivalentes a ${fahrenheit}°F`)


//5 Objetos en javascript
//Ejercicio 1
const persona = {
    nombre: "Augusto",
    edad: "20",
    ciudad: "Mendoza",

    cambiarCiudad: function(nuevaCiudad){
        this.ciudad = nuevaCiudad;
    },
    mostrarPropiedades: function(){
        console.log(`Persona: ${this.nombre},Edad: ${this.edad}, Ciudad: ${this.ciudad}`)
    }
}

persona.mostrarPropiedades();
persona.cambiarCiudad("Bs As")
persona.mostrarPropiedades();


//Ejercicio 2
const libro ={
    titulo: "El extranjero",
    autor: "Albert Camus",
    año: 2013,
    libroAntiguo: function (){
        if ( 2024 - this.año > 10) {
            console.log(`El libro ${this.titulo} es antiguo: true`)
        } else {
            console.log(`El libro ${this.titulo} es antiguo: false`)
        }
    }
}
libro.libroAntiguo();


//Arrays
//Ejercicio 1

let numeros = [1,2,3,4,5,6,7,8,9,10]
let numeros2 = numeros.map( n => n*2)
console.log(`Numeros originales: ${numeros}`)
console.log(`Numeros multiplicados por 2: ${numeros2}`)
*/

//Ejercicio 2
let pares = [];
for (let i = 1; i <= 20; i++) {
    if(i % 2 === 0){
        pares.push(i)
    } 
}
console.log(`Primeros 10 numeros pares: ${pares}`)

//7 Introduccion al DOM
//Ejercicio 1
function cambiarColor(){
    let parrafos = document.querySelectorAll('p')
    parrafos.forEach(p => {
        p.style.color = 'blue'
    })
}

//Ejercicio 2
function mostrarAlerta() {
    const textoInput = document.getElementById('texto')
    const valor = textoInput.value;
    alert(`Has ingresado: ${valor}`)
}