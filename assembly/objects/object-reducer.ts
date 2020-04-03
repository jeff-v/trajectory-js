import {
  ADD_FORCE,
  UPDATE_ACCELERATION,
  UPDATE_POSITION,
  UPDATE_VELOCITY,
  REMOVE_FORCE,
  UPDATE_MASS,
} from './object-action-types';

import { Action, Force, ObjectState } from './object-types';

const initialState: ObjectState = {
  forces: [{ x: 0, y: -9.81, source: 'gravity' }],
  position: { x: 0, y: 0 },
  acceleration: { x: 0, y: 0 },
  velocity: { x: 0, y: 0 },
  mass: 0,
  shape: {
    topLeft: { x: 0, y: 0 },
    topRight: { x: 0, y: 0 },
    bottomLeft: { x: 0, y: 0 },
    bottomRight: { x: 0, y: 0 },
  },
  rotationAngle: 0,
  angularAcceleration: 0,
  angularVelocity: 0,
};

export default function objectReducer(
  state: ObjectState = initialState,
  action: Action
) {
  switch (action.type) {
    case ADD_FORCE:
      return {
        ...state,
        forces: state.forces.concat(action.payload as Force[]),
      };
    case REMOVE_FORCE:
      return {
        ...state,
        forces: state.forces.filter(force => force.source !== action.payload),
      };
    case UPDATE_ACCELERATION:
      return { ...state, acceleration: action.payload };
    case UPDATE_POSITION:
      return { ...state, position: action.payload };
    case UPDATE_VELOCITY:
      return { ...state, velocity: action.payload };
    case UPDATE_MASS:
      return { ...state, mass: action.payload };
    default:
      return { ...state };
  }
}
