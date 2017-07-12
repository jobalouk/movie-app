import { combineReducers, createStore } from 'redux';
import onTheAir from './reducers/onTheAir';

let reducer = combineReducers({ onTheAir });

let store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
