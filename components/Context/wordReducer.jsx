
let changeWordAsNext= (group, action)=> {

  let list = group.list.map(element => element.TextA == action.TextA ? {... element, Status:STATUS.playing} : element);
  return { ... group, list};
}

let changeWordAsCover= (group, action)=> {

  let list = group.list.map(element => element.TextA == action.TextA ? {... element, covered:action.covered} : element);
  return { ... group, list};
}

export function wordReducer(state, action) {
    switch (action.type) {
      case NEXT:
{        let groups = state.groups.map(group=> changeWordAsNext(group, action))

        return {... state, groups}}
    
      case UNCOVER:
{        let groups = state.groups.map(group=> changeWordAsCover(group, action))

        return {... state, groups}}

      case MATCH:
        return state.filter((_task, i) => action.payload.taskId !== i);
      default:
        return state;
    }
  }