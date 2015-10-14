/*
A palindromic number reads the same both ways. The largest palindrome made from the product
of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers.
*/

//n1, n2 are the two numbers we want to find the greatest product of
var largestPalindrome = function(n1, n2) {
  var product = 1;
  while(n1){
    product = n1*n2;
    if(isPalindrome(product)) return product;
    else if(n1+100<n2) {
      n1 = n1+99;
      n2 --;
    }
    n1--;
  }
  return null;
}


//helper function to determine if number is a palindrome or not
var isPalindrome = function(n) {
  var nStr = n.toString();
  var revStr = nStr.split('').reverse().join('');
  return nStr === revStr ? true : false;
}
