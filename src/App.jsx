import { useState } from 'react'
import './App.css'
import Login from './Pages/Login'
import { Outlet } from 'react-router-dom'

function App() {


  return (
    <>
     <Outlet />
    </>
  )
}

export default App
