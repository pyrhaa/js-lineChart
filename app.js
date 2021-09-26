const chart = document.getElementById('chart').getContext('2d');

const cw = chart.canvas.width;
let ch = chart.canvas.height;

const w = [0, cw / 5, 2 * (cw / 5), 3 * (cw / 5), 4 * (cw / 5), 5 * (cw / 5)];

const h = [
  ch,
  ch - ch / 5,
  ch - 2 * (ch / 5),
  ch - 3 * (ch / 5),
  ch - 4 * (ch / 5),
  ch - 5 * (ch / 5),
];

ch = document.getElementById('chart');

chart.beginPath();

//actual graph
for (let i = 0; i < w.length; i++) {
  chart.moveTo(0, ch);
  chart.strokeStyle = '#B44107';
  chart.lineWidth = 4;
  chart.lineTo(w[i], h[Math.floor(Math.random() * 4 + 1)]);
  chart.stroke();
}

// vertical lines
const gridV = () => {
  for (let i = 1; i < w.length - 1; i++) {
    chart.strokeStyle = '#DFDBD9';
    chart.lineWidth = 1;
    chart.moveTo(w[i], 0);
    chart.lineTo(w[i], 450);
  }
  chart.stroke();
};

//horizontal lines
const gridH = () => {
  for (let i = 1; i < h.length - 1; i++) {
    chart.strokeStyle = '#DFDBD9';
    chart.lineWidth = 1;
    chart.moveTo(0, h[i]);
    chart.lineTo(3000, h[i]);
  }
  chart.stroke();
};

gridV();
gridH();
