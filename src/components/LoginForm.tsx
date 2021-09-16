import React, { FC, useState } from 'react'
import { Button, Form, Input } from 'antd'

import { useActions } from '../hooks/useActions'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { rules } from '../utils/rules'

const LoginForm: FC = () => {
  const { login } = useActions()
  const { isLoading, error } = useTypedSelector(state => state.auth)

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const onFinishHandler = () => {
    login(username, password)
  }

  const usernameHandler = (e: React.FormEvent<HTMLInputElement>) => {
    setUsername(e.currentTarget.value)
  }

  const passwordHandler = (e: React.FormEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value)
  }

  return (
    <Form onFinish={onFinishHandler}>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <Form.Item label="Username" name="username" rules={[rules.required('Please input your username!')]}>
        <Input value={username} onChange={e => usernameHandler(e)} />
      </Form.Item>
      <Form.Item label="Password" name="password" rules={[rules.required('Please input your password!')]}>
        <Input.Password value={password} onChange={e => passwordHandler(e)} />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" loading={isLoading}>
          Log in
        </Button>
      </Form.Item>
    </Form>
  )
}

export default LoginForm
