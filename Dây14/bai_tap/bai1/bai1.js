class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    draw(ctx) {
        ctx.fillStyle = "red";
        ctx.fillRect(0, 0, this.width, this.height);
    }

    setWidth(width) {
        this.width = width;
    }

    setHeight(height) {
        this.height = height;
    }

    getArea() {
        return this.width * this.height;
    }

    getPerimeter() {
        return 2 * (this.width + this.height);
    }
}