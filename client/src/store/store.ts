import { createStore } from 'redux';
import rootReducer from './imagesSlice'

const store = createStore(rootReducer);

export default store;