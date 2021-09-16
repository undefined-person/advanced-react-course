import { AppDispatch } from './../../index'
import { IUser } from './../../../models/IUser'
import { AuthActionTypes, SetUserAction, SetLoadingAction, SetAuthAction, SetErrorAction } from './types'
import UserService from '../../../api/UserService'

export const AuthActionCreators = {
  setUser: (user: IUser): SetUserAction => ({ type: AuthActionTypes.SET_USER, payload: user }),
  setIsLoading: (isLoading: boolean): SetLoadingAction => ({ type: AuthActionTypes.SET_LOADING, payload: isLoading }),
  setIsAuth: (isAuth: boolean): SetAuthAction => ({ type: AuthActionTypes.SET_AUTH, payload: isAuth }),
  setError: (error: string): SetErrorAction => ({ type: AuthActionTypes.SET_ERROR, payload: error }),
  login: (username: string, password: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(AuthActionCreators.setIsLoading(true))
      setTimeout(async () => {
        const response = await UserService.getUsers()
        const mockUser = response.data.find(user => user.username === username && user.password === password)
        if (mockUser) {
          localStorage.setItem('auth', 'true')
          localStorage.setItem('username', mockUser.username)
          dispatch(AuthActionCreators.setUser(mockUser))
          dispatch(AuthActionCreators.setIsAuth(true))
        } else {
          dispatch(AuthActionCreators.setError('Invalid data'))
        }
        dispatch(AuthActionCreators.setIsLoading(false))
      }, 1000)
    } catch (error) {
      dispatch(AuthActionCreators.setError(error as string))
    }
  },

  logout: () => async (dispatch: AppDispatch) => {
    try {
      localStorage.removeItem('auth')
      localStorage.removeItem('username')
      dispatch(AuthActionCreators.setUser({} as IUser))
      dispatch(AuthActionCreators.setIsAuth(false))
    } catch (error) {
      dispatch(AuthActionCreators.setError(error as string))
    }
  },
}
