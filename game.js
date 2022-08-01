import { BOMB_SPEED, DEFAULT_SPRITE_SIZE,  ENEMY_GROUND_LIMIT, ENEMY_SIZE, ENEMY_LEVEL_INCREASE_Y, ENEMY_STAGGER_FRAMES_MIN, ENEMY_STAGGER_FRAMES_MAX, ENEMY_X_SPACE, ENEMY_Y_SPACE, ENEMY_SPEED, ENEMY_SHIELD_LIMIT, GAME_LOOPS_PER_SECOND, GAME_WIDTH, GAME_HEIGHT, MAX_ACTIVE_MISSILES, MISSILE_WIDTH, MISSILE_HEIGHT, MISSILE_SPEED, NUM_ENEMY_ROWS, NUM_LIVES, SHIELD_WIDTH, TANK_SPEED, TANK_MARGIN, USE_ANIMATION_FRAME } from "./constants.js";
import { GameItem } from "./game-item.js";
import { GameModel } from "./game-model.js";
import { KeyboardManager } from "./keyboard-manager.js";
import { Renderer } from "./renderer.js";

export class Game extends EventTarget {

    constructor() {
        super();
    }

    init() {
        this.gameLoopsPerSecond = GAME_LOOPS_PER_SECOND;
        this.isPaused = true;
        this.frameCount = 0;
        this.renderCount = 0;
        this.gameInProgress = false;
        this.gameIsOver = false;
        this.keyboard = new KeyboardManager();
        this.model = new GameModel();
        this.interval = null;
        this.renderer = new Renderer(this.model);

        // Initial game values
        this.model.level = 1;
        this.model.lives = NUM_LIVES;
        this.model.score = 0;
        this.enemyStaggerFrequency = ENEMY_STAGGER_FRAMES_MAX;
        this.maxActiveBombs = 1;
        this.enemyStartY = 50;
        this.initLevel()

        // Fire missile
        document.addEventListener('keyup', this.keyUpHandler.bind(this));

        this.renderer.clear();
        this.renderer.init();
    }

    keyUpHandler(event) {
        if (event.code == 'Space' && this.numActiveMissiles < MAX_ACTIVE_MISSILES) {
            this.fireMissile = true;
            this.numActiveMissiles++;
        }
    }

    // Just resets the game without clearing game model data
    initLevel() {

        this.model.sprites = [];
        this.renderer.clear()

        // Space Invaders Specific Stuff
        this.currentEnemyRow = NUM_ENEMY_ROWS;
        this.numActiveMissiles = 0;
        this.numActiveBombs = 0;

        // Create Enemies
        for (var y = 0; y < NUM_ENEMY_ROWS; y++) {
            for (var x = 0; x < 11; x++) {
                const enemyType = 'enemy' + (y + 1);
                const enemyGameItem = new GameItem('enemy', (ENEMY_SIZE + ENEMY_X_SPACE) * x, ((ENEMY_SIZE + ENEMY_Y_SPACE) * y) + this.enemyStartY, ENEMY_SIZE, ENEMY_SIZE, { column: x, row: y, sprite: enemyType })
                enemyGameItem.sprite = enemyType;
                this.model.addSprite(enemyGameItem);
            }
        }

        const createShield = (xPos, yPos) => {
            for (let y = 0; y < 5; y++) {
                for (let x = 0; x < 6; x++) {
                    // const blockSize = 10;
                    const blockWidth = 10;
                    const blockHeight = 10;
                    const skip = y === 4 && x > 1 && x < 4;
                    if (!skip) {
                        this.model.addSprite(new GameItem('shield', xPos + (blockWidth * x), yPos + (blockHeight * y), blockWidth, blockHeight));
                    }
                }
            }
        }

        // Create shields
        for (var x = 0; x < 4; x++) {
            createShield(50 + (SHIELD_WIDTH * x) + (50 * x), 400);
        }

        this.hasShields = true;
        this.removeShields = false;
        this.enemyDirection = 1;
        this.enemySpeed = ENEMY_SPEED;
        this.enemyStaggerFrequency = this.enemyStaggerFrequency = this.calculateEnemyStaggerFrequency(55);
        this.moveEnemyCount = 0;

        // Create Tank
        this.tank = this.model.addSprite(new GameItem('tank', this.model.gameWidth / 2, this.model.gameHeight - DEFAULT_SPRITE_SIZE, 24, 24));
        this.tankSpeed = TANK_SPEED;
        this.fireMissile = false;
    }

