import {
  ADD_FORCE,
  UPDATE_ACCELERATION,
  UPDATE_POSITION,
  UPDATE_VELOCITY,
} from './object-action-types';

const initialState = {
  forces: [{ x: 0, y: -9.81 }],
  position: { x: 0, y: 0 },
  acceleration: { x: 0, y: 0 },
  velocity: { x: 0, y: 0 },
};

export default function objectReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_FORCE:
      return { ...state, forces: { ...state.forces, ...action.payload } };
    case UPDATE_ACCELERATION:
      return { ...state, acceleration: action.payload };
    case UPDATE_POSITION:
      return { ...state, position: action.payload };
    case UPDATE_VELOCITY:
      return { ...state, position: action.payload };
    default:
      return { ...state };
  }
}
