const c = document.getElementById('chart');
const ctx = c.getContext('2d');

const graphic = () => {
  ctx.beginPath();
  ctx.lineWidth = '5';
  ctx.strokeStyle = 'green'; // Green path
  ctx.moveTo(30, 96);
  ctx.lineTo(70, 66);
  ctx.lineTo(103, 76);
  ctx.lineTo(170, 15);
  ctx.stroke(); // Draw it

  ctx.beginPath();
  ctx.strokeStyle = 'purple'; // Purple path
  ctx.moveTo(50, 0);
  ctx.lineTo(150, 130);
  ctx.stroke(); // Draw it
};

graphic();
