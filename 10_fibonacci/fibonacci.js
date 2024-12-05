const fibonacci = function(n) {

    let count;
    if(typeof(count) !== "number")
        count = parseInt(n);
    else
        count = n;
    if(count < 0)
        return "OOPS";
    else if (count == 0)
        return 0;

    let n_1 = 1;
    let n_2 = 0;
    let i = 2;
    while(i <= count)
    {
        let fn = n_1 + n_2;
        n_2 = n_1;
        n_1 = fn;
        i++;
    }
    return n_1;
};

// Do not edit below this line
module.exports = fibonacci;
