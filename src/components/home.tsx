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
      <button onClick={() => history.push('/account')}>Account</button>
      <button onClick={() => history.push('/account?name=netflix')}>
        Netflix
      </button>
      <button onClick={() => history.push('/account?name=zillow-group')}>
        Zillow Group
      </button>
    </>
  )
}

export default Home
