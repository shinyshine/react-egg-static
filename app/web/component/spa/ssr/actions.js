import { ADD, DEL, SET_GRADE } from './constant';

export const add = item => {
  return {
    type: ADD,
    item
  };
};

export const del = id => {
  return {
    type: DEL,
    id
  };
};

export const grade = hId => {
  return {
    type: SET_GRADE,
    hId
  }
}

