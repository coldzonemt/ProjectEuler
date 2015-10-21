/*
A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

a^2 + b^2 = c^2
For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.

There exists exactly one Pythagorean triplet for which a + b + c = 1000.
Find the product abc.
*/

function pythagTrip(target){
    var i=0, k=0, j=0;
    var arr = [];
   for(i=0; i<target; i++){
       for(j=0; j<target; j++){
           for(k=0; k<target; k++){
             //test if the sum of the three sides equals the target and makes a valid triangle
            if(i+j+k===target && i+j > k && i+k > j && j+k > i){
              if(i*i+j*j===k*k){
                arr=[i,j,k]; //in case we want to know what the triplet is, I just stored it in an array
               return i*j*k;
              }
            }
          }
       }
   }
  //If no Pythagorean Triplet exists that meets the target requirements, return false
  return false;
}
