// Project 1.  Smart-ease - Goes Global!

function getFullname(firstName, surName, userFormalName) {
    if (userFormalName) {
        return "Lord" + " " + firstName + surName
    } else {
        return firstName + surName;
    }
};

let fullname1 = getFullname("Benjamin", " Hughes", true);
let fullname2 = getFullname("Benjamin", " Hughes", false);
console.log(fullname1);
console.log(fullname2);


/* Question from assignement - But what if the person is a woman? 
Describe how you would fix the getFullname so it also works for women
*/

/* Honestly I have no idea how it should be fixed in JavaScript without fixing
 it before in HTML with radio buttons which specify gender. It's possible to
 create a new function adding female prefix to fullname but I don't know how system 
 can differntiate if it's a female or a male name.
*/




//Project 2. Event application

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];


function getEventWeekday(eventDay) {
    let today = new Date();
    let newDay = today.getDay();
    eventDayNumber = (newDay + eventDay) % 7;
    return eventDayNumber;
}
console.log(getEventWeekday(9));
console.log(getEventWeekday(3));



//Project 3. Weather wear

function suggestClothes(temp) {

    if (temp <= 0) {
        console.log("You should wear a coat, scarf and a hat")
    } else if (temp > 0 && temp < 10) {
        console.log("You should wear a coat")
    } else if (temp >= 10 && temp < 20) {
        console.log("You should wear a jacket")
    } else if (temp > 20 && temp < 30) {
        console.log("You should wear a shorts and a t-shirt")
    }
};

const clothesToWear = suggestClothes(-10);
console.log(clothesToWear);





//Project 4 Student manager

let class07Students = [];

function addStudentToClass(studentName) {
    if (class07Students.includes(studentName)) {
        console.log("Student " + studentName + " is already in the class")
    } else if (studentName === "Queen") {
        class07Students.push(studentName);
        console.log("We always have a space for our queen")
    } else if (class07Students.length > 6) {
        console.log("Cannot add more students to class 07")
    } else if (studentName === "") {
        console.log("Sorry, you cannot add empty string")
    } else {
        "Welcome to class 07";
        class07Students.push(studentName)
    }
};

addStudentToClass("Benjamin");
addStudentToClass("Anna");
addStudentToClass("Hanna");
addStudentToClass("Michael");
addStudentToClass("Hanna");
addStudentToClass("Hans");
addStudentToClass("Queen");
addStudentToClass("Lars");
addStudentToClass("Emma");
addStudentToClass("Emma");
addStudentToClass("");
addStudentToClass("Benjamin");
addStudentToClass("Queen");



function getNumberOfStudents() {
    return class07Students.length
}
getNumberOfStudents();





//Project 5 Candy helper optional

let boughtCandyPrices = [];


function addCandy(candyType, weight) {
    let price = 0;

    if (candyType === "Sweet") {
        price = weight * 0.5;
    } else if (candyType === "Chocolate") {
        price = weight * 0.7;
    } else if (candyType === "Toffee") {
        price = weight * 1.1;
    } else if (candyType === "Chewing-gum") {
        price = weight * 0.003;
    } else {
        return boughtCandyPrices;
    }
    boughtCandyPrices.push(price);
    return boughtCandyPrices;
}



addCandy("Sweet", 20);
addCandy("Chocolate", 35);
addCandy("Toffee", 20);
addCandy("Chewing-gum", 35);
console.log(boughtCandyPrices)

const amountToSpend = Math.random() * 100;
console.log(amountToSpend)



function canBuyMoreCandy() {
    let sum = 0;
    for (i = 0; i < boughtCandyPrices.length; i++) {
        sum += boughtCandyPrices[i]
    }
    if (sum < amountToSpend) {
        console.log("You can buy more, so please do!")
    } else {
        console.log("Enough candy for you!")
    }

};

canBuyMoreCandy();
