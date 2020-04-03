import {
  ADD_FORCE,
  UPDATE_ACCELERATION,
  UPDATE_POSITION,
  UPDATE_VELOCITY,
  REMOVE_FORCE,
  UPDATE_MASS,
} from './object-action-types';

import {
  Force,
  Action,
  SecondLaw,
  PositionCalculation,
  VelocityCalculation,
  RotationCalculation,
} from './object-types';

export const addForce = ({ x = 0, y = 0 }: Force): Action => ({
  type: ADD_FORCE,
  payload: [{ x, y }],
});

export const removeForce = (source: string): Action => ({
  type: REMOVE_FORCE,
  payload: source,
});

export const updateAcceleration = ({ mass, force }: SecondLaw): Action => ({
  type: UPDATE_ACCELERATION,
  payload: { x: force[0].x / mass, y: force[0].y / mass },
});

export const updatePosition = ({
  velocity,
  time,
  acceleration,
}: PositionCalculation): Action => ({
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
}: VelocityCalculation): Action => ({
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

export const updateMass = (mass: f64): Action => ({
  type: UPDATE_MASS,
  payload: mass,
});

export const updateRotation = ({
  vertices,
  angle,
  point,
}: RotationCalculation) =>({
  type: UPDATE_ROTATION,
  action: vertices.map(vertice => ({
    x:
      point.x +
      (vertice.x * Math.cos(angle) - vertice.y - point.y * Math.sin(angle)),
    y: point.y + (vertice.x - point.x * Math.sin(angle) + vertice.y - point.y),
  }));
