const inputSection = document.querySelector(".search")
const button = document.querySelector("button")
const gifCount = document.querySelector(".gif-number")
document.addEventListener("DomContentLoaded", getGif)

function getGif() {
    button.addEventListener("click", function (content) {
        content.preventDefault();
        const inputVal = inputSection.value.trim()
        let url = `https://api.giphy.com/v1/gifs/search?api_key=TJRmCZYdbW1KDE0BZUYGwuRwksC8RjFu&q=${inputVal}&limit=${gifCount.value}&offset=0&rating=g&lang=en`
        url = url.concat(inputVal)

        fetch(url)
            .then(response => response.json())
            .then(gif => {
                const myDiv = document.getElementById("my-div")
                myDiv.innerHTML = ""

                gif.data.forEach(giphy => {
                    const imgGif = document.createElement("img")
                    imgGif.src = giphy.images.downsized.url
                    myDiv.appendChild(imgGif)

                })
            });
    })
}
getGif()


