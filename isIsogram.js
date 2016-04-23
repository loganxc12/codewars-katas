//Determine whether or not string is an 'isogram' (string with no repeating characters).

function isIsogram(str){
    str = str.replace(' ', '').toLowerCase();
    var obj = {};
    for (var i = 0; i < str.length; i++) {
        if (obj[str[i]]) {
            return false;
        } else {
            obj[str[i]] = 1;
        }
    }
    return true;
}