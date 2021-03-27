// 1. Movies exercise
async function mvoiesArray() {
    const movies = await fetch("https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json")
    const getBadMovies = await movies.json()
    const badMovies = getBadMovies.filter(movie => movie.rating < 5 && movie.year >= 2000)
    console.log(badMovies)
}
mvoiesArray()


// 2. Promise that resolves after set time

const getAsyncTime = () => new Promise((resolveAfter) => {
    setTimeout(() => {
        resolveAfter()
    }, 8000)
}).then(() => {
    console.log("I am called asynchronously after 8 seconds")
}).catch(() => {
    console.log("error")
})

//async await version 

async function newTime() {
    try {
        await getAsyncTime()
        console.log("I am also called asynchronously after 8 seconds")
    } catch (error) {
        console.log(error)
    }
}
newTime()

// 3. Rewrite setTimeout


function setTimeoutPromise() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve()
        }, 3000)
    })
}

setTimeoutPromise().then(() => {
    console.log("Called after 3 seconds");
});

// rewrite geolocation


function getCurrentLocation() {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition((position) => resolve(position),
            (err) => reject(err));
    })
}


getCurrentLocation()
    .then((position) => {
        // called when the users position is found
        console.log(position);
    })
    .catch((error) => {
        // called if there was an error getting the users location
        console.log(error);
    });

getCurrentLocation()



// 4. Fetching and waiting

// Do the 3 steps below using promises and .then.

const waitFewSeconds = () => new Promise((waitingTime) => {
    setTimeout(() => {
        waitingTime()
    }, 3000)
})


fetch("https://yesno.wtf/api")
    .then((result) => result.json())
    .then((result) => {
        waitFewSeconds().then(() => {
            console.log(result.answer)
        })
    })

// Do the 3 steps below using async/await

async function waitAnotherSeconds() {
    await waitFewSeconds();
    const newTime = await fetch("https://yesno.wtf/api")
    const getResult = await newTime.json()
    console.log(getResult.image)
}
waitAnotherSeconds()
