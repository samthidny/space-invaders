export class SpriteAnimation {

    constructor(animation) {
        this._animation = animation;
        this.currentFrame = 0;
    }

    get currentFrameSprite() {
        return this._animation[this.currentFrame];
    }

    nextFrame() {
        this.currentFrame++;
        if (this.currentFrame > this._animation.length - 1) {
            this.currentFrame = 0;
        }
    }
}