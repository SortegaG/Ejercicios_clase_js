/* Declara una función que acepte una palabra como parámetro y la devuelva con todos sus caracteres en mayúsculas y separados por espacios. Ejemplo: Para "Ana" devolverá "A N A".
 */

function mayuscula(palabra) {
    return palabra.toUpperCase().split("").join(" ");
}

console.log(mayuscula("Sergio")); 