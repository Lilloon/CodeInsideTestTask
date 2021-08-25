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
    },
    {
      id: 2,
      objName: 'Русский язык',
      numOf5: 8,
      numOf4: 2,
      numOf3: 1,
      numOf2: 0,
      missed: 2,
    },
  ],
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
        [...state.ObjList.filter((item) => (!(action?.$payload.includes(item.id))))],
      }
    default:
      return state;
  }
};
