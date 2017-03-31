
class Vehicle {
  constructor(posX, posY, speed, direction){
    this.pos = { x: posX, y: posY };
    this.dim = { w: 70, h: 40 };
    this.speed = speed;
    this.direction = direction;
    let carImageIndex = Math.floor(Math.random() * 5) + 1;
    this.car = new Image();
    if (this.direction === "east") {
      this.car.src = `assets/images/car-${carImageIndex}.png`;
    } else {
      this.car.src = `assets/images/car-${carImageIndex}-reverse.png`;
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

export default Vehicle;
