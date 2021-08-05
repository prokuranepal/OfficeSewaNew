// import styles from '../styles/Home.module.css';
import styles from '../styles/Navbar.module.css';
import MegaMenu from '../components/menu/MegaMenu';
import MenuCat from '../components/menu/MenuCat';
import BreadCrumb from '../components/elements/BreadCrumb';
import Image from 'next/image'
import Topbar from '../components/shared/Header/Topbar';
import ChangePassword from '../pages/ChangePassword'
import ChangePasswordPage from '../pages/ChangePassword';
import Login from '../pages/login/index'
import Register from '../pages/Register'
import ForgotPassword from '../pages/ForgotPassword/';
import {menuCat} from '../public/static/data/category';
import SiteFeatures from '../components/SiteFeatures';
import DefaultHomeBanner from '../components/DefaultHomeBanner';
import Product from '../components/elements/Product/Product'

const product={id:1,thumbnail:{url:"https://shovan.prokurainnovations.com/media/category-backgrounds/mini-electric-iron-500x500.jpg"},title:'300 Watt Steam Featured Electric Iron', price:2000,sale_price:3000,rating:4.5}
export default function Home() {
  
const breadCrumb = [
  {
      text: 'Home',
      url: '/',
  },
  {
      text: 'My Account',
  },
];

  
  return (
    <div>
      {/* <Topbar /> */}
      {/* <div className={styles.navbarContainer}>
      {menuCat.map(item=>
          <MenuCat item={item}/>
         )}
      </div>  */}
      
       
     
      <MegaMenu menuCat={menuCat}/>
      <DefaultHomeBanner />
      
<SiteFeatures/>

<Product product={product}/>
         {/* <BreadCrumb breadcrumb={breadCrumb}/> */}
      {/* <Footer/> */}
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
