import Graphics from "../assets/graphics.png";

var graphics = new Image();
graphics.src = Graphics;
var CURSOR_SPEED = 64;
var CURSOR_SPEED_Y = 48;
export default function(context, camera, map, ctrl) {
  this.x = 0;
  this.y = 48 * 5;
  this.z = 0;
  this.vx = 0;
  this.vy = 0;
  this.vz = 0;
  this.lastMove = 0;
  this.state = 0;
  this.lastStateChange = 0;
  this.stepsTaken = 0;
  this.equiptment = 0;
  this.face = 0;

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
        camera.y -= 8;
        return;
      }
      if (Date.now() - this.lastStateChange > 100) {
        if (ctrl.key1) {
          this.equiptment = 0;
        }
        if (ctrl.key2) {
          this.equiptment = 1;
        }
        if (ctrl.key3) {
          this.equiptment = 2;
        }
        if (ctrl.key4) {
          this.equiptment = 3;
        }
        if (ctrl.key5) {
          this.equiptment = 4;
        }
        if (ctrl.j) {
          console.log(this.equiptment);
          if (this.equiptment == 0) {
            var tile = map.getTileAtPosition(this.x, this.y - 2, this.z);
            console.log(tile);
            if (tile) {
              console.log("set tile");
              tile.type = 3;
              tile.solid = 0;
              this.state = 1;
              this.lastStateChange = Date.now();
              return;
            }
          } else {
            var tile = map.getTileAtPosition(this.x, this.y, this.z);
            if (tile) {
              switch (this.equiptment) {
                case 1:
                  tile.type = 1;
                  break;
                case 2:
                  tile.type = 2;
                  break;
                case 3:
                  tile.type = 4;
                  break;
                case 4:
                  tile.type = 5;
                  break;
              }
              tile.solid = 1;
              this.state = 1;
              this.lastStateChange = Date.now();
              return;
            }
          }
        }
        if (ctrl.s) {
          this.vz = 1;
          this.vx = 0;
          this.vy = 1;
          this.face = 3;
        } else if (ctrl.w) {
          this.vz = -1;
          this.vx = 0;
          this.vy = 1;
          this.face = 2;
        } else if (ctrl.d) {
          this.vz = 0;
          this.vx = 1;
          this.vy = 1;
          this.face = 1;
        } else if (ctrl.a) {
          this.vz = 0;
          this.vx = -1;
          this.vy = 1;
          this.face = 0;
        }
        if (ctrl.s || ctrl.w || ctrl.d || ctrl.a) {
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
      camera.x += (this.vx * CURSOR_SPEED) / 8;
      camera.z += (this.vz * CURSOR_SPEED) / 8;
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
      camera.x += (this.vx * CURSOR_SPEED) / 8;
      camera.z += (this.vz * CURSOR_SPEED) / 8;
      camera.y += CURSOR_SPEED_Y / 8;
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

    // if (Date.now() - this.lastMove > 200) {
    //     //console.log(Math.floor(this.x/64), Math.floor(this.y/48), Math.floor(this.z/64));
    //     var tile = map.getTileAtPosition(this.x, this.y, this.z);
    //     this.lastMove = Date.now();
    //     if (ctrl.s) {
    //         this.z += CURSOR_SPEED;
    //         camera.z += CURSOR_SPEED;
    //     }
    //     if (ctrl.w) {
    //         this.z -= CURSOR_SPEED;
    //         camera.z -= CURSOR_SPEED;
    //     }
    //     if (ctrl.d) {
    //         this.x += CURSOR_SPEED;
    //         camera.x += CURSOR_SPEED;
    //     }
    //     if (ctrl.a) {
    //         this.x -= CURSOR_SPEED;
    //         camera.x -= CURSOR_SPEED;
    //     }
    //     if (ctrl.r) {
    //         this.y += CURSOR_SPEED_Y;
    //         camera.y += CURSOR_SPEED_Y;
    //     }
    //     if (ctrl.f) {
    //         this.y -= CURSOR_SPEED_Y;
    //         camera.y -= CURSOR_SPEED_Y;
    //     }
    // }
  };
}
