function doneOrNot(board){
  var dupes = false;
  	function checkDupes(arr) {
  		var counts = [];
    	for (var i = 0; i < arr.length; i++) {
	        if(counts[arr[i]] === undefined) {
	            counts[arr[i]] = 1;
	        } else {
	            return true;
	        }
    	}
    	return false;
	}
	for (var i = 0; i < board.length; i++) {
		if (checkDupes(board[i])) {
			return "Try again!";
		}
	}
  return "Finished!";
}