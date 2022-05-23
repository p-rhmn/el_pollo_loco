class SoundSettings {
    walking = new Audio('sounds/walking.mp3');
    bottleSmash = new Audio('sounds/bottle_smash.mp3');
    enemySmash = new Audio('sounds/enemy_smash.mp3');
    jumpUp = new Audio('sounds/jump_up.mp3');

    coin = new Audio('sounds/coin.mp3');
    bottlePick = new Audio('sounds/bottle_pick.mp3');
    characterHurt = new Audio('sounds/player_hurt.mp3');



    soundOff = true;

    constructor() {}

    playWalking() {
        this.play(this.walking);
    }



    pause() {
        this.walking.pause();
        this.bottlePick.pause();
        this.characterHurt.pause();
    }

    playCharacterHurt() {
        this.play(this.characterHurt);
    }

    play(sound) {
        if (!this.checkMute()) {
            sound.play();
        }
    }

    playBottleSmash() {
        this.play(this.bottleSmash);
    }

    pauseBottleSmash() {
        this.bottleSmash.pause();
        this.bottleSmash.currentTime = 0;
    }

    pauseCoin() {
        this.coin.pause();
        this.coin.currentTime = 0;
    }

    playEnemySmash() {
        this.play(this.enemySmash);
    }

    playJumpUp() {
        this.play(this.jumpUp);
    }



    playCoin() {
        this.play(this.coin);
    }

    playBottlePick() {
        this.play(this.bottlePick);
    }

    checkMute() {
        return this.soundOff;
    }
}