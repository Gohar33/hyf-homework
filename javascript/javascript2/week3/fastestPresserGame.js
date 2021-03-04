const input = document.getElementById("input")
const button = document.getElementById("button")
const resultS = document.getElementById("resultS")
const resultL = document.getElementById("resultL")


let gameRunning = false;
let numberS = 0;
let numberL = 0;


function winnerFunction() {
    if (numberS > numberL) {
        return resultS.innerHTML = "Winner is a S player"
    } else if (numberL > numberS) {
        return resultL.innerHTML = "Winner is a L player"
    }

}


button.addEventListener("click", () => {
    const contentString = input.value;
    const contentNumber = parseInt(contentString)
    gameRunning = true;
    setTimeout(function () {
        gameRunning = false;
        winnerFunction()
    }, contentNumber * 1000)
})



document.addEventListener("keypress", (event) => {
    if (gameRunning === true) {
        if (event.key === "s") {
            resultS.innerHTML = numberS++
        }
        if (event.key === "l") {
            resultL.innerHTML = numberL++
        }
    }
})







