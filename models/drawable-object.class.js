class DrawableObject {
    canvasWidth;
    imgPosition = 0;
    x;
    y;
    img;
    height;
    width;
    imageCache = {};
    imageArray = [];
    currentImage = 0;
    newimg;
    playedSound = false;

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    /**
     * function to load several pictures into an array
     * @param {array} arr - array with paths of the pictures
     * @returns array - with several pictures
     */
    loadImages(arr) {
        this.imageArray = [];
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageArray.push(img);
        });
        return this.imageArray;
    }

    /**
     * function to play the array of images
     * @param {array} arr - array with paths of the pictures
     */
    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.newimg = this.imageCache[path];
        this.currentImage++;
    }
}