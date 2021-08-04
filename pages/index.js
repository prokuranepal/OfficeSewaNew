<<<<<<< HEAD

// import styles from '../styles/Home.module.css'
import HomePage from './home';

export default function Home() {
  return (
    <div>
      <HomePage/>
      {/* <Topbar />
      <p className="header">hello</p> */}
    </div>
=======
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Topbar from '../components/shared/Header/Topbar';
import ChangePassword from '../pages/ChangePassword'
import ChangePasswordPage from '../pages/ChangePassword';
import Login from '../pages/login/index'
import Register from '../pages/Register'
import ForgotPassword from '../pages/ForgotPassword/';

export default function Home() {
  return (
    <div >
      {/* <Topbar /> */}
      {/* <Register /> */}
      {/* <ForgotPassword /> */}
      {/* <Login /> */}
      <ChangePassword />
      {/* <p className="header">hello</p> */}
    </div >
>>>>>>> ebf3f48eb0ebc9fff96421c822b79ed13dcf0899
  )
}
