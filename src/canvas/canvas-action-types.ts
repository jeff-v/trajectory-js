export interface UpdateCircle {
  label: string;
  xPosition: number;
  yPosition: number;
  context: CanvasRenderingContext2D;
  radius: number;
}

export const DRAW_FRAME = 'DRAW_FRAME';
export const DRAW_CIRCLE = 'DRAW_CIRCLE';
export const UPDATE_CIRCLE = 'UPDATE_CIRCLE';
