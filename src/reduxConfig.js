import { createStore, applyMiddleware } from 'redux';
import rootReducer from './combinedReducer'
const store = createStore(rootReducer);
export default store;