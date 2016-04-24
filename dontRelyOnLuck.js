//This problem is deceptive in that it seems impossible (find the value
//of a randomly generated number between 1-100) and, in fact, it is. You 
//have to cheat and alter the native Math.floor function.

var guess = 10; 

Math.floor = function() {
  return 10;
}