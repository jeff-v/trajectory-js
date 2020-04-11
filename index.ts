import { Store } from 'redux';
import { drawBall, drawFrame, updateBall } from './src/canvas/canvas-actions';
import reduxStore from './src/store';

const store = reduxStore as Store;

drawBall({
  xPosition: 100,
  yPosition: 100,
  radius: 100,
  label: 'my ball',
  context: store.getState().canvas.context,
});

setInterval(() => drawFrame(), 500);

const updateThisBall = () => {
  const theBall = store
    .getState()
    .canvas.bodies.filter((body: any) => body.label === 'my ball')[0];

  return updateBall({
    xPosition: theBall.xPosition,
    yPosition: theBall.yPosition + 10,
    radius: theBall.radius,
    color: theBall.color,
    label: theBall.label,
  });
};

setInterval(() => {
  updateThisBall();
}, 16.7);

// const canvas = document.getElementById('canvas') as HTMLCanvasElement;
// const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

// const ball = {
//   x: 100,
//   y: 100,
//   vx: 5,
//   vy: 2,
//   radius: 25,
//   color: 'blue',
//   draw() {
//     ctx.beginPath();
//     ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
//     ctx.closePath();
//     ctx.fillStyle = this.color;
//     ctx.fill();
//   },
// };

// function draw() {
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
//   ball.draw();
//   ball.x += ball.vx;
//   ball.y += ball.vy;
//   window.requestAnimationFrame(draw);
// }

// ball.draw();
// window.requestAnimationFrame(draw);
