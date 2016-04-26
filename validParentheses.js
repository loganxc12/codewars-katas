//Challenge asks you to determine whether a string contains a valid/matching 
//number of parens. Here are two solutions.

function validParentheses(parens){
  parens = parens.split('');
  var left = 0;
  var right = 0;
  for (var i = 0; i < parens.length; i++) {
    if (parens[i] === '(') {
      left++;
    } else if (parens[i] === ')') {
      right++;
    }
  }
  return left === right;
}


function validParentheses(parens) {
  var count = 0;
  for (var i = 0; i < parens.length; i++) {
    if (parens[i] === "(") {
      count++;
    } else {
      count--;
      if (count < 0) {
        return false;
      }
    }
  }
  return count === 0;
}