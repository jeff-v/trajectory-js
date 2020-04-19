import { CanvasBody } from '../store';

const canvas = document.getElementById('canvas') as HTMLCanvasElement;
const context = canvas.getContext('2d') as CanvasRenderingContext2D;

context.globalCompositeOperation = 'destination-over';

const drawFrame = () => {
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.globalCompositeOperation = 'destination-over';
  context.fillStyle = 'rgba(0, 0, 0, 0.4)';
  context.strokeStyle = 'rgba(0, 153, 255, 0.4)';
  context.save();

  window.requestAnimationFrame(drawFrame);
};

export interface CanvasBodies {
  xPosition: number;
  yPosition: number;
  label: string;
}

interface InitialCanvasState {
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
  height: number;
  width: number;
  time: number;
  bodies: CanvasBody[];
  drawFunction: () => void;
}

const initialState: InitialCanvasState = {
  canvas,
  context,
  height: window.innerHeight,
  width: window.innerWidth,
  time: Date.now(),
  drawFunction: drawFrame,
  bodies: [],
};

export default initialState;
