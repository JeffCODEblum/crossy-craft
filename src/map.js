import Tile from "./tile.js";
var MAP_W = 16;
var MAP_D = 16;
var MAP_H = 5;

export default function(context, camera) {
  this.data = [];

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

  for (h = 0; h < 1; h++) {
    for (var i = 0; i < MAP_D; i++) {
      for (var j = 0; j < MAP_W; j++) {
        this.data[h][i][j].type = 2;
      }
    }
  }

  for (h = 1; h < 2; h++) {
    for (var i = 0; i < MAP_D; i++) {
      for (var j = 0; j < MAP_W; j++) {
        this.data[h][i][j].type = 1;
      }
    }
  }

  for (h = 2; h < 3; h++) {
    for (var i = 0; i < MAP_D; i++) {
      for (var j = 0; j < MAP_W; j++) {
        this.data[h][i][j].type = Math.floor(Math.random() * 6) == 0 ? 1 : 3;
        this.data[h - 1][i][j].type =
          this.data[h][i][j].type == 1 ? 2 : this.data[h - 1][i][j].type;
      }
    }
  }

  for (h = 1; h < 2; h++) {
    for (var i = 0; i < MAP_D; i++) {
      for (var j = 0; j < MAP_W; j++) {
        if (
          this.data[h][i][j].type == 1 &&
          Math.floor(Math.random() * 6) == 0
        ) {
          this.data[h + 1][i][j].type = 4;
          this.data[h + 1][i][j].solid = true;
          this.data[h + 2][i][j].type = 5;
          this.data[h + 2][i][j].solid = true;
        }
        //this.data[h][i][j].type = 5;
      }
    }
  }

  for (var h = 0; h < this.data.length; h++) {
    for (var i = 0; i < this.data[h].length; i++) {
      for (var j = 0; j < this.data[h][i].length; j++) {
        var tile = this.data[h][i][j];
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
      for (var i = 0; i < this.data[h].length; i++) {
        for (var j = 0; j < this.data[h][i].length; j++) {
          flattenedData.push(this.data[h][i][j]);
        }
      }
    }
    return flattenedData;
  };
}
