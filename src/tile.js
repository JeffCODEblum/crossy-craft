import Graphics from "../assets/graphics.png";

var graphics = new Image();
graphics.src = Graphics;

export default function(context, camera) {
  this.x = 0;
  this.y = 48 * 6;
  this.z = 0;
  this.type = 0;
  this.solid = false;

  this.render = function() {
    var isoX = ((this.x - camera.x) / 64 - (this.z - camera.z) / 64) * 48 + 750;
    var isoY =
      ((this.x - camera.x) / 64 + (this.z - camera.z) / 64) * 24 +
      250 -
      (this.y - camera.y);
    // outline 0
    if (this.type == 0)
      context.drawImage(graphics, 0, 188, 97, 98, isoX, isoY, 97, 98);
    // grass 1
    if (this.type == 1)
      context.drawImage(graphics, 200, 188, 97, 98, isoX, isoY, 97, 98);
    // dirt 2
    if (this.type == 2)
      context.drawImage(graphics, 400, 188, 97, 98, isoX, isoY, 97, 98);
    // trunk 4
    if (this.type == 4)
      context.drawImage(graphics, 600, 188, 97, 98, isoX, isoY, 97, 98);
    // leaves 5
    if (this.type == 5)
      context.drawImage(graphics, 800, 188, 97, 98, isoX, isoY, 97, 98);
    // blank 6

    // pavement 7
    if (this.type == 7)
      context.drawImage(graphics, 0, 300, 97, 98, isoX, isoY, 97, 98);

    // water 8
    if (this.type == 8)
      context.drawImage(graphics, 200, 300, 97, 98, isoX, isoY, 97, 98);
  };
}
