export interface Action {
  type: string;
  payload: unknown;
}

export interface PhysicsRectangle extends PhysicsBody {
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  momentsOfInertia?: {
    center: number;
    edge: number;
  };
}

export interface PhysicsCircle extends PhysicsBody {
  x?: number;
  y?: number;
  radius?: number;
  momentsOfInertia: {
    xAxis: ({ mass, radius }: { mass: number; radius: number }) => number;
    yAxis: ({ mass, radius }: { mass: number; radius: number }) => number;
    zAxis: ({ mass, radius }: { mass: number; radius: number }) => number;
  };
}
export interface PhysicsBody {
  forces?: Force[];
  position?: Vector;
  acceleration?: Vector;
  velocity?: Vector;
  mass?: number;
  rotationAngle?: number;
  time?: number;
  label: string;
}

export interface ObjectState {
  forces: Force[];
  position: Vector;
  acceleration: Vector;
  velocity: Vector;
  mass: number;
  shape: PhysicsRectangle | PhysicsCircle;
  rotationAngle: number;
  time: number;
}

export interface Body {
  width: number;
  height: number;
  location: Vector;
  mass: number;
}

export interface Force extends Vector {
  source?: string;
}

export interface Vector {
  x: number;
  y: number;
}

export interface SecondLaw {
  force: Force[];
  mass: number;
}

export interface VelocityCalculation {
  originalVelocity: Vector;
  time: number;
  previousAcceleration: Vector;
  newAcceleration: Vector;
}

export interface PositionCalculation {
  velocity: Vector;
  time: number;
  acceleration: Vector;
}

export interface RotationCalculation {
  vertices: Vector[];
  angle: number;
  point: Vector;
}

export interface AngularVelocityCalculation {
  changeInTime: number;
  changeInAngle: number;
}

export interface LinearVelocityCalculation {
  radius: number;
  rotationalVelocity: Vector;
}

export interface CalculateRotationalVector {
  mass: number;
  velocity: Vector;
}
