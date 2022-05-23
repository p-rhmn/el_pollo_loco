class MovableObject extends DrawableObject {
    jumpHeight = -80;
    speedY = 0;
    speedX = 80;
    deadJumpHeight = -40;
    acceleration = 6;
    isJumping = false;
    ground = 850;
    energy;
    timePassed = 0;
    lastHit = 0;
    maxSpeed;
    collidingY;
    collidingX;
    collidingheight;
    collidingwidth;
    isHigher = false;
    jumpImgUpPosition = 0;
    jumpImgFallPosition = 0;
    jumpSmash = false;
    speed = 1120;

    constructor() {
        super();
        this.energy = 100;
    }

    /**
     * function to check if the object is colliding with another object
     * @param {object} mo - movable object
     * @returns boolean
     */
    isColliding(mo) {
        return (
            this.collidingX + this.collidingwidth > mo.collidingX &&
            this.collidingY + this.collidingheight > mo.collidingY &&
            this.collidingX < mo.collidingX &&
            this.collidingY < mo.collidingY + mo.collidingheight
        );
    }

    /**
     * collision box of chicken
     */
    isSmashed(mo) {
        return (
            this.isHigher &&
            this.collidingX + this.collidingwidth > mo.collidingX &&
            this.collidingX < mo.collidingX + mo.collidingwidth &&
            this.collidingY + this.collidingheight > mo.y
        );
    }

    /**
     * this function checks the condition in the air
     */
    checkHigher(mo) {
        if (mo.y > this.y + this.height) {
            this.isHigher = true;
        } else {
            this.isHigher = false;
        }
    }

    /**
     * this function shows the "gameover" screen
     */
    endGame() {
        document.getElementById('endscreen').classList.remove('d-none');
        sounds.pause();
    }

    /**
     * this function shows the "win" screen
     */
    winGame() {
        document.getElementById('win').classList.remove('d-none');
        sounds.pause();
    }

    /**
     * applies gravity when the character starts jumping
     * when the character smashed an enemy the character hop a little
     */
    applyGravity() {
        setInterval(() => {
            if (!this.isDead()) {
                if (keyboard.SPACE && !this.isInAir()) {
                    sounds.playJumpUp();
                    this.jumpgImgPosition = 0;
                    this.speedY = this.jumpHeight;
                }

                if (this.isInAir() || this.speedY < 0) {
                    this.y += this.speedY;
                    this.speedY += this.acceleration;
                }

                if (this.jumpSmash) {
                    this.jumpgImgPosition = 0;
                    this.speedY = this.jumpHeight / 2;
                    this.jumpSmash = false;
                }
            }
        }, 1000 / 25);
    }

    /**
     * checks if the objects energy is under or equal zero
     * @returns boolean
     */
    isDead() {
        return this.energy < 1;
    }

    /**
     * checks if the object is in air
     * @returns boolean
     */
    isInAir() {
        return this.y < this.ground;
    }

    /**
     * set the colling parameter of an object.
     * required if a picture is larger than the model within the picture
     */
    setCollidingParams() {
            setInterval(() => {
                if (this instanceof Character) {
                    this.collidingheight = this.height / 1.7;
                    this.collidingY = this.y + this.height / 2.6;
                    this.collidingX = this.x;
                    this.collidingwidth = this.width;
                } else if (this instanceof Coins) {
                    this.collidingheight = this.height / 3;
                    this.collidingY = this.y + this.height / 3;
                    this.collidingX = this.x + this.width / 3;
                    this.collidingwidth = this.width / 3;
                } else {
                    this.collidingheight = this.height;
                    this.collidingY = this.y;
                    this.collidingX = this.x;
                    this.collidingwidth = this.width;
                }
            }, 1000 / 60);
        }
        /**
         * checks whether an object has been hit. in the case of an instance of character,
         * the function characterHitted is called. otherwise bossHitted is called
         */
    hit() {
        if (this instanceof Character) {
            if (!this.isHitted()) {
                sounds.playCharacterHurt();
                this.energy -= 15;
                this.setLastHit();
            }
        } else {
            this.energy -= 20;
            this.setLastHit();
        }
    }

    /**
     * sets the time of the last hit to a variable
     */
    setLastHit() {
        this.lastHit = new Date().getTime();
        this.lastHit = this.lastHit / 1000;
    }

    /**
     * returns true if the last beat was less than a second ago.
     * as a result, only one second can suffer damage
     * @returns boolean
     */
    isHitted() {
        this.timePassed = new Date().getTime() / 1000 - this.lastHit;
        return this.timePassed < 1;
    }

    /**
     * lets the object move to left
     * @param {number} speed
     */
    moveLeft(speed) {
        this.x += speed;
    }

    /**
     * lets the object move to right
     * @param {number} speed
     */
    moveRight(speed) {
        this.x -= speed;
    }
}