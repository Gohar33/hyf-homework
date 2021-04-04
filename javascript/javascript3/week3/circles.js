/*

const canvas = document.querySelector('#canvas');
const context = canvas.getContext('2d');
var centerX = canvas.width / 2;
var centerY = canvas.height / 2;
var radius = 70;

circle.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);

context.fillStyle = 'blue';
context.fill(circle); //   <<< pass circle to context

context.lineWidth = 10;
context.strokeStyle = '#000066';
context.stroke(circle);
*/





// create a class


class Circle {
    constructor(x, y, r, startAngle, endAngle, fillColor) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.startAngle = startAngle;
        this.endAngle = endAngle;
        this.fillColor = fillColor;
    }



    draw() {
        const context = canvas.getContext('2d');
        context.beginPath()
        context.arc(this.x, this.y, this.r, 0, 2 * Math.PI, this.fillColor);
        context.fillStyle = this.fillColor;
        context.stroke();
        context.fill();

    }
}

//const c1 = new Circle(50, 50, 20, 0, 2 * Math.PI, "#000000");
//c1.draw()


function randomCircle() {
    let width = Math.random() * window.innerWidth;
    let height = Math.random() * window.innerHeight;
    let radius = Math.floor(Math.random() * 100)


    var x = Math.floor(Math.random() * 255);
    var y = Math.floor(Math.random() * 255);
    var z = Math.floor(Math.random() * 255);
    var color = "rgb(" + x + "," + y + "," + z + ")";

    const circle = new Circle(width, height, radius, 0, 2 * Math.PI, color)
    circle.draw()

}




setInterval(randomCircle, 100)


function followCursor(cursor) {
    let width = cursor.clientX
    let height = cursor.clientY
    let radius = Math.floor(Math.random() * 100)


    var x = Math.floor(Math.random() * 255);
    var y = Math.floor(Math.random() * 255);
    var z = Math.floor(Math.random() * 255);
    var color = "rgb(" + x + "," + y + "," + z + ")";

    const circle = new Circle(width, height, radius, 0, 2 * Math.PI, color)
    circle.draw()

}
window.addEventListener("mousemove", followCursor)




