import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchTodos from '../Redux/Todos/thunk/fetchTodos';
import Todo from './Todo';

const TodoList = () => {
   const todos = useSelector((state) => state.todo);
   const dispatch = useDispatch();
   const filters = useSelector((state) => state.filter);
   const filterByStatus = (todo) => {
      const { status } = filters;
      switch (status) {
         case 'complete':
            return todo.completed;
         case 'incomplete':
            return !todo.completed;
         default:
            return true;
      }
   };
   const filterByColors = (todo) => {
      const { colors } = filters;
      if (colors.length > 0) {
         return colors.includes(todo?.color);
      }
      return true;
   };

   useEffect(() => {
      dispatch(fetchTodos);
   }, [dispatch]);

   return (
      <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
         {todos
            .filter(filterByStatus)
            .filter(filterByColors)
            .map((todo) => (
               <Todo key={todo.id} todo={todo}></Todo>
            ))}
      </div>
   );
};

export default TodoList;
