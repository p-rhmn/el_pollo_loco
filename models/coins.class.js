class Coins extends MovableObject {
  coinImgs = [];
  coinImgsCache = ['img/8.Coin/Moneda1.png', 'img/8.Coin/Moneda2.png'];
  width = 300;
  height = 300;

  constructor() {
    super();
    this.coinImgs = this.loadImages(this.coinImgsCache);
    this.animate();
    this.x = 950 * Math.random() * 6 + 650;
    this.y = 578 * Math.random() + 578;
    this.setCollidingParams();
  }

  animate() {
    setInterval(() => {
      this.img = this.coinImgs[this.imgPosition % this.coinImgs.length];
      this.imgPosition++;
    }, 400);
  }
}
