//This problem asks you to find the index of the number that 'is not like the
//others', i.e. if one is even and all others are odd.

function iqTest(numbers){
    numbers = numbers.split(' ');
    var evens = [];
    var odds = [];
    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) { evens.push(numbers[i]) }
        else if (numbers[i] % 2 !== 0) { odds.push(numbers[i])}
    }
    if (evens.length > 1) {
        return numbers.indexOf(odds[0]) + 1;
    } else {
        return numbers.indexOf(evens[0]) + 1;
    }
}