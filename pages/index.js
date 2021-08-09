// import Image from 'next/image'
import Topbar from '../components/shared/Header/Topbar';
// import ChangePassword from '../pages/ChangePassword'
// import ChangePasswordPage from '../pages/ChangePassword';
// import Login from '../pages/login/index'
// import Register from '../pages/Register'
// import ForgotPassword from '../pages/ForgotPassword/';
import Head from '../components/layouts/modules/Head';

import MegaMenu from '../components/menu/MegaMenu';
import { menuCat } from '../public/static/data/category';
import SiteFeatures from '../components/partials/HomePage/SiteFeatures';
import DefaultHomeBanner from '../components/partials/HomePage/DefaultHomeBanner';
// import Product from '../components/elements/Product/Product';
// import ProductOnCart from '../components/elements/Product/ProductOnCart';
// import ProductGroupWithCarousel from '../components/partials/Product/ProductGroupWithCarousel';
import HomeDefaultProductListing from '../components/partials/HomePage/HomeDefaultProductListing';
import Footer from '../components/shared/Footer';
import HomeLayout from '../components/layouts/HomeLayout';


export default function Home() {

  // const breadCrumb = [
  //   {
  //       text: 'Home',
  //       url: '/',
  //   },
  //   {
  //       text: 'My Account',
  //   },
  // ];


  return (
    <div>



      <Head />
      <HomeLayout>
        <DefaultHomeBanner />
        <SiteFeatures />
        <div style={{ marginLeft: 20, marginBottom: 30 }}>
          <HomeDefaultProductListing title="Stationery" />
        </div>

        <div style={{ marginLeft: 20 }}>
          <HomeDefaultProductListing title="Furniture" />
        </div>
      </HomeLayout>
    </div>
    // <div >
    //   {/* <Topbar /> */}
    //   {/* <Register /> */}
    //   {/* <ForgotPassword /> */}
    //   <Footer />
    //   {/* <Login /> */}
    //   {/* <ChangePassword /> */}
    //   {/* <p className="header">hello</p> */}
    // </div >
  )
}
