/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/graphics.png":
/*!*****************************!*\
  !*** ./assets/graphics.png ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"ae6a17f20db0f8524c791b77d56db1f0.png\";\n\n//# sourceURL=webpack:///./assets/graphics.png?");

/***/ }),

/***/ "./src/camera.js":
/*!***********************!*\
  !*** ./src/camera.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(ctrl) {\r\n  this.x = 0;\r\n  this.y = 48 * 5;\r\n  this.z = 0;\r\n  this.update = function() {\r\n    if (ctrl.up) {\r\n      this.z += 4;\r\n    }\r\n    if (ctrl.down) {\r\n      this.z -= 4;\r\n    }\r\n    if (ctrl.left) {\r\n      this.x -= 4;\r\n    }\r\n    if (ctrl.right) {\r\n      this.x += 4;\r\n    }\r\n  };\r\n});\r\n\n\n//# sourceURL=webpack:///./src/camera.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_graphics_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/graphics.png */ \"./assets/graphics.png\");\n/* harmony import */ var _assets_graphics_png__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_graphics_png__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _map_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map.js */ \"./src/map.js\");\n/* harmony import */ var _player_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player.js */ \"./src/player.js\");\n/* harmony import */ var _camera_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./camera.js */ \"./src/camera.js\");\n\r\n\r\n\r\n\r\n\r\nvar CURSOR_SPEED = 64;\r\nvar CURSOR_SPEED_Y = 48;\r\nvar canvas = document.getElementById(\"canvas\");\r\ncanvas.style.width = \"800px\";\r\ncanvas.style.height = \"600px\";\r\nvar context = canvas.getContext(\"2d\");\r\nvar graphics = new Image();\r\ngraphics.src = _assets_graphics_png__WEBPACK_IMPORTED_MODULE_0___default.a;\r\n\r\n//var cursor = new Cursor();\r\nvar ctrl = {\r\n  w: false,\r\n  a: false,\r\n  s: false,\r\n  d: false,\r\n  r: false,\r\n  f: false,\r\n  j: false,\r\n  up: false,\r\n  down: false,\r\n  left: false,\r\n  right: false,\r\n  key1: false,\r\n  key2: false,\r\n  key3: false,\r\n  key4: false,\r\n  key5: false,\r\n  key6: false,\r\n  key7: false,\r\n  key8: false\r\n};\r\nvar camera = new _camera_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"](ctrl);\r\nvar map = new _map_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](context, camera);\r\nvar player = new _player_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](context, camera, map, ctrl);\r\n\r\ndocument.addEventListener(\"keydown\", function(e) {\r\n  console.log(e.keyCode);\r\n  switch (e.keyCode) {\r\n    case 87:\r\n      ctrl.w = true;\r\n      break;\r\n    case 65:\r\n      ctrl.a = true;\r\n      break;\r\n    case 83:\r\n      ctrl.s = true;\r\n      break;\r\n    case 68:\r\n      ctrl.d = true;\r\n      break;\r\n    case 82:\r\n      ctrl.r = true;\r\n      break;\r\n    case 70:\r\n      ctrl.f = true;\r\n      break;\r\n    case 74:\r\n      ctrl.j = true;\r\n      break;\r\n    case 38:\r\n      ctrl.up = true;\r\n      break;\r\n    case 40:\r\n      ctrl.down = true;\r\n      break;\r\n    case 37:\r\n      ctrl.left = true;\r\n      break;\r\n    case 39:\r\n      ctrl.right = true;\r\n      break;\r\n    case 49:\r\n      ctrl.key1 = true;\r\n      break;\r\n    case 50:\r\n      ctrl.key2 = true;\r\n      break;\r\n    case 51:\r\n      ctrl.key3 = true;\r\n      break;\r\n    case 52:\r\n      ctrl.key4 = true;\r\n      break;\r\n    case 53:\r\n      ctrl.key5 = true;\r\n      break;\r\n    case 54:\r\n      ctrl.key6 = true;\r\n      break;\r\n    case 55:\r\n      ctrl.key7 = true;\r\n      break;\r\n    case 56:\r\n      ctrl.key8 = true;\r\n      break;\r\n  }\r\n});\r\n\r\ndocument.addEventListener(\"keyup\", function(e) {\r\n  switch (e.keyCode) {\r\n    case 87:\r\n      ctrl.w = false;\r\n      break;\r\n    case 65:\r\n      ctrl.a = false;\r\n      break;\r\n    case 83:\r\n      ctrl.s = false;\r\n      break;\r\n    case 68:\r\n      ctrl.d = false;\r\n      break;\r\n    case 82:\r\n      ctrl.r = false;\r\n      break;\r\n    case 70:\r\n      ctrl.f = false;\r\n      break;\r\n    case 74:\r\n      ctrl.j = false;\r\n      break;\r\n    case 38:\r\n      ctrl.up = false;\r\n      break;\r\n    case 40:\r\n      ctrl.down = false;\r\n      break;\r\n    case 37:\r\n      ctrl.left = false;\r\n      break;\r\n    case 39:\r\n      ctrl.right = false;\r\n      break;\r\n    case 49:\r\n      ctrl.key1 = false;\r\n      break;\r\n    case 50:\r\n      ctrl.key2 = false;\r\n      break;\r\n    case 51:\r\n      ctrl.key3 = false;\r\n      break;\r\n    case 52:\r\n      ctrl.key4 = false;\r\n      break;\r\n    case 53:\r\n      ctrl.key5 = false;\r\n      break;\r\n    case 54:\r\n      ctrl.key6 = false;\r\n      break;\r\n    case 55:\r\n      ctrl.key7 = false;\r\n      break;\r\n    case 56:\r\n      ctrl.key8 = false;\r\n      break;\r\n  }\r\n});\r\n\r\nfunction Render() {\r\n  var renderData = map.getRenderData();\r\n  //var drewCursor = false;\r\n  var drewPlayer = false;\r\n  for (var i = 0; i < renderData.length; i++) {\r\n    renderData[i].render();\r\n    //if (cursor.z == renderData[i].z && cursor.y == renderData[i].y && cursor.x == renderData[i].x) {\r\n    //cursor.render();\r\n    //drewCursor = true;\r\n    //}\r\n    if (\r\n      player.z == renderData[i].z &&\r\n      player.y == renderData[i].y &&\r\n      player.x == renderData[i].x\r\n    ) {\r\n      player.render();\r\n      drewPlayer = true;\r\n    }\r\n  }\r\n  //if (!drewCursor) cursor.render();\r\n  if (!drewPlayer) player.render();\r\n}\r\n\r\nfunction Run() {\r\n  player.update();\r\n  camera.update();\r\n  // cursor.update();\r\n  context.clearRect(0, 0, canvas.width, canvas.height);\r\n  context.fillStyle = \"#6565ff\";\r\n  context.fillRect(0, 0, 1600, 1200);\r\n  // map.render();\r\n  Render();\r\n\r\n  setTimeout(Run, 1000 / 60);\r\n}\r\nRun();\r\n\r\nfunction Cursor() {\r\n  this.x = 0;\r\n  this.y = 48 * 5;\r\n  this.z = 0;\r\n  this.lastMove = 0;\r\n  this.lastSelect = 0;\r\n\r\n  this.render = function() {\r\n    var isoX = ((this.x - camera.x) / 64 - (this.z - camera.z) / 64) * 48 + 750;\r\n    var isoY =\r\n      ((this.x - camera.x) / 64 + (this.z - camera.z) / 64) * 24 +\r\n      250 -\r\n      (this.y - camera.y);\r\n    context.drawImage(graphics, 0, 188, 97, 98, isoX, isoY, 97, 98);\r\n  };\r\n\r\n  this.update = function() {\r\n    var tile = map.getTileAtPosition(this.x, this.y - 2, this.z);\r\n    //while(!tile.solid) {\r\n    //if (!tile.solid) this.y -= CURSOR_SPEED_Y;\r\n    //tile = map.getTileAtPosition(this.x, this.y - 2, this.z);\r\n    //if (!tile)break;\r\n    //}\r\n    if (!tile.solid) this.y -= 8;\r\n\r\n    if (Date.now() - this.lastMove > 200) {\r\n      //console.log(Math.floor(this.x/64), Math.floor(this.y/48), Math.floor(this.z/64));\r\n      var tile = map.getTileAtPosition(this.x, this.y, this.z);\r\n      this.lastMove = Date.now();\r\n      if (ctrl.s) {\r\n        this.y = 48 * 6;\r\n        this.z += CURSOR_SPEED;\r\n      }\r\n      if (ctrl.w) {\r\n        this.y = 48 * 6;\r\n        this.z -= CURSOR_SPEED;\r\n      }\r\n      if (ctrl.d) {\r\n        this.y = 48 * 6;\r\n        this.x += CURSOR_SPEED;\r\n      }\r\n      if (ctrl.a) {\r\n        this.y = 48 * 6;\r\n        this.x -= CURSOR_SPEED;\r\n      }\r\n      if (ctrl.r) {\r\n        this.y += CURSOR_SPEED_Y;\r\n      }\r\n      if (ctrl.f) {\r\n        this.y -= CURSOR_SPEED_Y;\r\n      }\r\n    }\r\n\r\n    if (Date.now() - this.lastSelect > 200) {\r\n      var tile = map.getTileAtPosition(this.x, this.y - 2, this.z);\r\n      if (ctrl.j) {\r\n        if (tile) {\r\n          tile.type = 6;\r\n          tile.solid = false;\r\n        }\r\n        this.lastSelect = Date.now();\r\n      }\r\n    }\r\n  };\r\n}\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/map.js":
/*!********************!*\
  !*** ./src/map.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _tile_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tile.js */ \"./src/tile.js\");\n\r\nvar MAP_W = 128;\r\nvar MAP_D = 128;\r\nvar MAP_H = 5;\r\n// outline 0\r\n// grass 1\r\n// dirt 2\r\n// trunk 4\r\n// leaves 5\r\n// blank 6\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(context, camera) {\r\n  this.data = [];\r\n\r\n  this.getTileAtIndex = function(h, i, j) {\r\n    if (h < 0 || i < 0 || j < 0 || h >= MAP_H || i >= MAP_D || j >= MAP_W) {\r\n      return false;\r\n    }\r\n    return this.data[h][i][j];\r\n  };\r\n\r\n  this.automate = function(times, y, liveType, deadType) {\r\n    for (var h = 0; h < times; h++) {\r\n      for (var i = 0; i < MAP_D; i++) {\r\n        for (var j = 0; j < MAP_W; j++) {\r\n          if (\r\n            this.data[y][i][j].type == liveType ||\r\n            this.data[y][i][j].type == deadType\r\n          ) {\r\n            var north = this.getTileAtIndex(y, i, j - 1);\r\n            var south = this.getTileAtIndex(y, i, j + 1);\r\n            var east = this.getTileAtIndex(y, i - 1, j);\r\n            var west = this.getTileAtIndex(y, i + 1, j);\r\n            var northWest = this.getTileAtIndex(y, i + 1, j - 1);\r\n            var northEast = this.getTileAtIndex(y, i - 1, j - 1);\r\n            var southWest = this.getTileAtIndex(y, i + 1, j + 1);\r\n            var southEast = this.getTileAtIndex(y, i - 1, j + 1);\r\n            var liveCount = 0;\r\n            if (north != false && north.type == liveType) liveCount++;\r\n            if (south != false && south.type == liveType) liveCount++;\r\n            if (east != false && east.type == liveType) liveCount++;\r\n            if (west != false && west.type == liveType) liveCount++;\r\n            if (northWest != false && northWest.type == liveType) liveCount++;\r\n            if (northEast != false && northEast.type == liveType) liveCount++;\r\n            if (southWest != false && southWest.type == liveType) liveCount++;\r\n            if (southEast != false && southEast.type == liveType) liveCount++;\r\n            if (this.data[y][i][j].type == liveType) liveCount++;\r\n\r\n            if (liveCount >= 5) {\r\n              this.data[y][i][j].type = liveType;\r\n            } else {\r\n              this.data[y][i][j].type = deadType;\r\n            }\r\n          }\r\n        }\r\n      }\r\n    }\r\n  };\r\n\r\n  for (h = 0; h < MAP_H; h++) {\r\n    this.data.push([]);\r\n    for (var i = 0; i < MAP_D; i++) {\r\n      this.data[h].push([]);\r\n      for (var j = 0; j < MAP_W; j++) {\r\n        var tile = new _tile_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](context, camera);\r\n        tile.x = j * 64;\r\n        tile.z = i * 64;\r\n        tile.y = h * 48;\r\n        tile.type = 3;\r\n        this.data[h][i].push(tile);\r\n      }\r\n    }\r\n  }\r\n\r\n  // make dirt layer\r\n  for (var i = 0; i < MAP_D; i++) {\r\n    for (var j = 0; j < MAP_W; j++) {\r\n      this.data[0][i][j].type = 2;\r\n    }\r\n  }\r\n\r\n  // make grass layer\r\n  for (var i = 0; i < MAP_D; i++) {\r\n    for (var j = 0; j < MAP_W; j++) {\r\n      this.data[1][i][j].type = 1;\r\n    }\r\n  }\r\n\r\n  // make random elevation\r\n  for (var i = 0; i < MAP_D; i++) {\r\n    for (var j = 0; j < MAP_W; j++) {\r\n      var rand = Math.floor(Math.random() * 100);\r\n      if (rand < 48) {\r\n        this.data[2][i][j].type = 1;\r\n        //this.data[1][i][j].type = 2;\r\n      }\r\n    }\r\n  }\r\n  this.automate(10, 2, 1, 3);\r\n\r\n  for (var i = 0; i < MAP_D; i++) {\r\n    for (var j = 0; j < MAP_W; j++) {\r\n      if (this.data[2][i][j].type == 1) {\r\n        var rand = Math.floor(Math.random() * 100);\r\n        if (rand < 15) {\r\n          this.data[3][i][j].type = 1;\r\n          //this.data[1][i][j].type = 2;\r\n        }\r\n      }\r\n    }\r\n  }\r\n  // this.automate(7, 3, 1, 3);\r\n\r\n  for (var i = 0; i < MAP_D; i++) {\r\n    for (var j = 0; j < MAP_W; j++) {\r\n      if (this.data[1][i][j].type == 1) {\r\n        var rand = Math.floor(Math.random() * 100);\r\n        if (rand < 42) {\r\n          this.data[2][i][j].type = 4;\r\n        }\r\n      }\r\n    }\r\n  }\r\n  this.automate(2, 2, 4, 3);\r\n\r\n  for (var i = 0; i < MAP_D; i++) {\r\n    for (var j = 0; j < MAP_W; j++) {\r\n      if (this.data[2][i][j].type == 4) {\r\n        this.data[3][i][j].type = 5;\r\n        var rand = Math.floor(Math.random() * 100);\r\n        if (rand < 25) {\r\n          this.data[4][i][j].type = 5;\r\n        }\r\n      }\r\n    }\r\n  }\r\n\r\n  // for (h = 2; h < 3; h++) {\r\n  //   for (var i = 0; i < MAP_D; i++) {\r\n  //     for (var j = 0; j < MAP_W; j++) {\r\n  //       this.data[h][i][j].type = Math.floor(Math.random() * 6) == 0 ? 1 : 3;\r\n  //       this.data[h - 1][i][j].type =\r\n  //         this.data[h][i][j].type == 1 ? 2 : this.data[h - 1][i][j].type;\r\n  //     }\r\n  //   }\r\n  // }\r\n\r\n  // for (h = 1; h < 2; h++) {\r\n  //   for (var i = 0; i < MAP_D; i++) {\r\n  //     for (var j = 0; j < MAP_W; j++) {\r\n  //       if (\r\n  //         this.data[h][i][j].type == 1 &&\r\n  //         Math.floor(Math.random() * 6) == 0\r\n  //       ) {\r\n  //         this.data[h + 1][i][j].type = 4;\r\n  //         this.data[h + 1][i][j].solid = true;\r\n  //         this.data[h + 2][i][j].type = 5;\r\n  //         this.data[h + 2][i][j].solid = true;\r\n  //       }\r\n  //       //this.data[h][i][j].type = 5;\r\n  //     }\r\n  //   }\r\n  // }\r\n\r\n  for (var h = 0; h < this.data.length; h++) {\r\n    for (var i = 0; i < this.data[h].length; i++) {\r\n      for (var j = 0; j < this.data[h][i].length; j++) {\r\n        var tile = this.data[h][i][j];\r\n        if (tile.type == 1) {\r\n          var underTile = this.getTileAtIndex(h - 1, i, j);\r\n          if (underTile != false) {\r\n            underTile.type = 2;\r\n            underTile.solid = true;\r\n          }\r\n        }\r\n\r\n        if (\r\n          tile.type == 0 ||\r\n          tile.type == 1 ||\r\n          tile.type == 2 ||\r\n          tile.type == 4 ||\r\n          tile.type == 5\r\n        ) {\r\n          tile.solid = true;\r\n        }\r\n        // else tile.solid = false;\r\n      }\r\n    }\r\n  }\r\n\r\n  this.render = function() {\r\n    for (var h = 0; h < this.data.length; h++) {\r\n      for (var i = 0; i < this.data[h].length; i++) {\r\n        for (var j = 0; j < this.data[h][i].length; j++) {\r\n          this.data[h][i][j].render();\r\n        }\r\n      }\r\n    }\r\n  };\r\n\r\n  this.getTileAtPosition = function(x, y, z) {\r\n    if (\r\n      x < 0 ||\r\n      y < 0 ||\r\n      z < 0 ||\r\n      x > (MAP_W - 1) * 64 ||\r\n      z > (MAP_D - 1) * 64 ||\r\n      y > (MAP_H - 1) * 48\r\n    )\r\n      return false;\r\n    return this.data[Math.floor(y / 48)][Math.floor(z / 64)][\r\n      Math.floor(x / 64)\r\n    ];\r\n  };\r\n\r\n  this.getRenderData = function() {\r\n    var flattenedData = [];\r\n    for (var h = 0; h < this.data.length; h++) {\r\n      //y\r\n      for (\r\n        var i = Math.floor(camera.z / 64) - 8;\r\n        i < Math.floor(camera.z / 64) + 8;\r\n        i++\r\n      ) {\r\n        // z\r\n        for (\r\n          var j = Math.floor(camera.x / 64) - 8;\r\n          j < Math.floor(camera.x / 64) + 8;\r\n          j++\r\n        ) {\r\n          // x\r\n          var target = this.getTileAtIndex(h, i, j);\r\n          if (target != false) {\r\n            flattenedData.push(target);\r\n          }\r\n        }\r\n      }\r\n    }\r\n    return flattenedData;\r\n  };\r\n});\r\n\n\n//# sourceURL=webpack:///./src/map.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_graphics_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/graphics.png */ \"./assets/graphics.png\");\n/* harmony import */ var _assets_graphics_png__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_graphics_png__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\r\nvar graphics = new Image();\r\ngraphics.src = _assets_graphics_png__WEBPACK_IMPORTED_MODULE_0___default.a;\r\nvar CURSOR_SPEED = 64;\r\nvar CURSOR_SPEED_Y = 48;\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(context, camera, map, ctrl) {\r\n  this.x = 0;\r\n  this.y = 48 * 5;\r\n  this.z = 0;\r\n  this.vx = 0;\r\n  this.vy = 0;\r\n  this.vz = 0;\r\n  this.lastMove = 0;\r\n  this.state = 0;\r\n  this.lastStateChange = 0;\r\n  this.stepsTaken = 0;\r\n  this.equiptment = 0;\r\n  this.face = 0;\r\n\r\n  this.render = function() {\r\n    var isoX = ((this.x - camera.x) / 64 - (this.z - camera.z) / 64) * 48 + 750;\r\n    var isoY =\r\n      ((this.x - camera.x) / 64 + (this.z - camera.z) / 64) * 24 +\r\n      250 -\r\n      (this.y - camera.y);\r\n    switch (this.face) {\r\n      case 0:\r\n        context.drawImage(graphics, 1000, 188, 97, 98, isoX, isoY, 97, 98);\r\n        break;\r\n      case 1:\r\n        context.drawImage(graphics, 1200, 50, 97, 98, isoX, isoY, 97, 98);\r\n        break;\r\n      case 2:\r\n        context.drawImage(graphics, 1000, 50, 97, 98, isoX, isoY, 97, 98);\r\n        break;\r\n      case 3:\r\n        context.drawImage(graphics, 1200, 188, 97, 98, isoX, isoY, 97, 98);\r\n        break;\r\n    }\r\n  };\r\n\r\n  this.update = function() {\r\n    if (this.state == 0) {\r\n      var tile = map.getTileAtPosition(this.x, this.y - CURSOR_SPEED_Y, this.z);\r\n      while (!tile.solid) {\r\n        this.y -= CURSOR_SPEED_Y;\r\n        tile = map.getTileAtPosition(this.x, this.y - CURSOR_SPEED_Y, this.z);\r\n      }\r\n      this.state = 1;\r\n    } else if (this.state == 1) {\r\n      var tile = map.getTileAtPosition(this.x, this.y - 2, this.z);\r\n      if (!tile.solid) {\r\n        this.y -= 8;\r\n        camera.y -= 8;\r\n        return;\r\n      }\r\n      if (Date.now() - this.lastStateChange > 100) {\r\n        if (ctrl.key1) {\r\n          this.equiptment = 0;\r\n        }\r\n        if (ctrl.key2) {\r\n          this.equiptment = 1;\r\n        }\r\n        if (ctrl.key3) {\r\n          this.equiptment = 2;\r\n        }\r\n        if (ctrl.key4) {\r\n          this.equiptment = 3;\r\n        }\r\n        if (ctrl.key5) {\r\n          this.equiptment = 4;\r\n        }\r\n        if (ctrl.j) {\r\n          console.log(this.equiptment);\r\n          if (this.equiptment == 0) {\r\n            var tile = map.getTileAtPosition(this.x, this.y - 2, this.z);\r\n            console.log(tile);\r\n            if (tile) {\r\n              console.log(\"set tile\");\r\n              tile.type = 3;\r\n              tile.solid = 0;\r\n              this.state = 1;\r\n              this.lastStateChange = Date.now();\r\n              return;\r\n            }\r\n          } else {\r\n            var tile = map.getTileAtPosition(this.x, this.y, this.z);\r\n            if (tile) {\r\n              switch (this.equiptment) {\r\n                case 1:\r\n                  tile.type = 1;\r\n                  break;\r\n                case 2:\r\n                  tile.type = 2;\r\n                  break;\r\n                case 3:\r\n                  tile.type = 4;\r\n                  break;\r\n                case 4:\r\n                  tile.type = 5;\r\n                  break;\r\n              }\r\n              tile.solid = 1;\r\n              this.state = 1;\r\n              this.lastStateChange = Date.now();\r\n              return;\r\n            }\r\n          }\r\n        }\r\n        if (ctrl.s) {\r\n          this.vz = 1;\r\n          this.vx = 0;\r\n          this.vy = 1;\r\n          this.face = 3;\r\n        } else if (ctrl.w) {\r\n          this.vz = -1;\r\n          this.vx = 0;\r\n          this.vy = 1;\r\n          this.face = 2;\r\n        } else if (ctrl.d) {\r\n          this.vz = 0;\r\n          this.vx = 1;\r\n          this.vy = 1;\r\n          this.face = 1;\r\n        } else if (ctrl.a) {\r\n          this.vz = 0;\r\n          this.vx = -1;\r\n          this.vy = 1;\r\n          this.face = 0;\r\n        }\r\n        if (ctrl.s || ctrl.w || ctrl.d || ctrl.a) {\r\n          var tile = map.getTileAtPosition(\r\n            this.x + this.vx * CURSOR_SPEED,\r\n            this.y,\r\n            this.z + this.vz * CURSOR_SPEED\r\n          );\r\n          if (tile.solid) {\r\n            tile = map.getTileAtPosition(\r\n              tile.x,\r\n              tile.y + CURSOR_SPEED_Y,\r\n              tile.z\r\n            );\r\n            if (tile.solid) {\r\n              this.vz = 0;\r\n              this.vy = 0;\r\n              this.vx = 0;\r\n            } else {\r\n              this.state = 3;\r\n            }\r\n          } else this.state = 2;\r\n        }\r\n      }\r\n    } else if (this.state == 2) {\r\n      this.x += (this.vx * CURSOR_SPEED) / 8;\r\n      this.z += (this.vz * CURSOR_SPEED) / 8;\r\n      camera.x += (this.vx * CURSOR_SPEED) / 8;\r\n      camera.z += (this.vz * CURSOR_SPEED) / 8;\r\n      this.y += this.vy * 8;\r\n      this.stepsTaken++;\r\n      if (this.stepsTaken == 4) {\r\n        this.vy = -1;\r\n      }\r\n      if (this.stepsTaken == 8) {\r\n        this.state = 1;\r\n        this.stepsTaken = 0;\r\n        this.lastStateChange = Date.now();\r\n      }\r\n    } else if (this.state == 3) {\r\n      this.x += (this.vx * CURSOR_SPEED) / 8;\r\n      this.z += (this.vz * CURSOR_SPEED) / 8;\r\n      camera.x += (this.vx * CURSOR_SPEED) / 8;\r\n      camera.z += (this.vz * CURSOR_SPEED) / 8;\r\n      camera.y += CURSOR_SPEED_Y / 8;\r\n      if (this.stepsTaken < 4) {\r\n        this.y += (this.vy * CURSOR_SPEED_Y) / 2;\r\n      } else if (this.stepsTaken >= 4) {\r\n        this.y -= (this.vy * CURSOR_SPEED_Y) / 4;\r\n      }\r\n      this.stepsTaken++;\r\n      if (this.stepsTaken == 8) {\r\n        this.state = 1;\r\n        this.stepsTaken = 0;\r\n        this.lastStateChange = Date.now();\r\n      }\r\n    }\r\n\r\n    // if (Date.now() - this.lastMove > 200) {\r\n    //     //console.log(Math.floor(this.x/64), Math.floor(this.y/48), Math.floor(this.z/64));\r\n    //     var tile = map.getTileAtPosition(this.x, this.y, this.z);\r\n    //     this.lastMove = Date.now();\r\n    //     if (ctrl.s) {\r\n    //         this.z += CURSOR_SPEED;\r\n    //         camera.z += CURSOR_SPEED;\r\n    //     }\r\n    //     if (ctrl.w) {\r\n    //         this.z -= CURSOR_SPEED;\r\n    //         camera.z -= CURSOR_SPEED;\r\n    //     }\r\n    //     if (ctrl.d) {\r\n    //         this.x += CURSOR_SPEED;\r\n    //         camera.x += CURSOR_SPEED;\r\n    //     }\r\n    //     if (ctrl.a) {\r\n    //         this.x -= CURSOR_SPEED;\r\n    //         camera.x -= CURSOR_SPEED;\r\n    //     }\r\n    //     if (ctrl.r) {\r\n    //         this.y += CURSOR_SPEED_Y;\r\n    //         camera.y += CURSOR_SPEED_Y;\r\n    //     }\r\n    //     if (ctrl.f) {\r\n    //         this.y -= CURSOR_SPEED_Y;\r\n    //         camera.y -= CURSOR_SPEED_Y;\r\n    //     }\r\n    // }\r\n  };\r\n});\r\n\n\n//# sourceURL=webpack:///./src/player.js?");

