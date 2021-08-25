import { createAction } from './actionCreator'
import { SELECTED_OBJ_TYPES } from './types'

export const addSelection = createAction(SELECTED_OBJ_TYPES.SET_SELECTION)
export const removeSelection = createAction(SELECTED_OBJ_TYPES.REMOVE_SELECTION)
export const clearSelection = createAction(SELECTED_OBJ_TYPES.CLEAR_SELECTION)
