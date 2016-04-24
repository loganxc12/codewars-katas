//This problem requires you to implement the 'Luhn alorithm' to validate 
//a given number. Double every other element staring from right, add digits 
//together if greater than 9 (18 = 1+8 = 9), calculate sum, then check if 
//divisible by ten.

function validate(n) {

  n = n.toString().split('');
  //Double every other element starting from right.
  if (n.length % 2 === 0) {
    n = n.map(function(elem,index,arr) {
    	return (index % 2 === 0) ? elem * 2 : elem;
    });
  } else if (n.length % 2 !== 0) {
  	n = n.map(function(elem,index,arr) {
    	return (index % 2 !== 0) ? elem * 2 : elem;
    });
  }
  //Check value of elements, add together if greater than 9, re-convert 
  //to numbers.
  for (var i = 0; i < n.length; i++) {
  	if (Number(n[i]) > 9) {
  		n[i] = Number(n[i]) - 9;
  	} else {
  		n[i] = Number(n[i]);
  	}
  }
  //Sum all digits 
  var sum = n.reduce((a, b) => a + b, 0);
  
  return sum % 10 === 0;
  
 }