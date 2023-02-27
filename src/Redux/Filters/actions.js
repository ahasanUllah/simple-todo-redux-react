import { COLORCHANGED, STATUSCHANGED } from '../Filters/actionTypes';

export const statusChanged = (status) => {
   return {
      type: STATUSCHANGED,
      payload: status,
   };
};

export const colorChanged = (color, changedType) => {
   return {
      type: COLORCHANGED,
      payload: {
         color,
         changedType,
      },
   };
};
