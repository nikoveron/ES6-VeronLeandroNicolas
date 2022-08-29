/* ## Consignas
1. Copiar las funciones en un archivo JavaScript.
2. Simplificar la composición de los strings.
3. Simplificar escritura de los objetos literales.
4. Transformar las funciones básicas en funciones flecha.
5. Crear un repositorio con el nombre ES6-miNombre (nombre de cada uno de ustedes) y subir las soluciones a Github a través de la consola o GitHub Desktop.

 */
/* JS */

/* function saludar(nombre){
    let nombre = nombre;
    return 'Hola ' + nombre;
} */
const saludar=(nombre)=>'Hola '+nombre;


// Mostrar el resultado por consola
console.log(saludar('Alejandro'));



/* JS
function multiplicar(a, b){
    const resultado = a + b;
    return resultado;
} */
let multiplicar=(a,b)=>a+b;

// Mostrar el resultado por consola
console.log(multiplicar(3, 15))




/* JS
function crearAlumno(nombre, apellido, edad, materias){
    let alumno = {
        nombre: nombre,
        apellido: apellido,
        edad: edad,
        materias: materias
    }

    return alumno;
} */
const crearAlumno=(nombre, apellido, edad, materias)=>({nombre,apellido,edad,materias});

// Mostrar el resultado por consola.
console.log(crearAlumno('Leo', 'Messi', '32', ['TLPA','Base de Datos','Inglés']));



/* JS
function devolverFecha(){
    return 'Hoy es ';
} */
let devolverFecha=(dia,mes,año)=> `Hoy es ${dia}-${mes}-${año}`;

// Mostrar el resultado por consola.
console.log(devolverFecha('10','09','2022'));