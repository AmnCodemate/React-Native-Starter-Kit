import { AsyncStorage } from 'react-native';
import devTools from 'remote-redux-devtools';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { persistStore } from 'redux-persist';
import reducer from '../reducers/combineReducers';
import promise from './promise';

const App = require('../../package.json');

export default function store(onCompletion:()=>void):any {
  const enhancer = compose(
    applyMiddleware(thunk, promise),
    devTools({
      name: App.name,
      realtime: true,
    }),
  );

  const store = createStore(reducer, enhancer);
//   persistStore(store, { storage: AsyncStorage }, onCompletion);

  return store;
}
