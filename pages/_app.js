import '../styles/globals.css'
import Login from '../components/Login/index'
import SearchBar from '../components/shared/Searchbar'

function MyApp({ Component, pageProps }) {
  // return <Component {...pageProps} />
  return (
    <>
      <SearchBar />
      <Login />
    </>
  )
}

export default MyApp
