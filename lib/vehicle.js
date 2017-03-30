import MovingObject from './moving_object';


export class Vehicle extends MovingObject {
  constructor(posX, posY, speed, direction){
    super();
    this.pos = { x: posX, y: posY };
    this.dim = { w: 70, h: 40 };
    this.speed = speed;
    this.direction = direction;
    this.car = new Image();
    if (this.direction === "east") {
      this.car.src = 'assets/images/red-car.png';
    } else {
      this.car.src = 'assets/images/red-car-reverse.png';
    }
  }

  draw(ctx){
    ctx.drawImage(this.car, this.pos.x, this.pos.y, this.dim.w, this.dim.h);
  }

  move() {
    if (this.direction === "east") {
      if (this.pos.x > 1070) {
       this.pos.x = -50;
      } else {
       this.pos.x += this.speed;
      }
    } else {
      if (this.pos.x < -70) {
       this.pos.x = 1050;
      } else {
       this.pos.x -= this.speed;
      }
    }
  }

}
