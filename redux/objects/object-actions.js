import {
  ADD_FORCE,
  UPDATE_ACCELERATION,
  UPDATE_POSITION,
  UPDATE_VELOCITY,
} from './object-action-types';

export const addForce = ({ x, y }) => ({
  ADD_FORCE,
  payload: { x, y },
});

export const updateAcceleration = ({ x, y }) => ({
  UPDATE_ACCELERATION,
  payload: { x, y },
});

export const updatePosition = ({ x, y }) => ({
  UPDATE_POSITION,
  payload: { x, y },
});

export const updateVelocity = ({ x, y }) => ({
  UPDATE_VELOCITY,
  payload: { x, y },
});
