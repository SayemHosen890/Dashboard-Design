import React from 'react'
import "./App.css"
import { BrowserRouter, Route, Routes } from 'react-router'
import Header from './Components/Pages/Home/Header'
import Dashboard from './Components/Pages/Dashboard/Dashboard'
import Sidebar from './Components/Pages/Sidebar/Sidebar'

const App = () => {
  return (
    <BrowserRouter>
      <Header></Header>
      <div className='flex'>
        <div className='w-60 bg-white h-screen'>
          <Sidebar></Sidebar>
        </div>
        <div>
          <Routes>
            <Route path='/' exact={true} element={<Dashboard></Dashboard>} />
            <Route path='/dashboard' exact={true} element={<Dashboard></Dashboard>} />
          </Routes>
        </div>
      </div>

    </BrowserRouter>
  )
}

export default App