/*
Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down,
there are exactly 6 routes to the bottom right corner.

How many such routes are there through a 20×20 grid?

Use Pascal's Triangle / binomial coefficients to solve this. 

(total paths)
(total paths/options)

*/


var factorial = function(n) {
	if(n === 1) {
		return n; 
	}
	return n*factorial(n-1);
};


var paths = function(n) {
	return (factorial(2*n))/(factorial(n)*factorial(n));
};