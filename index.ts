import { Store } from 'redux';
import { drawBall, drawFrame, updateBall } from './src/canvas/canvas-actions';
import reduxStore, { CanvasBody } from './src/store';

const store = reduxStore as Store;

drawBall({
  xPosition: 100,
  yPosition: 100,
  radius: 100,
  label: 'my ball',
  context: store.getState().canvas.context,
});

const updateThisBall = () => {
  const theBall = store
    .getState()
    .canvas.bodies.filter((body: CanvasBody) => body.label === 'my ball')[0];

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
  drawFrame();
}, 10000);
