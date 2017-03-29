import MovingObject from './moving_object';


export class Vehicle extends MovingObject {
  constructor(posX, posY, speed){
    super();
    this.pos = { x: posX, y: posY };
    this.dim = { w: 50, h: 30 };
    this.speed = speed;
    this.car = new Image();
    this.car.src = 'assets/images/red-car.png';
  }

  draw(ctx){
    ctx.drawImage(this.car, this.pos.x, this.pos.y, this.dim.w, this.dim.h);
  }

  move() {
    if (this.pos.x > 1050) {
     this.pos.x = -200;
    } else {
     this.pos.x += this.speed;
    }
  }

}
