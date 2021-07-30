import Head from '../components/layouts/modules/Head'
import Image from 'next/image'
// import styles from '../styles/Home.module.css';
import styles from '../styles/Navbar.module.css';
import MenuCat from '../components/menu/MenuCat';
export default function Home() {
  let menuCat=[{menu:'Category1', subMenu:[{menu:'Sub1'},{menu:'Sub2'},{menu:'Sub3'},{menu:'Sub4'}]},
  {menu:'Category2', subMenu:[{menu:'Sub11'},{menu:'Sub21'},{menu:'Sub31'},{menu:'Sub41'}]},
  {menu:'Category3', subMenu:[{menu:'Sub12'},{menu:'Sub22'},{menu:'Sub32'},{menu:'Sub42'}]},
  {menu:'Category4', subMenu:[{menu:'Sub13'},{menu:'Sub23'},{menu:'Sub33'},{menu:'Sub43'}]},
  {menu:'Category5', subMenu:[{menu:'Sub14'},{menu:'Sub24'},{menu:'Sub34'},{menu:'Sub44'}]}]
  return (
    <>
      <Head/>
      <div>
        Header Component
      </div>
      <div className={styles.navbarContainer}>
         {menuCat.map(item=>
          <MenuCat item={item}/>
         )}
      </div> 
    </>
  )
}
