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
/*
4.9 Fechas
Reto:
Crea una fecha y cambia el formato removiendo 'year: "numeric" ' del ejemplo.
*/
let hoy = new Date();
console.log(hoy);
// mostrar la fecha en un formato especifico
let options = {weekday: 'long', month: 'long', day: 'numeric'}
console.log(hoy.toLocaleDateString('es-ES', options));
/*
4.10 Expresiones regulares
Reto:
Crea una expresión regular para buscar todas las palabras que comienzan con la letra "b" en una cadena de texto.
*/
let texto = "prueba para buscar palabras que empiecen con b larga mayus BB o minus bb";
const empieza_b = texto.match(/\bb\w*/gi);
console.log(texto)
console.log(empieza_b)
/*
4.11 Declaracion e inicialización (var y let)
Reto:
Crea un programa que use la palabra clave let para declarar dos variables, una dentro de un bloque de código y otra fuera del bloque de código. Luego, imprime el valor de cada variable en la consola.
*/
// usando var
var global = 10;
if (global > 5) {
    var global = 20;
    console.log(global);
}
console.log(global);
// usando let
let bloque = 10;
if (bloque > 5) {
    let bloque = 20;
    console.log(bloque);
}
console.log(bloque);
/*
4.12 Constantes
Reto:
Crea una constante llamada SALUDO y asígnale el valor "Hola Planeta". Luego, imprime el valor de la constante en la consola.
*/
const SALUDO = "Hola Planeta";
console.log(SALUDO);
/*
4.13 Plantillas de texto
Reto:
Crea una plantilla de texto que imprima una frase con un nombre, un adjetivo y una
comida. Por ejemplo: "John es un chico hambriento que ama la pizza".
*/
let nombre3 = "Jhon";
let adjetivo = "dulcero";
let comida = "chocolate";
console.log(`${nombre3} es muy ${adjetivo} y le encanta el ${comida}!`);
/*
4.14 Chequear tipo (typeof)
Reto:
Remplaza el ejemplo usando todos los tipos de datos que has visto hasta ahora.
*/
console.log(typeof num1);
console.log(typeof nombre3);
console.log(typeof miNombre);
console.log(typeof sumar);
console.log(typeof enteroGrande);
/*
4.15 Conversión de tipos de datos
Reto:
Crea un programa que tome una cadena de caracteres que contiene un número con decimales (por ejemplo, "3.14") y conviértalo a un número con decimales (por ejemplo, 3.14).
*/
let cadenaNum = "3.14";
console.log(cadenaNum)
let convertirNum = parseFloat(cadenaNum);
console.log(convertirNum)
/*
4.16 Coerción
Reto:
Intenta sumar revertir el orden deel ejemplo como y + x. ¿Qué sucede?
*/
let xx = "5";
let yy = 10;
let resultadoXY = yy + xx;
console.log(resultadoXY);
/*
5 Operadores
5.1 Operadores de aritméticos
Reto:
Usa los operadores de aritméticos para calcular el área de un círculo con radio 5.
*/
const Pi = 3.14;
let radioCirculo = 5;
let areaCirculo = Pi * Math.pow(radioCirculo, 2);
console.log(`El área del círculo con radio ${radioCirculo} es: ${areaCirculo}`);
/*
5.2 Operador de agrupación (())
Reto:
Utiliza el operador de agrupación para que el resultado de la siguiente expresión sea 20: 2 + 3 * 4
*/
let sumaAgrupada = (2+3) * 4;
console.log(sumaAgrupada);
/*
5.3 Operadores de texto
Reto:
Une los texto "Fatboy" y "Slim" con el operador + añadiendo un espacio entre las palabras.
*/
let texto1 = "Fast Boy";
let texto2 = "Flash";
let concatenando = texto1 + " su nombre es: " + texto2;
console.log(concatenando);
/*
5.4 Operadores de asignación (=, +=, -=, *=, /=, %=, **=, //=)
Reto:
Usa los operadores de asignación para calcular el área de un cuadrado donde el lado es igual a 5.
*/
let ladoCuadrado = 5;
ladoCuadrado *= ladoCuadrado;
let areaCuadrado = ladoCuadrado;
console.log(areaCuadrado)
/*
5.5 Operadores comparativos (==, !=, >, <, >=, <=)
Reto:
Escribe un programa que compare dos números y determina si el primero es mayor, menor o igual al segundo.
*/
var x = 20;
var y = -2;
if(x == y) {
    console.log("son iguales");
} else if(x>y) {
    console.log("x es mayor que y");
}else if(x<y) {
    console.log("y es mayor que x");
} else {
    console.log("inserta un valor valido");
}
/*
5.6 Comparar por valor y por referencia
Reto:
Crea dos variables de tipo lista con el mismo valor y comprueba si son iguales usan- do el operador de igualdad (==).
*/
// Creamos dos listas con el mismo contenido
let lista1 = [1, 2, 3];
let lista2 = [1, 2, 3];
// Comparamos usando el operador de igualdad (==)
if (lista1 == lista2) {
    console.log('Las listas son iguales');
} else {
    console.log('Las listas no son iguales');
}
/* Explicación:
lista1 y lista2 tienen el mismo contenido, pero no son el mismo objeto en memoria, por lo que lista1 == lista2 devolverá false. */

/*
5.7 Operadores lógicos (&&, ||, !)
Reto:
Escribe una línea de código que devuelva true si x es mayor que 0 e y es menor que 0.
*/
if(x > 0 && y < 0) {
    console.log("el resultado es verdadero");
} else {
    console.log("el resultado es falso");
}
/*
5.8 Operadores de bits (&, |, ~, ^, », «, »>)
Reto:
Para reforzar lo aprendido, el reto consiste en realizar una operación bit a bit usando el operador | entre los números a y b del ejemplo anterior. El resultado de esta operación debe ser 15 (1111 en binario).
*/
let aa = 10; // 1010 en binario
let b = 5; // 0101 en binario

let c = aa | b; //
console.log(c)
/*
5.9 Operadores unarios (delete, typeof, void)
Reto:
Intenta crear un objeto llamado auto con una propiedad llamada marca y luego eli- minar la propiedad marca usando el operador delete.
*/
const auto = {marca: "Homda", modeo: "Civic", anio: "2024"}
console.log(auto)
console.log(delete auto.marca)
console.log(auto)
console.log(void auto)
/*
5.10 Operadores relacionales (in, instanceof)
Reto:
Usa instanceof para ver la instancia de un número.
\*/
let num = 42;
let numObject = new Number(42);

console.log(num instanceof Number); // false, porque `num` es un valor primitivo
console.log(numObject instanceof Number); // true, porque `numObject` es una instancia de Number
/*
5.11 Operador spread (...)
Reto:
Usa el operador spread para crear una nueva lista que contenga los elementos de dos listas diferentes.
*/
const numeros = [1,2,3,4,5];
const vocales = ["a","e","i","o","u"];
console.log(...numeros, ...vocales)
/*
5.12 Operador de coma (,)
Reto:
Escribe una sentencia que use el operador de coma para evaluar tres expresiones y devolver el resultado de la tercera expresión.
*/
var x = 3;
var y = 2;
let sentencia2 = (x,y);
console.log(sentencia2)

/*
6 Estructuras de control de flujo
6.1 Condicionales
6.1.1 if

*/