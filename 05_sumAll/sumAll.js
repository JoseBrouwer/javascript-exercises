const sumAll = function(start, end) {
    if((isNaN(start)) || (isNaN(end))) //if params are not numbers
        return "ERROR";
    else if((!Number.isInteger(start)) || (!Number.isInteger(end))) //if params are not ints
        return "ERROR";
    else if((start < 0) || (end < 0)) //if params are negative
        return "ERROR";
    else if(start > end) //swap
    {
        let temp = start;
        start = end;
        end = temp;
    }
    let sum = 0;
    for(let i = start; i <= end; i++)
        sum += i;
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
