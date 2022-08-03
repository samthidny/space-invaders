// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"constants.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.USE_ANIMATION_FRAME = exports.TANK_SPEED = exports.TANK_MARGIN = exports.SHIELD_WIDTH = exports.SHIELD_HEIGHT = exports.NUM_LIVES = exports.NUM_ENEMY_ROWS = exports.MISSILE_WIDTH = exports.MISSILE_SPEED = exports.MISSILE_HEIGHT = exports.MAX_BOMBS = exports.MAX_ACTIVE_MISSILES = exports.GAME_WIDTH = exports.GAME_LOOPS_PER_SECOND = exports.GAME_HEIGHT = exports.ENEMY_Y_SPACE = exports.ENEMY_X_SPACE = exports.ENEMY_STAGGER_FRAMES_MIN = exports.ENEMY_STAGGER_FRAMES_MAX = exports.ENEMY_SPEED = exports.ENEMY_SIZE = exports.ENEMY_SHIELD_LIMIT = exports.ENEMY_LEVEL_INCREASE_Y = exports.ENEMY_GROUND_LIMIT = exports.DEFAULT_SPRITE_SIZE = exports.BOMB_SPEED = void 0;
var NUM_LIVES = 3;
exports.NUM_LIVES = NUM_LIVES;
var GAME_WIDTH = 500;
exports.GAME_WIDTH = GAME_WIDTH;
var GAME_HEIGHT = 500;
exports.GAME_HEIGHT = GAME_HEIGHT;
var DEFAULT_SPRITE_SIZE = 32;
exports.DEFAULT_SPRITE_SIZE = DEFAULT_SPRITE_SIZE;
var TANK_SPEED = 1.5;
exports.TANK_SPEED = TANK_SPEED;
var TANK_MARGIN = 20;
exports.TANK_MARGIN = TANK_MARGIN;
var NUM_ENEMY_ROWS = 5;
exports.NUM_ENEMY_ROWS = NUM_ENEMY_ROWS;
var ENEMY_SPEED = 5;
exports.ENEMY_SPEED = ENEMY_SPEED;
var ENEMY_SIZE = 24;
exports.ENEMY_SIZE = ENEMY_SIZE;
var ENEMY_X_SPACE = 15;
exports.ENEMY_X_SPACE = ENEMY_X_SPACE;
var ENEMY_Y_SPACE = 15;
exports.ENEMY_Y_SPACE = ENEMY_Y_SPACE;
var ENEMY_SHIELD_LIMIT = 360;
exports.ENEMY_SHIELD_LIMIT = ENEMY_SHIELD_LIMIT;
var ENEMY_GROUND_LIMIT = 400;
exports.ENEMY_GROUND_LIMIT = ENEMY_GROUND_LIMIT;
var ENEMY_STAGGER_FRAMES_MAX = 50;
exports.ENEMY_STAGGER_FRAMES_MAX = ENEMY_STAGGER_FRAMES_MAX;
var ENEMY_STAGGER_FRAMES_MIN = 1;
exports.ENEMY_STAGGER_FRAMES_MIN = ENEMY_STAGGER_FRAMES_MIN;
var ENEMY_LEVEL_INCREASE_Y = 20;
exports.ENEMY_LEVEL_INCREASE_Y = ENEMY_LEVEL_INCREASE_Y;
var GAME_LOOPS_PER_SECOND = 100;
exports.GAME_LOOPS_PER_SECOND = GAME_LOOPS_PER_SECOND;
var MISSILE_SPEED = 5;
exports.MISSILE_SPEED = MISSILE_SPEED;
var MISSILE_WIDTH = 1;
exports.MISSILE_WIDTH = MISSILE_WIDTH;
var MISSILE_HEIGHT = 6;
exports.MISSILE_HEIGHT = MISSILE_HEIGHT;
var MAX_ACTIVE_MISSILES = 5;
exports.MAX_ACTIVE_MISSILES = MAX_ACTIVE_MISSILES;
var BOMB_SPEED = 2;
exports.BOMB_SPEED = BOMB_SPEED;
var MAX_BOMBS = 1;
exports.MAX_BOMBS = MAX_BOMBS;
var SHIELD_WIDTH = 60;
exports.SHIELD_WIDTH = SHIELD_WIDTH;
var SHIELD_HEIGHT = 40;
exports.SHIELD_HEIGHT = SHIELD_HEIGHT;
var USE_ANIMATION_FRAME = false;
exports.USE_ANIMATION_FRAME = USE_ANIMATION_FRAME;
},{}],"game-item.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GameItem = void 0;

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GameItem = /*#__PURE__*/_createClass(function GameItem(type, x, y, width, height, metadata) {
  _classCallCheck(this, GameItem);

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
});

exports.GameItem = GameItem;
},{}],"game-model.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GameModel = void 0;

