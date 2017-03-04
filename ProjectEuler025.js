/*
The Fibonacci sequence is defined by the recurrence relation:

Fn = Fn−1 + Fn−2, where F1 = 1 and F2 = 1.
Hence the first 12 terms will be:

F1 = 1
F2 = 1
F3 = 2
F4 = 3
F5 = 5
F6 = 8
F7 = 13
F8 = 21
F9 = 34
F10 = 55
F11 = 89
F12 = 144
The 12th term, F12, is the first term to contain three digits.

What is the index of the first term in the Fibonacci sequence to contain 1000 digits?
*/

function fibonacciMemo(n, results) {
	results = results || {};
	if(n === 1 || n === 2) {
		return 1; 
	} 
	if(results[n]) {
		return results[n];
	}

	var result = fibonacciMemo(n-2, results)+fibonacciMemo(n-1, results);
	results[n] = result; 

	return result;
}


//n here is definied as the desired number of digits, represented as "100" for three digits, "10000" for 5 digits
function findNumbDigits(n) {
	var guess = fibonacciMemo(1); 
	var numbGuesses = 1; 
	while(guess < n) {
		guess = fibonacciMemo(numbGuesses); 
		numbGuesses++;
	}
	return numbGuesses; 
}




