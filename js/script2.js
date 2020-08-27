// genera 10 numeri random

function genNumeri(max, min) {
  var numeroRandom = math.Floor(Math.random() * (max - min) + min);
  return numeroRandom;
}

// num random da 1 a 100
for(var i = 0; i < 10; i++) {
  var numRange = genNumeri(100, 1);
  console.log(numRange);
}

// num random da 10 a 35
for(var i = 0; i < 10; i++) {
  var numRange2 = genNumeri(35, 10);
  console.log(numRange2);
}



//  Math.random() * (max - min) + min;


// pari o dispari

// function pariDispari(num) {
//   if (num % 2 == 0) {
//     return "il numero è pari";
//   } else {
//     return "il numero è dispari";
//   }
// }
//
// var numUtente = parseInt(prompt("inserisci il numero"));
// console.log(numUtente);


function pari(num) {
  if (num % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

var numUtente = parseInt(prompt("inserisci il numero"));
alert(pari(numUtente));

if (pari(numUtente)) {
  var nome = prompt("inserisci il nome");
  console.log("ciao," + nome);
}
