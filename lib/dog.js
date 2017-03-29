import MovingObject from './moving_object';

class Dog extends MovingObject {
  constructor(){
    super();
    this.pos = { x: 500, y: 300 };
    this.dim = {w: 20, h: 20};
  }

  resetPos() {
    this.pos = { x: 500, y: 300 };
  }
  draw(ctx) {
    ctx.beginPath();
    ctx.rect(this.pos.x, this.pos.y, this.dim.w, this.dim.h);
    ctx.fillStyle = "#000000";
    ctx.fill();
    ctx.closePath();
  }

  move() {

    key('up', () => { this.pos.y -= 30; });
    key('down', () => { this.pos.y += 30; });
    key('left', () => { this.pos.x -= 30; });
    key('right', () => { this.pos.x += 30; });
  }
}

export default Dog;
