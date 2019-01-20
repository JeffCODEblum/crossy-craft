import Npc from "./npc.js";
export default function(context, camera, map) {
  this.data = [];

  for (var i = 0; i < 16; i++) {
    var npc = new Npc(context, camera, map);
    this.data.push(npc);
  }

  this.spawn = function() {
    for (var i = 0; i < this.data.length; i++) {
      if (this.data[i].state == -1) {
        this.data[i].spawn();
      }
    }
  };

  this.spawnAt = function(x, y) {
    for (var i = 0; i < this.data.length; i++) {
      if (this.data[i].state == -1) {
        this.data[i].spawnAt(x, y);
      }
    }
  };

  this.getRenderData = function() {
    var renderData = [];
    for (var i = 0; i < this.data.length; i++) {
      var npc = this.data[i];
      if (
        npc.state != -1 &&
        npc.x > camera.x - 8 * 64 &&
        npc.x < camera.x + 8 * 64 &&
        npc.y > camera.y - 8 * 64 &&
        npc.y < camera.y + 8 * 64
      ) {
        renderData.push(npc);
      }
    }
    return renderData;
  };

  this.update = function() {
    for (var i = 0; i < this.data.length; i++) {
      this.data[i].update();
    }
  };
}
