import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import api from '../api'
import { Link } from 'react-router-dom'
import { Row, Col } from 'antd'

const HomePage = () => {
  const [loading, updateLoading] = useState(false)
  const [cats, updateCats] = useState({
    cat1: {},
    cat2: {}
  })

  const onInitialRender = () => {
    updateLoading(true)
    api.cats.get()
      .then(res => {
        updateCats(res)
        updateLoading(false)
      })
      .catch(err => console.log(err))
  }

  const onSubmit = (e, res) => {
    const { cat1, cat2 } = this.state.data
    e.preventDefault()
    this.setState({ loading: true })
    api.vote.post({
      cat1: { id: cat1.ID, voted: res === 1 },
      cat2: { id: cat2.ID, voted: res === 2 }
    })
      .then()
      .catch(err => console.log(err))
  }

  useEffect(onInitialRender, [])

  return (
    <div>
      HomePage
      <Row type="flex">
        <Col span={12}>
          <img onClick={(e) => onSubmit(e, 1)} alt="cat1" src={cats.cat1.image}/>
        </Col>
        <Col span={12}>
          <img onClick={(e) => onSubmit(e, 2)} alt="cat2" src={cats.cat2.image}/>
        </Col>
      </Row>
      <Link to="/results">Resultats</Link>
    </div>)
}

HomePage.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired
}

export default HomePage
