import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "../App.css";
import AuthLayout from "../Features/Auth/AuthLayout";
import Join from "../Features/Auth/Join";
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

export default function App() {
  const Routes = createBrowserRouter([
    {
      path: "/",
      element: <Home />, // الصفحة الرئيسية كمسار افتراضي
    },
    {
      path: "/auth",
      element: <AuthLayout />,     
      children: [
        { path: "login", element: <LoginTemp/> }, // صفحة تسجيل الدخول
        { path: "signup", element: <SignupTemp/> }, // صفحة تسجيل الدخول
        { path: "verify", element: <Verify /> }, // صفحة التحقق
      ],
    },
    {
      path: "/",
      element: <Layout />, // لايأوت الصفحات الداخلية
      children: [
        { path: "dashboard", element: <ProtectedRoute><Dashboard /></ProtectedRoute> },
        { path: "inventory", element: <ProtectedRoute><Inventory /></ProtectedRoute> },
        { path: "shipments", element: <ProtectedRoute><Shipments /></ProtectedRoute> },
        { path: "orders", element: <ProtectedRoute><Orders /></ProtectedRoute> },
        { path: "documents", element: <ProtectedRoute><Documents /></ProtectedRoute> },
        { path: "partners", element: <ProtectedRoute><Partners /></ProtectedRoute> },
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