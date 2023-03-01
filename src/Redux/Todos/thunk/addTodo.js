import { added } from '../actions';

const addTodo = (todoText) => {
   return async (dispatch) => {
      const response = await fetch('http://localhost:9000/todos', {
         method: 'POST',
         headers: {
            'Content-type': 'application/json; charset = UTF-8',
         },
         body: JSON.stringify({
            text: todoText,
            completed: false,
         }),
      });
      const todo = await response.json();
      dispatch(added(todo.text));
   };
};

export default addTodo;
