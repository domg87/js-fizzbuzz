// FizzBuzz
// Scrivi un programma che stampi i numeri da 1 a 100,
// ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.



// // 1. scriviamo il programma che stampa numeri da 1 a 100
// for (var i = 1; i <= 100; i++) {
//   // 2. per i multipli di 3  e 5 stamperà FIZZBUZZ al posto del numero
//   if ((i % 3  == 0) && (i % 5 == 0)) {
//     console.log("FizzBuzz");
//   } else if (i % 3  == 0) {
//     // 3. al posto dei multipli di 3 stamperà FIZZ
//   console.log("Fizz");
//   } else if (i % 5  == 0) {
//     // 4. al posto dei multipli di 5 stamperà BUZZ
//   console.log("Buzz");
//   } else {
//     console.log(i);
//   }
// }
//
// var numero = i;
// document.getElementById("numeri").innerHTML += numero;


// metodo while
var contatore = 1;
while (contatore <= 100) {

  var contenutoPrecedente = document.getElementById("lista").innerHTML;

  if(contatore % 3 == 0 && contatore % 5 == 0) {
    //console.log("FizzBuzz");
    contenutoPrecedente += "<li>FizzBuzz</li>"
  } else if (contatore % 3 == 0) {
    //console.log("Fizz");
    contenutoPrecedente += "<li>Fizz</li>"
  } else if (contatore % 5 == 0) {
    //console.log("Buzz");
    contenutoPrecedente = contenutoPrecedente + "<li>Buzz</li>"
  } else {
    //console.log(contatore);
    contenutoPrecedente += "<li>"+contatore+"</li>"
  }

  document.getElementById("lista").innerHTML = contenutoPrecedente;

  contatore++;

}
