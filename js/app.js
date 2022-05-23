let canvas;
let keyboard = new Keyboard();
let sounds = new SoundSettings();

let world;

function checkWindowSize() {
    const viewportWidth = window.innerWidth;
    if (viewportWidth < 940) {
        document.getElementById('btnsLeft').classList.remove('d-none');
        document.getElementById('btnsRight').classList.remove('d-none');
        document.getElementById('fullscreen-btn').classList.add('d-none');
    } else {
        document.getElementById('btnsLeft').classList.add('d-none');
        document.getElementById('btnsRight').classList.add('d-none');
    }
}

window.addEventListener('resize', () => {
    checkWindowSize();
});

const soundImg = document.getElementById('sound-btn');

function init() {
    canvas = document.getElementById('canvas');
    checkWindowSize();
}

soundImg.addEventListener('click', () => {
    sounds.soundOff ?
        (soundImg.src = 'img/icons/sound-on.png') :
        (soundImg.src = 'img/icons/sound-off.png');
});

function startGame() {
    document.getElementById('startscreen').classList.add('d-none');
    document.getElementById('start-btn').classList.add('d-none');
    // document.getElementById('helpscreen').classList.remove('d-none');
    document.getElementById('sound-btn').classList.remove('d-none');
    document.getElementById('fullscreen-btn').classList.remove('d-none');

    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
}

moveRight = () => {
    keyboard.RIGHT = true;
};

moveRightStop = () => {
    keyboard.RIGHT = false;
};

moveLeft = () => {
    keyboard.LEFT = true;
};

moveLeftStop = () => {
    keyboard.LEFT = false;
};

throwBottle = () => {
    keyboard.D = true;
};

throwBottleStop = () => {
    keyboard.D = false;
};

jump = () => {
    keyboard.SPACE = true;
};

jumpStop = () => {
    keyboard.SPACE = false;
};

function resetGame() {
    location.reload();
}

function togglePlay() {
    sounds.soundOff = !sounds.soundOff;
    sounds.pause();
}

function showHelp() {
    document.getElementById('helpscreen').classList.toggle('d-none');
}

window.addEventListener('keydown', (e) => {
    e.preventDefault();

    if (e.key == 'ArrowRight') {
        keyboard.RIGHT = true;
    }
    if (e.key == 'ArrowLeft') {
        keyboard.LEFT = true;
    }
    if (e.key == 'ArrowUp') {
        keyboard.UP = true;
    }
    if (e.key == 'ArrowDown') {
        keyboard.DOWN = true;
    }
    if (e.key == ' ') {
        keyboard.SPACE = true;
    }
    if (e.key == 'd') {
        keyboard.D = true;
    }
});

window.addEventListener('keyup', (e) => {
    e.preventDefault();
    if (e.key == 'ArrowRight') {
        keyboard.RIGHT = false;
    }
    if (e.key == 'ArrowLeft') {
        keyboard.LEFT = false;
    }
    if (e.key == 'ArrowUp') {
        keyboard.UP = false;
    }
    if (e.key == 'ArrowDown') {
        keyboard.DOWN = false;
    }
    if (e.key == ' ') {
        keyboard.SPACE = false;
    }
    if (e.key == 'd') {
        keyboard.D = false;
    }
});

function openFullview() {
    elem = document.getElementById('canvas');
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
    }
}