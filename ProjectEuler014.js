/*
The following iterative sequence is defined for the set of positive integers:

n → n/2 (n is even)
n → 3n + 1 (n is odd)

Using the rule above and starting with 13, we generate the following sequence:

13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.

Which starting number, under one million, produces the longest chain?

NOTE: Once the chain starts the terms are allowed to go above one million.
*/

var collatz = function(num) {
  var seq = [];
  var i=0;
  while(num>1){
    num%2===0 ? seq.push(num/2) : seq.push(3*num+1);
    num = seq[i];
    i++;
  }
  return seq;
}

var longestCollatz = function(num) {
  var seq1 = [0];
  var seq2 = [0];
  var startNum = 1;

  for(var i=1; i<num; i++) {
    seq1 = collatz(i);
    if(seq1.length>seq2.length) {
      seq2 = seq1;
      seq1 = [0];
      startNum = i;
    } else {
      seq1 = [0];
    }
  }
  return startNum;
}
