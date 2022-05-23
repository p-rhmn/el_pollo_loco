class World {
    ctx;
    canvas;
    character;

    enemies = level1.enemies;
    cloudObjects = level1.clouds;
    pickableBottles = level1.bottles;
    coins = level1.coins;
    backgroundObjects = level1.backgroundObjects;
    endboss = new EndBoss();

    clouds = [];
    statusBars = [
        new StatusbarCharacter('life'),
        new StatusbarBottles('bottle'),
        new StatusbarCoins('coin'),
        new StatusbarEndboss('boss'),
    ];
    endbossStatusbar = new StatusbarEndboss('boss');

    maxSpeed = 16;
    speedBgLayerFour = 0.8;
    bottles = [];
    bottleInAir = false;

    constructor(canvas) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        canvas.width = 2947;
        canvas.height = 1800;

        this.setWorld();

        this.draw();
        this.checkBgMove();
        this.drawBackground();
        this.checkCollisions();
        this.checkGenerateBottle();
    }

    /**
     *  set new character
     */
    setWorld() {
        this.character = new Character(this.canvas.width, this.maxSpeed);
    }

    /**
     *  draw all objects
     */
    draw() {
        this.drawEnemys();
        this.drawClouds();
        this.drawEndBoss();
        this.drawCoins();
        this.drawCharacter();
        this.drawStatusBars();
        this.drawBottle();
        this.drawpickableBottles();

        requestAnimationFrame(() => {
            this.draw();
        });
    }

    /**
     *  draw enemys
     */
    drawEnemys() {
        this.enemies.forEach((enemy) => {
            this.ctx.drawImage(
                enemy.img,
                enemy.x,
                enemy.y,
                enemy.width,
                enemy.height
            );
        });
    }

    /**
     *  draw clouds
     */
    drawClouds() {
        this.cloudObjects.forEach((cloud) => {
            this.ctx.drawImage(
                cloud.img,
                cloud.x,
                0,
                this.canvas.width,
                this.canvas.height
            );
        });
    }

    /**
     *  draw all background images
     */
    drawBackground() {
        setInterval(() => {
            this.cloudObjects.forEach((cloud) => {
                cloud.moveCloudLeft(this.canvas.width, this.speedBgLayerFour);
            });
            this.backgroundObjects.forEach((bg) => {
                this.ctx.drawImage(
                    bg.img,
                    bg.x,
                    0,
                    this.canvas.width,
                    this.canvas.height
                );
            });
        }, 1000 / 60);
    }

    /**
     *  draw character images
     */
    drawCharacter() {
        if (!this.character.otherDirection) {
            this.ctx.save();
            this.ctx.translate(this.character.width, 0);
            this.ctx.scale(-1, 1);
            this.character.x = this.character.x * -1;
        }
        this.ctx.drawImage(
            this.character.img,
            this.character.x,
            this.character.y,
            this.character.width,
            this.character.height
        );

        if (!this.character.otherDirection) {
            this.character.x = this.character.x * -1;
            this.ctx.restore();
        }
    }

    /**
     *  draw endboss images
     */
    drawEndBoss() {
        this.ctx.drawImage(
            this.endboss.img,
            this.endboss.x,
            this.endboss.y,
            this.endboss.width,
            this.endboss.height
        );
    }

    /**
     *  draw all statusbars
     */
    drawStatusBars() {
        for (const element of this.statusBars) {
            element.setImg(
                this.character.energy,
                this.character.bottles,
                this.character.coins,
                this.endboss.energy
            );
            this.ctx.drawImage(
                element.img,
                element.x,
                element.y,
                element.width,
                element.height
            );
        }
    }

    /**
     *  draw all coins on the ground
     */
    drawCoins() {
        this.coins.forEach((coin) => {
            this.ctx.drawImage(coin.img, coin.x, coin.y, coin.width, coin.height);
        });
        this.coins.forEach(function(item, index, object) {
            if (item.energy <= 0) {
                object.splice(index, 1);
            }
        });
    }

    /**
     *  draw all bottles on the ground
     */
    drawpickableBottles() {
        this.pickableBottles.forEach((pickablebottle) => {
            this.ctx.drawImage(
                pickablebottle.img,
                pickablebottle.x,
                pickablebottle.y,
                pickablebottle.width,
                pickablebottle.height
            );
        });
        this.pickableBottles.forEach(function(item, index, object) {
            if (item.energy <= 0) {
                object.splice(index, 1);
            }
        });
    }

    /**
     * function to draw the bottles
     * if a bottle is picked, its energy is zero. then the bottle will be deleted
     */
    drawBottle() {
        this.bottles.forEach(function(item, index, object) {
            if (item.energy <= 0) {
                object.splice(index, 1);
            }
        });
        this.bottles.forEach((element) => {
            this.ctx.drawImage(
                element.img,
                element.x,
                element.y,
                element.width,
                element.height
            );
        });
    }

    /**
     *  decides how the objects are to be inspected
     */
    checkBgMove() {
        setInterval(() => {
            this.enemies.forEach((enemy) => {
                enemy.addSpeed(0);
            });
            if (!this.character.isDead()) {
                this.leftMove();
                this.rightMove();
            }
        }, 1000 / 60);
    }

    /**
     *  this function provides all cases while right movement
     */
    rightMove() {
        if (this.character.finishLine && keyboard.RIGHT) {
            this.endboss.x -= this.maxSpeed;
            this.enemies.forEach((enemy) => {
                enemy.addSpeed(this.maxSpeed);
            });
            this.backgroundObjects.forEach((object) => {
                object.backgroundRight(this.canvas.width - 30, this.maxSpeed);
            });

            this.coins.forEach((coin) => {
                coin.moveRight(this.maxSpeed);
            });
            this.pickableBottles.forEach((pickableBottle) => {
                pickableBottle.moveRight(this.maxSpeed);
            });
        }
    }

    /**
     *  this function provides all cases while left movement
     */
    leftMove() {
        if (this.character.startLine && keyboard.LEFT) {
            this.endboss.x += this.maxSpeed;
            this.enemies.forEach((enemy) => {
                enemy.addSpeed(this.maxSpeed * -1);
            });
            this.backgroundObjects.forEach((object) => {
                object.backgroundLeft(this.canvas.width - 30, this.maxSpeed);
            });
            this.coins.forEach((coin) => {
                coin.moveLeft(this.maxSpeed);
            });
            this.pickableBottles.forEach((pickableBottle) => {
                pickableBottle.moveLeft(this.maxSpeed);
            });
        }
    }

    /**
     * checks the status of a thrown bottle
     */
    checkGenerateBottle() {
        setInterval(() => {
            if (this.character.bottles > 0) {
                if (keyboard.D && !this.bottleInAir) {
                    this.bottles.push(
                        new ThrowableObject(
                            this.character.x,
                            this.character.y + 170,
                            this.character.otherDirection
                        )
                    );
                    this.character.bottles -= 10;
                    this.bottleInAir = true;
                }
                if (!keyboard.D && this.bottleInAir) {
                    this.bottleInAir = false;
                }
            }
        }, 1000 / 60);
    }

    /**
     * interval of all collisions
     */
    checkCollisions() {
        setInterval(() => {
            this.checkEnemyCollision();
            this.checkBottleCollsion();
            this.checkCoinCollision();
        }, 300);
    }

    /**
     * checks coin collisions
     */
    checkCoinCollision() {
        this.coins.forEach((coin) => {
            if (this.character.isColliding(coin)) {
                sounds.pauseCoin();
                sounds.playCoin();
                coin.energy = 0;
                this.character.addCoin();
            }
        });
    }

    /**
     * checks bottle collision
     */
    checkBottleCollsion() {
        this.pickableBottles.forEach((pickableBottle) => {
            if (this.character.isColliding(pickableBottle)) {
                sounds.playBottlePick();
                pickableBottle.energy = 0;
                this.character.addBottle();
            }
        });
        this.bottles.forEach((bottle) => {
            if (this.endboss.isColliding(bottle)) {
                if (!bottle.hasHitted()) {
                    this.endboss.hit();
                }
                bottle.collides();
            }
        });
    }

    /**
     * checks enemy collisions
     */
    checkEnemyCollision() {
        this.enemies.forEach((enemy) => {
            if (this.character.isSmashed(enemy) && enemy.energy > 0) {
                this.character.jumpSmash = true;
                enemy.energy = 0;
                enemy.setDeadImgs();
            }
        });
        this.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy) && enemy.energy > 0) {
                this.character.hit();
            }
        });
        this.enemies.forEach((enemy) => {
            if (this.character.checkHigher(enemy)) {
                enemy.isHigher = true;
            } else {
                enemy.isHigher = false;
            }
        });
    }
}