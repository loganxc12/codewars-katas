//Still working on solution
//Struggled for a little while until I realized the 'copy' array was
//being passed by reference not by value.

function whoIsNext(names, r){
  
  if (r <= names.length) {
  	return names[r-1];
  }
  
  var copy = names.slice();

  while (copy.length < r) {
  	for (var i = 0; i < 2; i++) {
  		names.push(names[0]);
  		copy.push(names[0]);
  	}
    names.shift();
  }
  
  return copy[r-1];
}