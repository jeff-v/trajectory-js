import { applyMiddleware, createStore, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducers';

const initialState = {
  canvas: {
    x: 0,
    y: 0,
  },
  physicsObjects: [],
};

export default function configureStore() {
  const store = createStore(
    rootReducer,
    initialState,
    compose(compose(applyMiddleware([thunkMiddleware, composeWithDevTools])))
  );

  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('./reducers', () => store.replaceReducer(rootReducer));
  }

  return store;
}
