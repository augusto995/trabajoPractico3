//Ejercicio 2
let a = 5;
let b = 10;
let c = a+b;
console.log(c);

//Ejercicio 3
let nombre = prompt("Ingresa tu nombre");
console.log(`Hola ${nombre}, bienvenido a la aplicacion`)

//Operadores logicos y condicionales
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

let numeroIngresado = prompt("Ingresar un numero para saber ses par o impar: ")
if (numeroIngresado % 2 === 0) {
    console.log(`El numero ${numeroIngresado} es par.`);
  } else {
    console.log(`El numero ${numeroIngresado} es impar.`);
  }