import React from 'react'
import "./App.css"
import { BrowserRouter, Route, Routes } from 'react-router'
import Header from './Components/Pages/Home/Header'
import Dashboard from './Components/Pages/Dashboard/Dashboard'
import Sidebar from './Components/Pages/Sidebar/Sidebar'
import Auction from './Components/Pages/AuctionManagement/Auction'

const App = () => {
  return (
    <BrowserRouter>
      <Header></Header>
      <div className='flex'>
        <div className='sidebars w-[15%]'>
          <Sidebar></Sidebar>
        </div>
        <div style={{ padding: "20px"}} className='w-[85%] bg-gray-200'>
          <Routes>
            <Route path='/' exact={true} element={<Dashboard></Dashboard>} />
            <Route path='/dashboard' exact={true} element={<Dashboard></Dashboard>} />
            <Route path='/auction' exact={true} element={<Auction></Auction>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App