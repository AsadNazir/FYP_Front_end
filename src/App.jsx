import { useState, useContext } from 'react'
import './App.css'
import Login from './Pages/Login'
import { Outlet } from 'react-router-dom'

import { userStore } from './Redux/userStore.js'
import { Provider} from 'react-redux'

function App() {

  

  return (
    <Provider store={userStore}>
     <Outlet />
    </Provider>
  )
}

export default App
