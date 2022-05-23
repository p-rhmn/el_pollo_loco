class Bottles extends MovableObject {
  //   bottleImgs = [];
  IMAGES_BOTTLES = ['img/6.botella/1.png', 'img/6.botella/2.png'];

  constructor() {
    super();
    this.bottleImgs = this.loadImages(this.IMAGES_BOTTLES);
    this.x = 950 * Math.random() * 2 * 3 + 650;
    this.y = (576 / 5) * 4 * 3;
    this.height = 170;
    this.width = 170;
    this.setBottleImg();
    this.setCollidingParams();
  }

  setBottleImg() {
    this.img = this.bottleImgs[Math.floor(Math.random() * 2)];
  }
}
