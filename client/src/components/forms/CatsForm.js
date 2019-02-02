import React from 'react'
import PropTypes from 'prop-types'

const CatsForm = ({ submit, loading, cats }) => {
  const { cat1, cat2 } = cats
  const onSubmit = () => {
    submit()
  }

  return (
    <form onSubmit={onSubmit}>
      <div className='cats-selector'>
        <input id='cat1' type='radio' name='cat1' value='1' />
        <label
          className='drinkcard-cc'
          htmlFor='cat2'
          style={{ backgroundImage: `url:(${cat1.image})` }}
        />
        <input id='cat2' type='radio' name='cat2' value='2' />
        <label
          className='drinkcard-cc'
          htmlFor='cat2'
          style={{ backgroundImage: `url:(${cat2.image})` }}
        />
      </div>
    </form>
  )
}

CatsForm.propTypes = {
  submit: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  cats: PropTypes.shape({
    cat1: PropTypes.shape({
      id: PropTypes.number,
      image: PropTypes.string
    }),
    cat2: PropTypes.shape({
      id: PropTypes.number,
      image: PropTypes.string
    })
  }).isRequired
}

export default CatsForm
