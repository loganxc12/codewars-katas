//Similar to coderbyte problem - determine if string has same # of 'x' and 'o' values.

function XO(str) {
    var x = [];
    var o = [];
    str = str.toLowerCase();
    for (var i = 0; i < str.length; i++) {
        if (str[i] === 'x') {
            x.push('x');
        } else if (str[i] === 'o') {
            o.push('o');
        }
    }
    return x.length === o.length) ? true : false;
}

//Alternative solution using ES6

function XO(str) {
  let x = str.match(/x/gi);
  let o = str.match(/o/gi);
  return (x && x.length) === (o && o.length);
}