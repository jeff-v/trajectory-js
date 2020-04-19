import { ObjectState } from './body-types';
import physicsRectangle from './object-factories/physics-rectangle';

const initialState: ObjectState = {
  forces: [{ x: 0, y: -9.81, source: 'gravity' }],
  position: { x: 0, y: 0 },
  acceleration: { x: 0, y: -9.81 },
  velocity: { x: 0, y: 0 },
  mass: 0,
  shape: physicsRectangle({
    position: {
      x: 50,
      y: 50,
    },
    width: 50,
    height: 50,
    label: 'default rectangle',
  }),
  rotationAngle: 0,
  time: Date.now(),
};

export default initialState;
