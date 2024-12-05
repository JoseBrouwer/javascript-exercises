function isAlpha(char) {
    return /^[a-z0-9]$/i.test(char);
};

const palindromes = function (sentence) {
    let lastIndex = sentence.length - 1;
    console.log("-----------------------------------------")
    for(let i = 0; i < sentence.length; i++)
    {
        if(isAlpha(sentence[i]) 
            && isAlpha(sentence[lastIndex]))
        {
            if(sentence[i].toUpperCase() !== sentence[lastIndex].toUpperCase())
                return false;

            else
                lastIndex--;
        }
        else
        {
            if((!isAlpha(sentence[i])) && (sentence[i] !== ""))
                continue;
            else((!isAlpha(sentence[lastIndex])) && (sentence[lastIndex] !== ""))
            {
                lastIndex--; //move past non caharacter
                i--; //we want to compare i again
            }
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
