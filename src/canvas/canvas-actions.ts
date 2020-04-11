import store from '../store';
import { DRAW_CIRCLE, DRAW_FRAME, UPDATE_CIRCLE } from './canvas-action-types';
import circle, { Circle, UpdateCircle } from './object-factories/circle';

const { dispatch } = store;

export const drawFrame = () =>
  dispatch({
    type: DRAW_FRAME,
  });

export const drawBall = ({
  xPosition,
  yPosition,
  radius,
  color,
  context,
  label,
}: Circle) =>
  dispatch({
    type: DRAW_CIRCLE,
    payload: circle({
      xPosition,
      yPosition,
      radius,
      color,
      context,
      label,
    }),
  });

export const updateBall = ({
  xPosition,
  yPosition,
  radius,
  color,
  label,
}: UpdateCircle) =>
  dispatch({
    type: UPDATE_CIRCLE,
    payload: {
      xPosition,
      yPosition,
      radius,
      color,
      label,
    },
  });
