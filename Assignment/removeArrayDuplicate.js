
console.log(`<<==============Step_01==============>>`);
function getUnique(arr)
{

    let uniqueArr = [];

    // loop through array
    for(let i of arr) 
    {
        if(uniqueArr.indexOf(i) === -1) 
        {
            uniqueArr.push(i);
        }
    }
    console.log(uniqueArr);
}

const array = [11, 3, 4, 11, 4, 7, 3];
getUnique(array);

console.log(`<<==============Step_02==============>>`);
function convertFirstLastToUppercase(string) {
    let words = string.split(" ");
    let result = [];
    for (let word of words) {
        if (word.length > 1) {
            word = word[0].toUpperCase() + word.slice(1, -1) + word[word.length - 1].toUpperCase();
        } else {
            word = word.toUpperCase();
        }
        result.push(word);
    }
    return result.join(" ");
}

let string = "how are you mate";
console.log(convertFirstLastToUppercase(string));