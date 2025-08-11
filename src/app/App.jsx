

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

import DashboardPage from "../Features/dashboard/pages/DashboardPage";
import InventoryPage from './../Features/inventory/pages/InventoryPage';
import ShipmentsPage from "../Features/shipments/pages/ShipmentsPage";
import OrdersPage from "../Features/orders/pages/OrdersPage";
import DocumentsPage from './../Features/documents/pages/DocumentsPage';
import PartnersPage from './../Features/partners/pages/PartnersPage';
import EmployeesPage from "../Features/employees/pages/EmployeesPage";
import EmployeeInfo from "../Features/employeeInfo/EmployeeInfo";
import EmployeeChat from "../Features/employeeChat/employeeChat";

import NotificationsPage from "../Features/notifications/pages/NotificationsPage";
import Support from '../Features/support/SupportPage';

import Settings from "../Features/settings/Settings";
import GeneralPage from "../Features/settings/general/pages/GeneralPage";
import UserProfilePage from './../Features/settings/userProfile/pages/UserProfilePage';
import SecurityPage from './../Features/settings/security/pages/SecurityPage';
import NotificationsSettingsPage from "../Features/settings/notificationSettings/pages/NotificationSettingsPage";
import IntegrationsPage from "../Features/settings/integrations/pages/IntegrationsPage";
import BillingSubscription from "../Features/settings/BillingSubscription/BillingSubscription";

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
        { path: "settings", element: <ProtectedRoute><Settings /></ProtectedRoute> , children: [
          {path: "general", element: <ProtectedRoute><GeneralPage /></ProtectedRoute>},
          {path: "userprofile", element: <ProtectedRoute><UserProfilePage /></ProtectedRoute>},
          {path: "security", element: <ProtectedRoute><SecurityPage /></ProtectedRoute>},
          {path: "notificationSettings", element: <ProtectedRoute><NotificationsSettingsPage /></ProtectedRoute>},
          {path: "integrations", element: <ProtectedRoute><IntegrationsPage /></ProtectedRoute>},
          {path: "billingSubscription", element: <ProtectedRoute><BillingSubscription /></ProtectedRoute>},
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
