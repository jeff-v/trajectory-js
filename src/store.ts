import { createStore, Store } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import rootReducer from './root-reducer';

const canvas = document.getElementById('canvas') as HTMLCanvasElement;

const context = canvas.getContext('2d') as CanvasRenderingContext2D;

context.globalCompositeOperation = 'destination-over';

export interface CanvasBody {
  xPosition: number;
  yPosition: number;
  label: string;
  width: number;
  height: number;
  color: string;
  radius: number;
}

interface InitialCanvasState {
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
  height: number;
  width: number;
  time: number;
  bodies: CanvasBody[];
  drawFunction?: () => void;
}

const store = createStore(rootReducer, devToolsEnhancer({}));

const draw = () => {
  const state = store.getState().canvas as InitialCanvasState;
  context.clearRect(0, 0, canvas.width, canvas.height);
  state.bodies.forEach(body => {
    context.beginPath();
    context.arc(
      body.xPosition,
      body.yPosition,
      body.radius,
      0,
      Math.PI * 2,
      true
    );
    context.closePath();
    context.fillStyle = body.color;
    context.fill();
  });
};

store.subscribe(draw);

export default store;
