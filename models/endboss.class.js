class EndBoss extends MovableObject {
    IMAGES_IDLE = [
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/1.Caminata/G1.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/1.Caminata/G2.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/1.Caminata/G3.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/1.Caminata/G4.png',
    ];
    IMAGES_ALERT = [
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G13.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G14.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G15.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G16.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G17.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G18.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G19.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G20.png',
    ];
    IMAGES_DEAD = [
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/4.Muerte/G24.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/4.Muerte/G25.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/4.Muerte/G26.png',
    ];

    IMAGES_HURT = [
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/3.Herida/G21.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/3.Herida/G22.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/3.Herida/G23.png',
    ];

    IMAGES_WALKING = [
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/1.Caminata/G1.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/1.Caminata/G2.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/1.Caminata/G3.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/1.Caminata/G4.png',
    ];

    deadImgPosition = 4;
    // addSpeed = 0;

    /**
     * this function preloads all images and sets all necessary values
     */
    constructor(speed) {
        super().loadImage(
            'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/1.Caminata/G1.png'
        );
        this.height = 900;
        this.width = 900;
        this.idleImages = this.loadImages(this.IMAGES_IDLE);
        this.alertImages = this.loadImages(this.IMAGES_ALERT);
        this.dyingImages = this.loadImages(this.IMAGES_DEAD);
        this.hurtImages = this.loadImages(this.IMAGES_HURT);
        this.walkingImages = this.loadImages(this.IMAGES_WALKING);
        this.x = 20000;
        this.y = 700;
        this.speed = 10;
        this.animate();
        this.energy = 100;
        this.setCollidingParams();
    }

    /**
     * decides which animation to play
     */
    animate() {
        setInterval(() => {
            if (!this.isDead()) {
                if (this.isHitted()) {
                    this.showHurtImages();
                    this.x -= 70;
                } else {
                    this.showIdleImages();
                }
            } else {
                this.showDeadImages();
            }

            this.imgPosition++;
        }, 160);
    }

    /**
     * shows the die pictures
     */
    showDeadImages() {
        this.img = this.dyingImages[this.deadImgPosition];
        if (this.deadImgPosition < this.dyingImages.length - 1) {
            this.deadImgPosition++;
        }

        this.endGame();
    }

    /**
     * shows the "injured" pictures
     */
    showHurtImages() {
        this.img = this.hurtImages[this.imgPosition % this.hurtImages.length];
    }

    /**
     * images for the movement
     */
    showMoveImages() {
        this.x -= this.speed;
        this.img = this.moveImages[this.imgPosition % this.moveImages.length];
    }

    /**
     * pictures for the breaks
     */
    showIdleImages() {
        this.img = this.alertImages[this.imgPosition % this.alertImages.length];
    }
}