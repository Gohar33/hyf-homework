//Find the shortest word

const danishWords = ["bil", "plante", "kaffe", "bog", "ø", "planetarium"]

function getShortestWord(danishWords) {
    let shortestWord = danishWords[0];
    for (let i = 0; i < danishWords.length; i++) {
        if (danishWords[i].length <= shortestWord.length) {
            shortestWord = danishWords[i]
        }

    }
    return shortestWord;
}
console.log(getShortestWord(danishWords));

//example with filter, I'll comment it out so will not interact with the main code

/*
const danishWords = ["bil", "plante", "kaffe", "bog", "ø", "planetarium"]


let shortestWord = danishWords.filter(function (shortWord) {
    let newArray = shortWord[0]
    if (shortWord.length <= newArray.length) {
        newArray = shortWord
        return newArray;

    }

})

console.log(shortestWord);
*/

//Find and count the Danish letters

const danishString = "Jeg har en blå bil";
const danishString2 = "Blå grød med røde bær";

function danishLetters(letters) {
    let result = { "total": 0, "æ": 0, "ø": 0, "å": 0 }

    for (let i = 0; i < letters.length; i++) {
        if (letters[i] in result) {
            result[letters[i]]++
            result["total"]++

        }

    }
    return result;
}


console.log(danishLetters(danishString))
console.log(danishLetters(danishString2))

