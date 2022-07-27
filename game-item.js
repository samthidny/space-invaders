export class GameItem {

    constructor(type, x, y, width, height, metadata) {
        this.type = type;
        this.sprite = type;
        this.x = x;
        this.y = y;
        this.width = width || 10;
        this.height = height || 10;
        this.isAlive = true;
        this.metadata = metadata;
        this.halfWidth = width * 0.5;
        this.halfHeight = height * 0.5;
    }

}