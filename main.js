/*3.2 Comentarios (una sola línea y multilínea)
// console.log('this line of code is no longer needed'); 
*/

/* 
3.3 Literales y tipos de datos
Reto 1:
Crea un arreglo que represente una lista de personas y muestra este arreglo en la consola.
*/
let arreglo = ["Fran", "San", 34];
console.log(arreglo);
/* 
3.4 Operadores y expresiones
Reto 2:
Usa los operadores aritméticos para realizar las siguientes operaciones: suma, res- ta, multiplicación y división entre 10 y 2. Imprime los resultados de las operaciones en la consola.
*/
let num1 = 10;
let num2 = 2;
let suma = num1 + num2;
let resta = num1 - num2;
let multiplicacion = num1 * num2;
let division = num1 / num2;
console.log(suma, resta, multiplicacion, division);
/* 
3.5 Palabras clave e idenficadores 
Reto 3:
Escribe un programa que multiplique 3 y 2 y guarde el resultado en una variable
usando var. Luego, imprime la variable en la consola.
*/
var n1 = 3;
var n2 = 2;
var resultado = n1 * n2;
console.log(resultado);
/* 
3.6 Sentencias, declaraciones, y tipado 
Reto 4:
Crea 3 variables diferentes (x, y, z) y asígnales los valores de 10, Hola Mundo y true. Luego, imprime los valores de esas variables en la consola.
 */
var x = 10;
var y = "Hola mundo";
var z = true;
console.log(`el valor de x es: ${x}, 
    el de y: ${y} 
    y el de z: ${z}`);
/* 
3.7 Bloques e indentación
Reto 5:
Intenta escribir una función que imprima un saludo y una pregunta en la consola. Asegúrate de usar bloques e indentación correctamente.
*/
function saludo() {
    console.log("Hola");
    console.log("Como estás?");
}
/* 
3.8 Estructuras de control de flujo y excepciones
Reto 6:
Crea un programa que muestre un mensaje diferente dependiendo de si es mayor o menor de edad. 
*/
let edad = 19;
if (edad >= 18) {
    console.log("Eres mayor de edad")
} else {
    console.log("Eres menor de edad")
}
/* 
3.9 Conjunto de caracteres
Reto:
Añade un emoji de rostro feliz (que es un caracter de Unicode) a la variable happy .
*/
var happy = "😁";
console.log(happy.charAt("😁"));
/* 
3.10 Sensibilidad de mayúsculas y minúsculas
Reto:
Crea dos variables con nombres diferentes debido a la sensibilidad a mayúsculas y minúsculasyasígnalesvaloresdiferentes10y100.Laprimeravariablees 'elefante' y la segunda es la misma palabra en mayúsculas. Imprime los valores de ambas variables en la consola.
*/
let elefante = 10;
let ELEFANTE = 100;
console.log(elefante);
console.log(ELEFANTE);
/* 
4.1 Tipos de datos primitivos
Reto:
Crea una variable llamada edad y asígnale un valor numérico de 25. Luego, crea una variable llamada nombre y asígnale un valor de cadena de texto Juan. Finalmente, crea una variable llamada estaRegistrado y asígnale un valor booleano true.
*/
let edad2 = 25;
let nombre = "Juan";
let estaRegistrado = true;
/*
4.2 Tipos de datos no-primitivos
Reto:
Crea una lista que contenga: mazanas, naranjas, y piñas.
*/
let frutas = ["🍎","🍊","🍍"];
/*
4.3 Primitivos
4.3.1 Texto
Reto:
Crea una variable 'a' con 33 como texto.
*/
var a = "33";
/*
4.3.2 Número
Reto:
Escribe un programa en JavaScript que calcule el área de un rectángulo con una base de 10 y una altura de 5.
*/
let base = 10;
let alturaa = 5;
let area = base * alturaa;
console.log(area);
/*
4.3.3 Entero grande
Reto:
Crea un programa que devuelva el resultado de la suma de los dos números 987654321000 y 987654321001 usando BigInt.
*/
let enteroGrande = BigInt(987654321000) + BigInt(987654321001);
console.log(enteroGrande);
/*
4.3.4 Buleano
Reto:
Crea una variable 'puedeIngresar' que almacene en un valor booleano indicando que el usuario no está permitido de ingresar a una app.
*/
let usuario = "Admin";
let puedeIngresar = usuario != "Admin";
console.log(puedeIngresar)
/*
4.3.5 Indefinido
Reto:
Crea una variable indefinida llamada sumar e imprime la variable que debe devolver undefined.
*/
let sumar;
console.log(sumar)
/*
4.3.6 Símbolo
Reto:
Crea un símbolo y una cadena de texto. Luego, imprime cada uno.
*/
let simbolo = Symbol();
let cadena = "Hola perri";
console.log(simbolo);
/*
4.3.7 Nulo
Reto:
Crea una variable llamada miNombre y asígnale el valor null. Luego, imprime el valor de la variable en la consola.
*/
let miNombre = null;
console.log(miNombre);
/*
4.4 Objetos
Reto:
Crea un objeto en JavaScript que represente una computadora, con sus respectivas características (marca, modelo, procesador, memoria RAM, etc).
*/
const pc = {
    marca: "Apple",
    modelo: "Macbook Air",
    procesador: "M1",
    Ram: 8
};
/*
4.5 Acceder a propiedades de objetos
Reto:
Crea un objeto llamado libro con los siguientes atributos: título, autor, año de publi- cación y editorial. Usa la notación de punto y la notación de corchetes para acceder a los atributos del objeto y mostrar los valores en la consola.
*/
const libro = {
    titulo: "Piense y hagase rico",
    autor:"Napoleon Hill",
    añoPublicacion: 1937,
    editorial: "Grijalbo"
};
// notación de punto
console.log("Título: " + libro.titulo);
console.log("Autor: " + libro.autor);
// notación de corchetes
console.log("Año de publicación: " + libro['añoPublicacion']);
console.log("Editorial: " + libro['editorial']);
/*
4.6 Colecciones con llave
4.6.1 Mapas
Reto:
Crea un mapa que almacene los nombres de los estudiantes y sus edades. Luego, imprime la edad de un estudiante específico.
 */
