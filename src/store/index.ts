import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'

import { authReducer } from './reducers/auth/auth'
import { calendarReducer } from './reducers/event/index'

const rootReducer = combineReducers({
  auth: authReducer,
  calendar: calendarReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk))

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
