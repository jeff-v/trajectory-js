import { combineReducers } from 'redux';
import bodyReducer from './bodies/body-reducer';
import canvasReducer from './canvas/canvas-reducer';

export default combineReducers({ body: bodyReducer, canvas: canvasReducer });
