import MovingObject from './moving_object';

class Dog extends MovingObject {
  constructor(){
    super();
    this.pos = { x: 500, y: 550 };
    this.dim = {w: 30, h: 30};
    this.direction = "up";
    this.dog = new Image();
    this.index = 1;
  }

  resetPos() {
    this.pos = { x: 500, y: 550 };
    this.direction = "up";
  }
  draw(ctx) {
    if (this.direction === "up") {
      this.dog.src = `assets/images/dog-up-${this.index}.png`;

    }else if (this.direction === "down") {
      this.dog.src = `assets/images/dog-down-${this.index}.png`;
    }else if (this.direction === "left") {
      this.dog.src = `assets/images/dog-left-${this.index}.png`;
    }else if (this.direction === "right") {
      this.dog.src = `assets/images/dog-right-${this.index}.png`;
    }
    ctx.drawImage(this.dog, this.pos.x, this.pos.y,
      this.dim.w, this.dim.h);
  }

  move() {

    key('up', () => {
      this.pos.y -= 30;
      this.direction = "up";
      this.index += 1;
      if(this.index > 3) {this.index = 1;}
    });
    key('down', () => {
      this.pos.y += 30;
      this.direction = "down";
      this.index += 1;
      if(this.index > 3) {this.index = 1;}
    });
    key('left', () => {
      this.pos.x -= 30;
      this.direction = "left";
      this.index += 1;
      if(this.index > 3) {this.index = 1;}
    });
    key('right', () => {
      this.pos.x += 30;
      this.direction = "right";
      this.index += 1;
      if(this.index > 3) {this.index = 1;}
    });
  }
}

export default Dog;