const estudiantes = new Map();
estudiantes.set("Juan", 20);
estudiantes.set("Ana", 21);
estudiantes.set("Pedro", 24);
console.log(estudiantes.get("Ana"));
/*
4.6.2 Sets
Reto:
Crea un Set que almacene los nombres de los estudiantes de una clase y luego agre- ga los nombres de los estudiantes que faltan. Luego, imprime el Set para verificar que los nombres se hayan agregado correctamente.
*/
let estudiantes2 = new Set();
estudiantes2.add("Pepe");
estudiantes2.add("Jose");
console.log(estudiantes2)
/*
4.6.3 WeakMaps
Reto:
Crea un WeakMap y almacena algunos datos relacionados con un usuario. Luego, usa el método get para recuperar los datos almacenados.
*/
let userData = new WeakMap();
let user = {nombre: "Fran"};
userData.set(user, {age: 34});
console.log(userData.get(user));
/*
4.6.4 WeakSets
Reto:
Crea un WeakSet que almacene objetos de usuario y luego usa el método has() para verificar si un usuario específico está en el WeakSet.
*/
let objetosUsuario = new WeakSet();
let usuario2 = {nombre:"Kobe", edad: 38};
let usuario3 = {nombre:"lio", edad: 37};
objetosUsuario.add(usuario3);
console.log(objetosUsuario.has(usuario2))
/*
4.7 Listas (arrays)
Reto:
Crea una lista en JavaScript que contenga los nombres de los meses del año.
*/
const mesesAnio = ["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"];
/*
4.8 Acceder a elementos de listas
Reto:
Crea una lista con 5 elementos y accede al tercer elemento de la lista.
*/
const emojis = ["🤩","😎","🥸","🤓","🤑"];
console.log(emojis[4]);