    levelComplete() {
        // TODO - Add game over restart from scratch
        alert('LEVEL COMPLETE');
        // this.stop();
        this.nextLevel();
        // this.start();
    }

    gameOver() {
        console.log('GAME OVER');
        this.stop();
        this.dispatchEvent(new CustomEvent('GAME_OVER'));
    }

    start() {
        if (this.gameInProgress) {
            return;
        }
        this.isPaused = false;
        this.gameInProgress = true;
        this.renderer.render();

        if (USE_ANIMATION_FRAME) {
            this.animationFrameGameLoop()
        } else {
            const intervalSpeed = Math.round(1000 / this.gameLoopsPerSecond);
            console.log('intervalSpeed', intervalSpeed);
            this.interval = setInterval(() => {
                this.gameLoop();
                //this.renderLoop();
            }, intervalSpeed);
        }
    }

    stop() {
        this.isPaused = true;
        clearInterval(this.interval);
        this.gameInProgress = false;
    }

    restart() {
        // Cleanup
        //document.removeEventListener('keyup', this.keyUpHandler);

        this.init();
    }


    calculateEnemyStaggerFrequency(numEnemies) {
       
        const percRemaining = numEnemies / 55;
        const percGone = 1 - percRemaining;
        const r = 1 - (percGone * percGone);
        const range = ENEMY_STAGGER_FRAMES_MAX - ENEMY_STAGGER_FRAMES_MIN;
        const stagger = ENEMY_STAGGER_FRAMES_MIN + Math.ceil(r * range);
        console.log('New Enemy Stagger', numEnemies, stagger);
        return stagger;

    }

    _calculateEnemyStaggerFrequency(numEnemies) {
        // For now hard coding this but needs some kind of "hockey curve" formula getting much faster at the end

        const sectors = [
            [55, 1],
            [50, 0.95],
            [45, 0.9],
            [40, 0.85],
            [35, 0.8],
            [30, 0.75],
            [25, 0.7],
            [20, 0.6],
            [15, 0.5],
            [10, 0.4],
            [9, 0.35],
            [8, 0.3],
            [7, 0.25],
            [6, 0.2],
            [5, 0.15],
            [4, 0.1],
            [3, 0.07],
            [2, 0.05],
            [1, 0.01]
        ];

        // TODO - ES6/functional way of doing this

        const range = ENEMY_STAGGER_FRAMES_MAX - ENEMY_STAGGER_FRAMES_MIN;

        for (let i = 0; i < sectors.length; i++) {
            if (numEnemies >= sectors[i][0]) {
                const fraction = sectors[i][1];
                const stagger = ENEMY_STAGGER_FRAMES_MIN + Math.ceil(fraction * range);
                console.log('new stagger ', numEnemies, fraction, stagger);
                return stagger;
            }
        }
    }


    speedUpEnemyMovement() {
        this.enemyStaggerFrequency -= 2;
        console.log('New Stagger Frequency', this.enemyStaggerFrequency)
        if (this.enemyStaggerFrequency < 1) {
            this.enemyStaggerFrequency = 1;
        }
    }

    nextLevel() {
        // Set things like speed, num Missiles etc here
        //this.speedUpEnemyMovement();
        //this.maxActiveBombs++;
        this.model.level += 1;
        this.enemyStartY += ENEMY_LEVEL_INCREASE_Y;
        this.initLevel();
    }

    animationFrameGameLoop() {
        if (this.gameInProgress) {
            requestAnimationFrame(() => {
                this.gameLoop();
            })
        }
    }

