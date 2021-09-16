import { IUser } from './../../../models/IUser'
import { IEvent } from '../../../models/IEvent'

export interface EventState {
  quests: Array<IUser>
  events: Array<IEvent>
}

export enum EventActionTypes {
  SET_QUESTS = 'SET_QUESTS',
  SET_EVENTS = 'SET_EVENTS',
}

export interface SetQuestsAction {
  type: EventActionTypes.SET_QUESTS
  payload: Array<IUser>
}

export interface SetEventsAction {
  type: EventActionTypes.SET_EVENTS
  payload: Array<IEvent>
}

export type EventAction = SetQuestsAction | SetEventsAction
