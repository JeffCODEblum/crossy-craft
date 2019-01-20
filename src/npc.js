import Graphics from "../assets/graphics.png";

var graphics = new Image();
graphics.src = Graphics;
var CURSOR_SPEED = 64;
var CURSOR_SPEED_Y = 48;
export default function(context, camera, map) {
  this.x = 0;
  this.y = 48 * 5;
  this.z = 0;
  this.vx = 0;
  this.vy = 0;
  this.vz = 0;
  this.state = -1;
  this.lastStateChange = 0;
  this.stepsTaken = 0;
  this.face = 0;

  this.spawn = function() {
    var spawnTile = map.getSpawnTile();
    this.x = spawnTile.x;
    this.y = spawnTile.y + 64;
    this.z = spawnTile.z;
    this.state = 0;
    console.log("spawned at", this.x, this.y, this.z);
  };

  this.render = function() {
    var isoX = ((this.x - camera.x) / 64 - (this.z - camera.z) / 64) * 48 + 750;
    var isoY =
      ((this.x - camera.x) / 64 + (this.z - camera.z) / 64) * 24 +
      250 -
      (this.y - camera.y);
    switch (this.face) {
      case 0:
        context.drawImage(graphics, 1000, 188, 97, 98, isoX, isoY, 97, 98);
        break;
      case 1:
        context.drawImage(graphics, 1200, 50, 97, 98, isoX, isoY, 97, 98);
        break;
      case 2:
        context.drawImage(graphics, 1000, 50, 97, 98, isoX, isoY, 97, 98);
        break;
      case 3:
        context.drawImage(graphics, 1200, 188, 97, 98, isoX, isoY, 97, 98);
        break;
    }
  };

  this.update = function() {
    if (this.state == 0) {
      var tile = map.getTileAtPosition(this.x, this.y - CURSOR_SPEED_Y, this.z);
      while (!tile.solid) {
        this.y -= CURSOR_SPEED_Y;
        tile = map.getTileAtPosition(this.x, this.y - CURSOR_SPEED_Y, this.z);
      }
      this.state = 1;
    } else if (this.state == 1) {
      var tile = map.getTileAtPosition(this.x, this.y - 2, this.z);
      if (!tile.solid) {
        this.y -= 8;
        return;
      }
      if (Date.now() - this.lastStateChange > 100) {
        var rand = Math.floor(Math.random() * 8);
        if (rand == 0) {
          this.vz = 1;
          this.vx = 0;
          this.vy = 1;
          this.face = 3;
        } else if (rand == 1) {
          this.vz = -1;
          this.vx = 0;
          this.vy = 1;
          this.face = 2;
        } else if (rand == 2) {
          this.vz = 0;
          this.vx = 1;
          this.vy = 1;
          this.face = 1;
        } else if (rand == 3) {
          this.vz = 0;
          this.vx = -1;
          this.vy = 1;
          this.face = 0;
        }
        if (rand < 4) {
          var tile = map.getTileAtPosition(
            this.x + this.vx * CURSOR_SPEED,
            this.y,
            this.z + this.vz * CURSOR_SPEED
          );
          if (tile.solid) {
            tile = map.getTileAtPosition(
              tile.x,
              tile.y + CURSOR_SPEED_Y,
              tile.z
            );
            if (tile.solid) {
              this.vz = 0;
              this.vy = 0;
              this.vx = 0;
            } else {
              this.state = 3;
            }
          } else this.state = 2;
        }
      }
    } else if (this.state == 2) {
      this.x += (this.vx * CURSOR_SPEED) / 8;
      this.z += (this.vz * CURSOR_SPEED) / 8;
      this.y += this.vy * 8;
      this.stepsTaken++;
      if (this.stepsTaken == 4) {
        this.vy = -1;
      }
      if (this.stepsTaken == 8) {
        this.state = 1;
        this.stepsTaken = 0;
        this.lastStateChange = Date.now();
      }
    } else if (this.state == 3) {
      this.x += (this.vx * CURSOR_SPEED) / 8;
      this.z += (this.vz * CURSOR_SPEED) / 8;
      if (this.stepsTaken < 4) {
        this.y += (this.vy * CURSOR_SPEED_Y) / 2;
      } else if (this.stepsTaken >= 4) {
        this.y -= (this.vy * CURSOR_SPEED_Y) / 4;
      }
      this.stepsTaken++;
      if (this.stepsTaken == 8) {
        this.state = 1;
        this.stepsTaken = 0;
        this.lastStateChange = Date.now();
      }
    }
  };
}
