import React from 'react'
import { useHistory } from 'react-router-dom'

function Home() {
  const history = useHistory()
  console.debug(history)
  return (
    <>
      <div>Home</div>
      <button onClick={() => history.push('/')}>Home</button>
      <button onClick={() => history.push('/about')}>About</button>
      <button onClick={() => history.push('/person')}>Person</button>
      <button onClick={() => history.push('/person?id=1')}>Person 1</button>
      <button onClick={() => history.push('/person?id=2')}>Person 2</button>
    </>
  )
}

export default Home
