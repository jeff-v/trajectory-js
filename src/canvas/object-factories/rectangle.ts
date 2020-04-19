export interface CanvasRectangle {
  xPosition: number;
  yPosition: number;
  width: number;
  height: number;
  color?: string;
  context: CanvasRenderingContext2D;
  label: string;
}

export interface CanvasUpdateRectangle {
  xPosition: number;
  yPosition: number;
  width: number;
  height: number;
  color?: string;
  label: string;
}

export default function rectangle({
  xPosition,
  yPosition,
  width,
  context,
  height,
  color = 'black',
  label,
}: CanvasRectangle): CanvasRectangle {
  context.beginPath();
  context.fillRect(xPosition, yPosition, width, height);
  // eslint-disable-next-line no-param-reassign
  context.fillStyle = color;
  context.fill();
  return {
    xPosition,
    yPosition,
    width,
    height,
    color,
    label,
    context,
  };
}
