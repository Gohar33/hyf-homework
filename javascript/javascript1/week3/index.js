// Exercise 1  - Item array removal


const names = [
    "Peter",
    "Ahmad",
    "Yana",
    "kristina",
    "Rasmus",
    "Samuel",
    "katrine",
    "Tala",
];
const nameToRemove = "Ahmad";

names.splice(names.indexOf(nameToRemove), 1);

console.log(names); // ['Peter', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala']



// Exercise 2 - When will we be there??

const travelInformation = {
    speed: 50,
    destinationDistance: 432,
};

function notThisFunctionName(num) {
    let travel = travelInformation.destinationDistance / travelInformation.speed;
    let hours = Math.floor(travel);
    let minutes = Math.round((travel - hours) * 60)
    return `${hours} hours and ${minutes} minutes`
};

const travelTime = notThisFunctionName(travelInformation);
console.log(travelTime);



// Exercise 3 - Series duration of my life

const seriesDurations = [
    {
        title: "The Leftovers",
        days: 1,
        hours: 4,
        minutes: 0,
    },
    {
        title: "Sharp Objects",
        days: 0,
        hours: 8,
        minutes: 0,
    },
    {
        title: "The Good Fight",
        days: 1,
        hours: 9,
        minutes: 20,
    },
];


function logOutSeriesText() {
    let lifeSpanInMinutes = 80 * 365 * 24 * 60;
    let sum = 0;
    for (let i = 0; i < seriesDurations.length; i++) {
        let daysInMinutes = seriesDurations[i].days * 24 * 60;
        let hoursInMinutes = seriesDurations[i].hours * 60;
        let minutesInMinutes = seriesDurations[i].minutes;
        let totalInMinutes = daysInMinutes + hoursInMinutes + minutesInMinutes;
        sum += totalInMinutes;
        let minutesInPercent = totalInMinutes * 100 / lifeSpanInMinutes;

        console.log(`${seriesDurations[i].title} took ${minutesInPercent} % of my life`)


    }
    let totalPercent = sum * 100 / lifeSpanInMinutes;
    console.log(`In total that is ${totalPercent} % of my life`)

}

logOutSeriesText();


// Step 3 - Smart-ease - Back to the basics!
// NOnoN0nOYes (Note taking app)
// Save a note


const notes = [];

function saveNote(content, id) {
    notes.push({ content: content, id: id })
}


saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);

console.log(notes);

//Get a note

function getNote(id) {
    for (let i = 0; i < notes.length; i++) {
        if (notes[i].id === id) {
            return notes[i]
        }
    }
    return error
};


const firstNote = getNote(1);
console.log(firstNote);

//Log out notes
function logOutNotesFormatted() {
    for (let i = 0; i < notes.length; i++) {
        console.log("The note with id: " + notes[i].id + " has the following note text: " + notes[i].content)

    }
};

logOutNotesFormatted();




// Project 2. CactusIO-interactive (Smart phone usage app) optional


const activities = [];

function addActivity(date, activity, duration) {
    activities.push({ date: date, activity: activity, duration: duration })
};

addActivity("23/7-18", "Youtube", 30);
addActivity("30/7-18", "Netflix", 50);
addActivity("2/8-18", "Facebook", 60);
console.log(activities);


function showStatus(activities) {
    let totalAmount = 0;
    for (let i = 0; i < activities.length; i++) {
        totalAmount += activities[i].duration;
    };

    if (totalAmount) {
        console.log(`You have added ${activities.length} activities. They amount to ${totalAmount} min. of usage`)
    } else {
        console.log("Add some activities before calling showStatus")
    }
};



showStatus(activities);
