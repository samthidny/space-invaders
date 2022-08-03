import { SpriteAnimation } from "./sprite-animation.js";

export class SpriteManager {

    constructor() {
        this.spriteImageDatas = {};
        this.sprites = [];
        this.spriteAnimations = {};
        this.frameCount = 0;
    }

    addAnimation(name, spriteData) {
        const arr = [];
        for (let i = 0; i < spriteData.frames.length; i++) {

            const imageData = this.createSpriteImageData(spriteData.frames[i], spriteData.colour);
            arr.push(imageData);

        }
        this.spriteImageDatas[name] = arr;
    }

    getAnimation(name) {

        return this.spriteImageDatas[name];
    }

    // Pairing a gameItem with an animation state
    addAnimationSpriteState(gameItemID, animationName) {

        const animation = this.getAnimation(animationName);

        if (!animation) {
            return;
        }
        const spriteAnimation = new SpriteAnimation(animation);
        this.spriteAnimations[gameItemID] = spriteAnimation;
    }

    // this is always returning tank
    getAnimationSpriteState(gameItemID) {
        const state = this.spriteAnimations[gameItemID];
        if (!state) {
            //console.log('No state found');
            return null;
        } else {
            return state;
        }
        //return this.spriteAnimations[gameItem];
    }


    drawToSprite(canvas, gameItemID) {
        const ctx = canvas.getContext('2d');
        const animationSpriteState = this.getAnimationSpriteState(gameItemID);
        if (!animationSpriteState) {
            return;
        }
        const imageData = animationSpriteState.currentFrameSprite;
        // const imageData = this.spriteImageDatas[gameItem.type][0];
        canvas.width = imageData.width;
        canvas.height = imageData.height;
        ctx.putImageData(imageData, 0, 0);
    }

    createSpriteImageData(spriteData, colour) {
        const spriteWidth = spriteData[0].length;
        const spriteHeight = spriteData.length;
        const spriteImageData = new ImageData(spriteWidth, spriteHeight);



        for (let y = 0; y < spriteHeight; y++) {
            for (let x = 0; x < spriteWidth; x++) {
                this.setPixel(spriteImageData, x, y, spriteData[y][x] ? colour : null);
            }
        }

        return spriteImageData;
    }


    setPixel(imageData, x, y, color) {
        x = Math.round(x);
        y = Math.round(y);
        const offset = ((y * imageData.width) + x) * 4;
        imageData.data[offset] = (color >> 16);
        imageData.data[offset + 1] = (color >> 8) & 0xff;
        imageData.data[offset + 2] = (color) & 0xff;
        imageData.data[offset + 3] = color === null ? 0 : 0xff;
    }

    update() {
        if (this.frameCount > 10000) {
            for (var prop in this.spriteAnimations) {
                const spriteAnimation = this.spriteAnimations[prop];
                // TODO why is there sometimes not a spriteAnimation?
                if (spriteAnimation) {
                    spriteAnimation.nextFrame();
                }
            }
            this.frameCount = 0;
        }
        this.frameCount++;
        //debug('frameCount: ' + this.frameCount);
        //console.log('SpriteManager.frameCount', this.frameCount);

    }

}