import React, { FC, useState } from 'react'
import { Button, DatePicker, Form, Input, Row, Select } from 'antd'
import moment from 'moment'
import { Moment } from 'moment'

import { useTypedSelector } from '../hooks/useTypedSelector'
import { IEvent } from '../models/IEvent'
import { IUser } from '../models/IUser'
import { formatDate } from '../utils/date'
import { rules } from '../utils/rules'

interface EventFormProps {
  quests: Array<IUser>
  submit: (event: IEvent) => void
}

const EventForm: FC<EventFormProps> = ({ quests, submit }) => {
  const [event, setEvent] = useState<IEvent>({
    author: '',
    date: '',
    description: '',
    quest: '',
  } as IEvent)

  const { user } = useTypedSelector(state => state.auth)

  const selectDate = (date: Moment | null) => {
    if (date) {
      setEvent({ ...event, date: formatDate(date?.toDate()) })
    }
  }

  const addEvent = () => {
    submit({ ...event, author: user.username })
  }

  const disabledDate = (current: Moment) => {
    return current < moment().startOf('day')
  }
  return (
    <Form onFinish={addEvent}>
      <Form.Item label="Event's name" name="description" rules={[rules.required(`Please input event's description!`)]}>
        <Input value={event.description} onChange={e => setEvent({ ...event, description: e.target.value })} />
      </Form.Item>
      <Form.Item label="Event's date" name="date" rules={[rules.required(`Please input event's date!`)]}>
        <DatePicker disabledDate={disabledDate} onChange={date => selectDate(date)} />
      </Form.Item>
      disabledDate
      <Form.Item>
        <Select onChange={(quest: string) => setEvent({ ...event, quest })}>
          {quests.map(quest => (
            <Select.Option key={quest.username} value={quest.username}>
              {quest.username}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
      <Row justify="end">
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Add
          </Button>
        </Form.Item>
      </Row>
    </Form>
  )
}

export default EventForm
