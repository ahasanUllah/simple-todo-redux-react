import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import doubleTick from '../Assets/images/double-tick.png';
import noteImage from '../Assets/images/notes.png';
import plusImage from '../Assets/images/plus.png';
import { allCompleted, clearCompleted } from '../Redux/Todos/actions';
import addTodo from '../Redux/Todos/thunk/addTodo';

const Header = () => {
   const [input, setInput] = useState('');
   const dispatch = useDispatch();

   const handleInput = (e) => {
      setInput(e.target.value);
   };

   const handleSbumit = (e) => {
      e.preventDefault();
      dispatch(addTodo(input));

      setInput('');
   };

   const completeHandler = () => {
      dispatch(allCompleted());
   };

   const clearHandler = () => {
      dispatch(clearCompleted());
   };
   return (
      <div>
         <form className="flex items-center bg-gray-100 px-4 py-4 rounded-md" onSubmit={handleSbumit}>
            <img src={noteImage} className="w-6 h-6" alt="Add todo" />
            <input
               value={input}
               onChange={handleInput}
               type="text"
               placeholder="Type your todo"
               className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
            />
            <button
               type="submit"
               className={`appearance-none w-8 h-8 bg-[url('${plusImage}')] bg-no-repeat bg-contain`}
            ></button>
         </form>

         <ul className="flex justify-between my-4 text-xs text-gray-500">
            <li className="flex space-x-1 cursor-pointer" onClick={completeHandler}>
               <img className="w-4 h-4" src={doubleTick} alt="Complete" />
               <span>Complete All Tasks</span>
            </li>
            <li className="cursor-pointer" onClick={clearHandler}>
               Clear completed
            </li>
         </ul>
      </div>
   );
};

export default Header;