var _constants = require("./constants.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var GameModel = /*#__PURE__*/function () {
  function GameModel() {
    _classCallCheck(this, GameModel);

    this.sprites = [];
    this.numSprites = 0;
    this.gameWidth = _constants.GAME_WIDTH;
    this.gameHeight = _constants.GAME_HEIGHT;
    this.uniqueID = 0;
    this.level = 1;
  }

  _createClass(GameModel, [{
    key: "addSprite",
    value: function addSprite(gameItem) {
      this.sprites.push(gameItem);
      gameItem.id = 'item' + this.uniqueID;
      this.numSprites++;
      this.uniqueID++;
      return gameItem;
    } // TODO - this made bombs turn into tank sprites?  prob reference thing

  }, {
    key: "removeDeadSprites",
    value: function removeDeadSprites() {
      var aliveSprites = this.sprites.filter(function (gameItem) {
        return gameItem.isAlive;
      });
      this.sprites = aliveSprites;
      this.numSprites = aliveSprites.length;
    }
  }]);

  return GameModel;
}();

exports.GameModel = GameModel;
},{"./constants.js":"constants.js"}],"keyboard-manager.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.KeyboardManager = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var KeyboardManager = /*#__PURE__*/function () {
  function KeyboardManager() {
    var _this = this;

    _classCallCheck(this, KeyboardManager);

    document.addEventListener('keydown', function (event) {
      return _this.keyDownHandler(event);
    });
    document.addEventListener('keyup', function (event) {
      return _this.keyUpHandler(event);
    });
    this.keyDown = {};
  }

  _createClass(KeyboardManager, [{
    key: "keyDownHandler",
    value: function keyDownHandler(event) {
      event.preventDefault();
      this.keyDown[event.code] = true;
    }
  }, {
    key: "keyUpHandler",
    value: function keyUpHandler(event) {
      event.preventDefault();
      this.keyDown[event.code] = false;
    }
  }]);

  return KeyboardManager;
}();

exports.KeyboardManager = KeyboardManager;
},{}],"sprite-animation.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SpriteAnimation = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var SpriteAnimation = /*#__PURE__*/function () {
  function SpriteAnimation(animation) {
    _classCallCheck(this, SpriteAnimation);

    this._animation = animation;
    this.currentFrame = 0;
  }

  _createClass(SpriteAnimation, [{
    key: "currentFrameSprite",
    get: function get() {
      return this._animation[this.currentFrame];
    }
  }, {
    key: "nextFrame",
    value: function nextFrame() {
      this.currentFrame++;

      if (this.currentFrame > this._animation.length - 1) {
        this.currentFrame = 0;
      }
    }
  }]);

  return SpriteAnimation;
}();

exports.SpriteAnimation = SpriteAnimation;
},{}],"sprite-manager.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SpriteManager = void 0;

var _spriteAnimation = require("./sprite-animation.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var SpriteManager = /*#__PURE__*/function () {
  function SpriteManager() {
    _classCallCheck(this, SpriteManager);

    this.spriteImageDatas = {};
    this.sprites = [];
    this.spriteAnimations = {};
    this.frameCount = 0;
  }

  _createClass(SpriteManager, [{
    key: "addAnimation",
    value: function addAnimation(name, spriteData) {
      var arr = [];

      for (var i = 0; i < spriteData.frames.length; i++) {
        var imageData = this.createSpriteImageData(spriteData.frames[i], spriteData.colour);
        arr.push(imageData);
      }

      this.spriteImageDatas[name] = arr;
    }
  }, {
    key: "getAnimation",
    value: function getAnimation(name) {
      return this.spriteImageDatas[name];
    } // Pairing a gameItem with an animation state

  }, {
    key: "addAnimationSpriteState",
    value: function addAnimationSpriteState(gameItemID, animationName) {
      var animation = this.getAnimation(animationName);

      if (!animation) {
        return;
      }

      var spriteAnimation = new _spriteAnimation.SpriteAnimation(animation);
      this.spriteAnimations[gameItemID] = spriteAnimation;
    } // this is always returning tank

  }, {
    key: "getAnimationSpriteState",
    value: function getAnimationSpriteState(gameItemID) {
      var state = this.spriteAnimations[gameItemID];

      if (!state) {
        //console.log('No state found');
        return null;
      } else {
        return state;
      } //return this.spriteAnimations[gameItem];

    }
  }, {
    key: "drawToSprite",
    value: function drawToSprite(canvas, gameItemID) {
      var ctx = canvas.getContext('2d');
      var animationSpriteState = this.getAnimationSpriteState(gameItemID);

      if (!animationSpriteState) {
        return;
      }

      var imageData = animationSpriteState.currentFrameSprite; // const imageData = this.spriteImageDatas[gameItem.type][0];

      canvas.width = imageData.width;
      canvas.height = imageData.height;
      ctx.putImageData(imageData, 0, 0);
    }
  }, {
    key: "createSpriteImageData",
    value: function createSpriteImageData(spriteData, colour) {
      var spriteWidth = spriteData[0].length;
      var spriteHeight = spriteData.length;
      var spriteImageData = new ImageData(spriteWidth, spriteHeight);

      for (var y = 0; y < spriteHeight; y++) {
        for (var x = 0; x < spriteWidth; x++) {
          this.setPixel(spriteImageData, x, y, spriteData[y][x] ? colour : null);
        }
      }

      return spriteImageData;
    }
  }, {
    key: "setPixel",
    value: function setPixel(imageData, x, y, color) {
      x = Math.round(x);
      y = Math.round(y);
      var offset = (y * imageData.width + x) * 4;
      imageData.data[offset] = color >> 16;
      imageData.data[offset + 1] = color >> 8 & 0xff;
      imageData.data[offset + 2] = color & 0xff;
      imageData.data[offset + 3] = color === null ? 0 : 0xff;
    }
  }, {
    key: "update",
    value: function update() {
      if (this.frameCount > 10000) {
        for (var prop in this.spriteAnimations) {
          var spriteAnimation = this.spriteAnimations[prop]; // TODO why is there sometimes not a spriteAnimation?

          if (spriteAnimation) {
            spriteAnimation.nextFrame();
          }
        }

        this.frameCount = 0;
      }

      this.frameCount++; //debug('frameCount: ' + this.frameCount);
      //console.log('SpriteManager.frameCount', this.frameCount);
    }
  }]);

  return SpriteManager;
}();

