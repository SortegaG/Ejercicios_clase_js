// Diseña un algoritmo que imprima los números impares entre un número dado por el usuario y los siguientes 50 números

function imprimeImpares(number) {
    // Creamos una variable que sume 50 a nuestro parametro number
    let numeroIncrementado = number + 50; 
    // Creamos una variable que es un array vacío
    let arrNumeros = []; 
    /* Bucle for que comienza con el valor de number, se efectúa siempre que sea menor que numeroIncrementado,
    y le suma 1 si se cumplen las condiciones*/
    for (let i = number; i < numeroIncrementado; i++ ) {
        // Condición : [i] = valor del array en la posición i. Si el resto de dividir [i] entre 2 no es cero
        if ([i] % 2 !== 0) {
            // Introducimos el valor de i en el array arrNumeros
            arrNumeros.push(i);
        }
    } return arrNumeros;
}

console.log(imprimeImpares(7));