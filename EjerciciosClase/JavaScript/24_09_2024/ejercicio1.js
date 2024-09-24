//Diseña un algoritmo que cuente las veces que aparece una determinada letra en una frase

function wordcount(word,text) {  // Función que recoge dos parámetros
    // Transformamos un string en un array y lo ponemos en mayúsculas
    let arrText = text.toUpperCase().split('');  
    // Transformamos la letra en mayúscula
    let arrWord = word.toUpperCase(); 
    // Creamos una variable que lleve la cuenta y comienza en 0
    let count = 0;
    // Bucle for que comienza con un valor de 0, si ese número es menor que la longitud de array arrText, incrementa en 1 su valor
    for (let i = 0; i < arrText.length; i++) {
        // Condición: Si el valor de la posicion i de arrText es estrictamente igual que el valor de arrWord
        if (arrText[i] === arrWord) {
            count++; //Incrementamos el valor de la variable count en 1
        }
    } return count;
}

console.log(wordcount("e", "Esta patata esta muy caliente y quema mucho las manos cuando la coges"))