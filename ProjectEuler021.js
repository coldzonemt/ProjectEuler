/*
Let d(n) be defined as the sum of proper divisors of n (numbers less than n which divide evenly into n).
If d(a) = b and d(b) = a, where a ≠ b, then a and b are an amicable pair and each of a and b are called amicable numbers.

For example, the proper divisors of 220 are 1, 2, 4, 5, 10, 11, 20, 22, 44, 55 and 110; therefore d(220) = 284. 
The proper divisors of 284 are 1, 2, 4, 71 and 142; so d(284) = 220.

Evaluate the sum of all the amicable numbers under 10000.
*/

function findDivisors(n) {
	var divisors = [1]; 
	for(var i=2; i<Math.sqrt(n)+1; i++) {
		if(n%i === 0) {
			divisors.push(i); 
			if(i!==n/i) {
				divisors.push(n/i);
			}
		}
	}
	return divisors;
}

// console.log(findDivisors(220));
// console.log(findDivisors(4));
// console.log(findDivisors(25));
// console.log(findDivisors(284));

function divisorSum(arr) {
	return arr.reduce(function(curr, next) {
		return curr += next; 
	})
}

// console.log(divisorSum(findDivisors(220)));
// console.log(divisorSum(findDivisors(284)));


function amicableNumFinder(n) {
	var amicableNum = {}; 
	var amicablePairs = []; 
	for(var i=1; i<n; i++) {
		var divs = findDivisors(i); 
		var numb = divisorSum(divs); 
		amicableNum[i] = numb; 
	}

	for(var key in amicableNum) {
		for(var secondKey in amicableNum) {
			if(key == amicableNum[secondKey] && key != secondKey && amicableNum[key] == secondKey) {
				if(amicablePairs.indexOf(key) === -1) {
					amicablePairs.push(parseInt(key));
				}
			}
		}
	}
	// console.log(amicableNum);
	return amicablePairs.length > 0 ? divisorSum(amicablePairs) : -1;
}

console.log(amicableNumFinder(10000)); 