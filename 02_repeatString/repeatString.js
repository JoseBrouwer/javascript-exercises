const repeatString = function(repeat, count) {
    let sentence = "";
    if(count < 0)
        return "ERROR"
    for(let i = 0; i < count; i++)
    {
        sentence += repeat;
    }
    return sentence;
};

// Do not edit below this line
module.exports = repeatString;
