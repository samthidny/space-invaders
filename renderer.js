import { SpriteManager } from "./sprite-manager.js";

export class Renderer {


    constructor(model) {
        this.model = model;
        this.spriteManager = new SpriteManager();
        this.frameCount = 0;
        //this.itemToSprite = {};
        // this.init();
    }

    clear() {
        const canvas = document.querySelector('[game-canvas]');
        canvas.innerHTML = '';

    }

    init() {

        const SPRITES = {
            MYSTERY_SHIP:
            {
                colour: 0xff0000,
                frames: [
                    [
                        [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
                        [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
                        [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
                        [0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0],
                        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                        [0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
                        [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0]
                    ]
                ]
            },
            TANK:
            {
                colour: 0x00ff00,
                frames: [
                    [
                        [0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
                        [0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
                        [0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
                        [0, 0, 1, 1, 1, 1, 1, 1, 0, 0],
                        [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
                        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
                    ],
                ]
            },
            ENEMY1: {
                colour: 0xff0000,
                frames: [
                    [
                        [0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
                        [0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
                        [0, 0, 1, 1, 1, 1, 1, 1, 0, 0],
                        [0, 1, 1, 0, 1, 1, 0, 1, 1, 0],
                        [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
                        [0, 0, 1, 0, 1, 1, 0, 1, 0, 0],
                        [0, 1, 0, 0, 0, 0, 0, 0, 1, 0],
                        [0, 0, 1, 0, 0, 0, 0, 1, 0, 0]
                    ],
                    [
                        [0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
                        [0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
                        [0, 0, 1, 1, 1, 1, 1, 1, 0, 0],
                        [0, 1, 1, 0, 1, 1, 0, 1, 1, 0],
                        [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
                        [0, 0, 0, 1, 0, 0, 1, 0, 0, 0],
                        [0, 0, 1, 0, 1, 1, 0, 1, 0, 0],
                        [0, 1, 0, 1, 0, 0, 1, 0, 1, 0]
                    ]
                ]
            },
            ENEMY2: {
                colour: 0x00ff00,
                frames: [
                    [
                        [0, 0, 1, 0, 0, 0, 0, 1, 0, 0],
                        [0, 0, 0, 1, 0, 0, 1, 0, 0, 0],
                        [0, 0, 1, 1, 1, 1, 1, 1, 0, 0],
                        [0, 1, 1, 0, 1, 1, 0, 1, 1, 0],
                        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                        [1, 0, 1, 1, 1, 1, 1, 1, 0, 1],
                        [1, 0, 1, 0, 0, 0, 0, 1, 0, 1],
                        [0, 0, 0, 1, 0, 0, 1, 0, 0, 0]
                    ],
                    [
                        [0, 0, 1, 0, 0, 0, 0, 1, 0, 0],
                        [1, 0, 0, 1, 0, 0, 1, 0, 0, 1],
                        [1, 0, 1, 1, 1, 1, 1, 1, 0, 1],
                        [1, 1, 1, 0, 1, 1, 0, 1, 1, 1],
                        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                        [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
                        [0, 0, 1, 0, 0, 0, 0, 1, 0, 0],
                        [0, 1, 0, 0, 0, 0, 0, 0, 1, 0]
                    ]
                ]
            },
            ENEMY3: {
                colour: 0x0000ff,
                frames: [
                    [
                        [0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
                        [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
                        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                        [1, 1, 0, 0, 1, 1, 0, 0, 1, 1],
                        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                        [0, 0, 1, 1, 0, 0, 1, 1, 0, 0],
                        [0, 1, 1, 0, 1, 1, 0, 1, 1, 0],
                        [1, 1, 0, 0, 0, 0, 0, 0, 1, 1]
                    ],
                    [
                        [0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
                        [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
                        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                        [1, 1, 0, 0, 1, 1, 0, 0, 1, 1],
                        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                        [0, 0, 1, 1, 0, 0, 1, 1, 0, 0],
                        [0, 1, 1, 0, 1, 1, 0, 1, 1, 0],
                        [0, 0, 1, 1, 0, 0, 1, 1, 0, 0]
                    ]
                ]
            }
    
    
        }

        document.querySelector('[game-canvas]').style.setProperty('width', `${this.model.gameWidth}px`)
        document.querySelector('[game-screen]').style.setProperty('width', `${this.model.gameWidth}px`)


        // Set up sprite data

        // Add sprite animations by name
        this.spriteManager.addAnimation('tank', SPRITES.TANK);
        this.spriteManager.addAnimation('enemy', SPRITES.ENEMY1);
        this.spriteManager.addAnimation('enemy1', SPRITES.ENEMY1);
        this.spriteManager.addAnimation('enemy2', SPRITES.ENEMY2);
        this.spriteManager.addAnimation('enemy3', SPRITES.ENEMY2);
        this.spriteManager.addAnimation('enemy4', SPRITES.ENEMY3);
        this.spriteManager.addAnimation('enemy5', SPRITES.ENEMY3);
        this.spriteManager.addAnimation('mystery-ship', SPRITES.MYSTERY_SHIP);
       
        // this.model.sprites.forEach((gameItem) => {
        //     // Set up animation states for each sprite in sprite manager
        //     this.spriteManager.addAnimationSpriteState(gameItem, gameItem.type);
        // })




        this.model.sprites.forEach((gameItem) => {
            this.addSprite(gameItem);
            //this.itemToSprite[gameItem] = e;
        })
    }

    addSprite(gameItem) {

        const gameDiv = document.querySelector('[game-canvas]')
        const e = document.createElement('div');
        e.setAttribute('sprite', true);
        e.setAttribute('itemID', gameItem.id);
        e.setAttribute(gameItem.type, true);

        for (let prop in gameItem.metadata) {
            e.setAttribute(prop, gameItem.metadata[prop]);
        }

        // Set size in css
        e.style.width = `${gameItem.width}px`;
        e.style.height = `${gameItem.height}px`;

        //Add canvas to div
        const c = document.createElement('canvas');
        c.setAttribute('width', gameItem.width);
        c.setAttribute('height', gameItem.height);
        e.appendChild(c);

        this.spriteManager.addAnimationSpriteState(gameItem.id, gameItem.sprite || gameItem.type);

        // if (gameItem.type === 'tank' || gameItem.type === 'enemy') {
        //     this.spriteManager.drawToSprite(c, gameItem.id);
        // }



        //e.innerText = gameItem.type;
        gameDiv.appendChild(e);
        return e;
    }

    removeSprite(gameItem) {
        const sprite = gameDiv.querySelector(`[itemID="${gameItem.id}"]`) || this.addSprite(gameItem);
        //sprite.style.left = 2000 + 'px';
    }

    render(renderCount) {
        const gameDiv = document.querySelector('[game-canvas]')
        this.model.sprites.forEach((gameItem) => {
            const sprite = gameDiv.querySelector(`[itemID="${gameItem.id}"]`) || this.addSprite(gameItem);
            sprite.style.left = gameItem.x + 'px';
            sprite.style.top = gameItem.y + 'px';

            // Move animations on
            // todo - this isnt the place to do this, just a test
            // if(renderCount % 100 === 0) {
            //     this.spriteManager.update();
            // }

            //drawToSprite(canvas, gameItem)
            const c = sprite.querySelector('canvas');
            // this is where the issue is with everything being tank sprites

            // this.frameCount++;

            // if (this.frameCount % 100 == 0) {
            this.spriteManager.update();
            this.spriteManager.drawToSprite(c, gameItem.id);
            // }



            // Temp hide dead sprites
            if (!gameItem.isAlive) {
                sprite.parentElement.removeChild(sprite);
                sprite.style.display = 'none';
            }

        })

        document.querySelector('[game-footer]').innerText = `LIVES: ${this.model.lives}`;
        document.querySelector('[score-text]').innerText = `${this.model.score}`;

    }
}