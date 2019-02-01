import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import api from '../../api'
import { Link } from 'react-router-dom'
import { Form, Radio, Button } from 'antd'

const HomePage = () => {
  const [disabled, updateDisabled] = useState(true)
  const [loading, updateLoading] = useState(false)
  const [cats, updateCats] = useState({
    cat1: {
      id: 0,
      image: 0
    },
    cat2: {
      id: 0,
      image: 0
    }
  })

  const onInitialRender = () => {
    updateLoading(true)
    api.cats.get()
      .then(res => {
        updateCats({
          cat1: {
            id: res.cat1.ID,
            image: res.cat1.image
          },
          cat2: {
            id: res.cat2.ID,
            image: res.cat2.image
          }
        })
        updateLoading(false)
      })
      .catch(err => console.log(err))
  }

  const onSubmit = (e, res) => {
    const { cat1, cat2 } = cats
    e.preventDefault()
    updateLoading(true)
    api.vote.post({
      cat1: { id: cat1.id, voted: res === 1 },
      cat2: { id: cat2.id, voted: res === 2 }
    })
      .then(
        () => updateLoading(false)
      )
      .catch(err => console.log(err))
  }

  useEffect(onInitialRender, [])

  return (
    <div>
      HomePage
      <Form>
        <Radio.Group span={12}>
          <Radio.Button value='1'><img onClick={(e) => onSubmit(e, 1)} alt='cat1' src={cats.cat1.image} /></Radio.Button>
          <Radio.Button value='2'><img onClick={(e) => onSubmit(e, 2)} alt='cat2' src={cats.cat2.image} /></Radio.Button>
        </Radio.Group>
        <Button>Soumettre</Button>
      </Form>
      <Link to='/results'>Resultats</Link>
    </div>)
}

HomePage.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired
}

export default HomePage
