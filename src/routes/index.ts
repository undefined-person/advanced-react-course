import Calendar from '../pages/Calendar'
import Login from '../pages/Login'

export interface IRoute {
  path: string
  component: React.ComponentType
  exact?: boolean
}

export enum RouteNames {
  LOGIN = '/login',
  CALENDAR = '/calendar',
}

export const publicRoutes: Array<IRoute> = [
  {
    path: RouteNames.LOGIN,
    component: Login,
    exact: true,
  },
]

export const privateRoutes: Array<IRoute> = [
  {
    path: RouteNames.CALENDAR,
    component: Calendar,
    exact: true,
  },
]
