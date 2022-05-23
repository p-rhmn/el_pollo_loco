class ThrowableObject extends MovableObject {
    IMAGES_ROTATE = [
        'img/6.botella/Rotación/Mesa de trabajo 1 copia 3.png',
        'img/6.botella/Rotación/Mesa de trabajo 1 copia 4.png',
        'img/6.botella/Rotación/Mesa de trabajo 1 copia 5.png',
        'img/6.botella/Rotación/Mesa de trabajo 1 copia 6.png',
    ];

    IMAGES_HIT = [
        'img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 7.png',
        'img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 8.png',
        'img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 9.png',
        'img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 10.png',
        'img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 11.png',
        'img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 12.png',
    ];
    imgPositionSplash = 0;
    collided = false;
    bottleImgs = [];
    splashImgs = [];

    constructor(x, y, direction) {
        super();
        this.bottleImgs = this.loadImages(this.IMAGES_ROTATE);
        this.splashImgs = this.loadImages(this.IMAGES_HIT);
        this.ground = 1300;
        if (!direction) {
            this.speedX *= -1;
        }
        this.height = 250;
        this.width = 250;
        this.speedY = 80;
        this.img = this.bottleImgs[0];
        this.acceleration = 12;
        this.x = x;
        this.y = y;
        this.rotate();
        this.throw();
        this.setCollidingParams();
    }

    /**
     * set the collided variable to true
     */
    collides() {
        this.collided = true;
    }

    /**
     * check if the bottle has collided
     * @returns boolean
     */
    hasHitted() {
        return this.collided;
    }

    /**
     * sets the current picture of the bottle.
     * During the flight the bottle rotates, if the bottle hits the boss
     * or the ground, the splash images are displayed
     */
    rotate() {
        setInterval(() => {
            if (!this.isInAir() || this.collided) {
                if (this.energy > 0 && !this.playedSound) {
                    sounds.pauseBottleSmash();
                    sounds.playBottleSmash();
                    this.playedSound = true;
                }
                this.img = this.splashImgs[this.imgPositionSplash];
                this.imgPositionSplash++;
                if (this.imgPositionSplash >= this.splashImgs.length) {
                    this.energy = 0;
                }
            } else {
                this.img = this.bottleImgs[this.imgPosition % this.bottleImgs.length];
                this.imgPosition++;
            }
        }, 1000 / 10);
    }

    /**
     * lets the bottle fly and fall
     */
    throw () {
        setInterval(() => {
            if (this.isInAir() && !this.collided) {
                this.y -= this.speedY;
                this.x += this.speedX;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 20);
    }
}