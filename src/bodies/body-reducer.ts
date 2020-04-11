import Two from 'two.js';

import {
  ADD_FORCE,
  UPDATE_ACCELERATION,
  UPDATE_POSITION,
  UPDATE_VELOCITY,
  REMOVE_FORCE,
  SET_MASS,
  NEW_SHAPE,
  UPDATE_BODY,
} from './body-action-types';

import { Action, Force, ObjectState, Vector } from './body-types';

const two = new Two({
  width: 1440,
  height: 900,
  type: Two.Types.canvas,
}).appendTo(document.body);

export const initialState: ObjectState = {
  forces: [{ x: 0, y: -9.81, source: 'gravity' }],
  position: { x: 0, y: 0 },
  acceleration: { x: 0, y: -9.81 },
  velocity: { x: 0, y: 0 },
  mass: 0,
  shape: two.makeRectangle(50, 50, 50, 50),
  rotationAngle: 0,
  time: Date.now(),
  two,
};

// interface HalfStepVelocityCalculation {
//   originalAcceleration: Vector;
//   originalVelocity: Vector;
//   changeInTime: number;
// }

// interface CurrentAccelerationCalculation {
//   currentVelocity: Vector;
//   finalVelocity: Vector;
//   changeInTime: number;
//   originalPosition: Vector;
//   originalTime: number;
//   originalAcceleration: Vector;
// }

// interface FinalVelocityCalculation {
//   currentVelocity: Vector;
//   originalAcceleration: Vector;
//   originalPosition: Vector;
//   originalTime: number;
//   originalVelocity: Vector;
// }

// interface CurrentPositionCalculation extends HalfStepVelocityCalculation {
//   originalPosition: Vector;
//   originalTime: number;
// }

interface NewPositionCalculation {
  position: number;
  velocity: number;
  changeInTime: number;
  acceleration: number;
}

interface NewVelocityCalculation {
  originalVelocity: number;
  acceleration: number;
  changeInTime: number;
}

const newPosition = ({
  position,
  velocity,
  changeInTime,
  acceleration,
}: NewPositionCalculation) =>
  position +
  velocity +
  changeInTime +
  acceleration * (changeInTime * changeInTime * 0.5);

const newVelocity = ({
  originalVelocity,
  acceleration,
  changeInTime,
}: NewVelocityCalculation) =>
  originalVelocity + acceleration * (changeInTime * 0.5);

// const halfStepVelocity = ({
//   originalVelocity,
//   originalAcceleration,
//   changeInTime,
// }: HalfStepVelocityCalculation) => ({
//   x: originalVelocity.x + (originalAcceleration.x / 2) * changeInTime,
//   y: originalVelocity.y + (originalAcceleration.y / 2) * changeInTime,
// });

// const currentPosition = ({
//   originalPosition,
//   originalAcceleration,
//   originalVelocity,
//   originalTime,
// }: CurrentPositionCalculation) => {
//   const calculatedHalfStepVelocity = halfStepVelocity({
//     originalAcceleration,
//     originalVelocity,
//     changeInTime: Date.now() - originalTime,
//   });

//   return {
//     x: originalPosition.x + calculatedHalfStepVelocity.x,
//     y: originalPosition.y + calculatedHalfStepVelocity.y,
//   };
// };

export default function bodyReducer(
  state: ObjectState = initialState,
  action: Action
): ObjectState {
  const timeChange = Date.now() - state.time;
  // const resolveForces = (forces: Force[]) =>
  //   forces.reduce(({ x, y }, currentValue) => ({
  //     x: x + currentValue.x,
  //     y: y + currentValue.y,
  //   }));

  switch (action.type) {
    case ADD_FORCE:
      return {
        ...state,
        forces: [...state.forces, ...(action.payload as Force[])],
      };
    case REMOVE_FORCE:
      return {
        ...state,
        forces: state.forces.filter(force => force.source !== action.payload),
      };
    case UPDATE_ACCELERATION:
      return { ...state, acceleration: action.payload as Vector };
    case UPDATE_POSITION:
      return { ...state, position: action.payload as Vector };
    case UPDATE_VELOCITY:
      return { ...state, velocity: action.payload as Vector };
    case SET_MASS:
      return { ...state, mass: action.payload as number };
    case NEW_SHAPE:
      return {
        ...state,
        ...(action.payload as ObjectState),
        two: state.two.update(),
      };
    case UPDATE_BODY:
      if (!state.two.playing) state.two.play();
      return {
        ...state,
        position: {
          x:
            state.position.x +
            newPosition({
              acceleration: state.acceleration.x,
              position: state.position.x,
              velocity: state.velocity.x,
              changeInTime: timeChange,
            }),
          y:
            state.position.y +
            newPosition({
              acceleration: state.acceleration.y,
              position: state.position.y,
              velocity: state.velocity.y,
              changeInTime: timeChange,
            }),
        },
        velocity: {
          x:
            state.velocity.x +
            newVelocity({
              originalVelocity: state.velocity.x,
              acceleration: state.acceleration.x,
              changeInTime: timeChange,
            }),
          y:
            state.velocity.y +
            newVelocity({
              originalVelocity: state.velocity.y,
              acceleration: state.acceleration.y,
              changeInTime: timeChange,
            }),
        },
      };
    default:
      return { ...state };
  }
}
