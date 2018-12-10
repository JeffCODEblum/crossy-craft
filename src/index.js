import Graphics from "../assets/graphics.png";
import Map from "./map.js";
import Player from "./player.js";

var CURSOR_SPEED = 64;
var CURSOR_SPEED_Y = 48;
var canvas = document.getElementById("canvas");
canvas.style.width = "800px";
canvas.style.height = "600px";
var context = canvas.getContext("2d");
var graphics = new Image();
graphics.src = Graphics;

//var cursor = new Cursor();

var camera = new Camera();
var map = new Map(context, camera);
var ctrl = {
  w: false,
  a: false,
  s: false,
  d: false,
  r: false,
  f: false,
  j: false,
  up: false,
  down: false,
  left: false,
  right: false,
  key1: false,
  key2: false,
  key3: false,
  key4: false,
  key5: false,
  key6: false,
  key7: false,
  key8: false
};
var player = new Player(context, camera, map, ctrl);

document.addEventListener("keydown", function(e) {
  console.log(e.keyCode);
  switch (e.keyCode) {
    case 87:
      ctrl.w = true;
      break;
    case 65:
      ctrl.a = true;
      break;
    case 83:
      ctrl.s = true;
      break;
    case 68:
      ctrl.d = true;
      break;
    case 82:
      ctrl.r = true;
      break;
    case 70:
      ctrl.f = true;
      break;
    case 74:
      ctrl.j = true;
      break;
    case 38:
      ctrl.up = true;
      break;
    case 40:
      ctrl.down = true;
      break;
    case 37:
      ctrl.left = true;
      break;
    case 39:
      ctrl.right = true;
      break;
    case 49:
      ctrl.key1 = true;
      break;
    case 50:
      ctrl.key2 = true;
      break;
    case 51:
      ctrl.key3 = true;
      break;
    case 52:
      ctrl.key4 = true;
      break;
    case 53:
      ctrl.key5 = true;
      break;
    case 54:
      ctrl.key6 = true;
      break;
    case 55:
      ctrl.key7 = true;
      break;
    case 56:
      ctrl.key8 = true;
      break;
  }
});

document.addEventListener("keyup", function(e) {
  switch (e.keyCode) {
    case 87:
      ctrl.w = false;
      break;
    case 65:
      ctrl.a = false;
      break;
    case 83:
      ctrl.s = false;
      break;
    case 68:
      ctrl.d = false;
      break;
    case 82:
      ctrl.r = false;
      break;
    case 70:
      ctrl.f = false;
      break;
    case 74:
      ctrl.j = false;
      break;
    case 38:
      ctrl.up = false;
      break;
    case 40:
      ctrl.down = false;
      break;
    case 37:
      ctrl.left = false;
      break;
    case 39:
      ctrl.right = false;
      break;
    case 49:
      ctrl.key1 = false;
      break;
    case 50:
      ctrl.key2 = false;
      break;
    case 51:
      ctrl.key3 = false;
      break;
    case 52:
      ctrl.key4 = false;
      break;
    case 53:
      ctrl.key5 = false;
      break;
    case 54:
      ctrl.key6 = false;
      break;
    case 55:
      ctrl.key7 = false;
      break;
    case 56:
      ctrl.key8 = false;
      break;
  }
});

function Render() {
  var renderData = map.getRenderData();
  //var drewCursor = false;
  var drewPlayer = false;
  for (var i = 0; i < renderData.length; i++) {
    renderData[i].render();
    //if (cursor.z == renderData[i].z && cursor.y == renderData[i].y && cursor.x == renderData[i].x) {
    //cursor.render();
    //drewCursor = true;
    //}
    if (
      player.z == renderData[i].z &&
      player.y == renderData[i].y &&
      player.x == renderData[i].x
    ) {
      player.render();
      drewPlayer = true;
    }
  }
  //if (!drewCursor) cursor.render();
  if (!drewPlayer) player.render();
}

function Run() {
  player.update();
  camera.update();
  // cursor.update();
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.fillStyle = "#6565ff";
  context.fillRect(0, 0, 1600, 1200);
  // map.render();
  Render();

  setTimeout(Run, 1000 / 60);
}
Run();

function Cursor() {
  this.x = 0;
  this.y = 48 * 5;
  this.z = 0;
  this.lastMove = 0;
  this.lastSelect = 0;

  this.render = function() {
    var isoX = ((this.x - camera.x) / 64 - (this.z - camera.z) / 64) * 48 + 750;
    var isoY =
      ((this.x - camera.x) / 64 + (this.z - camera.z) / 64) * 24 +
      250 -
      (this.y - camera.y);
    context.drawImage(graphics, 0, 188, 97, 98, isoX, isoY, 97, 98);
  };

  this.update = function() {
    var tile = map.getTileAtPosition(this.x, this.y - 2, this.z);
    //while(!tile.solid) {
    //if (!tile.solid) this.y -= CURSOR_SPEED_Y;
    //tile = map.getTileAtPosition(this.x, this.y - 2, this.z);
    //if (!tile)break;
    //}
    if (!tile.solid) this.y -= 8;

    if (Date.now() - this.lastMove > 200) {
      //console.log(Math.floor(this.x/64), Math.floor(this.y/48), Math.floor(this.z/64));
      var tile = map.getTileAtPosition(this.x, this.y, this.z);
      this.lastMove = Date.now();
      if (ctrl.s) {
        this.y = 48 * 6;
        this.z += CURSOR_SPEED;
      }
      if (ctrl.w) {
        this.y = 48 * 6;
        this.z -= CURSOR_SPEED;
      }
      if (ctrl.d) {
        this.y = 48 * 6;
        this.x += CURSOR_SPEED;
      }
      if (ctrl.a) {
        this.y = 48 * 6;
        this.x -= CURSOR_SPEED;
      }
      if (ctrl.r) {
        this.y += CURSOR_SPEED_Y;
      }
      if (ctrl.f) {
        this.y -= CURSOR_SPEED_Y;
      }
    }

    if (Date.now() - this.lastSelect > 200) {
      var tile = map.getTileAtPosition(this.x, this.y - 2, this.z);
      if (ctrl.j) {
        if (tile) {
          tile.type = 6;
          tile.solid = false;
        }
        this.lastSelect = Date.now();
      }
    }
  };
}

function Camera() {
  this.x = 0;
  this.y = 48 * 5;
  this.z = 0;
  this.update = function() {
    if (ctrl.up) {
      this.z += 4;
    }
    if (ctrl.down) {
      this.z -= 4;
    }
    if (ctrl.left) {
      this.x -= 4;
    }
    if (ctrl.right) {
      this.x += 4;
    }
  };
}
