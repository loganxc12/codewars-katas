//The goal of this exercise is to convert a string to a new string where each character in the new string is '(' if that character appears only once in the original string, or ')' if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

function duplicateEncode(word){
    word = word.toLowerCase();
    var objMap = {};
    var result = "";
    //Create object map of each character and number of times it appears.
    for (var i = 0; i < word.length; i++) {
    	if (objMap[word[i]]) {
    		objMap[word[i]]++;
    	} else {
    		objMap[word[i]] = 1;
    	}
    }
    //Create resultant string based off object map.
    for (var j = 0; j < word.length; j++) {
    	if (objMap[word[j]] > 1) {
    		result += ")";
    	} else {
    		result += "(";
    	}
    }
    return result;
}