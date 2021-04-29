console.log("inside warmup file");

class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    getDiameter() {
        const diameter = 2 * this.radius
        return diameter;
    }

    getCircumference() {
        const circumference = 2 * Math.PI * this.radius;
        return circumference;
    }

    getArea() {
        const area = Math.PI * Math.pow(this.radius, 2);
        return area;
    }
}

const circle = new Circle(10);
console.log(circle.getDiameter());
console.log(circle.getCircumference());
console.log(circle.getArea());
