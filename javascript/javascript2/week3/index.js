// warmup

// 1. Log out the text Called after 2.5 seconds 2.5 seconds after the script is loaded.
setTimeout(function () {
    console.log("Called after 2.5 seconds");
}, 2500);

//2.

function delayLog(delay, stringToLog) {
    setTimeout(function () {
        console.log(stringToLog)
    }, delay * 1000)
}

delayLog(5, "This string logged after 5 seconds")
delayLog(3, "This string logged after 3 seconds")

//3 

const button = document.getElementById("button")
button.addEventListener("click", callback)
function callback() {
    delayLog(6, "Called after 6 seconds")
}


//4

const logEarth = function () {
    console.log("Earth")
}

const logSaturn = function () {
    console.log("Saturn")
}

const logPlanet = function (planetLogFunction) {
    planetLogFunction()
}

logPlanet(logEarth)
logPlanet(logSaturn)

//5 Create a button with the text called "Log location".

function geoFindMe() {

    const status = document.querySelector('#status');
    const mapLink = document.querySelector('#map-link');

    mapLink.href = '';
    mapLink.textContent = '';

    function success(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        status.textContent = '';
        mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
        mapLink.textContent = `This is the latitude: ${latitude}, This is the longitude: ${longitude}`;
        logMap(latitude, longitude)

    }

    function error() {
        status.textContent = 'Unable to retrieve your location';
    }

    if (!navigator.geolocation) {
        status.textContent = 'Geolocation is not supported by your browser';
    } else {
        status.textContent = 'Locating…';
        navigator.geolocation.getCurrentPosition(success, error);
    }

}

document.querySelector('#locationButton').addEventListener('click', geoFindMe);

//6 create a map


function logMap(latitude, longitude) {
    let map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: latitude, lng: longitude },
        zoom: 8,
    });
}



//7
function runAfterDelay(delay, callback) {
    setTimeout(function () {
        callback()
    }, delay * 1000)

}

runAfterDelay(4, function () {
    console.log("Should be logged after 4 seconds")
})

//8 double click the page

function doubleClickFunction() {
    console.log("double click!")
}
document.addEventListener("dblclick", doubleClickFunction)


//9 

function jokeCreator(shouldTellFunnyJoke, logFunnyJoke, logBadJoke) {
    if (shouldTellFunnyJoke === true) {
        logFunnyJoke()
    } else {
        logBadJoke()
    }
}

function logFunnyJoke() {
    console.log("To replace programmers with Robots, clients will have to accurately describe what they want. We're safe")
}

function logBadJoke() {
    console.log("I'm a Pull Stack Developer. I just pull things out of the internet and put it into my code")
}
jokeCreator(true, logFunnyJoke, logBadJoke)
jokeCreator(false, logFunnyJoke, logBadJoke)



//Function as a variable
// Array with 3 items


const getFirstFunction = () =>
    console.log("first function")


const getSecondFunction = () =>
    console.log("second function")


const getThirdFunction = () =>
    console.log("third function")

const iterateArray = [getFirstFunction, getSecondFunction, getThirdFunction];
iterateArray.forEach((iterate) => iterate)
console.log(iterateArray)
getFirstFunction()
getSecondFunction()
getThirdFunction()

//Create a function as a const and try creating a function normally

const notNormalFunction = function () {
    console.log("not normal function")
}

function normalFunction(notNormal) {
    console.log("normal function")
}
notNormalFunction()
normalFunction()

//Create an object that has a key whose value is a function

const newObject = {
    color: function color() {
        console.log("green is my favorite color")
    }
}

newObject.color()








