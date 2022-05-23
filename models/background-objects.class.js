class BackgroundObjects extends MovableObject {
    constructor(imagePath, xMultiplier, y, multiplier) {
        super().loadImage(imagePath);
        this.multiplier = multiplier;
        this.y = y * 3;
        this.x = 980 * xMultiplier * 3;
    }

    /**
     * function to move the background
     * @param {number} canvasWidth
     * @param {number} speed
     */
    backgroundRight(canvasWidth, speed) {
        this.x -= speed * this.multiplier;
        if (this.x < canvasWidth * -1) {
            this.x = canvasWidth - speed * this.multiplier;
        }
    }

    /**
     * function to move the background
     * @param {number} canvasWidth
     * @param {number} speed
     */
    backgroundLeft(canvasWidth, speed) {
        this.x += speed * this.multiplier;
        if (this.x > canvasWidth) {
            this.x = 0 - canvasWidth + speed * this.multiplier;
        }
    }
}