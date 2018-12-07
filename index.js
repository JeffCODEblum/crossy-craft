//alert("hello");
var CURSOR_SPEED = 64;
var CURSOR_SPEED_Y = 48;
var canvas = document.getElementById("canvas");
canvas.style.width = "800px";
canvas.style.height = "600px";
var context = canvas.getContext("2d");
var graphics = new Image();
graphics.src = "./graphics.png";

var MAP_W = 16;
var MAP_D = 16;
var MAP_H = 5;

var map = new Map();
//var cursor = new Cursor();
var player = new Player();

var camera = {
    x: 0,
    y: 48 * 5,
    z: 0,
    update: function() {
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
    }
};

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
}

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
        if (player.z == renderData[i].z && player.y == renderData[i].y && player.x == renderData[i].x) {
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

    setTimeout(Run, 1000/60);
}
Run();

function Map() {
    this.data = [];

    for (h = 0; h < MAP_H; h++) {
        this.data.push([]);
        for (var i = 0; i < MAP_D; i++) {
            this.data[h].push([]);
            for (var j = 0; j < MAP_W; j++) {
                var tile = new Tile();
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
                this.data[h - 1][i][j].type = this.data[h][i][j].type == 1 ? 2 : this.data[h - 1][i][j].type;
            }
        }
    }

    for (h = 1; h < 2; h++) {
        for (var i = 0; i < MAP_D; i++) {
            for (var j = 0; j < MAP_W; j++) {
                if (this.data[h][i][j].type == 1 && Math.floor(Math.random() * 6) == 0) {
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
                if (tile.type == 0 || tile.type == 1 || tile.type == 2 || tile.type == 4 || tile.type == 5) {
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
    }

    this.getTileAtPosition = function(x, y, z) {
        if (x < 0 || y < 0 || z < 0 || x > (MAP_W - 1) * 64 || z > (MAP_D - 1) * 64 || y > (MAP_H - 1) * 48) return false;
        return this.data[Math.floor(y / 48)][Math.floor(z / 64)][Math.floor(x / 64)];
    }

    this.getRenderData = function() {
        var flattenedData = [];
        for (var h = 0; h < this.data.length; h++) {
            for (var i = 0; i < this.data[h].length; i++) {
                for (var j = 0; j < this.data[h][i].length; j++) {
                    flattenedData.push(this.data[h][i][j]);
                }
            }   
        }
        return (flattenedData);
    }
}


function Tile() {
    this.x = 0;
    this.y = 48 * 6;
    this.z = 0;
    this.type = 0;
    this.solid = false;

    this.render = function() {
        var isoX = ((this.x - camera.x)/64 - (this.z - camera.z)/64) * 48 + 750;
        var isoY = ((this.x - camera.x)/64 + (this.z - camera.z)/64) * 24 + 250 - (this.y - camera.y);
        // outline
        if (this.type == 0 ) context.drawImage(graphics, 0, 188, 97, 98, isoX, isoY, 97, 98);
        // grass
        if (this.type == 1 ) context.drawImage(graphics, 200, 188, 97, 98, isoX, isoY, 97, 98);
        // dirt
        if (this.type == 2 ) context.drawImage(graphics, 400, 188, 97, 98, isoX, isoY, 97, 98);
        // trunk
        if (this.type == 4 ) context.drawImage(graphics, 600, 188, 97, 98, isoX, isoY, 97, 98);
        // leaves
        if (this.type == 5 ) context.drawImage(graphics, 800, 188, 97, 98, isoX, isoY, 97, 98);
        // blank
    }
}

function Cursor() {
    this.x = 0;
    this.y = 48 * 5;
    this.z = 0;
    this.lastMove = 0;
    this.lastSelect = 0;

    this.render = function() {
        var isoX = ((this.x - camera.x)/64 - (this.z - camera.z)/64) * 48 + 750;
        var isoY = ((this.x - camera.x)/64 + (this.z - camera.z)/64) * 24 + 250 - (this.y - camera.y);
        context.drawImage(graphics, 0, 188, 97, 98, isoX, isoY, 97, 98);
    }

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
    }
}

function Player() {
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

    this.render = function() {
        var isoX = ((this.x - camera.x)/64 - (this.z - camera.z)/64) * 48 + 750;
        var isoY = ((this.x - camera.x)/64 + (this.z - camera.z)/64) * 24 + 250 - (this.y - camera.y);
        context.drawImage(graphics, 0, 188, 97, 98, isoX, isoY, 97, 98);
    }

    this.update = function() {

        if (this.state == 0) {
            var tile = map.getTileAtPosition(this.x, this.y - CURSOR_SPEED_Y, this.z);
            while (!tile.solid) {
                this.y -= CURSOR_SPEED_Y;
                tile = map.getTileAtPosition(this.x, this.y - CURSOR_SPEED_Y, this.z);
            }
            this.state = 1;
        }

        else if (this.state == 1) {
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
                    }
                    else {
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
                }
                else if (ctrl.w) {
                    this.vz = -1;
                    this.vx = 0;
                    this.vy = 1;
                }
                else if (ctrl.d) {
                    this.vz = 0;
                    this.vx = 1;
                    this.vy = 1;
                }
                else if (ctrl.a) {
                    this.vz = 0;
                    this.vx = -1;
                    this.vy = 1;
                }
                if (ctrl.s || ctrl.w || ctrl.d || ctrl.a) {
                    var tile = map.getTileAtPosition(this.x + (this.vx * CURSOR_SPEED), this.y, this.z + (this.vz * CURSOR_SPEED));
                    if (tile.solid) {
                        tile = map.getTileAtPosition(tile.x, tile.y + CURSOR_SPEED_Y, tile.z);
                        if (tile.solid) {
                            this.vz = 0;
                            this.vy = 0;
                            this.vx = 0;
                        }
                        else {
                            this.state = 3;
                        }
                    }
                    else this.state = 2;
                }
            }
        }

        else if (this.state == 2) {
            this.x += this.vx * CURSOR_SPEED/8;
            this.z += this.vz * CURSOR_SPEED/8;
            camera.x += this.vx * CURSOR_SPEED/8;
            camera.z += this.vz * CURSOR_SPEED/8;
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
        }

        else if (this.state == 3) {
            this.x += this.vx * CURSOR_SPEED/8;
            this.z += this.vz * CURSOR_SPEED/8;
            camera.x += this.vx * CURSOR_SPEED/8;
            camera.z += this.vz * CURSOR_SPEED/8;
            camera.y += CURSOR_SPEED_Y/8;
            if (this.stepsTaken < 4) {
                this.y += this.vy * CURSOR_SPEED_Y/2;
            }
            else if (this.stepsTaken >= 4) {
                this.y -= this.vy * CURSOR_SPEED_Y/4;
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
    }
}