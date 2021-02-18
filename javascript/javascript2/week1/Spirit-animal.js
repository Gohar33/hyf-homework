//Spirit animal name generator
const spiritAnimal = [
    "The fullmoon wolf",
    "The brave dog",
    "The wise turtle",
    "The mighty eagle",
    "The soundless snake",
    "The tortured orangutan",
    "The dissapointed camel",
    "The smelly cat",
    "The shapeless armadillo",
    "The unhappiest cow"
];

let myInput = document.getElementById("myInput")
let myButton = document.getElementById("myButton")
let result = document.getElementById("result")




myButton.addEventListener("click", function buttonFunction() {
    if (!myInput.value) {
        alert("You forgot to write your name")
        return;
    }
    result.innerHTML = myInput.value + spiritAnimal
    let random = Math.floor(Math.random() * 10);
    let randomName = spiritAnimal[random]
    result.innerHTML = `${myInput.value} - ${randomName}`
})


buttonFunction()