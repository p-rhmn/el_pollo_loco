class StatusbarCoins extends DrawableObject {
  IMAGES_COINBAR = [
    'img/7.Marcadores/Barra/Marcador moneda/azul/0_.png',
    'img/7.Marcadores/Barra/Marcador moneda/azul/20_.png',
    'img/7.Marcadores/Barra/Marcador moneda/azul/40_.png',
    'img/7.Marcadores/Barra/Marcador moneda/azul/60_.png',
    'img/7.Marcadores/Barra/Marcador moneda/azul/80_.png',
    'img/7.Marcadores/Barra/Marcador moneda/azul/100_.png',
  ];

  barImgs = [];
  type;

  constructor(type) {
    super();
    this.height = 575 / 3.5;
    this.width = 950 / 1.5;
    this.x = 20;
    this.type = type;
    this.barImgs = this.loadImages(this.IMAGES_COINBAR);
    this.y = 140;
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
