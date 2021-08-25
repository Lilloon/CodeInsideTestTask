import { USER_TYPES } from '../actions/types'

const defaultState = {
  user: null,
};

export default (
  state = defaultState,
  action:any,
) => {
  switch (action.type) {
    case USER_TYPES.SET_USER:
      return { ...state, user: { ...action?.$payload } }
    case USER_TYPES.REMOVE_USER:
      return { ...state, user: null }
    default:
      return state;
  }
};
