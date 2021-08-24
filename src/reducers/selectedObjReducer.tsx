import { SELECTED_OBJ_TYPES } from '../actions/types'

const defaultState = {
  selectedObj: [],
};

export default (
  state = defaultState,
  action:any,
) => {
  switch (action.type) {
    case SELECTED_OBJ_TYPES.SET_SELECTION:
      return { ...state, selectedObj: [...state.selectedObj, action?.$payload] }
    case SELECTED_OBJ_TYPES.REMOVE_SELECTION:
      return { ...state, selectedObj: [...action?.$payload] }
    case SELECTED_OBJ_TYPES.CLEAR_SELECTION:
      return { ...state, selectedObj: [] }
    default:
      return state;
  }
};
