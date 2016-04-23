//Find the next square (number whose square root is an integer) of 
//passed in square

function findNextSquare(sq) {
	if (Number.isInteger(Math.sqrt(sq)) === false) {
		return -1;
	}
	function checkSq(num) {
		return Number.isInteger(Math.sqrt(num));
	}
	var found = false;
	while (found === false) {
		sq++;
		if (checkSq(sq)) {
      found = true;
			return sq;
		}
	}
}

//Alternative solution leveraging Math.pow()
function findNextSquare(sq) {
  var root = Math.sqrt(sq);
  return root % 1 === 0 ? Math.pow(root + 1, 2) : -1;
}