import { LIST, ADD, DEL, SET_GRADE, SET_SUBMITTED, SET_LIST, SET_UNSUBMITTED } from './constant';
export default function update(state={}, action) {
  // const newState = Object.assign({}, state);
  // if (action.type === ADD) {
  //   const list = Array.isArray(action.item) ? action.item : [action.item];
  //   newState.list = [...newState.list, ...list];
  //   console.log('-----', newState.list);
  // } else if (action.type === DEL) {
  //   newState.list = newState.list.filter(item => {
  //     return item.id !== action.id;
  //   });
  // } else if (action.type === LIST) {
  //   newState.list = action.list;
  // }
  // return newState;

  console.log(action)

  switch( action.type ) {
    // p: parent_id,  h_id,  score
    case SET_GRADE: 
      const parent_id = action.task_id;
      console.log('in reducer', state.homework)
      const { score, comment } = action.data;
      
      const homework = Object.assign({}, state.homework)
      homework[parent_id] = state.homework[parent_id].map( item => {
        return (item.submit_tid !== action.submit_tid) ? item : Object.assign({}, item, { grade: score, comment })
      })

      return Object.assign({}, state, { homework });
      break;

    case SET_UNSUBMITTED:
      let newData2 = Object.assign({}, state.unsubmitted || []);
      newData2[action.task_id] = action.list;

      console.log('in reducer2',Object.assign({}, state, { unsubmitted: newData2}))
      return Object.assign({}, state, { unsubmitted: newData2});
      break;
    case SET_SUBMITTED:
      const { task_id, list } = action;
      let newData1 = Object.assign({}, state.homework || []);
      newData1[task_id] = list;

      console.log('in reducer 1', Object.assign({}, state, { homework: newData1 }))

      return Object.assign({}, state, { homework: newData1 })
      break;
    

    case SET_LIST: 
      return Object.assign({}, state, { list: action.list });
      break;

    

    default: 
      return state

  }


}
