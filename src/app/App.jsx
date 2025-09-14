

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from '../Shared/redux/store';
import { ProtectedRoute } from "../ProtectedRoute/ProtectedRoute";
import "../App.css";
import AuthLayout from "../Features/Auth/AuthLayout";
import SignupTemp from "../Features/Auth/Components/Templates/SignupTemp";
import LoginTemp from "../Features/Auth/Components/Templates/LoginTemp";
import Verify from "../Features/Auth/Verify";
import Notfound from "../Shared/Notfound/Notfound";
import Home from "../Features/Home/Home";
import Layout from "../Features/Layout/Layout";

import DashboardPage from "../Features/Dashboard/pages/DashboardPage";
import InventoryPage from './../Features/Inventory/pages/InventoryPage';
import ShipmentsPage from "../Features/Shipments/pages/ShipmentsPage";
import OrdersPage from "../Features/Orders/pages/OrdersPage";
import DocumentsPage from './../Features/Documents/pages/DocumentsPage';
import PartnersPage from './../Features/Partners/pages/PartnersPage';
import EmployeesPage from "../Features/Employees/pages/EmployeesPage";
import EmployeeInfo from "../Features/EmployeeInfo/EmployeeInfo";
import EmployeeChat from "../Features/EmployeeChat/employeeChat";

import NotificationsPage from "../Features/Notifications/pages/NotificationsPage";
import Support from '../Features/support/SupportPage';
import Logout from "../Features/logout/Logout";

import Settings from "../Features/Settings/Settings";
import GeneralPage from "../Features/Settings/general/pages/GeneralPage";
import UserProfilePage from './../Features/Settings/userProfile/pages/UserProfilePage';
import SecurityPage from './../Features/Settings/security/pages/SecurityPage';
import NotificationsSettingsPage from "../Features/Settings/notificationSettings/pages/NotificationSettingsPage";
import IntegrationsPage from "../Features/Settings/integrations/pages/IntegrationsPage";
import BillingSubscription from "../Features/Settings/BillingSubscription/BillingSubscription";
import AdminDashboardPage from './../Features/Admin/AdminDashboard/pages/AdminDashboardPage';
import PlansPage from './../Features/Admin/Plans/pages/PlansPage';
import CompaniesPage from './../Features/Admin/Companies/pages/CompaniesPage';
import UserManagementPage from './../Features/Admin/UserManagement/pages/UserManagementPage';
import Admin from "../Features/Admin/Admin";

export default function App() {
  const Routes = createBrowserRouter([
    { path: "" , element: <Home />},
    { path: "/auth" , element: <AuthLayout /> ,  children: [
        { path: "login", element: <LoginTemp/> },
        { path: "signup", element: <SignupTemp/> },
        { path: "verify", element: <Verify /> },
      ],
    },
    {  path: "/pages" ,  element: <Layout /> ,  children: [
        { path: "dashboard" , element: <ProtectedRoute><DashboardPage /></ProtectedRoute> },
        { path: "inventory", element: <ProtectedRoute><InventoryPage /></ProtectedRoute> },
        { path: "shipments", element: <ProtectedRoute><ShipmentsPage /></ProtectedRoute> },
        { path: "orders", element: <ProtectedRoute><OrdersPage /></ProtectedRoute> },
        { path: "documents", element: <ProtectedRoute><DocumentsPage /></ProtectedRoute> },
        { path: "partners", element: <ProtectedRoute><PartnersPage /></ProtectedRoute> },
        { path: "employees", element: <ProtectedRoute><EmployeesPage /></ProtectedRoute> },
        { path: "notifications", element: <ProtectedRoute><NotificationsPage /></ProtectedRoute> },
        { path: "support", element: <ProtectedRoute><Support /></ProtectedRoute> },
        { path: "employees/employeeInfo", element: <ProtectedRoute><EmployeeInfo/></ProtectedRoute> },
        { path: "employees/employeeChat", element: <ProtectedRoute><EmployeeChat/></ProtectedRoute> },
        { path: "logout", element: <ProtectedRoute><Logout /></ProtectedRoute> },
        { path: "settings", element: <ProtectedRoute><Settings /></ProtectedRoute> , children: [
          {path: "general", element: <ProtectedRoute><GeneralPage /></ProtectedRoute>},
          {path: "userprofile", element: <ProtectedRoute><UserProfilePage /></ProtectedRoute>},
          {path: "security", element: <ProtectedRoute><SecurityPage /></ProtectedRoute>},
          {path: "notificationSettings", element: <ProtectedRoute><NotificationsSettingsPage /></ProtectedRoute>},
          {path: "integrations", element: <ProtectedRoute><IntegrationsPage /></ProtectedRoute>},
          {path: "billingSubscription", element: <ProtectedRoute><BillingSubscription /></ProtectedRoute>},
          ]
        },
        { path: "admin", element: <ProtectedRoute><Admin /></ProtectedRoute> , children: [
          {path: "dashboard", element: <ProtectedRoute><AdminDashboardPage /></ProtectedRoute>},
          {path: "userManagement", element: <ProtectedRoute><UserManagementPage /></ProtectedRoute>},
          {path: "companies", element: <ProtectedRoute><CompaniesPage /></ProtectedRoute>},
          {path: "plans", element: <ProtectedRoute><PlansPage /></ProtectedRoute>},
          ]
        },
        { path: "*", element: <Notfound /> }, // صفحة غير موجودة
      ],
    },
  ]);

  return (
    <Provider store={store}>
      <RouterProvider router={Routes} />
    </Provider>
  );
}
