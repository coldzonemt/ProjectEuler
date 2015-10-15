/*
By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

What is the 10,001st prime number?
*/

//returns the nth prime number
var primeFinder = function(n) {
 var primeArr = [];
 var number = 2;
 while(primeArr.length<n) {
   if(isPrime(number)){
     primeArr.push(number);
     number++;
   } else {
     number++;
   }
 }
 return primeArr.pop();
}


var isPrime = function(n) {
  if(n<2) return false;
  //in this function, to account for perfect squares, I have added 1 to the max
  for(var i=2; i<Math.ceil(Math.sqrt(n+1)); i++) {
    if(n%i===0) return false;
  }
  return true;
}
