import {
  Force,
  SecondLaw,
  Vector,
  VelocityCalculation,
  PositionCalculation,
} from './object-types';

export const forceResolver = (vectors: Force[]) =>
  vectors.reduce(
    (accumulator: Force, currentValue: Force) => ({
      x: accumulator.x + currentValue.x,
      y: accumulator.y + currentValue.y,
    }),
    vectors[0]
  );

export const accelerationUpdate = ({ mass, force }: SecondLaw): Vector => ({
  x: force[0].x / mass,
  y: force[0].y / mass,
});

export const velocityUpdate = ({
  originalVelocity,
  time,
  previousAcceleration,
  newAcceleration,
}: VelocityCalculation) => ({
  velocity: {
    x:
      originalVelocity.x +
      ((previousAcceleration.x + newAcceleration.x) / 2) * time,
    y:
      originalVelocity.y +
      ((previousAcceleration.y + newAcceleration.y) / 2) * time,
  },
});

export const positionUpdate = ({
  velocity,
  time,
  acceleration,
}: PositionCalculation) => ({
  x: velocity.x * time + 0.5 * acceleration.x * (time * time),
  y: velocity.y * time + 0.5 * acceleration.y * (time * time),
});
