import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import BankTransfer from "./Components/BankTransfer/BankTransfer";
import ActivityLogs from "./Components/Pages/ActivityLogs/ActivityLogs";
import Auction from "./Components/Pages/AuctionManagement/Auction";
import AuditDashboard from "./Components/Pages/AuditDashboard/AuditDashbaord";
import FirstCategory from "./Components/Pages/CategoryManage/FirstCategory";
import Conversation from "./Components/Pages/Conversation/Conversation";
import Dashboard from "./Components/Pages/Dashboard/Dashboard";
import Header from "./Components/Pages/Home/Header";
import MakeAdmin from "./Components/Pages/MakeAdmin/MakeAdmin";
import PartnerManage from "./Components/Pages/PartnerManage/PartnerManage";
import Profile from "./Components/Pages/Profile/Profile";
import Sidebar from "./Components/Pages/Sidebar/Sidebar";
import SupervisionDashboard from "./Components/Pages/SupervisionDashboard/SupervisionDashboard";
import FileClaim from "./Components/Pages/Support/FileClaim";
import Support from "./Components/Pages/Support/Support";
import Ticket from "./Components/Pages/Support/Ticket";
import Transaction from "./Components/Pages/Transaction/Transaction";
import UserManage from "./Components/Pages/UserManage/UserManage";
import Variable from "./Components/Pages/VariableManage/Variable";

const App = () => {
  return (
    <BrowserRouter>
      <Header></Header>
      <div className="flex">
        <div className="sidebars w-[15%]">
          <Sidebar></Sidebar>
        </div>
        <div style={{ padding: "20px" }} className="w-[85%] bg-gray-200">
          <Routes>
            <Route path="/" exact={true} element={<Dashboard></Dashboard>} />
            <Route
              path="/dashboard"
              exact={true}
              element={<Dashboard></Dashboard>}
            />
            <Route path="/auction" exact={true} element={<Auction></Auction>} />
            <Route
              path="/userManage"
              exact={true}
              element={<UserManage></UserManage>}
            />
            <Route
              path="/partnerManage"
              exact={true}
              element={<PartnerManage></PartnerManage>}
            />
            <Route
              path="/transaction"
              exact={true}
              element={<Transaction></Transaction>}
            />
            <Route
              path="/firstCategory"
              exact={true}
              element={<FirstCategory></FirstCategory>}
            />
            <Route
              path="/variable"
              exact={true}
              element={<Variable></Variable>}
            />
            <Route
              path="/conversation"
              exact={true}
              element={<Conversation></Conversation>}
            />
            <Route
              path="/bankTransfer"
              exact={true}
              element={<BankTransfer></BankTransfer>}
            />
            <Route
              path="/makeAdmin"
              exact={true}
              element={<MakeAdmin></MakeAdmin>}
            />
            <Route
              path="/supervisionDashboard"
              exact={true}
              element={<SupervisionDashboard></SupervisionDashboard>}
            />
            <Route
              path="/activityLogs"
              exact={true}
              element={<ActivityLogs></ActivityLogs>}
            />
            <Route
              path="/auditDashboard"
              exact={true}
              element={<AuditDashboard></AuditDashboard>}
            />
            <Route path="/support" element={<Support></Support>}>
              <Route path="file-claim" element={<FileClaim></FileClaim>} />
              <Route path="ticket" element={<Ticket></Ticket>} />
            </Route>
            <Route path="/profile" element={<Profile></Profile>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
