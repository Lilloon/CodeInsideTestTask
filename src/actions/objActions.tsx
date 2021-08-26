import { createAction } from './actionCreator'
import { OBJ_LIST_ACTIONS_TYPES } from './types'

export const addObj = createAction(OBJ_LIST_ACTIONS_TYPES.ADD_OBJ)
export const removeObj = createAction(OBJ_LIST_ACTIONS_TYPES.REMOVE_OBJ)
export const setObjList = createAction(OBJ_LIST_ACTIONS_TYPES.SET_OBJ_LIST)
