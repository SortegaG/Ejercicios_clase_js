//Diseña un algoritmo que cuente las veces que aparece una determinada letra en una frase

function wordcount(word,text) {  // Función que recoge dos parámetros
    let arrText = text.toUpperCase().split('');  // Transformamos un string en un array y lo ponemos en mayúsculas
    let arrWord = word.toUpperCase(); // Transformamos la letra en mayúscula
    let count = 0;
    for (let i = 0; i < arrText.length; i++) { // Bucle for que recorre todos los elementos del array arrText
        if (arrText[i] === arrWord) {
            count++; //Incrementamos el valor de la variable count en 1
        }
    } return count;
}

console.log(wordcount("e", "Esta patata esta muy caliente y quema mucho las manos cuando la coges"))