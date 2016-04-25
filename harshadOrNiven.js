//This problem asks for three functions that check whether a given number is a 'harshad'
//and find the next immediate harshad number or the next series of a given length.

var Harshad = ( function() {
  'use strict';

  return {
   
    isValid: function( number ) {
      var splitNums = number.toString().split('');
      for (var i = 0; i < splitNums.length; i++) { splitNums[i] = Number(splitNums[i])}
      var sum = splitNums.reduce((a, b) => a + b, 0);
      return number % sum === 0 ? true : false;
    },

    getNext: function( number ) {
      var found = false;
      while (found === false) {
      	number++;
      	var splitNums = number.toString().split('');
      	for (var i = 0; i < splitNums.length; i++) { splitNums[i] = Number(splitNums[i])}
      	var sum = splitNums.reduce((a, b) => a + b, 0);
      	if (number % sum === 0) {
      		found = true;
      	}
      }
      return number;
    },
    
    getSerie: function( count, start ) {
      var origin = start ? start : 0;
      var harshads = [];
      while (harshads.length < count) {
        origin++;
      	var splitNums = origin.toString().split('');
      	for (var i = 0; i < splitNums.length; i++) { splitNums[i] = Number(splitNums[i])}
      	var sum = splitNums.reduce((a, b) => a + b, 0);
      	if (origin % sum === 0) { 
      		harshads.push(origin);
      	}
      }
      return harshads;
 }
}
} () );