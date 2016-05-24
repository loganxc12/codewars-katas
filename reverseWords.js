//Write a reverseWords function that accepts a string a parameter, and 
//reverses each word in the string.

function reverseWords(str) {
  var array = str.split(" ");
  var resultStr = "";
  for (var i = 0; i < array.length; i++) {
    for (var j = array[i].length - 1; j >= 0; j--) {
      resultStr += array[i][j];
    }
    if (i !== array.length - 1) { resultStr += " "; }
  }
  return resultStr;
}

//Alternative clever solution
function reverseWords(str) {
  return str.split(' ').map(function(word){
    return word.split('').reverse().join('');
  }).join(' ');
}