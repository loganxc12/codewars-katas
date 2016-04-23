function openOrSenior(data){
    var output = [];
    for (var i = 0; i < data.length; i++) {
        if ((data[i][0] > 54) && (data[i][1] > 7)) {
            output.push("Senior");
        } else {
            output.push("Open");
        }
    }
    return output;
}

//Alternative solution using 'map' and ternary statements

function openOrSenior(data) {
    return data.map(function(member) {
    	return member[0] >= 55 && member[1] > 7 ? 'Senior' : 'Open';
    });
}