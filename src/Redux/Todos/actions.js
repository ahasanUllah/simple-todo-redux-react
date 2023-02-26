import { ADDED, ALLCOMPLETED, CLEARCOMPLETED, COLORSELECTED, DELETED, TOGGLED } from './actionType';

export const added = (todoText) => {
   return {
      type: ADDED,
      payload: todoText,
   };
};

export const deleted = (todoId) => {
   return {
      type: DELETED,
      payload: todoId,
   };
};

export const toggled = (todoId) => {
   return {
      type: TOGGLED,
      payload: todoId,
   };
};

export const colorSelected = (todoId, color) => {
   return {
      type: COLORSELECTED,
      payload: {
         todoId: todoId,
         color: color,
      },
   };
};

export const allCompleted = () => {
   return {
      type: ALLCOMPLETED,
   };
};

export const allClear = () => {
   return {
      type: CLEARCOMPLETED,
   };
};
