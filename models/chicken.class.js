class Chicken extends MovableObject {
    IMAGES_BIG_CHICKEN = [
        'img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/1.png',
        'img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/2.png',
        'img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/3.png',
    ];

    IMAGES_LITTLE_CHICKEN = [
        'img/3.Secuencias_Enemy_básico/Versión_pollito/1.png',
        'img/3.Secuencias_Enemy_básico/Versión_pollito/2.png',
        'img/3.Secuencias_Enemy_básico/Versión_pollito/3.png',
    ];
    IMAGES_DEAD_BIG_CHICKEN = [
        'img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/4.png',
    ];
    IMAGES_DEAD_LITTLE_CHICKEN = [
        'img/3.Secuencias_Enemy_básico/Versión_pollito/4.muerte.png',
    ];
    additionalSpeed = 0;
    moveImages = [];
    dyingImgs = [];

    /**
     *this function loads the images and sets the values
     */
    constructor() {
        super().loadImage(
            'img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/1.png'
        );
        this.canvasWidth = 950 * 3;
        this.y = 1350;
        this.height = 200;
        this.width = 200;
        this.speed = 2 + 3 * Math.random();
        this.x = this.canvasWidth * 2.2 * Math.random() + this.canvasWidth;
        this.move();
        this.animate();
        this.setCollidingParams();
        this.gernerateChicken();
    }

    /**
     * function to give the opponent a random appearance
     */
    gernerateChicken() {
        if (Math.random() > 0.5) {
            this.moveImages = this.loadImages(this.IMAGES_BIG_CHICKEN);
            this.dyingImgs = this.loadImages(this.IMAGES_DEAD_BIG_CHICKEN);
        } else {
            this.moveImages = this.loadImages(this.IMAGES_LITTLE_CHICKEN);
            this.dyingImgs = this.loadImages(this.IMAGES_DEAD_LITTLE_CHICKEN);
        }
    }

    /**
     * function for movement
     */
    animate() {
        setInterval(() => {
            if (this.isAlive()) {
                this.img = this.moveImages[this.imgPosition % this.moveImages.length];
                this.imgPosition++;
            }
        }, 100);
    }

    /**
     * this function is responsible for the various animations
     */
    move() {
        setInterval(() => {
            let speed;
            if (this.isAlive()) {
                speed = this.speed;
            } else {
                speed = 0;
            }
            speed += this.additionalSpeed;
            this.x -= speed;
            if (this.x < 0 - this.width) {
                this.x = this.canvasWidth * Math.random() + this.canvasWidth;
                this.energy = 100;
            }
        }, 1000 / 60);
    }

    /**
     * set the image to dead images
     */
    setDeadImgs() {
        sounds.playEnemySmash();
        this.img = this.dyingImgs[0];
    }

    /**
     * checks if the oppenents energy is over zero
     * @returns boolean - energy over zero
     */
    isAlive() {
        return this.energy > 0;
    }

    addSpeed(input) {
        this.additionalSpeed = input;
    }
}