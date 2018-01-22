'''
145 is a curious number, as 1! + 4! + 5! = 1 + 24 + 120 = 145.

Find the sum of all numbers which are equal to the sum of the factorial of their digits.

Note: as 1! = 1 and 2! = 2 are not sums they are not included.
'''
import math

def list_of_digit_factorials(): 
	fact_digs = {}
	for i in range(0,10):
		fact_digs[i] = math.factorial(i)
	return fact_digs

'''
I think that logically we can infer a range for which a "curious" number is feasible. 
No number less than 10 can be a curious number, and the upper limit of curious numbers will 
be decided by the 9's. 

Also, each number does not have to be checked. 
'''

def is_curious_num(num): 
	to_itr = str(num)
	fact_digs = list_of_digit_factorials()
	sum = 0
	for i in to_itr: 
		sum += fact_digs[int(i)]
	# print 'sum of ' + to_itr + ' is: '+ str(sum)
	return sum == num

def get_range_of_curious_nums(top_num):
	curious_nums = []
	for i in range(10,top_num+1): 
		if is_curious_num(i): 
			curious_nums.append(i)

	print sum(curious_nums)
	return curious_nums

print list_of_digit_factorials()
print get_range_of_curious_nums(1000000000)

# print is_curious_num(145)

# print is_curious_num(24)

# print is_curious_num(99)

# print is_curious_num(999)

# print is_curious_num(9999)

# print is_curious_num(99999)

# print is_curious_num(999999)

# print is_curious_num(9999999)

# print is_curious_num(99999999)

# print is_curious_num(999999999)
