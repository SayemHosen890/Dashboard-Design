import React from 'react'
import "./App.css"
import { BrowserRouter, Route, Routes } from 'react-router'
import Header from './Components/Pages/Home/Header'
import Dashboard from './Components/Pages/Dashboard/Dashboard'
import Sidebar from './Components/Pages/Sidebar/Sidebar'
import Auction from './Components/Pages/AuctionManagement/Auction'
import UserManage from './Components/Pages/UserManage/UserManage'
import PartnerManage from './Components/Pages/PartnerManage/PartnerManage'
import Transaction from './Components/Pages/Transaction/Transaction'
import FirstCategory from './Components/Pages/CategoryManage/FirstCategory'
import Variable from './Components/Pages/VariableManage/Variable'
import Conversation from './Components/Pages/Conversation/Conversation'

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
            <Route path='/userManage' exact={true} element={<UserManage></UserManage>} />
            <Route path='/partnerManage' exact={true} element={<PartnerManage></PartnerManage>} />
            <Route path='/transaction' exact={true} element={<Transaction></Transaction>} />
            <Route path='/firstCategory' exact={true} element={<FirstCategory></FirstCategory>} />
            <Route path='/variable' exact={true} element={<Variable></Variable>} />
            <Route path='/conversation' exact={true} element={<Conversation></Conversation>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App