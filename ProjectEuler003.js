/*
The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?
*/

var primeFactor = function(n) {
  var factor = 1;
  //edge case if n is prime
  if(isPrime(n)) return n;

  for(var i=2; i<Math.ceil(Math.sqrt(n)); i++) {
    if(n%i===0 && isPrime(i)) factor = i;
  }
  return factor;
}


//helper function to determine if a number is prime or not
var isPrime = function(n) {
  if(n<2) return false;
  for(var i=2; i<Math.ceil(Math.sqrt(n)); i++) {
    if(n%i===0) return false;
  }
  return true;
}
