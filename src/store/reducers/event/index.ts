import { EventAction, EventActionTypes, EventState } from './types'

const initialState: EventState = {
  quests: [],
  events: [],
}

export const calendarReducer = (state = initialState, action: EventAction): EventState => {
  switch (action.type) {
    case EventActionTypes.SET_QUESTS:
      return { ...state, quests: action.payload }
    case EventActionTypes.SET_EVENTS:
      return { ...state, events: action.payload }
    default:
      return state
  }
}
