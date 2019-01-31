import React, { useState, useEffect } from 'react'
import api from '../api'

const ResultPage = () => {
  const [cats, updateCats] = useState([])
  const [loading, updateLoading] = useState(false)

  const onInitialRender = () => {
    updateLoading(true)
    api.cats.getAllOrdered()
      .then((res) => {
        updateLoading(false)
        updateCats(res)
      })
      .catch(err => console.log(err))
  }

  useEffect(onInitialRender, [])

  const displayCats = () => (
    <tr>
      {cats.map(cat =>
        <ul>{cat.rating}</ul>
      )}
    </tr>
  )

  return <div>ResultPage
    {displayCats()}
  </div>
}

export default ResultPage
