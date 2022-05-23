class Cloud extends MovableObject {
  constructor(imagePath, xMultiplier, y) {
    super().loadImage(imagePath);
    this.y = y;
    this.x = xMultiplier * 950 * 3;
  }
  
  /**
   * function to move clouds
   * @param {number} canvasWidth - width of the canvas
   * @param {number} speed - speed from the clouds
   */
  moveCloudLeft(canvasWidth, speed) {
    this.x -= speed / 4;
    if (this.x < canvasWidth * -1) {
      this.x = canvasWidth - speed / 4;
    }
  }
}
