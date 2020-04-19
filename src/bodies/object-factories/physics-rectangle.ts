import { PhysicsRectangle } from '../body-types';
import { newBody } from '../body-actions';

interface RectangularInertia {
  mass: number;
  width: number;
  height: number;
}

const defaultRectangularInertia = ({
  mass,
  width,
  height,
}: RectangularInertia) => ({
  center: (mass / 12) * (height * height) * (width * width),
  edge: (mass / 12) * (height * height * (width * width)),
});

const physicsRectangle = ({
  x = 50,
  y = 50,
  width = 50,
  height = 50,
  label,
  momentsOfInertia = defaultRectangularInertia({
    mass: 50,
    width,
    height,
  }),
}: PhysicsRectangle): PhysicsRectangle => ({
  ...newBody({
    position: { x, y },
    label,
  }),
  label,
  width,
  height,
  momentsOfInertia,
});

export default physicsRectangle;
