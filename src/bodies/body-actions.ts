import Two, { Rectangle, Circle } from 'two.js';
import store from '../store';

import {
  ADD_FORCE,
  UPDATE_ACCELERATION,
  UPDATE_POSITION,
  UPDATE_VELOCITY,
  REMOVE_FORCE,
  SET_MASS,
  UPDATE_ROTATION,
  UPDATE_ANGULAR_VELOCITY,
  NEW_SHAPE,
  UPDATE_BODY,
} from './body-action-types';

import {
  Force,
  Action,
  SecondLaw,
  PositionCalculation,
  VelocityCalculation,
  RotationCalculation,
  AngularVelocityCalculation,
  LinearVelocityCalculation,
  ObjectState,
  Vector,
} from './body-types';
import two from '../canvas/renderer';

const state = store.getState();

const { dispatch } = store;

export const addForce = ({ x = 0, y = 0 }: Force): Action =>
  dispatch({
    type: ADD_FORCE,
    payload: [{ x, y }],
  });

export const removeForce = (source: string): Action =>
  dispatch({
    type: REMOVE_FORCE,
    payload: source,
  });

// export const updateAcceleration = ({ mass, force }: SecondLaw): Action =>
//   dispatch({
//     type: UPDATE_ACCELERATION,
//     payload: { x: force[0].x / mass, y: force[0].y / mass },
// });

export const updatePosition = ({
  velocity,
  time,
  acceleration,
}: PositionCalculation): Action =>
  dispatch({
    type: UPDATE_POSITION,
    payload: {
      x: velocity.x * time + 0.5 * acceleration.x * (time * time),
      y: velocity.y * time + 0.5 * acceleration.y * (time * time),
    },
  });

export const updateVelocity = ({
  originalVelocity,
  time,
  previousAcceleration,
  newAcceleration,
}: VelocityCalculation): Action =>
  dispatch({
    type: UPDATE_VELOCITY,
    payload: {
      x:
        originalVelocity.x +
        ((previousAcceleration.x + newAcceleration.x) / 2) * time,
      y:
        originalVelocity.y +
        ((previousAcceleration.y + newAcceleration.y) / 2) * time,
    },
  });

export const setMass = (mass: number): Action =>
  dispatch({
    type: SET_MASS,
    payload: mass,
  });

export const updateRotation = ({
  vertices,
  angle,
  point,
}: RotationCalculation) =>
  dispatch({
    type: UPDATE_ROTATION,
    action: vertices.map(vertice => ({
      x:
        point.x +
        (vertice.x * Math.cos(angle) - vertice.y - point.y * Math.sin(angle)),
      y:
        point.y + (vertice.x - point.x * Math.sin(angle) + vertice.y - point.y),
    })),
  });

export const updateAngularVelocity = ({
  changeInAngle,
  changeInTime,
}: AngularVelocityCalculation): Action =>
  dispatch({
    type: UPDATE_ANGULAR_VELOCITY,
    payload: changeInAngle / changeInTime,
  });

export const updateLinearVelocity = ({
  radius,
  rotationalVelocity,
}: LinearVelocityCalculation): Action =>
  dispatch({
    type: UPDATE_VELOCITY,
    payload: {
      x: radius * rotationalVelocity.x,
      y: radius * rotationalVelocity.y,
    },
  });

interface NewBody {
  forces?: Force[];
  position?: Vector;
  acceleration?: Vector;
  velocity?: Vector;
  mass?: number;
  shape?: Rectangle | Circle;
  rotationAngle?: number;
  time?: number;
  two?: Two;
}

export const newBody = ({
  forces = [{ x: 0, y: -9.81, source: 'gravity' }],
  position = { x: 0, y: 0 },
  acceleration = { x: 0, y: -9.81 },
  velocity = { x: 0, y: 0 },
  mass = 1,
  shape = state.body.two.makeCircle(50, 50, 50),
  rotationAngle = 0,
  time = Date.now(),
  two = state.body.two,
}: NewBody): ObjectState => ({
  forces,
  position,
  acceleration,
  velocity,
  mass,
  shape,
  rotationAngle,
  time,
  two,
});

interface NewRectangle extends NewBody {
  x?: number;
  y?: number;
  width?: number;
  height?: number;
}

interface NewCircle extends NewBody {
  x?: number;
  y?: number;
  radius?: number;
}

export const newRectangle = ({
  x = 50,
  y = 50,
  width = 50,
  height = 50,
}: NewRectangle): Action =>
  dispatch({
    type: NEW_SHAPE,
    payload: newBody({
      position: { x, y },
      shape: state.body.two.makeRectangle(x, y, width, height),
    }),
  });

export const newCircle = ({ x = 50, y = 50, radius = 50 }: NewCircle): Action =>
  dispatch({
    type: NEW_SHAPE,
    payload: newBody({
      shape: state.body.two.makeCircle(x, y, radius),
    }),
  });

export const updateBody = () =>
  dispatch({
    type: UPDATE_BODY,
  });
