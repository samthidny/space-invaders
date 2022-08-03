import { GAME_HEIGHT, GAME_WIDTH } from "./constants.js";

export class GameModel {

    constructor() {
        this.sprites = [];
        this.numSprites = 0;
        this.gameWidth = GAME_WIDTH;
        this.gameHeight = GAME_HEIGHT;
        this.uniqueID = 0;
        this.level = 1;
    }

    addSprite(gameItem) {
        this.sprites.push(gameItem);
        gameItem.id = 'item' + this.uniqueID;
        this.numSprites++;
        this.uniqueID++;
        return gameItem;
    }

    // TODO - this made bombs turn into tank sprites?  prob reference thing
    removeDeadSprites() {
        const aliveSprites = this.sprites.filter(gameItem => gameItem.isAlive);
        this.sprites = aliveSprites;
        this.numSprites = aliveSprites.length;
        
    }

}