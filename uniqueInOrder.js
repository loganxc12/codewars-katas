//Implement the function unique_in_order which takes as argument a sequence 
//and returns a list of items without any elements with the same value next 
//to each other and preserving the original order of elements.

var uniqueInOrder = function(iterable) {
  var result = [];
  var current = iterable[0];
  for (var i = 1; i <= iterable.length; i++) {
    if (current!== iterable[i]) {
      result.push(current); 
      current = iterable[i];
    }
  }
  return result;
};