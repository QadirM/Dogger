import Vehicle from './vehicle';
import Dog from './dog';


class Game {

  constructor(canvas) {
    this.ctx = canvas.getContext('2d');
    this.dog = {};
    this.vehicles = [];
    this.myVar = {};
    this.gamePaused = false;
    this.createVehicles = this.createVehicles.bind(this);
    this.setup = this.setup.bind(this);

    const reset = document.getElementById("reset-button");
    reset.addEventListener("click", () => {
      clearInterval(this.myVar);
      this.play();
    });

    const pause = document.getElementById("pause-button");
    pause.addEventListener("click", () => {
      if (this.gamePaused) {
        this.gamePaused = false;
      } else {
        this.gamePaused = true;
      }
    });
  }

  setup() {
    this.dog = new Dog(this);
    this.vehicles = [];
    this.ctx.clearRect(0, 0, 1000, 600);
    this.createVehicles();
  }

  play() {
    this.setup();
    this.dog.move();
    let won = false;
    this.myVar = window.setInterval(() => {
      this.ctx.clearRect(0, 0, 1000, 600);
      this.vehicles.forEach(vehicle => {
        vehicle.draw(this.ctx);
        if (this.checkCollision(vehicle)) {
          this.dog.resetPos();
        }
        if (this.gamePaused === false) {
          vehicle.move();
        }
      });

        this.dog.draw(this.ctx);

      if (this.dog.pos.y < 70 && won === false){
        alert('Congratulations, You Won!');
        won = true;
      }
    }, 33);
  }

  checkCollision(vehicle) {
    return(
    this.dog.pos.x < vehicle.pos.x + vehicle.dim.w &&
    vehicle.pos.x < this.dog.pos.x + this.dog.dim.w &&
    this.dog.pos.y < vehicle.pos.y + vehicle.dim.h &&
    vehicle.pos.y < this.dog.pos.y + this.dog.dim.h
    );
  }

  createVehicles() {
    let x = 900;
    for (let i = 0; i < 5; i++) {
      this.vehicles.push(new Vehicle(x, 120, 6, "east"));
      let min = 100;
      let max = 300;
      x -= Math.floor(Math.random() * (max - min)) + min;
    }

    x = 900;
    for (let i = 0; i < 5; i++) {
      this.vehicles.push(new Vehicle(x, 185, 5, "east"));
      let min = 100;
      let max = 300;
      x -= Math.floor(Math.random() * (max - min)) + min;
    }

    x = 20;
    for (let i = 0; i < 5; i++) {
      this.vehicles.push(new Vehicle(x, 245, 3, "west"));
      let min = 100;
      let max = 300;
      x += Math.floor(Math.random() * (max - min)) + min;
    }

    x = 20;
    for (let i = 0; i < 5; i++) {
      this.vehicles.push(new Vehicle(x, 310, 6, "west"));
      let min = 100;
      let max = 300;
      x += Math.floor(Math.random() * (max - min)) + min;
    }

    x = 900;
    for (let i = 0; i < 5; i++) {
      this.vehicles.push(new Vehicle(x, 375, 5, "east"));
      let min = 100;
      let max = 300;
      x -= Math.floor(Math.random() * (max - min)) + min;
    }

    x = 900;
    for (let i = 0; i < 5; i++) {
      this.vehicles.push(new Vehicle(x, 440, 3, "east"));
      let min = 100;
      let max = 300;
      x -= Math.floor(Math.random() * (max - min)) + min;
    }
  }

}


export default Game;
