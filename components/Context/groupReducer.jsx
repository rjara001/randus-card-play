import { getData } from '../../util/data.manager';
import {changeStatusGroup} from '../../util/operations';

let newGroupUncover = ({group, word}) => {

}

export function groupReducer(state, action) {
  debugger;
    switch (action.type) {
      case NEXT:
        return [...state, covered];
      case UNCOVER:
        return state.map((group) => {
          if (group.id === action.payload.group.id)
            return changeStatusGroup(action.payload);
  
          return {... group};
        });
      case MATCH:
        return state.filter((_task, i) => action.payload.taskId !== i);
      default:
        debugger;
        if (state!=null)
          return state;
        else
          return getData();
    }
  }

export function initialState() {

  return getData();

}