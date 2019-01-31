import React from 'react'
import PropTypes from 'prop-types'
import api from '../api'
import { Link } from "react-router-dom"
import { Row, Col } from "antd"
class HomePage extends React.Component {

  state = {
    loading: false,
    data: {
      cat1: {},
      cat2: {}
    }
  }

  componentDidMount() {
    api.cats.get()
      .then(res =>
        this.setState({ ...this.state, data: res }))
      .catch(err => console.log(err))
  }

  onSubmit = (e, res) => {
    const { cat1, cat2 } = this.state.data
    e.preventDefault()
    this.setState({ loading: true })
    api.vote.post({
      cat1: { id: cat1.ID, voted: res === 1 ? true : false },
      cat2: { id: cat2.ID, voted: res === 2 ? true : false }
    })
      .then()
      .catch(err => console.log(err))
  }

  render() {
    const { data } = this.state
    return (
      <div>
        HomePage
        <Row type="flex">
          <Col span={12}>
            <img onClick={(e) => this.onSubmit(e, 1)} alt="cat1" src={data.cat1.image} />
          </Col>
          <Col span={12}>
            <img onClick={(e) => this.onSubmit(e, 2)} alt="cat2" src={data.cat2.image} />
          </Col>
        </Row>
        <Link to="/results">Resultats</Link>
      </div>)
  }
}

HomePage.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired
}

export default HomePage
