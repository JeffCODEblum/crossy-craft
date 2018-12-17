import Tile from "./tile.js";
var MAP_W = 128;
var MAP_D = 128;
var MAP_H = 5;
// outline 0
// grass 1
// dirt 2
// trunk 4
// leaves 5
// blank 6

export default function(context, camera) {
  this.data = [];

  this.getTileAtIndex = function(h, i, j) {
    if (h < 0 || i < 0 || j < 0 || h >= MAP_H || i >= MAP_D || j >= MAP_W) {
      return false;
    }
    return this.data[h][i][j];
  };

  this.automate = function(times, y, liveType, deadType) {
    for (var h = 0; h < times; h++) {
      for (var i = 0; i < MAP_D; i++) {
        for (var j = 0; j < MAP_W; j++) {
          if (
            this.data[y][i][j].type == liveType ||
            this.data[y][i][j].type == deadType
          ) {
            var north = this.getTileAtIndex(y, i, j - 1);
            var south = this.getTileAtIndex(y, i, j + 1);
            var east = this.getTileAtIndex(y, i - 1, j);
            var west = this.getTileAtIndex(y, i + 1, j);
            var northWest = this.getTileAtIndex(y, i + 1, j - 1);
            var northEast = this.getTileAtIndex(y, i - 1, j - 1);
            var southWest = this.getTileAtIndex(y, i + 1, j + 1);
            var southEast = this.getTileAtIndex(y, i - 1, j + 1);
            var liveCount = 0;
            if (north != false && north.type == liveType) liveCount++;
            if (south != false && south.type == liveType) liveCount++;
            if (east != false && east.type == liveType) liveCount++;
            if (west != false && west.type == liveType) liveCount++;
            if (northWest != false && northWest.type == liveType) liveCount++;
            if (northEast != false && northEast.type == liveType) liveCount++;
            if (southWest != false && southWest.type == liveType) liveCount++;
            if (southEast != false && southEast.type == liveType) liveCount++;
            if (this.data[y][i][j].type == liveType) liveCount++;

            if (liveCount >= 5) {
              this.data[y][i][j].type = liveType;
            } else {
              this.data[y][i][j].type = deadType;
            }
          }
        }
      }
    }
  };

  for (h = 0; h < MAP_H; h++) {
    this.data.push([]);
    for (var i = 0; i < MAP_D; i++) {
      this.data[h].push([]);
      for (var j = 0; j < MAP_W; j++) {
        var tile = new Tile(context, camera);
        tile.x = j * 64;
        tile.z = i * 64;
        tile.y = h * 48;
        tile.type = 3;
        this.data[h][i].push(tile);
      }
    }
  }

  // make dirt layer
  for (var i = 0; i < MAP_D; i++) {
    for (var j = 0; j < MAP_W; j++) {
      this.data[0][i][j].type = 2;
    }
  }

  // make grass layer
  for (var i = 0; i < MAP_D; i++) {
    for (var j = 0; j < MAP_W; j++) {
      this.data[1][i][j].type = 1;
    }
  }

  // make random water
  for (var i = 0; i < MAP_D; i++) {
    for (var j = 0; j < MAP_W; j++) {
      var rand = Math.floor(Math.random() * 100);
      if (rand < 48) {
        this.data[1][i][j].type = 8;
        //this.data[1][i][j].type = 2;
      }
    }
  }
  this.automate(10, 1, 8, 1);

  // make random elevation
  for (var i = 0; i < MAP_D; i++) {
    for (var j = 0; j < MAP_W; j++) {
      var rand = Math.floor(Math.random() * 100);
      if (rand < 48) {
        this.data[2][i][j].type = 1;
        //this.data[1][i][j].type = 2;
      }
    }
  }
  this.automate(10, 2, 1, 3);

  for (var i = 0; i < MAP_D; i++) {
    for (var j = 0; j < MAP_W; j++) {
      if (this.data[2][i][j].type == 1) {
        var rand = Math.floor(Math.random() * 100);
        if (rand < 15) {
          this.data[3][i][j].type = 1;
          //this.data[1][i][j].type = 2;
        }
      }
    }
  }
  // this.automate(7, 3, 1, 3);

  for (var i = 0; i < MAP_D; i++) {
    for (var j = 0; j < MAP_W; j++) {
      if (this.data[1][i][j].type == 1) {
        var rand = Math.floor(Math.random() * 100);
        if (rand < 42) {
          this.data[2][i][j].type = 4;
        }
      }
    }
  }
  this.automate(2, 2, 4, 3);

  for (var i = 0; i < MAP_D; i++) {
    for (var j = 0; j < MAP_W; j++) {
      if (this.data[2][i][j].type == 4) {
        this.data[3][i][j].type = 5;
        var rand = Math.floor(Math.random() * 100);
        if (rand < 25) {
          this.data[4][i][j].type = 5;
        }
      }
    }
  }

  // for (var i = 0; i < MAP_D; i++) {
  //   for (var j = 0; j < MAP_W; j++) {
  //     if (this.data[1][i][j].type == 1) {
  //       var rand = Math.floor(Math.random() * 100);
  //       if (rand < 25) {
  //         this.data[1][i][j].type = 7;
  //       }
  //     }
  //   }
  // }

  // for (h = 2; h < 3; h++) {
  //   for (var i = 0; i < MAP_D; i++) {
  //     for (var j = 0; j < MAP_W; j++) {
  //       this.data[h][i][j].type = Math.floor(Math.random() * 6) == 0 ? 1 : 3;
  //       this.data[h - 1][i][j].type =
  //         this.data[h][i][j].type == 1 ? 2 : this.data[h - 1][i][j].type;
  //     }
  //   }
  // }

  // for (h = 1; h < 2; h++) {
  //   for (var i = 0; i < MAP_D; i++) {
  //     for (var j = 0; j < MAP_W; j++) {
  //       if (
  //         this.data[h][i][j].type == 1 &&
  //         Math.floor(Math.random() * 6) == 0
  //       ) {
  //         this.data[h + 1][i][j].type = 4;
  //         this.data[h + 1][i][j].solid = true;
  //         this.data[h + 2][i][j].type = 5;
  //         this.data[h + 2][i][j].solid = true;
  //       }
  //       //this.data[h][i][j].type = 5;
  //     }
  //   }
  // }

  for (var h = 0; h < this.data.length; h++) {
    for (var i = 0; i < this.data[h].length; i++) {
      for (var j = 0; j < this.data[h][i].length; j++) {
        var tile = this.data[h][i][j];
        if (tile.type == 1) {
          var underTile = this.getTileAtIndex(h - 1, i, j);
          if (underTile != false) {
            underTile.type = 2;
            underTile.solid = true;
          }
        }

        if (
          tile.type == 0 ||
          tile.type == 1 ||
          tile.type == 2 ||
          tile.type == 4 ||
          tile.type == 5
        ) {
          tile.solid = true;
        }
        // else tile.solid = false;
      }
    }
  }

  this.render = function() {
    for (var h = 0; h < this.data.length; h++) {
      for (var i = 0; i < this.data[h].length; i++) {
        for (var j = 0; j < this.data[h][i].length; j++) {
          this.data[h][i][j].render();
        }
      }
    }
  };

  this.getTileAtPosition = function(x, y, z) {
    if (
      x < 0 ||
      y < 0 ||
      z < 0 ||
      x > (MAP_W - 1) * 64 ||
      z > (MAP_D - 1) * 64 ||
      y > (MAP_H - 1) * 48
    )
      return false;
    return this.data[Math.floor(y / 48)][Math.floor(z / 64)][
      Math.floor(x / 64)
    ];
  };

  this.getRenderData = function() {
    var flattenedData = [];
    for (var h = 0; h < this.data.length; h++) {
      //y
      for (
        var i = Math.floor(camera.z / 64) - 8;
        i < Math.floor(camera.z / 64) + 8;
        i++
      ) {
        // z
        for (
          var j = Math.floor(camera.x / 64) - 8;
          j < Math.floor(camera.x / 64) + 8;
          j++
        ) {
          // x
          var target = this.getTileAtIndex(h, i, j);
          if (target != false) {
            flattenedData.push(target);
          }
        }
      }
    }
    return flattenedData;
  };
}
