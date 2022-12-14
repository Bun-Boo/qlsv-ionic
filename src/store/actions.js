import {
  ADD_ST_INPUT,
  DELETE_ST_INPUT,
  EDIT_ST_INPUT,
  SET_ST_INPUT,
} from "./constants";

export const setST = (payload) => {
  return {
    type: SET_ST_INPUT,
    payload,
  };
};
export const addST = (payload) => {
  return {
    type: ADD_ST_INPUT,
    payload,
  };
};
export const deletetST = (payload) => {
  return {
    type: DELETE_ST_INPUT,
    payload,
  };
};
export const editST = (id, payload) => {
  return {
    type: EDIT_ST_INPUT,
    id,
    payload,
  };
};
