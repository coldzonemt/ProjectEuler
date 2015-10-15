/*
2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
*/

//returns the first number that is divisible by every number, 1-n, inclusive
//for example, pass in 10, and the function will return 2520
var everyFactor = function(n) {
  var prod = n*(n-1);
  var factor = n-2;

  while(factor>1) {
    if(prod%factor!== 0) {
      prod += n;
      factor = n;
    } else if(prod%factor===0 && factor===2) {
      return prod;
    }
    factor--;
  }
  return prod;
}
