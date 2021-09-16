import React, { FC } from 'react'
import { Row, Menu, Layout } from 'antd'
import { useHistory } from 'react-router'

import { useActions } from '../hooks/useActions'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { RouteNames } from '../routes'

const Navbar: FC = () => {
  const router = useHistory()
  const { isAuth, user } = useTypedSelector(state => state.auth)
  const { logout } = useActions()

  const handleLogout = () => {
    logout()
  }

  return (
    <Layout.Header>
      <Row justify="end">
        {isAuth ? (
          <>
            <div style={{ color: 'red' }}>{user.username}</div>
            <Menu theme="dark" mode="horizontal" selectable={false}>
              <Menu.Item key={1} onClick={handleLogout}>
                Log out
              </Menu.Item>
            </Menu>
          </>
        ) : (
          <Menu theme="dark" mode="horizontal" selectable={false}>
            <Menu.Item onClick={() => router.push(RouteNames.LOGIN)} key={1}>
              Log in
            </Menu.Item>
          </Menu>
        )}
      </Row>
    </Layout.Header>
  )
}

export default Navbar