exports.SpriteManager = SpriteManager;
},{"./sprite-animation.js":"sprite-animation.js"}],"renderer.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Renderer = void 0;

var _spriteManager = require("./sprite-manager.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Renderer = /*#__PURE__*/function () {
  function Renderer(model) {
    _classCallCheck(this, Renderer);

    this.model = model;
    this.spriteManager = new _spriteManager.SpriteManager();
    this.frameCount = 0; //this.itemToSprite = {};
    // this.init();
  }

  _createClass(Renderer, [{
    key: "clear",
    value: function clear() {
      var canvas = document.querySelector('[game-canvas]');
      canvas.innerHTML = '';
    }
  }, {
    key: "init",
    value: function init() {
      var _this = this;

      var SPRITES = {
        MYSTERY_SHIP: {
          colour: 0xff0000,
          frames: [[[0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0], [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0], [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0], [0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0]]]
        },
        TANK: {
          colour: 0x00ff00,
          frames: [[[0, 0, 0, 0, 1, 1, 0, 0, 0, 0], [0, 0, 0, 0, 1, 1, 0, 0, 0, 0], [0, 0, 0, 1, 1, 1, 1, 0, 0, 0], [0, 0, 1, 1, 1, 1, 1, 1, 0, 0], [0, 1, 1, 1, 1, 1, 1, 1, 1, 0], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]]]
        },
        ENEMY1: {
          colour: 0xff0000,
          frames: [[[0, 0, 0, 0, 1, 1, 0, 0, 0, 0], [0, 0, 0, 1, 1, 1, 1, 0, 0, 0], [0, 0, 1, 1, 1, 1, 1, 1, 0, 0], [0, 1, 1, 0, 1, 1, 0, 1, 1, 0], [0, 1, 1, 1, 1, 1, 1, 1, 1, 0], [0, 0, 1, 0, 1, 1, 0, 1, 0, 0], [0, 1, 0, 0, 0, 0, 0, 0, 1, 0], [0, 0, 1, 0, 0, 0, 0, 1, 0, 0]], [[0, 0, 0, 0, 1, 1, 0, 0, 0, 0], [0, 0, 0, 1, 1, 1, 1, 0, 0, 0], [0, 0, 1, 1, 1, 1, 1, 1, 0, 0], [0, 1, 1, 0, 1, 1, 0, 1, 1, 0], [0, 1, 1, 1, 1, 1, 1, 1, 1, 0], [0, 0, 0, 1, 0, 0, 1, 0, 0, 0], [0, 0, 1, 0, 1, 1, 0, 1, 0, 0], [0, 1, 0, 1, 0, 0, 1, 0, 1, 0]]]
        },
        ENEMY2: {
          colour: 0x00ff00,
          frames: [[[0, 0, 1, 0, 0, 0, 0, 1, 0, 0], [0, 0, 0, 1, 0, 0, 1, 0, 0, 0], [0, 0, 1, 1, 1, 1, 1, 1, 0, 0], [0, 1, 1, 0, 1, 1, 0, 1, 1, 0], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 0, 1, 1, 1, 1, 1, 1, 0, 1], [1, 0, 1, 0, 0, 0, 0, 1, 0, 1], [0, 0, 0, 1, 0, 0, 1, 0, 0, 0]], [[0, 0, 1, 0, 0, 0, 0, 1, 0, 0], [1, 0, 0, 1, 0, 0, 1, 0, 0, 1], [1, 0, 1, 1, 1, 1, 1, 1, 0, 1], [1, 1, 1, 0, 1, 1, 0, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [0, 1, 1, 1, 1, 1, 1, 1, 1, 0], [0, 0, 1, 0, 0, 0, 0, 1, 0, 0], [0, 1, 0, 0, 0, 0, 0, 0, 1, 0]]]
        },
        ENEMY3: {
          colour: 0x0000ff,
          frames: [[[0, 0, 0, 1, 1, 1, 1, 0, 0, 0], [0, 1, 1, 1, 1, 1, 1, 1, 1, 0], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 0, 0, 1, 1, 0, 0, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [0, 0, 1, 1, 0, 0, 1, 1, 0, 0], [0, 1, 1, 0, 1, 1, 0, 1, 1, 0], [1, 1, 0, 0, 0, 0, 0, 0, 1, 1]], [[0, 0, 0, 1, 1, 1, 1, 0, 0, 0], [0, 1, 1, 1, 1, 1, 1, 1, 1, 0], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 0, 0, 1, 1, 0, 0, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [0, 0, 1, 1, 0, 0, 1, 1, 0, 0], [0, 1, 1, 0, 1, 1, 0, 1, 1, 0], [0, 0, 1, 1, 0, 0, 1, 1, 0, 0]]]
        }
      };
      document.querySelector('[game-canvas]').style.setProperty('width', "".concat(this.model.gameWidth, "px"));
      document.querySelector('[game-screen]').style.setProperty('width', "".concat(this.model.gameWidth, "px")); // Set up sprite data
      // Add sprite animations by name

      this.spriteManager.addAnimation('tank', SPRITES.TANK);
      this.spriteManager.addAnimation('enemy', SPRITES.ENEMY1);
      this.spriteManager.addAnimation('enemy1', SPRITES.ENEMY1);
      this.spriteManager.addAnimation('enemy2', SPRITES.ENEMY2);
      this.spriteManager.addAnimation('enemy3', SPRITES.ENEMY2);
      this.spriteManager.addAnimation('enemy4', SPRITES.ENEMY3);
      this.spriteManager.addAnimation('enemy5', SPRITES.ENEMY3);
      this.spriteManager.addAnimation('mystery-ship', SPRITES.MYSTERY_SHIP); // this.model.sprites.forEach((gameItem) => {
      //     // Set up animation states for each sprite in sprite manager
      //     this.spriteManager.addAnimationSpriteState(gameItem, gameItem.type);
      // })

      this.model.sprites.forEach(function (gameItem) {
        _this.addSprite(gameItem); //this.itemToSprite[gameItem] = e;

      });
    }
  }, {
    key: "addSprite",
    value: function addSprite(gameItem) {
      var gameDiv = document.querySelector('[game-canvas]');
      var e = document.createElement('div');
      e.setAttribute('sprite', true);
      e.setAttribute('itemID', gameItem.id);
      e.setAttribute(gameItem.type, true);

      for (var prop in gameItem.metadata) {
        e.setAttribute(prop, gameItem.metadata[prop]);
      } // Set size in css


      e.style.width = "".concat(gameItem.width, "px");
      e.style.height = "".concat(gameItem.height, "px"); //Add canvas to div

      var c = document.createElement('canvas');
      c.setAttribute('width', gameItem.width);
      c.setAttribute('height', gameItem.height);
      e.appendChild(c);
      this.spriteManager.addAnimationSpriteState(gameItem.id, gameItem.sprite || gameItem.type); // if (gameItem.type === 'tank' || gameItem.type === 'enemy') {
      //     this.spriteManager.drawToSprite(c, gameItem.id);
      // }
      //e.innerText = gameItem.type;

      gameDiv.appendChild(e);
      return e;
    }
  }, {
    key: "removeSprite",
    value: function removeSprite(gameItem) {
      var sprite = gameDiv.querySelector("[itemID=\"".concat(gameItem.id, "\"]")) || this.addSprite(gameItem); //sprite.style.left = 2000 + 'px';
    }
  }, {
    key: "render",
    value: function render(renderCount) {
      var _this2 = this;

      var gameDiv = document.querySelector('[game-canvas]');
      this.model.sprites.forEach(function (gameItem) {
        var sprite = gameDiv.querySelector("[itemID=\"".concat(gameItem.id, "\"]")) || _this2.addSprite(gameItem);

        sprite.style.left = gameItem.x + 'px';
        sprite.style.top = gameItem.y + 'px'; // Move animations on
        // todo - this isnt the place to do this, just a test
        // if(renderCount % 100 === 0) {
        //     this.spriteManager.update();
        // }
        //drawToSprite(canvas, gameItem)

        var c = sprite.querySelector('canvas'); // this is where the issue is with everything being tank sprites
        // this.frameCount++;
        // if (this.frameCount % 100 == 0) {

        _this2.spriteManager.update();

        _this2.spriteManager.drawToSprite(c, gameItem.id); // }
        // Temp hide dead sprites


        if (!gameItem.isAlive) {
          sprite.parentElement.removeChild(sprite);
          sprite.style.display = 'none';
        }
      });
      document.querySelector('[game-footer]').innerText = "LIVES: ".concat(this.model.lives);
      document.querySelector('[score-text]').innerText = "".concat(this.model.score);
      document.querySelector('[level-text]').innerText = "".concat(this.model.level);
    }
  }]);

  return Renderer;
}();

