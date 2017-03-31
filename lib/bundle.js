/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _vehicle = __webpack_require__(4);

var _vehicle2 = _interopRequireDefault(_vehicle);

var _dog = __webpack_require__(2);

var _dog2 = _interopRequireDefault(_dog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Game = function () {
  function Game(canvas) {
    var _this = this;

    _classCallCheck(this, Game);

    this.ctx = canvas.getContext('2d');
    this.dog = {};
    this.vehicles = [];
    this.won = false;
    this.lives = 3;
    this.livesElement = document.getElementById("lives");
    this.myVar = {};
    this.gamePaused = false;
    this.createVehicles = this.createVehicles.bind(this);
    this.setup = this.setup.bind(this);

    var reset = document.getElementById("reset-button");
    reset.addEventListener("click", function () {
      clearInterval(_this.myVar);
      _this.play();
    });

    var pause = document.getElementById("pause-button");
    pause.addEventListener("click", function () {
      if (_this.gamePaused) {
        _this.gamePaused = false;
        pause.innerHTML = "pause";
      } else {
        _this.gamePaused = true;
        pause.innerHTML = "resume";
      }
    });
  }

  _createClass(Game, [{
    key: 'setup',
    value: function setup() {
      this.dog = new _dog2.default(this);
      this.vehicles = [];
      this.lives = 3;
      document.getElementById("lives").innerHTML = "lives: 3";
      this.ctx.clearRect(0, 0, 1000, 600);
      this.createVehicles();
    }
  }, {
    key: 'play',
    value: function play() {
      var _this2 = this;

      this.setup();
      this.dog.move();
      this.myVar = window.setInterval(function () {
        _this2.ctx.clearRect(0, 0, 1000, 600);
        if (_this2.lives === 0) {
          _this2.lost = true;
          document.getElementById("lost-game").style.display = "block";
        }
        _this2.vehicles.forEach(function (vehicle) {
          vehicle.draw(_this2.ctx);
          if (_this2.checkCollision(vehicle)) {
            _this2.dog.resetPos();
            _this2.lives -= 1;
            _this2.livesElement.innerHTML = 'lives: ' + _this2.lives;
          }
          if (_this2.gamePaused === false) {
            vehicle.move();
          }
        });

        _this2.dog.draw(_this2.ctx);

        if (_this2.dog.pos.y < 70 && _this2.won === false) {
          _this2.won = true;
          document.getElementById("win-game").style.display = "block";
        }
      }, 33);
    }
  }, {
    key: 'checkCollision',
    value: function checkCollision(vehicle) {
      return this.dog.pos.x < vehicle.pos.x + vehicle.dim.w && vehicle.pos.x < this.dog.pos.x + this.dog.dim.w && this.dog.pos.y < vehicle.pos.y + vehicle.dim.h && vehicle.pos.y < this.dog.pos.y + this.dog.dim.h;
    }
  }, {
    key: 'createVehicles',
    value: function createVehicles() {
      var x = 900;
      for (var i = 0; i < 5; i++) {
        this.vehicles.push(new _vehicle2.default(x, 120, 6, "east"));
        var min = 100;
        var max = 300;
        x -= Math.floor(Math.random() * (max - min)) + min;
      }

      x = 900;
      for (var _i = 0; _i < 5; _i++) {
        this.vehicles.push(new _vehicle2.default(x, 185, 5, "east"));
        var _min = 100;
        var _max = 300;
        x -= Math.floor(Math.random() * (_max - _min)) + _min;
      }

      x = 20;
      for (var _i2 = 0; _i2 < 5; _i2++) {
        this.vehicles.push(new _vehicle2.default(x, 245, 3, "west"));
        var _min2 = 100;
        var _max2 = 300;
        x += Math.floor(Math.random() * (_max2 - _min2)) + _min2;
      }

      x = 20;
      for (var _i3 = 0; _i3 < 5; _i3++) {
        this.vehicles.push(new _vehicle2.default(x, 310, 6, "west"));
        var _min3 = 100;
        var _max3 = 300;
        x += Math.floor(Math.random() * (_max3 - _min3)) + _min3;
      }

      x = 900;
      for (var _i4 = 0; _i4 < 5; _i4++) {
        this.vehicles.push(new _vehicle2.default(x, 375, 5, "east"));
        var _min4 = 100;
        var _max4 = 300;
        x -= Math.floor(Math.random() * (_max4 - _min4)) + _min4;
      }

      x = 900;
      for (var _i5 = 0; _i5 < 5; _i5++) {
        this.vehicles.push(new _vehicle2.default(x, 440, 3, "east"));
        var _min5 = 100;
        var _max5 = 300;
        x -= Math.floor(Math.random() * (_max5 - _min5)) + _min5;
      }
    }
  }]);

  return Game;
}();

exports.default = Game;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Dog = function () {
  function Dog(game) {
    _classCallCheck(this, Dog);

    this.game = game;
    this.pos = { x: 500, y: 550 };
    this.dim = { w: 30, h: 30 };
    this.direction = "up";
    this.dog = new Image();
    this.index = 1;
    this.outOfBounds = this.outOfBounds.bind(this);
  }

  _createClass(Dog, [{
    key: "resetPos",
    value: function resetPos() {
      this.pos = { x: 500, y: 550 };
      this.direction = "up";
    }
  }, {
    key: "draw",
    value: function draw(ctx) {
      if (!this.game.gamePaused && !this.game.won && !this.game.lost) {
        if (this.direction === "up") {
          this.dog.src = "assets/images/dog-up-" + this.index + ".png";
        } else if (this.direction === "down") {
          this.dog.src = "assets/images/dog-down-" + this.index + ".png";
        } else if (this.direction === "left") {
          this.dog.src = "assets/images/dog-left-" + this.index + ".png";
        } else if (this.direction === "right") {
          this.dog.src = "assets/images/dog-right-" + this.index + ".png";
        }
      }
      ctx.drawImage(this.dog, this.pos.x, this.pos.y, this.dim.w, this.dim.h);
    }
  }, {
    key: "outOfBounds",
    value: function outOfBounds() {
      return this.pos.x < 0 || this.pos.x > 1000 || this.pos.y < 0 || this.pos.y > 600;
    }
  }, {
    key: "move",
    value: function move() {
      var _this = this;

      key('up', function () {
        _this.pos.y -= 30;
        if (_this.outOfBounds() || _this.game.gamePaused || _this.game.won || _this.game.lost) {
          _this.pos.y += 30;
        } else {
          _this.direction = "up";
          _this.index += 1;
        }
        if (_this.index > 3) {
          _this.index = 1;
        }
      });
      key('down', function () {
        _this.pos.y += 30;
        if (_this.outOfBounds() || _this.game.gamePaused || _this.game.won || _this.game.lost) {
          _this.pos.y -= 30;
        } else {
          _this.direction = "down";
          _this.index += 1;
        }
        if (_this.index > 3) {
          _this.index = 1;
        }
      });
      key('left', function () {
        _this.pos.x -= 30;
        if (_this.outOfBounds() || _this.game.gamePaused || _this.game.won || _this.game.lost) {
          _this.pos.x += 30;
        } else {
          _this.direction = "left";
          _this.index += 1;
        }
        if (_this.index > 3) {
          _this.index = 1;
        }
      });
      key('right', function () {
        _this.pos.x += 30;
        if (_this.outOfBounds() || _this.game.gamePaused || _this.game.won || _this.game.lost) {
          _this.pos.x -= 30;
        } else {
          _this.direction = "right";
          _this.index += 1;
        }
        if (_this.index > 3) {
          _this.index = 1;
        }
      });
    }
  }]);

  return Dog;
}();

exports.default = Dog;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _game = __webpack_require__(1);

var _game2 = _interopRequireDefault(_game);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

document.addEventListener("DOMContentLoaded", function (event) {
  var canvas = document.getElementById("dogger");

  var game = new _game2.default(canvas);
  var started = false;
  key('space', function () {
    if (!started) {
      document.getElementById("new-game").style.display = "none";
      game.play();
      started = true;
    }

    if (game.won) {
      document.getElementById("win-game").style.display = "none";
      clearInterval(game.myVar);
      game.won = false;
      game.play();
    }

    if (game.lost) {
      document.getElementById("lost-game").style.display = "none";
      clearInterval(game.myVar);
      game.lost = false;
      game.play();
    }
  });
});

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Vehicle = function () {
  function Vehicle(posX, posY, speed, direction) {
    _classCallCheck(this, Vehicle);

    this.pos = { x: posX, y: posY };
    this.dim = { w: 70, h: 40 };
    this.speed = speed;
    this.direction = direction;
    var carImageIndex = Math.floor(Math.random() * 5) + 1;
    this.car = new Image();
    if (this.direction === "east") {
      this.car.src = "assets/images/car-" + carImageIndex + ".png";
    } else {
      this.car.src = "assets/images/car-" + carImageIndex + "-reverse.png";
    }
  }

  _createClass(Vehicle, [{
    key: "draw",
    value: function draw(ctx) {
      ctx.drawImage(this.car, this.pos.x, this.pos.y, this.dim.w, this.dim.h);
    }
  }, {
    key: "move",
    value: function move() {
      if (this.direction === "east") {
        if (this.pos.x > 1070) {
          this.pos.x = -50;
        } else {
          this.pos.x += this.speed;
        }
      } else {
        if (this.pos.x < -70) {
          this.pos.x = 1050;
        } else {
          this.pos.x -= this.speed;
        }
      }
    }
  }]);

  return Vehicle;
}();

exports.default = Vehicle;

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map