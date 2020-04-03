export interface Action {
  type: string;
  payload: unknown;
}

export interface ObjectState {
  forces: Force[];
  position: Vector;
  acceleration: Vector;
  velocity: Vector;
  mass: f64;
  shape: Rectangle | Circle;
  rotationAngle: f64;
  angularVelocity: f64;
  angularAcceleration: f64;
}

export interface Rectangle {
  topLeft: Vector;
  topRight: Vector;
  bottomLeft: Vector;
  bottomRight: Vector;
}

export interface Circle {
  radius: f64;
  location: Vector;
}

export interface Force extends Vector {
  source: string;
}

export interface Vector {
  x: f64;
  y: f64;
}

export interface SecondLaw {
  force: Force[];
  mass: f64;
}

export interface VelocityCalculation {
  originalVelocity: Vector;
  time: f64;
  previousAcceleration: Vector;
  newAcceleration: Vector;
}

export interface PositionCalculation {
  velocity: Vector;
  time: f64;
  acceleration: Vector;
}

export interface RotationCalculation {
  vertices: Vector[];
  angle: f64;
  point: Vector;
}
