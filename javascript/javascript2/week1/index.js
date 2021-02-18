//Find the shortest word

const danishWords = ["bil", "plante", "kaffe", "bog", "ø", "planetarium"]

function thisFunctionName(danishWords) {
    let shortestWord = danishWords[0];
    for (let i = 0; i < danishWords.length; i++) {
        if (danishWords[i].length <= shortestWord.length) {
            shortestWord = danishWords[i]
        }

    }
    return shortestWord;
}
console.log(thisFunctionName(danishWords));


//Find and count the Danish letters

const danishString = "Jeg har en blå bil";
const danishString2 = "Blå grød med røde bær";

function notThisFunctionName(letters) {
    let result = { "total": 0, "æ": 0, "ø": 0, "å": 0 }

    for (let i = 0; i < letters.length; i++) {
        if (letters[i] in result) {
            result[letters[i]]++
            result["total"]++

        }

    }
    return result;
}


console.log(notThisFunctionName(danishString))
console.log(notThisFunctionName(danishString2))







