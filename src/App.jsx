import React from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
  useLocation,
} from "react-router-dom";
import "./App.css";
import { AuthProvider } from "./AuthContext";
import ProtectedRoute from "./ProtectedRoute";
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
import Setting from "./Components/Pages/Settings/Setting";
import Condition from "./Components/Pages/Settings/Condition";
import Privacy from "./Components/Pages/Settings/Privacy";
import Contact from "./Components/Pages/Settings/Contact";
import Logout from "./Components/Pages/Logout/Logout";
import Forget from "./Components/Pages/Logout/Forget";
import CheckEmail from "./Components/Pages/Logout/CheckEmail";
import Verify from "./Components/Pages/Logout/Verify";
import UpdateRegister from "./Components/Pages/Dashboard/UpdateRegister";
import AuctionDetails from "./Components/Pages/AuctionManagement/AuctionDetails";
import ViewAll from "./Components/Pages/SupervisionDashboard/ViewAll";
import TaskComplete from "./Components/Pages/SupervisionDashboard/TaskComplete";
import TransactionDetails from "./Components/Pages/Transaction/TransactionDetails";
import Notification from "./Components/Pages/Home/Notification";
import PartnerDetail from "./Components/Pages/PartnerManage/PartnerDetail";
import AuditViewAll from "./Components/Pages/AuditDashboard/AuditViewAll";

const Layout = ({ children }) => {
    const location = useLocation();
    const hideLayout = location.pathname === "/logout"; // Hide Header & Sidebar on login

    return (
      <>
        {!hideLayout && <Header />}
        <div className="flex">
          {!hideLayout && (
            <div className="sidebars w-[15%]">
              <Sidebar />
            </div>
          )}
          <div
            style={{ padding: "20px" }}
            className={`${hideLayout ? "w-full" : "w-[85%] bg-gray-200"}`}
          >
            {children}
          </div>
        </div>
      </>
    );
  };

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Public Route */}
          <Route path="/logout" element={<Logout />} />
          <Route path="/forget" element={<Forget />} />
          <Route path="/checkEmail" element={<CheckEmail />} />
          <Route path="/verify" element={<Verify />} />

          {/* Protected Routes inside Layout */}
          <Route
            path="/*"
            element={
              <ProtectedRoute>
                <Layout>
                  <Routes>
                    <Route path="/" element={<Navigate to="/dashboard" />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/auction" element={<Auction />} />
                    <Route path="/notification" element={<Notification />} />
                    <Route path="/userManage" element={<UserManage />} />
                    <Route path="/partnerManage" element={<PartnerManage />} />
                    <Route path="/partnerDetail" element={<PartnerDetail />} />
                    <Route
                      path="/dashboard/updateRegister"
                      element={<UpdateRegister />}
                    />
                    <Route path="/transaction" element={<Transaction />} />
                    <Route path="/firstCategory" element={<FirstCategory />} />
                    <Route path="/variable" element={<Variable />} />
                    <Route path="/conversation" element={<Conversation />} />
                    <Route path="/bankTransfer" element={<BankTransfer />} />
                    <Route path="/makeAdmin" element={<MakeAdmin />} />
                    <Route
                      path="/supervisionDashboard"
                      element={<SupervisionDashboard />}
                    />
                    <Route path="/activityLogs" element={<ActivityLogs />} />
                    <Route path="/auditDashboard" element={<AuditDashboard />} />
                    <Route path="/support" element={<Support />}>
                      <Route path="file-claim" element={<FileClaim />} />
                      <Route path="ticket" element={<Ticket />} />
                    </Route>
                    <Route path="/setting" element={<Setting />}>
                      <Route path="condition" element={<Condition />} />
                      <Route path="privacy" element={<Privacy />} />
                      <Route path="contactUs" element={<Contact />} />
                    </Route>
                    <Route path="/profile" element={<Profile />} />
                    <Route
                      path="/transactionDetails"
                      element={<TransactionDetails />}
                    />
                    <Route path="/logout" element={<Logout />} />
                    <Route path="/forget" element={<Forget />} />
                    <Route path="/checkEmail" element={<CheckEmail />} />
                    <Route path="/verify" element={<Verify />} />
                    <Route path="/auctionDetails" element={<AuctionDetails />} />
                    <Route
                      path="/supervisionDashboard/viewAll"
                      element={<ViewAll />}
                    />
                    <Route
                      path="/auditDashboard/viewAll"
                      element={<ViewAll />}
                    />
                    <Route
                      path="/auditDashboard/auditViewAll"
                      element={<AuditViewAll />}
                    />
                    <Route
                      path="/supervisionDashboard/taskComplete"
                      element={<TaskComplete />}
                    />
                  </Routes>
                </Layout>
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
