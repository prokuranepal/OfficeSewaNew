import '../styles/globals.css'
import Login from '../components/Login/index'
import SearchBar from '../components/shared/Searchbar'
import ChangePassword from '../components/ChangePassword'
import Register from '../components/Register'
import ForgotPassword from '../components/ForgotPassword'

function MyApp({ Component, pageProps }) {
  // return <Component {...pageProps} />
  return (
    <>
      {/* <SearchBar /> */}
      {/* <Login /> */}
      {/* <Register /> */}
      <ForgotPassword />
      {/* <ChangePassword /> */}
    </>
  )
}

export default MyApp
