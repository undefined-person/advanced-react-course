import { AppDispatch } from './../../index'
import { IEvent } from './../../../models/IEvent'
import { IUser } from './../../../models/IUser'
import { EventActionTypes, SetEventsAction, SetQuestsAction } from './types'
import UserService from '../../../api/UserService'

export const EventActionCreators = {
  setGuest: (quests: Array<IUser>): SetQuestsAction => ({ type: EventActionTypes.SET_QUESTS, payload: quests }),
  setEvents: (events: Array<IEvent>): SetEventsAction => ({ type: EventActionTypes.SET_EVENTS, payload: events }),
  fetchQuests: () => async (dispatch: AppDispatch) => {
    try {
      const response = await UserService.getUsers()
      dispatch(EventActionCreators.setGuest(response.data))
    } catch (error) {
      console.log(error)
    }
  },
  fetchEvents: (username: string) => async (dispatch: AppDispatch) => {
    try {
      const events = localStorage.getItem('events') || '[]'
      const json = JSON.parse(events) as Array<IEvent>
      const currentUserEvents = json.filter(event => event.author === username || event.quest === username)
      dispatch(EventActionCreators.setEvents(currentUserEvents))
    } catch (error) {
      console.log(error)
    }
  },
  createEvent: (event: IEvent) => async (dispatch: AppDispatch) => {
    try {
      const events = localStorage.getItem('events') || '[]'
      const json = JSON.parse(events) as Array<IEvent>
      json.push(event)
      dispatch(EventActionCreators.setEvents(json))
      localStorage.setItem('events', JSON.stringify(json))
    } catch (error) {
      console.log(error)
    }
  },
}