/***/ }),

/***/ "./src/tile.js":
/*!*********************!*\
  !*** ./src/tile.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_graphics_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/graphics.png */ \"./assets/graphics.png\");\n/* harmony import */ var _assets_graphics_png__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_graphics_png__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\r\nvar graphics = new Image();\r\ngraphics.src = _assets_graphics_png__WEBPACK_IMPORTED_MODULE_0___default.a;\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(context, camera) {\r\n  this.x = 0;\r\n  this.y = 48 * 6;\r\n  this.z = 0;\r\n  this.type = 0;\r\n  this.solid = false;\r\n\r\n  this.render = function() {\r\n    var isoX = ((this.x - camera.x) / 64 - (this.z - camera.z) / 64) * 48 + 750;\r\n    var isoY =\r\n      ((this.x - camera.x) / 64 + (this.z - camera.z) / 64) * 24 +\r\n      250 -\r\n      (this.y - camera.y);\r\n    // outline\r\n    if (this.type == 0)\r\n      context.drawImage(graphics, 0, 188, 97, 98, isoX, isoY, 97, 98);\r\n    // grass\r\n    if (this.type == 1)\r\n      context.drawImage(graphics, 200, 188, 97, 98, isoX, isoY, 97, 98);\r\n    // dirt\r\n    if (this.type == 2)\r\n      context.drawImage(graphics, 400, 188, 97, 98, isoX, isoY, 97, 98);\r\n    // trunk\r\n    if (this.type == 4)\r\n      context.drawImage(graphics, 600, 188, 97, 98, isoX, isoY, 97, 98);\r\n    // leaves\r\n    if (this.type == 5)\r\n      context.drawImage(graphics, 800, 188, 97, 98, isoX, isoY, 97, 98);\r\n    // blank\r\n  };\r\n});\r\n\n\n//# sourceURL=webpack:///./src/tile.js?");

/***/ })

/******/ });