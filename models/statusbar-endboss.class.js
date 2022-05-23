class StatusbarEndboss extends DrawableObject {
  IMAGES_ENDBOSSBAR = [
    'img/7.Marcadores/Barra/Enemy_gigantón-Doña_Gallinota-vida/0_.png',
    'img/7.Marcadores/Barra/Enemy_gigantón-Doña_Gallinota-vida/20_.png',
    'img/7.Marcadores/Barra/Enemy_gigantón-Doña_Gallinota-vida/40_.png',
    'img/7.Marcadores/Barra/Enemy_gigantón-Doña_Gallinota-vida/60_.png',
    'img/7.Marcadores/Barra/Enemy_gigantón-Doña_Gallinota-vida/80_.png',
    'img/7.Marcadores/Barra/Enemy_gigantón-Doña_Gallinota-vida/100_.png',
  ];

  barImgs = [];

  constructor(type) {
    super();
    this.height = 575 / 3.5;
    this.width = 950 / 1.5;
    this.y = 1540;
    this.x = 620 * 3 - this.width;
    this.type = type;
    this.barImgs = this.loadImages(this.IMAGES_ENDBOSSBAR);
  }

  setImg(actualLife, actualBottles, actualCoins, actualBossLife) {
    let typePercentage;
    if (this.type == 'life') {
      typePercentage = actualLife;
    } else if (this.type == 'bottle') {
      typePercentage = actualBottles;
    } else if (this.type == 'coin') {
      typePercentage = actualCoins;
    } else if (this.type == 'boss') {
      typePercentage = actualBossLife;
    }
    let imgPosition = Math.round(
      ((this.barImgs.length - 1) / 100) * typePercentage
    );
    if (imgPosition < 0) {
      imgPosition = 0;
    }
    this.img = this.barImgs[imgPosition];
  }
}
