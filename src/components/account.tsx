import React from 'react'
import { useLocation } from 'react-router-dom'

function Account() {
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  console.debug(searchParams, location)
  return (
    <>
      <div>Account</div>
      {JSON.stringify(searchParams.get('name'))}
    </>
  )
}

export default Account
