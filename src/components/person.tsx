import React from 'react'
import { useLocation } from 'react-router-dom'

function Person() {
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  console.debug(searchParams, location.search, window.location.search)
  return (
    <>
      <div>Person, id: {searchParams.get('id') ?? 'No ID'}</div>
    </>
  )
}

export default Person
