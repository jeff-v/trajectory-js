import { PhysicsCircle } from '../body-types';
import { newBody } from '../body-actions';

interface CircularInertia {
  mass: number;
  radius: number;
}

const defaultCircleInertia = ({ mass, radius }: CircularInertia) => ({
  xAxis: (mass * (radius * radius)) / 4,
  yAxis: (mass * (radius * radius)) / 4,
  zAxis: (mass * (radius * radius)) / 2,
});

const physicsCircle = ({
  x = 50,
  y = 50,
  radius = 50,
  label,
}: PhysicsCircle) => ({
  ...newBody({
    position: { x, y },
    label,
  }),
  radius,
  momentsOfInertia: defaultCircleInertia,
});

export default physicsCircle;
