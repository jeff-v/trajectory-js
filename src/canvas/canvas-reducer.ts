import { DRAW_FRAME, DRAW_CIRCLE, UPDATE_CIRCLE } from './canvas-action-types';
import initialState from './canvas-state';

export default function canvasReducer(
  state = initialState,
  action: { type: string; payload: any }
) {
  switch (action.type) {
    case DRAW_FRAME:
      return { ...state };
    case DRAW_CIRCLE:
      return {
        ...state,
        bodies: state.bodies.concat([action.payload]),
      };
    case UPDATE_CIRCLE:
      return {
        ...state,
        bodies: state.bodies.splice(
          state.bodies.findIndex(body => body.label === action.payload.label),
          1,
          {
            ...state.bodies[
              state.bodies.findIndex(
                body => body.label === action.payload.label
              )
            ],
            ...action.payload,
          }
        ),
      };
    default:
      return { ...state };
  }
}
