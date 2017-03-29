import Game from './game.js';

document.addEventListener("DOMContentLoaded", function(event) {
  const canvas = document.getElementById("dogger");
  const game = new Game(canvas);
  game.play();
});

// const canvas = document.getElementById("dogger");
// const ctx = canvas.getContext('2d');
//  ctx.beginPath();
//  ctx.rect(20, 40, 50, 50);
//  ctx.fillStyle = "#FF0000 ";
//  ctx.fill();
//  ctx.closePath();
//  key('a', function(){ alert('you pressed a!'); });

// const stage = new createjs.Stage("dogger");
// const circle = new createjs.Shape();
// circle.graphics.beginFill("DeepSkyBlue").drawCircle(0, 0, 30);
// circle.x = 100;
// circle.y = 100;
// stage.addChild(circle);
// stage.update();
//
// setInterval(() => {
//   circle.x = circle.x + 10;
//   if (circle.x > 1000) {
//     circle.x = 100;
//   }
//   stage.update();
// }, 33);
//
//
// key('a', function(){ alert('you pressed a!'); });
