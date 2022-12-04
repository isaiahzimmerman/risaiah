const canvas= document.getElementById('ryancanvas');
const ctx = canvas.getContext('2d');
function drawLine(x1,y1,x2,y2){
  ctx.beginPath();
  ctx.strokeStyle= 'purple';
  ctx.moveTo(x1,y1);
  ctx.lineTo(x2,y2);
  ctx.stroke();
}

drawLine(50,50,50,350);
drawLine(150,50,150,350);
drawLine(50,250,150,250);

drawLine(300,50,300,350);
drawLine(200,50,400,50);
drawLine(200,350,400,350);