exports.Renderer = Renderer;
},{"./sprite-manager.js":"sprite-manager.js"}],"sound-manager.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SoundManager = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var SoundManager = /*#__PURE__*/function () {
  function SoundManager() {
    _classCallCheck(this, SoundManager);

    this.audio = new (window.AudioContext || window.webkitAudioContext)();
    this.alienSoundToggle = false;
    this.tune = [55, 50, 46, 65];
    this.currentNote = 0;
  }

  _createClass(SoundManager, [{
    key: "soundAlien",
    value: function soundAlien(frequency) {
      var osc = this.audio.createOscillator();
      osc.type = 'sawtooth';
      osc.frequency.value = frequency;
      this.alienSoundToggle = !this.alienSoundToggle;
      var vol = this.audio.createGain();
      vol.gain.value = 0.5;
      osc.connect(vol);
      vol.connect(this.audio.destination);
      osc.start();
      osc.stop(this.audio.currentTime + 0.1);
    }
  }, {
    key: "playNote",
    value: function playNote(perc) {
      this.soundAlien(this.tune[this.currentNote]);
      this.currentNote++;

      if (this.currentNote > this.tune.length - 1) {
        this.currentNote = 0;
      }
    }
  }]);

  return SoundManager;
}();

exports.SoundManager = SoundManager;
},{}],"game.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Game = void 0;

