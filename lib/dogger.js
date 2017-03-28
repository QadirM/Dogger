
document.addEventListener("DOMContentLoaded", function(event) {
  const canvas = document.getElementById("dogger");
  const ctx = canvas.getContext('2d');
   ctx.beginPath();
   ctx.rect(20, 40, 50, 50);
   ctx.fillStyle = "#FF0000 ";
   ctx.fill();
   ctx.closePath();
   key('a', function(){ alert('you pressed a!'); });
});
