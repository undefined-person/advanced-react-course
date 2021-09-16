import React, { FC, useEffect, useState } from 'react'
import { Button, Layout, Modal, Row } from 'antd'

import EventCalendar from '../components/EventCalendar'
import EventForm from '../components/EventForm'
import { useActions } from '../hooks/useActions'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { IEvent } from '../models/IEvent'

const Calendar: FC = () => {
  const [modalVisible, setModalVisible] = useState(false)
  const { fetchQuests, createEvent, fetchEvents } = useActions()
  const { quests, events } = useTypedSelector(state => state.calendar)
  const { user } = useTypedSelector(state => state.auth)
  useEffect(() => {
    fetchQuests()
    fetchEvents(user.username)
  }, [])

  const addNewEvent = (event: IEvent) => {
    setModalVisible(false)
    createEvent(event)
  }
  return (
    <Layout>
      <EventCalendar events={events} />
      <Row justify="center">
        <Button onClick={() => setModalVisible(true)}>Add event</Button>
      </Row>
      <Modal title="Event" visible={modalVisible} footer={null} onCancel={() => setModalVisible(false)}>
        <EventForm quests={quests} submit={addNewEvent} />
      </Modal>
    </Layout>
  )
}

export default Calendar
