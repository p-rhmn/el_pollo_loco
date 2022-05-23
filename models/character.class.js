class Character extends MovableObject {
    isMoving = false;
    idleTimer = 14;

    idleTimerCount = 0;

    otherDirection = true;

    startLine = false;
    finishLine = false;
    deadImgPosition = 0;
    coins = 0;
    bottles = 0;

    IMAGES_WALKING = [
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-21.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-22.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-23.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-24.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-25.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-26.png',
    ];
    IMAGES_IDLE = [
        'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-1.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-2.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-3.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-4.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-5.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-6.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-7.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-8.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-9.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-10.png',
    ];
    IMAGES_LONG_IDLE = [
        'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/LONG_IDLE/I-11.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/LONG_IDLE/I-12.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/LONG_IDLE/I-13.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/LONG_IDLE/I-14.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/LONG_IDLE/I-15.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/LONG_IDLE/I-16.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/LONG_IDLE/I-17.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/LONG_IDLE/I-18.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/LONG_IDLE/I-19.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/LONG_IDLE/I-20.png',
    ];
    IMAGES_JUMP = [
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/j-31.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/j-32.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/j-33.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/j-34.png',
    ];
    IMAGES_FALL = [
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/j-35.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/j-36.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/j-37.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/j-38.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/j-39.png',
    ];
    IMAGES_HURT = [
        'img/2.Secuencias_Personaje-Pepe-corrección/4.Herido/H-41.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/4.Herido/H-42.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/4.Herido/H-43.png',
    ];
    IMAGES_DEAD = [
        'img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-51.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-52.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-53.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-54.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-55.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-56.png',
    ];
    constructor(canvasWidth, speed) {
        super().loadImage(
            'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-1.png'
        );
        this.moveImages = this.loadImages(this.IMAGES_WALKING);
        this.idleImages = this.loadImages(this.IMAGES_IDLE);
        this.longIdleImages = this.loadImages(this.IMAGES_LONG_IDLE);
        this.jumpImagesUp = this.loadImages(this.IMAGES_JUMP);
        this.jumpImagesFall = this.loadImages(this.IMAGES_FALL);
        this.hurtImages = this.loadImages(this.IMAGES_HURT);
        this.deadImages = this.loadImages(this.IMAGES_DEAD);
        this.canvasWidth = canvasWidth;
        this.x = 320;
        this.y = 250;
        this.height = 700;
        this.width = 350;
        this.speed = speed;
        this.animate();
        this.applyGravity();
        this.setCollidingParams();
    }

    /**
     * function to decide which pictures should be drawn
     */
    animate() {
        setInterval(() => {
            sounds.pause();
            if (!this.isDead()) {
                if (this.isHitted()) {
                    this.displayHurt();
                } else if (this.isInAir() && this.speedY <= 0) {
                    this.displayJumpUp();
                } else if (this.isInAir() && this.speedY > 0) {
                    this.hasSmashed = false;
                    this.displayJumpFall();
                } else {
                    if (keyboard.RIGHT || keyboard.LEFT) {
                        this.displayMove();
                    } else {
                        this.displayIdle();
                    }
                }
            } else {
                this.displayDead();
                this.winGame();
            }

            this.increaseImgPosition();
        }, 100);
        this.checkInterval();
    }

    /**
     * function to call several functions which will check several states
     */
    checkInterval() {
        setInterval(() => {
            this.checkCharacterEndRight();
            this.checkCharacterEndLeft();
            this.checkKeyRight();
            this.checkKeyLeft();
            this.checkResetIdle();
            this.checkCharacterEnd();
        }, 1000 / 60);
    }

    /**
     * adds a coin when a coin is picked up
     */
    addCoin() {
        this.coins += 20;
    }

    /**
     * adds a bottle when a bottle is picked up
     */
    addBottle() {
        this.bottles += 10;
    }

    /**
     * function to set images when the object is idle and adds 1 to idle counter
     * when idleTimerCount is equal to idleTimer then object images will set to
     * sleep images
     */
    displayIdle() {
        this.idleTimerCount++;
        if (this.idleTimerCount <= this.idleTimer) {
            this.img = this.idleImages[this.imgPosition % this.idleImages.length];
        } else {
            this.img =
                this.longIdleImages[this.imgPosition % this.longIdleImages.length];
        }
    }

    /**
     * function to set images when the object is hurt
     */
    displayHurt() {
        this.img = this.hurtImages[this.imgPosition % this.hurtImages.length];
        this.idleTimerCount = 0;
    }

    /**
     * function to set images when the object is jumping up
     */
    displayJumpUp() {
        this.img = this.jumpImagesUp[this.jumpImgUpPosition];
        if (this.jumpImgUpPosition < this.jumpImagesUp.length - 1) {
            this.jumpImgUpPosition++;
        } else {
            this.jumpImgFallPosition = 0;
        }
    }

    /**
     * function to set images when the object is falling down
     */
    displayJumpFall() {
        this.img = this.jumpImagesFall[this.jumpImgFallPosition];
        if (this.y > (this.ground + this.jumpHeight) / 2) {
            if (this.jumpImgFallPosition < this.jumpImagesFall.length - 1) {
                this.jumpImgFallPosition++;
            }
        } else {
            this.jumpImgUpPosition = 0;
        }
    }

    /**
     * function to set images when the object is walking
     */
    displayMove() {
        sounds.playWalking();
        this.img = this.moveImages[this.imgPosition % this.moveImages.length];
    }

    /**
     * resets the idle counter when a key is pressed
     */
    checkResetIdle() {
        if (keyboard.RIGHT || keyboard.LEFT || keyboard.D || keyboard.SPACE) {
            this.idleTimerCount = 0;
        }
    }

    /**
     * function to set images when the objects energy is below zero
     * and lets the object jump a little and then fall out of the canvas
     */
    displayDead() {
        setInterval(() => {
            this.img = this.deadImages[this.deadImgPosition];
            this.y += this.deadJumpHeight;
            this.deadJumpHeight += 2;
            if (this.deadImgPosition < this.deadImages.length - 1) {
                this.deadImgPosition++;
            }
        }, 1000 / 25);
    }

    /**
     * increase the imgPosition with one
     */
    increaseImgPosition() {
        this.imgPosition++;
    }

    /**
     * when right key is pressed, object will move right until it reaches the right
     * border
     */
    checkKeyRight() {
        if (keyboard.RIGHT) {
            if (!this.finishLine) {
                this.otherDirection = true;
                this.x += this.speed;
            }
        }
    }

    /**
     * when left key is pressed, object will move left until it reaches the left
     * border
     */
    checkKeyLeft() {
        if (keyboard.LEFT) {
            if (!this.startLine) {
                this.otherDirection = false;
                this.x -= this.speed;
            }
        }
    }

    /**
     * checks whether the object has reached the right edge
     */
    checkCharacterEndRight() {
        this.x > this.canvasWidth - 1500 ?
            (this.finishLine = true) :
            (this.finishLine = false);
    }

    /**
     * checks whether the object has reached the left edge
     */
    checkCharacterEndLeft() {
        this.x < this.canvasWidth / 18 ?
            (this.startLine = true) :
            (this.startLine = false);
    }

    checkCharacterEnd() {
        if (this.x > 1700) {
            // this.finishLine = true;
            // this.x = 0;
        }
    }
}