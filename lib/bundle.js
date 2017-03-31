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
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MovingObject = function MovingObject() {
  _classCallCheck(this, MovingObject);
};

exports.default = MovingObject;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _moving_object = __webpack_require__(0);

var _moving_object2 = _interopRequireDefault(_moving_object);

var _vehicle = __webpack_require__(4);

var _dog = __webpack_require__(2);

var _dog2 = _interopRequireDefault(_dog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Game = function () {
  function Game(canvas) {
    _classCallCheck(this, Game);

    this.ctx = canvas.getContext('2d');
    this.dog = new _dog2.default();
    this.vehicles = [];

    this.createVehicles = this.createVehicles.bind(this);
    this.setup = this.setup.bind(this);
  }

  _createClass(Game, [{
    key: 'setup',
    value: function setup() {
      this.ctx.clearRect(0, 0, 1000, 600);
      this.createVehicles();
    }
  }, {
    key: 'play',
    value: function play() {
      var _this = this;

      this.setup();
      this.dog.move();
      var won = false;
      window.setInterval(function () {
        _this.ctx.clearRect(0, 0, 1000, 600);
        _this.vehicles.forEach(function (vehicle) {
          vehicle.draw(_this.ctx);
          if (_this.checkCollision(vehicle)) {
            _this.dog.resetPos();
          }
          vehicle.move();
        });
        _this.dog.draw(_this.ctx);
        if (_this.dog.pos.y < 70 && won === false) {
          alert('Congratulations, You Won!');
          won = true;
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
        this.vehicles.push(new _vehicle.Vehicle(x, 120, 6, "east"));
        var min = 100;
        var max = 300;
        x -= Math.floor(Math.random() * (max - min)) + min;
      }

      x = 900;
      for (var _i = 0; _i < 5; _i++) {
        this.vehicles.push(new _vehicle.Vehicle(x, 185, 5, "east"));
        var _min = 100;
        var _max = 300;
        x -= Math.floor(Math.random() * (_max - _min)) + _min;
      }

      x = 20;
      for (var _i2 = 0; _i2 < 5; _i2++) {
        this.vehicles.push(new _vehicle.Vehicle(x, 245, 3, "west"));
        var _min2 = 100;
        var _max2 = 300;
        x += Math.floor(Math.random() * (_max2 - _min2)) + _min2;
      }

      x = 20;
      for (var _i3 = 0; _i3 < 5; _i3++) {
        this.vehicles.push(new _vehicle.Vehicle(x, 310, 6, "west"));
        var _min3 = 100;
        var _max3 = 300;
        x += Math.floor(Math.random() * (_max3 - _min3)) + _min3;
      }

      x = 900;
      for (var _i4 = 0; _i4 < 5; _i4++) {
        this.vehicles.push(new _vehicle.Vehicle(x, 375, 5, "east"));
        var _min4 = 100;
        var _max4 = 300;
        x -= Math.floor(Math.random() * (_max4 - _min4)) + _min4;
      }

      x = 900;
      for (var _i5 = 0; _i5 < 5; _i5++) {
        this.vehicles.push(new _vehicle.Vehicle(x, 440, 3, "east"));
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

var _moving_object = __webpack_require__(0);

var _moving_object2 = _interopRequireDefault(_moving_object);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Dog = function (_MovingObject) {
  _inherits(Dog, _MovingObject);

  function Dog() {
    _classCallCheck(this, Dog);

    var _this = _possibleConstructorReturn(this, (Dog.__proto__ || Object.getPrototypeOf(Dog)).call(this));

    _this.pos = { x: 500, y: 550 };
    _this.dim = { w: 30, h: 30 };
    _this.direction = "up";
    _this.dog = new Image();
    _this.index = 1;
    _this.outOfBounds = _this.outOfBounds.bind(_this);
    return _this;
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
      if (this.direction === "up") {
        this.dog.src = "assets/images/dog-up-" + this.index + ".png";
      } else if (this.direction === "down") {
        this.dog.src = "assets/images/dog-down-" + this.index + ".png";
      } else if (this.direction === "left") {
        this.dog.src = "assets/images/dog-left-" + this.index + ".png";
      } else if (this.direction === "right") {
        this.dog.src = "assets/images/dog-right-" + this.index + ".png";
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
      var _this2 = this;

      key('up', function () {
        _this2.pos.y -= 30;
        if (_this2.outOfBounds()) {
          _this2.pos.y += 30;
        }
        _this2.direction = "up";
        _this2.index += 1;
        if (_this2.index > 3) {
          _this2.index = 1;
        }
      });
      key('down', function () {
        console.log(_this2.pos.y);
        _this2.pos.y += 30;
        console.log(_this2.outOfBounds());
        if (_this2.outOfBounds()) {
          _this2.pos.y -= 30;
        }
        _this2.direction = "down";
        _this2.index += 1;
        if (_this2.index > 3) {
          _this2.index = 1;
        }
      });
      key('left', function () {
        _this2.pos.x -= 30;
        if (_this2.outOfBounds()) {
          _this2.pos.x += 30;
        }
        _this2.direction = "left";
        _this2.index += 1;
        if (_this2.index > 3) {
          _this2.index = 1;
        }
      });
      key('right', function () {
        _this2.pos.x += 30;
        if (_this2.outOfBounds()) {
          _this2.pos.x -= 30;
        }
        _this2.direction = "right";
        _this2.index += 1;
        if (_this2.index > 3) {
          _this2.index = 1;
        }
      });
    }
  }]);

  return Dog;
}(_moving_object2.default);

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
  game.play();
});

// const canvas = document.getElementById("dogger");
// const ctx = canvas.getContext('2d');
//  ctx.beginPath();
//  ctx.rect(20, 40, 50, 50);
//  ctx.fillStyle = "#FF0000 ";
//  ctx.fill();
//  ctx.closePath();
//  key('a', function(){ alert('you pressed a!'); });

// const stage = new createjs.Stage("dogger");
// const circle = new createjs.Shape();
// circle.graphics.beginFill("DeepSkyBlue").drawCircle(0, 0, 30);
// circle.x = 100;
// circle.y = 100;
// stage.addChild(circle);
// stage.update();
//
// setInterval(() => {
//   circle.x = circle.x + 10;
//   if (circle.x > 1000) {
//     circle.x = 100;
//   }
//   stage.update();
// }, 33);
//
//
// key('a', function(){ alert('you pressed a!'); });

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Vehicle = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _moving_object = __webpack_require__(0);

var _moving_object2 = _interopRequireDefault(_moving_object);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Vehicle = exports.Vehicle = function (_MovingObject) {
  _inherits(Vehicle, _MovingObject);

  function Vehicle(posX, posY, speed, direction) {
    _classCallCheck(this, Vehicle);

    var _this = _possibleConstructorReturn(this, (Vehicle.__proto__ || Object.getPrototypeOf(Vehicle)).call(this));

    _this.pos = { x: posX, y: posY };
    _this.dim = { w: 70, h: 40 };
    _this.speed = speed;
    _this.direction = direction;
    var carImageIndex = Math.floor(Math.random() * 5) + 1;
    _this.car = new Image();
    if (_this.direction === "east") {
      _this.car.src = "assets/images/car-" + carImageIndex + ".png";
    } else {
      _this.car.src = "assets/images/car-" + carImageIndex + "-reverse.png";
    }
    return _this;
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
}(_moving_object2.default);

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map