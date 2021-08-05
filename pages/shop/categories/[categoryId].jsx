import React from 'react';
import { makeStyles } from '@material-ui/styles';
import HomeLayout from '../../../components/layouts/HomeLayout';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Breadcrumb from '../../../components/elements/BreadCrumb';
import {menuCat} from '../../../public/static/data/category';
import MegaMenu from '../../../components/menu/MegaMenu';
import { useRouter } from 'next/router';
import Link from 'next/link';
import * as categoryData from '../../../public/static/data/menu.json';

const categoryPage = (props) => {
    const classes = useStyles();
    const router = useRouter() 
    const type_new = router.query;
    console.log('category', type_new.categoryId);
    let catName=type_new.categoryId;
    let catNameTitle = catName?catName.toUpperCase():null;
    let categoryArray= catName?categoryData.menuPrimary.menu_1.filter(item=>item.text.toUpperCase()==catNameTitle):null;
    const breadcrumb = [
        {
            text: 'Home',
            url: '/',
        },
        {
            text: 'Categories',
        },
    ];
    let catItems;
    return (
        // <HomeLayout>
        <>
            <MegaMenu menuCat={menuCat}/> 
            <Breadcrumb breadcrumb={breadcrumb} />
            <div style={{padding:'20px 20px 20px 50px', 'background-color':'white'}}>
            <div style={{'font-size':18, 'color':'#1961a5', 'font-weight':'bold', 'padding-bottom':10}}>
            {catNameTitle}
            </div>
            {/* <Grid item xs={12}> */}
            <Grid container justifyContent="flex-start" spacing={5}>
            
          {
              categoryArray && categoryArray[0].megaContent.map((value1) => 
              {
                return(
                    <>
                    {
                  value1.megaItems?value1.megaItems.map(value=>{
                    console.log("type of router ", value)

                      return(
                          <CategoryCard value={value} />
            )
          
                }):null
           
            }
             </> )
              })}
         
        </Grid>
      {/* </Grid> */}
      </div>

        {/*  </HomeLayout> */}
        </>
    )
};


export const CategoryCard=props=>{
    const classes = useStyles();

    return (
    <Grid key={props.value.text} item>
           <Link href={`/products/${props.value.text}`}>
                <a>
             <div className={classes.catContainer}>
                <img  style={
      {
          //         width:200,
          //         height:200,
          //         'margin': 'auto',
          // //   'margin-right': 'auto',
          // verticalAlign:'center',
          //         resizeMode: 'contain',
          width:'100%',
          margin: 'auto',
          paddingBottom:5
          //   display: 'block',

      }     } src={`https://shovan.prokurainnovations.com/media/category-backgrounds/${props.value.thumb}`}/>
            <div style={{  'margin': 0,
        display: 'block',
        padding: '0 0 5px',
        'font-size': '14px'}}>
            {props.value.text}
            </div>
             </div>
             </a>
             </Link>
                  </Grid>
)}
const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%'
    },
    paper: {
        height: 140,
        width: 100,
      },
    catContainer:{
        height: '30vw+40px',
        width:'30vw',
        'max-height': '300px',
        'max-width': '265px', 
        color:'#06c',
        'align-Items': 'center',
        'justify-content': 'center',
        padding:'10px 10px 10px 10px',
        // 'background-color':'green',
        '&:hover':{
            'border': '1px solid #aaa',
            cursor:'pointer'
        }
    

    }
}));

export default categoryPage;