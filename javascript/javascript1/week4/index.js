
// Voice assistant

const toDolist = [];

let name = "";
let activity = "";

function getReply(command) {
    const names = command.split(" ");

    if (command.startsWith("Hello my name is")) {
        if (name === "") {
            name = names[names.length - 1];
            return "Nice to meet you " + name;
        } else {
            return "You asked twice";
        }
    } else if (command === "What is my name?") {
        return "My name is " + name;
    } else if (command.startsWith("Add") && command.endsWith("to my todo")) {
        let add = command.replace("Add", "");
        let toMyTodo = add.replace("to my todo", "")
        toDolist.push(toMyTodo);
        return `${toMyTodo}is added to your todo`
    } else if (command === "What is on my todo?") {
        return "you have " + toDolist.length + " todos -" + toDolist[0] + "and" + toDolist[1];
    } else if (command === "Remove fishing from my todo") {
        toDolist.splice[0, 1];
        return "fishing is removed from your todo";
    } else if (command === "What day is it today?") {
        let day = new Date();
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        return day.getDate() + " " + months[day.getMonth()] + " " + day.getFullYear();
    } else if (command === "Set a timer for 4 minutes") {
        setTimeout
            (function () {
                console.log("Timer done")
            }, 240000);
        return "Timer is set";
    } else if (command.startsWith("What's")) {
        let numbers = command.split(" ");
        let number1 = parseInt(numbers[1]);
        let number2 = parseInt(numbers[3])
        let operator = numbers[2];
        if (number1 && number2);
        switch (operator) {
            case "-":
                return number1 - number2;
            case "+":
                return number1 + number2;
            case "*":
                return number1 * number2;
            case "/":
                return number1 / number2;
        }
    }

};


console.log(getReply("Hello my name is Benjamin"));
console.log(getReply("Hello my name is Benjamin"));
console.log(getReply("What is my name?"));
console.log(getReply("Add fishing to my todo"));
console.log(getReply("Add singing in the shower to my todo"));
console.log(getReply("Remove fishing from my todo"));
console.log(getReply("What is on my todo?"));
console.log(getReply("What day is it today?"));
console.log(getReply("Set a timer for 4 minutes"));
console.log(getReply("What's 3 + 3"));
console.log(getReply("What's 4 * 6"));

