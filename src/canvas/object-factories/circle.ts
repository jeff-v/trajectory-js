export interface Circle {
  xPosition: number;
  yPosition: number;
  radius: number;
  color?: string;
  context: CanvasRenderingContext2D;
  label: string;
}

export interface UpdateCircle {
  xPosition: number;
  yPosition: number;
  radius: number;
  color?: string;
  label: string;
}

export default function circle({
  xPosition,
  yPosition,
  radius,
  color = 'black',
  context,
  label,
}: Circle) {
  context.beginPath();
  context.arc(xPosition, yPosition, radius, 0, Math.PI * 2, true);
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
