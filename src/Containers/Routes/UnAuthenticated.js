import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../Pages/Auth/Login'

const UnAuthenticated = () => {
  return (
    <>
      <Routes>
          <Route path='*' element={<Login/>}></Route>
      </Routes>
    </>
  )
}

export default UnAuthenticated
