#Use a generator to find the next Fibonacci Number 
a,b = 0,1
def fibI():
 global a,b
 while True:
  a,b = b, a+b
  yield a

f=fibI()
print 'first fib', f.next()

#To account for the first two fibonacci numbers already being defined, set guess = 2 
guess = 2

num = f.next()
#To find the first Fibonacci Number greater than 1000 digits, increment the Fibonacci Number and compare it to 10^999
while num < 10**999:
	num = f.next()
	guess+=1

print guess




#This memoized version of finding Fibonacci numbers did not work 
def fibMemo(n, memo): 
	if n == 1 or n == 2: 
		return 1
	if n in memo: 
		return memo[n]
	result = fibMemo(n-2, memo) + fibMemo(n-1, memo)
	memo[n] = result

	return result