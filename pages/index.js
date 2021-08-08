import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Topbar from '../components/shared/Header/Topbar';
import ChangePassword from '../pages/ChangePassword'
import ChangePasswordPage from '../pages/ChangePassword';
import Login from '../pages/login/index'
import Register from '../pages/Register'
import ProductOverview from '../components/shared/ProductOverview';
import ForgotPassword from '../pages/ForgotPassword/';
import ProductDetails from '../components/shared/ProductDetails'
export default function Home() {
  return (
    <div >
      {/* <Topbar /> */}
      {/* <Register /> */}
      {/* <ForgotPassword /> */}
      {/* <Login /> */}
      {/* <ChangePassword /> */}
      {/* <ProductOverview /> */}
      <ProductDetails />
      {/* <p className="header">hello</p> */}
    </div >
  )
}
