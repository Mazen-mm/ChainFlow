import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "../App.css";
import AuthLayout from "../Features/Auth/AuthLayout";
import Verify from "../Features/Auth/Verify";
import Layout from "../Features/Layout/Layout";
import Dashboard from "../Features/Layout/Pages/Dashboard/Dashboard";
import Inventory from "../Features/Layout/Pages/Inventory/Inventory";
import Shipments from "../Features/Layout/Pages/Shipments/Shipments";
import Orders from "../Features/Layout/Pages/Orders/Orders";
import Documents from "../Features/Layout/Pages/Documents/Documents";
import Partners from "../Features/Layout/Pages/Partners/Partners";
import Home from "../Features/Home/Home";
import Notfound from "../Shared/Notfound/Notfound";
import { AuthProvider, ProtectedRoute } from "../ProtectedRoute/ProtectedRoute"; // استيراد المكونات الجديدة
import LoginTemp from "../Features/Auth/Components/Templates/LoginTemp";
import SignupTemp from "../Features/Auth/Components/Templates/SignupTemp";
import Support from './../Features/Layout/Pages/Support/Support';
import Notifications from './../Features/Layout/Pages/Notifications/Notifications';
import LogOut from './../Features/Layout/Pages/LogOut/LogOut';
import Settings from "../Features/Layout/Pages/Settings/Settings";
import General from './../Features/Layout/Pages/Settings/Components/General';
import UserProfile from './../Features/Layout/Pages/Settings/Components/UserProfile';
import Security from './../Features/Layout/Pages/Settings/Components/Security';
import Notifs from "../Features/Layout/Pages/Settings/Components/Notifs";
import Integrations from './../Features/Layout/Pages/Settings/Components/Integrations';

export default function App() {
  const Routes = createBrowserRouter([
    {  path: "" , element: <Home />},
    {  path: "/auth" , element: <AuthLayout /> ,  children: [
        { path: "login", element: <LoginTemp/> }, // صفحة تسجيل الدخول
        { path: "signup", element: <SignupTemp/> }, // صفحة تسجيل الدخول
        { path: "verify", element: <Verify /> }, // صفحة التحقق
      ],
    },
    {  path: "/pages" ,  element: <Layout /> ,  children: [
        { path: "dashboard" , element: <ProtectedRoute><Dashboard /></ProtectedRoute> },
        { path: "inventory", element: <ProtectedRoute><Inventory /></ProtectedRoute> },
        { path: "shipments", element: <ProtectedRoute><Shipments /></ProtectedRoute> },
        { path: "orders", element: <ProtectedRoute><Orders /></ProtectedRoute> },
        { path: "documents", element: <ProtectedRoute><Documents /></ProtectedRoute> },
        { path: "partners", element: <ProtectedRoute><Partners /></ProtectedRoute> },
        { path: "notifications", element: <ProtectedRoute><Notifications /></ProtectedRoute> },
        { path: "support", element: <ProtectedRoute><Support /></ProtectedRoute> },
        { path: "logout", element: <ProtectedRoute><LogOut /></ProtectedRoute> },
        { path: "settings", element: <ProtectedRoute><Settings /></ProtectedRoute> , children: [
          {path: "general", element: <ProtectedRoute><General /></ProtectedRoute>},
          {path: "userprofile", element: <ProtectedRoute><UserProfile /></ProtectedRoute>},
          {path: "security", element: <ProtectedRoute><Security /></ProtectedRoute>},
          {path: "notifs", element: <ProtectedRoute><Notifs /></ProtectedRoute>},
          {path: "integrations", element: <ProtectedRoute><Integrations /></ProtectedRoute>},
        ]
        },
        { path: "*", element: <Notfound /> }, // صفحة غير موجودة
      ],
    },
  ]);

  return (
    <AuthProvider> {/* لف التطبيق بـ AuthProvider */}
      <RouterProvider router={Routes} />
    </AuthProvider>
  );
}
