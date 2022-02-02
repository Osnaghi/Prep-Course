// No cambies los nombres de las funciones.

const { arrayReplaceAt } = require("markdown-it/lib/common/utils");

function deObjetoAmatriz(objeto) {
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  let objectToArray = Object.entries(objeto);
  return objectToArray;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  var charCount = {};
  var count = [];
  for (var c = 0; c < string.length; ++c) {
    var char = string.charAt(c);
    charCount[char] = (isNaN(charCount[char]) ? 1 : charCount[char] + 1);
  }
  return charCount;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var mayus = [];
  var minus = [];
  for (var c = 0; c < s.length; ++c) {
    var character = s.charAt(c);
    if (character === character.toUpperCase()) {
      mayus[c] = character;
    } else {
      minus[c] = character;
    }
  }
  var newString = mayus.join('') + minus.join('');
  return newString;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  let arrayStr = str.split(' ');
  function reverseStr(strToReverse) {
    var stringArray = strToReverse.split('');
    var reverseArray = stringArray.reverse();
    var reversedString = reverseArray.join('');
    return reversedString;
  }

  let mirror = [];

  for (w = 0; w < arrayStr.length; ++w) {
    let invertedWord = reverseStr(arrayStr[w]);
    mirror.push(invertedWord);
  }
  let mirrorStr = mirror.join(' ');
  return mirrorStr;
}


function capicua(numero) {
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var numeroString = numero.toString();
  var stringArray = numeroString.split('');
  stringArray.reverse();
  var stringInverted = stringArray.join('');
  if (numeroString === stringInverted) {
    return "Es capicua";
  } else {
    return "No es capicua";
  }
}


function deleteAbc(cadena) {
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí

  if (cadena.includes('a') || cadena.includes('b') || cadena.includes('c')) {

    arrayString = [];
    for (var l = 0; l < cadena.length; ++l) {
      var character = cadena.charAt(l);
      if (character !== "a" && character !== "b" && character !== "c") {
        arrayString.push(character);
      }
    }
    return arrayString.join('');
  }
  else {
    return cadena;
  }
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  let sortedArray = arr.sort((a, b) => a.length - b.length);
  return sortedArray;
}


function buscoInterseccion(arreglo1, arreglo2) {
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  let interseccion = arreglo1.filter(numeros => arreglo2.includes(numeros));
  return interseccion;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  deObjetoAmatriz,
  numberOfCharacters,
  capToFront,
  asAmirror,
  capicua,
  deleteAbc,
  sortArray,
  buscoInterseccion,
};

