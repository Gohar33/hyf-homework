//Doubling of number
//given code
/*
let numbers = [1, 2, 3, 4];
let newNumbers = [];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
        newNumbers[i] = numbers[i] * 2;
    }
}

console.log("The doubled numbers are", newNumbers);
*/

// rewriting using filter and map

let numbers = [1, 2, 3, 4];


let newNumbers = numbers.filter((filteredNumbers) =>
    filteredNumbers % 2 !== 0).map((filteredNumbers) => filteredNumbers * 2);


console.log("The doubled numbers are", newNumbers);

