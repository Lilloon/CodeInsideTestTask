import { createAction } from './actionCreator'
import { USER_TYPES } from './types'

export const addUser = createAction(USER_TYPES.SET_USER)
export const removeUser = createAction(USER_TYPES.REMOVE_USER)
