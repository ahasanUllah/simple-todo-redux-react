import { initialState } from './initialState';
import { ADDED, ALLCOMPLETED, CLEARCOMPLETED, COLORSELECTED, DELETED, TOGGLED } from './actionTypes';

const getTodoId = (todos) => {
   const maxId = todos.reduce((maxId, todo) => Math.max(maxId, todo.id), -1);
   console.log(maxId);
   return maxId + 1;
};

const todoReducer = (state = initialState, action) => {
   switch (action.type) {
      case ADDED:
         return [
            ...state,
            {
               id: getTodoId(state),
               text: action.payload,
               completed: false,
            },
         ];

      case TOGGLED:
         return state.map((todo) => {
            if (todo.id !== action.payload) {
               return todo;
            } else {
               return {
                  ...todo,
                  completed: !todo.completed,
               };
            }
         });

      case COLORSELECTED:
         return state.map((todo) => {
            if (todo.id !== action.payload.todoId) {
               return todo;
            } else {
               return {
                  ...todo,
                  color: action.payload.color,
               };
            }
         });

      case DELETED:
         return state.filter((todo) => todo.id !== action.payload);

      case ALLCOMPLETED:
         return state.map((todo) => {
            return {
               ...todo,
               completed: true,
            };
         });

      case CLEARCOMPLETED:
         return state.map((todo) => {
            return {
               ...todo,
               completed: false,
            };
         });

      default:
         return state;
   }
};

export default todoReducer;
