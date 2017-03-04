'''
2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.

What is the sum of the digits of the number 2^1000?
'''

import math

twoPow = 2**1000
print twoPow
twoPow = str(twoPow)
sum = 0
print twoPow
for char in twoPow:
  sum += int(char)
print sum
