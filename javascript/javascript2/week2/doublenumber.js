//Doubling of number
// rewriting using filter and map

let numbers = [1, 2, 3, 4];


let newNumbers = numbers.filter((filteredNumbers) =>
    filteredNumbers % 2 !== 0).map((filteredNumbers) => filteredNumbers * 2);


console.log("The doubled numbers are", newNumbers);

