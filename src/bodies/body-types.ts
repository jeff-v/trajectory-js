import Two from 'two.js';

export interface Action {
  type: string;
  payload: unknown;
}

export interface ObjectState {
  forces: Force[];
  position: Vector;
  acceleration: Vector;
  velocity: Vector;
  mass: number;
  shape: Two.Rectangle | Two.Circle;
  rotationAngle: number;
  time: number;
  two: Two;
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