var _constants = require("./constants.js");

var _gameItem = require("./game-item.js");

var _gameModel = require("./game-model.js");

var _keyboardManager = require("./keyboard-manager.js");

var _renderer = require("./renderer.js");

var _soundManager = require("./sound-manager.js");

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } Object.defineProperty(subClass, "prototype", { value: Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }), writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Game = /*#__PURE__*/function (_EventTarget) {
  _inherits(Game, _EventTarget);

  var _super = _createSuper(Game);

  function Game() {
    _classCallCheck(this, Game);

    return _super.call(this);
  }

  _createClass(Game, [{
    key: "init",
    value: function init() {
      this.gameLoopsPerSecond = _constants.GAME_LOOPS_PER_SECOND;
      this.isPaused = true;
      this.frameCount = 0;
      this.renderCount = 0;
      this.gameInProgress = false;
      this.gameIsOver = false;
      this.keyboard = new _keyboardManager.KeyboardManager();
      this.model = new _gameModel.GameModel();
      this.interval = null;
      this.renderer = new _renderer.Renderer(this.model);
      this.soundManager = new _soundManager.SoundManager();
      this.renderCount = 0; // Initial game values

      this.model.level = 1;
      this.model.lives = _constants.NUM_LIVES;
      this.model.score = 0;
      this.enemyStaggerFrequency = _constants.ENEMY_STAGGER_FRAMES_MAX;
      this.maxActiveBombs = 1;
      this.enemyStartY = 50;
      this.initLevel(); // Fire missile

      document.addEventListener('keyup', this.keyUpHandler.bind(this));
      this.renderer.clear();
      this.renderer.init();
    }
  }, {
    key: "keyUpHandler",
    value: function keyUpHandler(event) {
      if (event.code == 'Space' && this.numActiveMissiles < _constants.MAX_ACTIVE_MISSILES) {
        this.fireMissile = true;
        this.numActiveMissiles++;
      }
    } // Just resets the game without clearing game model data

  }, {
    key: "initLevel",
    value: function initLevel() {
      var _this = this;

      this.model.sprites = [];
      this.renderer.clear(); // Space Invaders Specific Stuff

      this.currentEnemyRow = _constants.NUM_ENEMY_ROWS;
      this.numActiveMissiles = 0;
      this.numActiveBombs = 0; // Create Enemies

      for (var y = 0; y < _constants.NUM_ENEMY_ROWS; y++) {
        for (var x = 0; x < 11; x++) {
          var enemyType = 'enemy' + (y + 1);
          var enemyGameItem = new _gameItem.GameItem('enemy', (_constants.ENEMY_SIZE + _constants.ENEMY_X_SPACE) * x, (_constants.ENEMY_SIZE + _constants.ENEMY_Y_SPACE) * y + this.enemyStartY, _constants.ENEMY_SIZE, _constants.ENEMY_SIZE, {
            column: x,
            row: y,
            sprite: enemyType
          });
          enemyGameItem.sprite = enemyType;
          this.model.addSprite(enemyGameItem);
        }
      }

      var createShield = function createShield(xPos, yPos) {
        for (var _y = 0; _y < 5; _y++) {
          for (var _x = 0; _x < 6; _x++) {
            // const blockSize = 10;
            var blockWidth = 10;
            var blockHeight = 10;
            var skip = _y === 4 && _x > 1 && _x < 4;

            if (!skip) {
              _this.model.addSprite(new _gameItem.GameItem('shield', xPos + blockWidth * _x, yPos + blockHeight * _y, blockWidth, blockHeight));
            }
          }
        }
      }; // Create shields


      for (var x = 0; x < 4; x++) {
        createShield(50 + _constants.SHIELD_WIDTH * x + 50 * x, 400);
      }

      this.hasShields = true;
      this.removeShields = false;
      this.enemyDirection = 1;
      this.enemySpeed = _constants.ENEMY_SPEED;
      this.enemyStaggerFrequency = this.enemyStaggerFrequency = this.calculateEnemyStaggerFrequency(55);
      this.moveEnemyCount = 0; // Create Tank

      this.tank = this.model.addSprite(new _gameItem.GameItem('tank', this.model.gameWidth / 2, this.model.gameHeight - _constants.DEFAULT_SPRITE_SIZE, 24, 24));
      this.tankSpeed = _constants.TANK_SPEED;
      this.fireMissile = false;
    }
  }, {
    key: "levelComplete",
    value: function levelComplete() {
      // TODO - Add game over restart from scratch
      alert('LEVEL COMPLETE'); // this.stop();

      this.nextLevel(); // this.start();
    }
  }, {
    key: "gameOver",
    value: function gameOver() {
      console.log('GAME OVER');
      this.stop();
      this.dispatchEvent(new CustomEvent('GAME_OVER'));
    }
  }, {
    key: "start",
    value: function start() {
      var _this2 = this;

      if (this.gameInProgress) {
        return;
      }

      this.isPaused = false;
      this.gameInProgress = true;
      this.renderer.render();

      if (_constants.USE_ANIMATION_FRAME) {
        this.animationFrameGameLoop();
      } else {
        var intervalSpeed = Math.round(1000 / this.gameLoopsPerSecond);
        console.log('intervalSpeed', intervalSpeed);
        this.interval = setInterval(function () {
          _this2.gameLoop();
        }, intervalSpeed);
      }
    }
  }, {
    key: "stop",
    value: function stop() {
      this.isPaused = true;
      clearInterval(this.interval);
      this.gameInProgress = false;
    }
  }, {
    key: "restart",
    value: function restart() {
      // Cleanup
      //document.removeEventListener('keyup', this.keyUpHandler);
      this.init();
    }
  }, {
    key: "_calculateEnemyStaggerFrequency",
    value: function _calculateEnemyStaggerFrequency(numEnemies) {
      var percRemaining = numEnemies / 55;
      var percGone = 1 - percRemaining;
      var r = 1 - percGone * percGone;
      var range = _constants.ENEMY_STAGGER_FRAMES_MAX - _constants.ENEMY_STAGGER_FRAMES_MIN;
      var stagger = _constants.ENEMY_STAGGER_FRAMES_MIN + Math.ceil(r * range);
      console.log('New Enemy Stagger', numEnemies, stagger);
      return stagger;
    }
  }, {
    key: "calculateEnemyStaggerFrequency",
    value: function calculateEnemyStaggerFrequency(numEnemies) {
      // For now hard coding this but needs some kind of "hockey curve" formula getting much faster at the end
      var sectors = [[55, 1], [50, 0.95], [45, 0.9], [40, 0.85], [35, 0.8], [30, 0.75], [25, 0.7], [20, 0.6], [15, 0.5], [10, 0.4], [9, 0.35], [8, 0.3], [7, 0.25], [6, 0.2], [5, 0.15], [4, 0.1], [3, 0.07], [2, 0.05], [1, 0.01]]; // TODO - ES6/functional way of doing this

      var range = _constants.ENEMY_STAGGER_FRAMES_MAX - _constants.ENEMY_STAGGER_FRAMES_MIN;

      for (var i = 0; i < sectors.length; i++) {
        if (numEnemies >= sectors[i][0]) {
          var fraction = sectors[i][1];
          var stagger = _constants.ENEMY_STAGGER_FRAMES_MIN + Math.ceil(fraction * range); // console.log('new stagger ', numEnemies, fraction, stagger);

          return stagger;
        }
      }
    }
  }, {
    key: "speedUpEnemyMovement",
    value: function speedUpEnemyMovement() {
      this.enemyStaggerFrequency -= 2;
      console.log('New Stagger Frequency', this.enemyStaggerFrequency);

      if (this.enemyStaggerFrequency < 1) {
        this.enemyStaggerFrequency = 1;
      }
    }
  }, {
    key: "nextLevel",
    value: function nextLevel() {
      // Set things like speed, num Missiles etc here
      //this.speedUpEnemyMovement();
      //this.maxActiveBombs++;
      this.model.level += 1;
      this.enemyStartY += _constants.ENEMY_LEVEL_INCREASE_Y;
      this.initLevel();
    }
  }, {
    key: "animationFrameGameLoop",
    value: function animationFrameGameLoop() {
      var _this3 = this;

      if (this.gameInProgress) {
        requestAnimationFrame(function () {
          _this3.gameLoop();
        });
      }
    }
  }, {
    key: "gameLoop",
    value: function gameLoop() {
      var _this4 = this;

      var getLiveItems = function getLiveItems(type) {
        return _this4.model.sprites.filter(function (gameItem) {
          return gameItem.type === type && gameItem.isAlive;
        });
      };

      var enemiesHitWall = false; // Move all sprites before calculating anything

      var tankWallLeft = _constants.TANK_MARGIN;
      var tankWallRight = _constants.GAME_WIDTH - (_constants.TANK_MARGIN + this.tank.width); // Move Tank

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
      } // Create Missile


      if (this.fireMissile) {
        this.model.addSprite(new _gameItem.GameItem('missile', this.tank.x + this.tank.width * 0.5, this.tank.y, _constants.MISSILE_WIDTH, _constants.MISSILE_HEIGHT));
        this.fireMissile = false;
      } // Create Enemy Bomb


      if (this.fireBomb && this.firingEnemy && this.numActiveBombs < this.maxActiveBombs) {
        this.model.addSprite(new _gameItem.GameItem('bomb', this.firingEnemy.x + _constants.DEFAULT_SPRITE_SIZE * 0.5, this.firingEnemy.y + _constants.DEFAULT_SPRITE_SIZE * 0.5, 2, 20));
        this.fireBomb = false;
        this.numActiveBombs++;
        this.firingEnemy = null;
      }

      if (this.fireMysteryShip) {
        this.model.addSprite(new _gameItem.GameItem('mystery-ship', 0, 10, 40, 10));
        this.fireMysteryShip = false;
      }

      var enemies = getLiveItems('enemy');
      var shields = getLiveItems('shield');
      var mysteryShips = getLiveItems('mystery-ship');

      if (this.removeShields) {
        shields.forEach(function (shield) {
          return shield.isAlive = false;
        });
        this.removeShields = false;
        this.hasShields = false;
      }

      if (enemies.length === 0) {
        this.nextLevel();
      } // Move enemies
      // Staggered enemy movement by row


      if (this.moveEnemyCount % this.enemyStaggerFrequency === 0) {
        enemies.forEach(function (gameSprite) {
          //if (gameSprite.metadata.row === this.currentEnemyRow) {
          gameSprite.x += _this4.enemyDirection * _this4.enemySpeed; //}
          // TODO - We will need to keep track of min - max rows
          // if (gameSprite.metadata.row === 0) {
          // Check if hit right wall

          if (_this4.enemyDirection > 0 && gameSprite.x + gameSprite.width >= _this4.model.gameWidth) {
            enemiesHitWall = true;
          } // Check if hit left wall


          if (_this4.enemyDirection < 0 && gameSprite.x <= 0) {
            enemiesHitWall = true;
          } // }

        }); // change currentEnemyRow

        this.currentEnemyRow--;

        if (this.currentEnemyRow < 0) {
          this.currentEnemyRow = _constants.NUM_ENEMY_ROWS - 1;
        }

        this.moveEnemyCount = 0;
      } // Enemy Bombs
      // Find lowest enemies


      var lowestCols = [];
      enemies.forEach(function (gameSprite) {
        if (gameSprite.isAlive) {
          var col = gameSprite.metadata.column;
          lowestCols[col] = gameSprite;
        }
      }); // Fire Enemy bombs randomly

      if (Math.floor(Math.random() * 40) === 0) {
        this.fireBomb = true; // Pick random enemy

        this.firingEnemy = lowestCols[Math.floor(Math.random() * lowestCols.length - 1)];
      } // Random Mystery ship


      if (Math.floor(Math.random() * 100) === 0) {
        if (mysteryShips.length === 0) {
          this.fireMysteryShip = true;
        }
      }

      var missiles = getLiveItems('missile'); // Move missiles

      missiles.forEach(function (gameSprite) {
        gameSprite.y -= _constants.MISSILE_SPEED;
      });
      var bombs = getLiveItems('bomb'); // Move missiles

      bombs.forEach(function (gameSprite) {
        gameSprite.y += _constants.BOMB_SPEED;
      }); // Move mystery ship

      mysteryShips.forEach(function (gameSprite) {
        gameSprite.x += 1;
      }); // Game Logic

      if (enemiesHitWall) {
        this.enemyDirection *= -1;
        enemies.forEach(function (enemy) {
          enemy.y += _constants.ENEMY_SIZE;
        });
        enemiesHitWall = false;
      }

      var isHit = function isHit(a, b) {
        if (a.x < b.x + b.width && a.x + a.width > b.x) {
          if (a.y < b.y + b.height && a.y + a.height > b.y) {
            return true;
          }
        }
      }; // COLLISION DETECTION
      // Check if missile has hit an invader


      missiles.forEach(function (missile) {
        mysteryShips.forEach(function (mysteryShip) {
          if (_this4.numActiveMissiles && isHit(missile, mysteryShip)) {
            mysteryShip.isAlive = false;
            missile.isAlive = false;
            _this4.numActiveMissiles--;
            _this4.model.score += 1000;
          }
        });
        enemies.forEach(function (enemy) {
          if (_this4.numActiveMissiles && isHit(missile, enemy)) {
            enemy.isAlive = false;
            missile.isAlive = false;
            _this4.numActiveMissiles--;

            if (enemy.metadata.row > 3) {
              _this4.model.score += 10;
            } else if (enemy.metadata.row > 1) {
              _this4.model.score += 20;
            } else {
              _this4.model.score += 30;
            } // if ((enemies.length - 1) % 5 === 0) {
            //     console.log('SPEED UP!!!!!')
            //     this.speedUpEnemyMovement();
            // }


            _this4.enemyStaggerFrequency = _this4.calculateEnemyStaggerFrequency(enemies.length - 1);
          }
        });
        shields.forEach(function (shield) {
          if (_this4.numActiveMissiles && isHit(missile, shield)) {
            shield.isAlive = false; //enemy.isAlive = false;
            // shield.strength--;

            missile.isAlive = false;
            _this4.numActiveMissiles--; // if (shield.strength === 0) {
            // }
          }
        }); //Check missile has gone above screen

        if (missile.y < 0) {
          missile.isAlive = false;
          _this4.numActiveMissiles--;
        }
      }); // Check if bombs has hit tank

      bombs.forEach(function (bomb) {
        // TODO - create killBomb function so we dont repeat code
        if (isHit(bomb, _this4.tank)) {
          bomb.isAlive = false;
          _this4.numActiveBombs--;
          _this4.tank.lives--;
          _this4.model.lives--; // TODO - Tank Hit!!!
        }

        shields.forEach(function (shield) {
          if (isHit(bomb, shield)) {
            bomb.isAlive = false;
            shield.isAlive = false;
            _this4.numActiveBombs--;
          }
        }); //Check missile has gone below screen

        if (bomb.y > _this4.model.gameHeight) {
          bomb.isAlive = false;
          _this4.numActiveBombs--;
        }

        if (_this4.numActiveBombs < 0) {
          _this4.numActiveBombs = 0;
        }
      }); // Any enemies hit the ground/shields

      enemies.forEach(function (enemy) {
        if (_this4.hasShields && enemy.y >= _constants.ENEMY_SHIELD_LIMIT) {
          // Remove shields
          _this4.removeShields = true;
        }

        if (enemy.y >= _constants.ENEMY_GROUND_LIMIT) {
          _this4.gameIsOver = true;
        }
      }); // Any enemies hit the ground/shields

      mysteryShips.forEach(function (mysteryShip) {
        if (mysteryShip.x >= _constants.GAME_WIDTH) {
          mysteryShip.isAlive = false;
        }
      });
      this.renderer.render(); // Increase counters

      this.moveEnemyCount++;

      if (this.model.lives === 0) {
        this.gameIsOver = true;
      }

      if (this.gameIsOver) {
        this.gameOver();
      }

      if (_constants.USE_ANIMATION_FRAME) {
        if (!this.isPaused && this.gameInProgress) {
          this.animationFrameGameLoop();
        }
      } else {
        if (this.isPaused || !this.gameInProgress) {
          clearInterval(this.interval);
        }
      } // Clean up dead sprites


      this.model.removeDeadSprites();
      var soundGap = this.enemyStaggerFrequency * 0.8;
      console.log(soundGap);
      this.frameCount += 1;

      if (this.frameCount >= Math.max(soundGap, 20)) {
        //Play sound
        this.soundManager.playNote();
        this.frameCount = 0;
      }
    }
  }]);

  return Game;
}( /*#__PURE__*/_wrapNativeSuper(EventTarget));

exports.Game = Game;
window.game = new Game();
window.game.init();
},{"./constants.js":"constants.js","./game-item.js":"game-item.js","./game-model.js":"game-model.js","./keyboard-manager.js":"keyboard-manager.js","./renderer.js":"renderer.js","./sound-manager.js":"sound-manager.js"}],"../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "62907" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","game.js"], null)
//# sourceMappingURL=/game.7bbe06d5.js.map