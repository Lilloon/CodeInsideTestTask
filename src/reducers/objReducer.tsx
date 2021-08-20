import { OBJ_LIST_ACTIONS_TYPES } from '../actions/types'

const defaultState = {
  ObjList: [
    {
      id: 1,
      objName: 'Математика',
      numOf5: 5,
      numOf4: 7,
      numOf3: 3,
      numOf2: 1,
      missed: 5,
    }],
};

export default (
  state = defaultState,
  action:any,
) => {
  switch (action.type) {
    case OBJ_LIST_ACTIONS_TYPES.ADD_OBJ:
      return { ...state, ObjList: [...state.ObjList, action?.$payload] }
    case OBJ_LIST_ACTIONS_TYPES.REMOVE_OBJ:
      return {
        ...state,
        ObjList:
        [...state.ObjList.filter((item) => (item.id !== action?.$payload))],
      }
    default:
      return state;
  }
};
