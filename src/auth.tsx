/* eslint-disable no-unused-vars */
import { Users } from './users'
import { addUser } from './actions/userActions'

export const Auth = {
  isAuth: (cookies: any, dispatch: any, history:any) => {
    if (cookies?.user) {
      Users.forEach((item) => {
        if (item.login === cookies.user.login) {
          dispatch(addUser(item))
        }
      })
    } else {
      history.push('/login')
    }
  },
}
