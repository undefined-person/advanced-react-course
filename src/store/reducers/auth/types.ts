import { IUser } from './../../../models/IUser'

export interface AuthState {
  isAuth: boolean
  user: IUser
  isLoading: boolean
  error: string
}

export enum AuthActionTypes {
  SET_AUTH = 'SET_AUTH',
  SET_USER = 'SET_USER',
  SET_LOADING = 'SET_LOADING',
  SET_ERROR = 'SET_ERROR',
}

export interface SetAuthAction {
  type: AuthActionTypes.SET_AUTH
  payload: boolean
}

export interface SetErrorAction {
  type: AuthActionTypes.SET_ERROR
  payload: string
}

export interface SetLoadingAction {
  type: AuthActionTypes.SET_LOADING
  payload: boolean
}

export interface SetUserAction {
  type: AuthActionTypes.SET_USER
  payload: IUser
}

export type AuthAction = SetAuthAction | SetErrorAction | SetLoadingAction | SetUserAction
