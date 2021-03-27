const redBox = document.querySelector('ul.marks li:nth-child(1)');
const blueBox = document.querySelector('ul.marks li:nth-child(2)');
const greenBox = document.querySelector('ul.marks li:nth-child(3)');
const boxes = [redBox, blueBox, greenBox];
const span = document.querySelector('span');


//calling one by one

async function translateOneByOne() {

    await moveElement(blueBox, { x: 400 - parseInt(blueBox.style.left), y: 300 - parseInt(blueBox.style.top) })
    console.log("Blue element has been moved");
    await moveElement(redBox, { x: 20 - parseInt(redBox.style.left), y: 300 - parseInt(redBox.style.top) })
    console.log("Red element has been moved");
    moveElement(greenBox, { x: 400 - parseInt(greenBox.style.left), y: 20 - parseInt(greenBox.style.top) })
    console.log("Green element has been moved");
}
translateOneByOne()


// calling them at once

async function translateAllAtOnce() {
    try {
        await Promise.all([moveElement(greenBox, { x: 400 - parseInt(greenBox.style.left), y: 20 - parseInt(greenBox.style.top) }), moveElement(redBox, { x: 20 - parseInt(redBox.style.left), y: 300 - parseInt(redBox.style.top) }), moveElement(blueBox, { x: 400 - parseInt(blueBox.style.left), y: 300 - parseInt(blueBox.style.top) })])
        console.log("All elements move at once")

    } catch (err) {
        console.log(err)
    }

}
translateAllAtOnce()



