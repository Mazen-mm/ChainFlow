import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import '../App.css';
import AuthLayout from '../Features/Auth/AuthLayout';
import Join from '../Features/Auth/Join';
import Verify from '../Features/Auth/Verify';
import Layout from '../Features/Layout/Layout';
import Dashboard from '../Features/Layout/Pages/Dashboard/Dashboard';
import Inventory from '../Features/Layout/Pages/Inventory/Inventory';
import Shipments from '../Features/Layout/Pages/Shipments/Shipments';
import Orders from '../Features/Layout/Pages/Orders/Orders';
import Documents from '../Features/Layout/Pages/Documents/Documents';
import Partners from '../Features/Layout/Pages/Partners/Partners';
import Home from '../Features/Home/Home'
import Notfound from '../Shared/Notfound/Notfound';
import Notifications from './../Features/Layout/Pages/Notifications/Notifications';
import Support from './../Features/Layout/Pages/Support/Support';
import LogOut from './../Features/Layout/Pages/LogOut/LogOut';

export default function App() {

  const Routes = createBrowserRouter([
    { path:'', element: <Layout/>, children:[
        { path:'dashboard' , element: <Dashboard/>},
        { path:'inventory' , element: <Inventory/>},
        { path:'shipments' , element: <Shipments/>},
        { path:'orders' , element: <Orders/>},
        { path:'documents' , element: <Documents/>},
        { path:'partners' , element: <Partners/>},
        { path:'notifications' , element: <Notifications/>},
        { path:'support' , element: <Support/>},
        { path:'logout' , element: <LogOut/>},
        { path:"*" , element: <Notfound/>},
      ]
    },
  ])

  return <>
      <RouterProvider router={Routes}></RouterProvider>
      <hr />
      <div><Home/></div>
      <hr />
      <div><AuthLayout/></div>
      <hr />
      <div><Verify/></div>
      <hr />
      <div><Join/></div>
      <hr />
  </>
}
