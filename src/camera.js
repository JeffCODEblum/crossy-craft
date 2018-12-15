export default function(ctrl) {
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
