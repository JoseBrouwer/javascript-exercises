const reverseString = function(reverse) {
    let reversedString = "";
    let stringLength = reverse.length;
    for(let i = stringLength - 1; i >= 0; i--)
        reversedString += reverse[i];
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
