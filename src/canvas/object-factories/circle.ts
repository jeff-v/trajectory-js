export interface CanvasCircle {
  xPosition: number;
  yPosition: number;
  radius: number;
  color?: string;
  context: CanvasRenderingContext2D;
  label: string;
}

export interface UpdateCanvasCircle {
  xPosition: number;
  yPosition: number;
  radius: number;
  color?: string;
  label: string;
}

export default function canvasCircle({
  xPosition,
  yPosition,
  radius,
  color = 'black',
  context,
  label,
}: Circle) {
  context.beginPath();
  context.arc(xPosition, yPosition, radius, 0, Math.PI * 2, true);
  // eslint-disable-next-line no-param-reassign
  context.fillStyle = color;
  context.fill();
  return {
    xPosition,
    yPosition,
    radius,
    color,
    label,
  };
}
