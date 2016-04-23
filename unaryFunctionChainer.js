//Create 'higher order function' that does 'left fold' (runs each function 
//starting from left and passing returned value into next function) on array
//passed to parent function.


function chained(functions) {
  return function fold(input) {
    for (var i = 0; i < functions.length; i++) {
      input = functions[i](input); 
    }
    return input;
  }
}

//After analyzing other solutions, using 'reduce' would likely be a better 
//way to approach this problem.

function chained(functions) {
  return function(input){
    return functions.reduce(function(input, fn){ return fn(input) }, input);
  }
}