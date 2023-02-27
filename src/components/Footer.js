import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { colorChanged, statusChanged } from '../Redux/Filters/actions';

const numberOfTodos = (no_of_todos) => {
   switch (no_of_todos) {
      case 0:
         return 'No Task left';

      case 1:
         return '1 Task left';
      default:
         return `${no_of_todos} Tasks left`;
   }
};

const Footer = () => {
   const todos = useSelector((state) => state.todo);
   const filters = useSelector((state) => state.filter);
   const dispatch = useDispatch();
   const remainingIncomplete = todos.filter((todo) => !todo.completed).length;

   const { status, colors } = filters;

   const handleStatusChange = (status) => {
      dispatch(statusChanged(status));
   };

   const handleColorChange = (color) => {
      console.log(filters, color, colors);
      if (colors.includes(color)) {
         dispatch(colorChanged(color, 'removed'));
      } else {
         dispatch(colorChanged(color, 'added'));
      }
   };

   console.log(filters);

   return (
      <div className="mt-4 flex justify-between text-xs text-gray-500">
         <p>{numberOfTodos(remainingIncomplete)} </p>
         <ul className="flex space-x-1 items-center text-xs">
            <li
               className={`cursor-pointer ${filters.status === 'all' && 'font-bold'}`}
               onClick={() => handleStatusChange('all')}
            >
               All
            </li>
            <li>|</li>
            <li
               className={`cursor-pointer ${filters.status === 'incomplete' && 'font-bold'}`}
               onClick={() => handleStatusChange('incomplete')}
            >
               Incomplete
            </li>
            <li>|</li>
            <li
               className={`cursor-pointer ${filters.status === 'complete' && 'font-bold'}`}
               onClick={() => handleStatusChange('complete')}
            >
               Complete
            </li>
            <li></li>
            <li></li>
            <li
               className={`h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer ${
                  colors.includes('green') && 'bg-green-500'
               }`}
               onClick={() => handleColorChange('green')}
            ></li>
            <li
               className={`h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer ${
                  colors.includes('red') && 'bg-red-500'
               }`}
               onClick={() => handleColorChange('red')}
            ></li>
            <li
               className={`h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer ${
                  colors.includes('yellow') && 'bg-yellow-500'
               }`}
               onClick={() => handleColorChange('yellow')}
            ></li>
         </ul>
      </div>
   );
};

export default Footer;
