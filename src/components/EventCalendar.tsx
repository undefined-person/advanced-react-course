import React, { FC } from 'react'
import { Calendar } from 'antd'
import { Moment } from 'moment'

import { IEvent } from '../models/IEvent'
import { formatDate } from '../utils/date'

interface EventCalendarProps {
  events: Array<IEvent>
}

const EventCalendar: FC<EventCalendarProps> = ({ events }) => {
  const dateCellRender = (value: Moment) => {
    const formatedDate = formatDate(value.toDate())
    const currentDayEvents = events.filter(event => event.date === formatedDate)
    return (
      <div>
        {currentDayEvents.map((event, index: number) => (
          <div key={index}>{event.description}</div>
        ))}
      </div>
    )
  }

  return <Calendar dateCellRender={dateCellRender} />
}

export default EventCalendar
