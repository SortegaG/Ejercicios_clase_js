// Diseña un algoritmo que imprima los números impares entre un número dado por el usuario y los siguientes 50 números

function imprimeImpares(number) {
    let numeroIncrementado = number + 50;
    let arrNumeros = [];
    for (let i = number; i < numeroIncrementado; i++ ) {
        if ([i] % 2 !== 0) {
            arrNumeros.push(i);
        }
    } return arrNumeros;
}

console.log(imprimeImpares(7));