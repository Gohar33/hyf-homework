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

peterHouseWidth = 8;
peterHouseDepth = 10;
peterHouseHeight = 10;
peterGardenSizeInM2 = 100;
peterHouseCost = 2500000;
peterHouseVolumeInMeters = peterHouseWidth * peterHouseDepth * peterHouseHeight;
peterTotalHousePrice = peterHouseVolumeInMeters * 2.5 * 1000 + peterGardenSizeInM2 * 300;
console.log("Real price for Peter's house is " + peterTotalHousePrice)

if (peterTotalHousePrice < peterHouseCost) {
    console.log("Peter is paying too much.")
} else {
    console.log("Peter is paying too liitle.")
}


juliarHouseWidth = 5;
juliaHouseDepth = 11;
juliaHouseHeight = 8;
juliaGardenSizeInM2 = 70;
juliaHouseCost = 1000000;
juliaHouseVolumeInMeters = juliarHouseWidth * juliaHouseDepth * juliaHouseHeight;
juliaTotalHousePrice = juliaHouseVolumeInMeters * 2.5 * 1000 + juliaGardenSizeInM2 * 300;
console.log("Real price for Julia's house is " + juliaTotalHousePrice)

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
console.log("The startup " + startupName + " contains " + startupName.length + " characters")