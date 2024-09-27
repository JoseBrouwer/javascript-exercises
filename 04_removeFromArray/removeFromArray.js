const removeFromArray = function(arr, ...args) {
    for(const arg of args) //for every argument to remove
    {
        for(let i = 0; i < arr.length; i++) //for every element in the array
        {
            if(arg === arr[i]) //if arg in arr
            {
                arr.splice(arr.indexOf(arr[i]), 1)
                i = 0; //start from beggining if modified
            } 
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
