import './App.css'
import Join from './Components/Auth/Join/Join';
import Login from './Components/Auth/Login/Login';
import Signup from './Components/Auth/Signup/Signup';
import Verify from './Components/Auth/Verify/Verify';

export default function App() {

  return <>
      <hr />
      <div><Signup/></div>
      <hr />
      <div><Login/></div>
      <hr />
      <div><Verify/></div>
      <hr />
      <div><Join/></div>
      <hr />
  </>
}
