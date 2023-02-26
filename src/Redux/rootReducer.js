import { combineReducers } from 'redux';
import todoReducer from '../Redux/Todos/todoReducer';
import filterReducer from './Filters/filterReducer';

const rootReducer = combineReducers({
   todo: todoReducer,
   filter: filterReducer,
});

export default rootReducer;
