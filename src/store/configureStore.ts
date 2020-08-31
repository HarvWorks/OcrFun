import {createStore, applyMiddleware, compose, combineReducers} from 'redux';

import thunk from 'redux-thunk';

import {StandardReducer} from './reducers';

const composeEnhancers =
  (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ as typeof compose) || compose;

const rootReducer = combineReducers({
  StandardReducer: StandardReducer,
});

const configureStore = () => {
  return createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
};

export default configureStore;