    gameLoop() {

        const getLiveItems = (type) => {
            return this.model.sprites.filter(gameItem => gameItem.type === type && gameItem.isAlive)
        }

        let enemiesHitWall = false;

        // Move all sprites before calculating anything

        const tankWallLeft = TANK_MARGIN;
        const tankWallRight = GAME_WIDTH - (TANK_MARGIN + this.tank.width);

        // Move Tank
        if (this.keyboard.keyDown['ArrowRight']) {
            this.tank.x += this.tankSpeed;
            if (this.tank.x > tankWallRight) {
                this.tank.x = tankWallRight;
            }
        }

        if (this.keyboard.keyDown['ArrowLeft']) {
            this.tank.x -= this.tankSpeed;
            if (this.tank.x < tankWallLeft) {
                this.tank.x = tankWallLeft;
            }
        }

        // Create Missile
        if (this.fireMissile) {
            this.model.addSprite(new GameItem('missile', this.tank.x + (this.tank.width * 0.5), this.tank.y, MISSILE_WIDTH, MISSILE_HEIGHT));
            this.fireMissile = false;
        }

        // Create Enemy Bomb
        if (this.fireBomb && this.firingEnemy && this.numActiveBombs < this.maxActiveBombs) {
            this.model.addSprite(new GameItem('bomb', this.firingEnemy.x + (DEFAULT_SPRITE_SIZE * 0.5), this.firingEnemy.y + (DEFAULT_SPRITE_SIZE * 0.5), 2, 20));
            this.fireBomb = false;
            this.numActiveBombs++;
            this.firingEnemy = null;
        }

        if (this.fireMysteryShip) {
            this.model.addSprite(new GameItem('mystery-ship', 0, 10, 40, 10));
            this.fireMysteryShip = false;
        }

        const enemies = getLiveItems('enemy');
        const shields = getLiveItems('shield');
        const mysteryShips = getLiveItems('mystery-ship');

        if (this.removeShields) {
            shields.forEach(shield => shield.isAlive = false);
            this.removeShields = false;
            this.hasShields = false;
        }

        if (enemies.length === 0) {
            this.nextLevel();
        }

        // Move enemies
        // Staggered enemy movement by row
        if (this.moveEnemyCount % this.enemyStaggerFrequency === 0) {
            enemies.forEach(gameSprite => {

                //if (gameSprite.metadata.row === this.currentEnemyRow) {
                gameSprite.x += (this.enemyDirection * this.enemySpeed);
                //}

                // TODO - We will need to keep track of min - max rows
                // if (gameSprite.metadata.row === 0) {
                // Check if hit right wall
                if (this.enemyDirection > 0 && (gameSprite.x + gameSprite.width) >= this.model.gameWidth) {
                    enemiesHitWall = true;
                }

                // Check if hit left wall
                if (this.enemyDirection < 0 && gameSprite.x <= 0) {
                    enemiesHitWall = true;
                }
                // }
            })

            // change currentEnemyRow
            this.currentEnemyRow--;
            if (this.currentEnemyRow < 0) {
                this.currentEnemyRow = NUM_ENEMY_ROWS - 1;
            }

            this.moveEnemyCount = 0;
        }


        // Enemy Bombs

        // Find lowest enemies
        const lowestCols = [];
        enemies.forEach(gameSprite => {
            if (gameSprite.isAlive) {
                const col = gameSprite.metadata.column;
                lowestCols[col] = gameSprite;
            }
        })

        // Fire Enemy bombs randomly
        if (Math.floor(Math.random() * 40) === 0) {
            this.fireBomb = true;
            // Pick random enemy
            this.firingEnemy = lowestCols[Math.floor(Math.random() * lowestCols.length - 1)]
        }

        // Random Mystery ship
        if (Math.floor(Math.random() * 100) === 0) {
            if (mysteryShips.length === 0) {
                this.fireMysteryShip = true;
            }

        }

        const missiles = getLiveItems('missile');
        // Move missiles
        missiles.forEach(gameSprite => {
            gameSprite.y -= MISSILE_SPEED;
        })

        const bombs = getLiveItems('bomb');
        // Move missiles
        bombs.forEach(gameSprite => {
            gameSprite.y += BOMB_SPEED;
        })

        // Move mystery ship
        mysteryShips.forEach(gameSprite => {
            gameSprite.x += 1;
        })

        // Game Logic
        if (enemiesHitWall) {
            this.enemyDirection *= -1;
            enemies.forEach(enemy => {
                enemy.y += ENEMY_SIZE;
            })
            enemiesHitWall = false;
        }

        const isHit = (a, b) => {
            if (a.x < b.x + b.width && a.x + a.width > b.x) {
                if (a.y < b.y + b.height && a.y + a.height > b.y) {
                    return true;
                }
            }
        }


        // COLLISION DETECTION

        // Check if missile has hit an invader
        missiles.forEach(missile => {

            mysteryShips.forEach(mysteryShip => {
                if (this.numActiveMissiles && isHit(missile, mysteryShip)) {
                    mysteryShip.isAlive = false;
                    missile.isAlive = false;
                    this.numActiveMissiles--;
                    this.model.score += 1000;
                }

            })

            enemies.forEach(enemy => {
                if (this.numActiveMissiles && isHit(missile, enemy)) {
                    enemy.isAlive = false;
                    missile.isAlive = false;
                    this.numActiveMissiles--;
                    if (enemy.metadata.row > 3) {
                        this.model.score += 10;
                    } else if (enemy.metadata.row > 1) {
                        this.model.score += 20;
                    } else {
                        this.model.score += 30;
                    }

                    // if ((enemies.length - 1) % 5 === 0) {
                    //     console.log('SPEED UP!!!!!')
                    //     this.speedUpEnemyMovement();
                    // }

                    this.enemyStaggerFrequency = this.calculateEnemyStaggerFrequency(enemies.length - 1);
                }
            })

            shields.forEach(shield => {
                if (this.numActiveMissiles && isHit(missile, shield)) {
                    shield.isAlive = false;

                    //enemy.isAlive = false;
                    // shield.strength--;
                    missile.isAlive = false;
                    this.numActiveMissiles--;

                    // if (shield.strength === 0) {

                    // }
                }
            })

            //Check missile has gone above screen
            if (missile.y < 0) {
                missile.isAlive = false;
                this.numActiveMissiles--;
            }
        })

        // Check if bombs has hit tank
        bombs.forEach(bomb => {
            // TODO - create killBomb function so we dont repeat code
            if (isHit(bomb, this.tank)) {
                bomb.isAlive = false;
                this.numActiveBombs--;

                this.tank.lives--;
                this.model.lives--;
                // TODO - Tank Hit!!!
            }

            shields.forEach(shield => {
                if (isHit(bomb, shield)) {
                    bomb.isAlive = false;
                    shield.isAlive = false;
                    this.numActiveBombs--
                }
            })

            //Check missile has gone below screen
            if (bomb.y > this.model.gameHeight) {
                bomb.isAlive = false;
                this.numActiveBombs--;
            }

            if (this.numActiveBombs < 0) {
                this.numActiveBombs = 0;
            }
        })

        // Any enemies hit the ground/shields
        enemies.forEach(enemy => {
            if (this.hasShields && enemy.y >= ENEMY_SHIELD_LIMIT) {
                // Remove shields
                this.removeShields = true;

            }
            if (enemy.y >= ENEMY_GROUND_LIMIT) {
                this.gameIsOver = true;
            }
        });

        // Any enemies hit the ground/shields
        mysteryShips.forEach(mysteryShip => {
            if (mysteryShip.x >= GAME_WIDTH) {
                mysteryShip.isAlive = false;
            }
        });

        this.renderer.render();

        // Increase counters
        this.moveEnemyCount++;

        if (this.model.lives === 0) {
            this.gameIsOver = true;
        }

        if (this.gameIsOver) {
            this.gameOver();
        }


        if (USE_ANIMATION_FRAME) {
            if (!this.isPaused && this.gameInProgress) {
                this.animationFrameGameLoop();
            }
        } else {

            if (this.isPaused || !this.gameInProgress) {
                clearInterval(this.interval);
            }
        }

        // Clean up dead sprites
        this.model.removeDeadSprites();

    }

    renderLoop() {
        this.renderer.render(this.renderCount);
        this.renderCount++;
        //this.animationFrameGameLoop();
    }

}