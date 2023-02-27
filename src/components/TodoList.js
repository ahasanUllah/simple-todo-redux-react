import React from 'react';
import { useSelector } from 'react-redux';
import Todo from './Todo';

const TodoList = () => {
   const todos = useSelector((state) => state.todo);
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
