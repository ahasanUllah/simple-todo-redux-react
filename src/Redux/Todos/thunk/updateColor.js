import { colorSelected } from '../actions';

const updateColor = (todoId, color) => {
   return async (dispatch) => {
      const response = await fetch(`http://localhost:9000/todos/${todoId}`, {
         method: 'PATCH',
         headers: {
            'Content-type': 'application/json; charset = UTF-8',
         },
         body: JSON.stringify({
            color: color,
         }),
      });
      const todo = await response.json();
      dispatch(colorSelected(todo.id, todo.color));
   };
};

export default updateColor;
