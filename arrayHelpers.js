//This problem deals with extending built-in types by adding methods
//to the prototype. I used core helper functions 'map' and 'filter' 
//as well as ES6 arrow functions (supported on Code Wars).

Array.prototype.square = function() {
  return this.map(function(elem) {
    return elem * elem;
  });
};

Array.prototype.cube = function() {
  return this.map(function(elem) {
    return Math.pow(elem, 3);
  });
};

Array.prototype.average = function() {
  if(this.length > 0) {
     return this.reduce((a, b) => a + b, 0) / this.length;
  } else {
    return NaN;
  }
};

Array.prototype.sum = function() {
  return this.reduce((a, b) => a + b, 0);
};

Array.prototype.even = function() {
  return this.filter(function(elem) {
     if (elem % 2 === 0) {
       return elem;
     }
  });
};

Array.prototype.odd = function() {
  return this.filter(function(elem) {
     if (elem % 2 !== 0) {
       return elem;
     }
  });
};