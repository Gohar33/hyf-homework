// Age-ify (A future age calculator)

const yearOfBirth = 2010;
const yearFuture = 2098;
const age = yearFuture - yearOfBirth
console.log("You will be " + age + " years old in " + yearFuture + ".")



// Goodboy-Oldboy (A dog age calculator)

const dogYearOfBirth = 2011;
const dogYearFuture = 2098;
const humanYear = dogYearFuture - dogYearOfBirth;
const dogYear = 7 * humanYear
let shouldShowResultInDogYears = true;

if (shouldShowResultInDogYears) {
    console.log("Your dog will be " + humanYear + " human years old in " + dogYearFuture + ".")
} else {
    console.log("Your dog will be " + dogYear + " dog years old in " + dogYearFuture + ".")
}




// Housey pricey (A house price estimator)

let peterHouseWidth = 8;
let peterHouseDepth = 10;
let peterHouseHeight = 10;
let peterGardenSizeInM2 = 100;
let peterHouseCost = 2500000;
const peterHouseVolumeInMeters = peterHouseWidth * peterHouseDepth * peterHouseHeight;
const peterTotalHousePrice = peterHouseVolumeInMeters * 2.5 * 1000 + peterGardenSizeInM2 * 300;
console.log("Real price for Peter's house is " + peterTotalHousePrice + ".")

if (peterTotalHousePrice < peterHouseCost) {
    console.log("Peter is paying too much.")
} else {
    console.log("Peter is paying too liitle.")
}


let juliarHouseWidth = 5;
let juliaHouseDepth = 11;
let juliaHouseHeight = 8;
let juliaGardenSizeInM2 = 70;
let juliaHouseCost = 1000000;
const juliaHouseVolumeInMeters = juliarHouseWidth * juliaHouseDepth * juliaHouseHeight;
const juliaTotalHousePrice = juliaHouseVolumeInMeters * 2.5 * 1000 + juliaGardenSizeInM2 * 300;
console.log("Real price for Julia's house is " + juliaTotalHousePrice + ".")

if (juliaTotalHousePrice > juliaHouseCost) {
    console.log("Julia is paying too liitle.")
} else {
    console.log("Julia is paying too much.")
}




// Ez Namey (Startup name generator) 

let firstWords = ["Easy", "Awesome", "Corporate", 'Fun', "Mango", "Dull", "Business", "Buby", "Mumba", "Sambo"]
let secondWords = ["Hello", "Cool", "Brave", "Never", "Boat", "Average", "Gangsta", "Gum", "Snickers", "Shokko"]
const randomNumber = Math.floor(Math.random() * 10) + 0;
let startupName = firstWords[randomNumber] + " " + secondWords[randomNumber];
console.log("The startup " + startupName + " contains " + startupName.length + " characters.")