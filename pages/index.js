import Head from '../components/layouts/modules/Head'
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
import Footer from '../components/global/Footer/index.jsx';

export default function Home() {
  let menuCat=[{menu:'Furnitures', subMenu:[
    {menu:'Chairs and Tables', subMenu:[{menu:'Computer Chair'},{menu:'Office Chair'},{menu:'Executive Chair'},{menu:'Visitor Chair'}, ,{menu:'Meeting Table'},{menu:'Conference Table'},,{menu:'Dining Table'},{menu:'Reception Table'},{menu:'Tea Table'}]},
    {menu:'Others', subMenu:[{menu:'Door Mat'},{menu:'Daraz'},{menu:'Partition'},{menu:'Carpet'},{menu:'Vault'},{menu:'Stool'},{menu:'Wallpaper'},{menu:'Cloth Hanger'}]}]},
  {menu:'Electronics', 
   subMenu:[{menu:'Air Conditioner', subMenu:[{menu:'Samsung'},{menu:'Colors'},{menu:'Yasuda'},{menu:'Hisense'},{menu:'Panasonic'}, {menu:'LG Air Conditioner'}]},
   {menu:'Heater', subMenu:[{menu:'Room Heater'},{menu:'Water Heater'}]},
   {menu:'Home Appliances', subMenu:[{menu:'Washing Machine'},{menu:'Iron'},{menu:'Refrigerator'},{menu:'Rice Cooker'}]},
   {menu:'Camera', subMenu:[{menu:'CCTV Camera'},{menu:'Web Cams'}]}]},
   {menu:'Laptops and Computer', 
   subMenu:[{menu:'Desktops', subMenu:[{menu:'Dell Desktops'},{menu:'HP Desktops'},{menu:'MSI Desktops'},{menu:'Lenovo'},{menu:'Asus Desktops'}]},
   {menu:'Laptops', subMenu:[{menu:'Dell Laptops'},{menu:'Lenovo Laptops'},{menu:'MSI Laptops'},{menu:'Asus Laptops'}]},
   {menu:'Computer Accessories', subMenu:[{menu:'Keyboard'},{menu:'Computer Casing'},{menu:'Monitor'},{menu:'Mouse'},{menu:'Mousepad'},{menu:'Pendrive'},{menu:'External SSD'},{menu:'Internal SSD'}]},
   {menu:'Network Devices', subMenu:[{menu:'Router'},{menu:'Cables'},{menu:'Switch'}]}]},
   {menu:'Printers and Scanners', 
   subMenu:[{menu:'Printers', subMenu:[{menu:'Epson Printer'},{menu:'Brother Printer'},{menu:'Xlab Printer'},{menu:'Samsung Printer'}]},
   {menu:'Ink Catridges and Printer Accessories', subMenu:[{menu:' Epson Inks and Catridges'},{menu:'Samsung Inks and Catridges'},{menu:'Brother Inks and Catridges'},{menu:'HP Inks and Catridges'},{menu:'Xlab Inks and Catridges'}]},
   ]},
   {menu:'Stationery', 
   subMenu:[{menu:'Stationery', subMenu:[{menu:'Notice Board'},{menu:'Whiteboard'},{menu:'Calculator'},{menu:'Diary'},
   ,{menu:'Punching Machine'},{menu:'Photocopy Paper'},{menu:'Pen, Pecil, Eraser, Sharpener'},{menu:'Binding Machine'},{menu:'Register'},{menu:'File'},{menu:'Stapler'}
  ]}]}
]
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
      <Head/>
      <Topbar />
      {/* <div className={styles.navbarContainer}>
      {menuCat.map(item=>
          <MenuCat item={item}/>
         )}
      </div>  */}
      
       
     
          <MegaMenu menuCat={menuCat}/>
          
      

         <BreadCrumb breadcrumb={breadCrumb}/>
      <Footer/>
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
