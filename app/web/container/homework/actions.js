import { ADD, DEL, SET_GRADE, SET_SUBMITTED, SET_LIST, SET_UNSUBMITTED } from './constant';

export const add = item => {
  console.log('item', item);
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
export const grade = (task_id, submit_tid, data) => {
  return {
    type: SET_GRADE,
    task_id,
    submit_tid,
    data
  }
}

export const load = (task_id, list) => {
  return {
    type: SET_SUBMITTED,
    task_id,
    list
  }
}

export const setList = (list) => {
  return {
    type: SET_LIST,
    list
  }
}

export const setUnSubmitted = (task_id, list) => {
  return {
    type: SET_UNSUBMITTED,
    task_id,
    list
  }
}
