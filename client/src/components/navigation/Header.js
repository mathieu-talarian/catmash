import React from 'react'
import PropTypes from 'prop-types'
import { Layout, Menu } from 'antd'
import { Link } from 'react-router-dom'

const Header = ({ location }) => {
  return <Layout.Header style={{ position: 'fixed', zIndex: 1, width: '100%' }} >
    <Menu
      theme='dark'
      mode='horizontal'
      defaultSelectedKeys={['2']}
      style={{ lineHeight: '64px' }}
    >
      <Menu.Item key='1'><Link to='/'>To home</Link>
      </Menu.Item>
      <Menu.Item key='2'><Link to='/result'>To result</Link></Menu.Item>
    </Menu>
  </Layout.Header>
}

Header.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired
}

export default Header
