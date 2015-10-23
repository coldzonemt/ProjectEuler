/*
The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

Find the sum of all the primes below two million.
*/


var primeSum = function(cap) {
  var sum = 2;
  for(var i=3; i<cap; i+=2) {
    if(isPrime(i)){
      sum+=i;
    }
  }
  console.log(sum); 
  return sum;
}

var isPrime = function(n) {
  if(n<2) return false;
  //in this function, to account for perfect squares, I have added 1 to the max
  for(var i=2; i<Math.ceil(Math.sqrt(n+1)); i++) {
    if(n%i===0) return false;
  }
  return true;
}


primeSum(2000000);
