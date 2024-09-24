/*Ejercicio 2
Declara una función que acepte un nombre como parámetro y devuelva el 
número de palabras que tiene el nombre. Ejemplo: Para "Antonio Alberto Jesús" devolverá 3.*/


function contarPalabras(nombre) {
    let arrNombre = nombre.split(' ');
    let contador = 0;
    for (let i = 0; i < arrNombre.length; i++) {
        contador++;
    }
    return contador;
}

console.log(contarPalabras('Sergio Ortega Garrido'))