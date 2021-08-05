import React from 'react';
import Link from 'next/link';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { makeStyles } from "@material-ui/core/styles"

const MegaMenu = ({ menuCat }) => {
    const classes = useStyles()

    return (
        <div className={classes.navbarContainer}>
            { menuCat.map(item=>(
        <div key={item.menu} className={classes.divcontainer}>
        <li className={classes.catContainer}>
        <Link href={`/shop/categories/${item.menu}`} >
            <a>
                {item.menu} {'  '}
                <ExpandMore fontSize="small" />
            </a>
        </Link>
       

        <div key={item.menu} className={classes.subMenuContainer}>
        {
            item.subMenu.map((subItem) => (
        
        <ul style={{"min-width":180}}>
        <h4 className={classes.subHeadStyle}>{subItem.menu}</h4>
            {
                subItem.subMenu.map(subMenuItem=>
                (
                <li key={subItem.text}
                 className={classes.subItemStyle}>
                    <Link href={`/products/${subMenuItem.menu}`}>
                        <a>{subMenuItem.menu}</a>
                    </Link>
                </li>
                ))
            }
        </ul>
       
            ))
        }
    </div>
    </li>
    </div>))
            }
    </div>
    )}

    const useStyles = makeStyles(theme => ({
        navbarContainer: {
            width: "100vw",
            'background-color': '#1961a5',
            display: 'flex',
            'padding-left':'50px',
            '& > div':{     
                '& > li' :{ 
                     '&ul': {
                     margin:'0px',
                     padding: '0px',
                     'list-style-type': 'none',
                     color:'green',
                    
                 },
                 '& > a':{
                     'padding-right':'5px',
                    // '&::after': {
                    //     content: '"\e93a"',
                    //     padding: '0px 10px 0px 7px',
                    //     color: 'white',
                    //     font: 'normal normal normal 12px/1 linearicons',
                    // },
                    '&::before': {
                        content: '""',
                        width: '13px',
                        height: '13px',
                        'background-color': 'white',
                        position: 'absolute',
                        top: '100%',
                        left: '50%',
                        'z-index': '10000',
                        'border-left': '1px solid #ccc',
                        'border-top': '1px solid #ccc',
                        transform:'rotate(45deg) translate(-50%, 0%)',
                        transition: 'all 0.25s ease',    
                        visibility: 'invisible',
                        opacity:0,
                    }
                    
                },
                
                    '&:hover':{
                        '& > a': {
                            '&:before':{
                            visibility:'visible',
                            opacity:'1',
                            color:'white'
                            }
                        },
                    }
               
                  
              
                }
            }
        },
        divcontainer : {
            position:'relative',
            padding: '0px 10px',
        },
        subHeadStyle: {
            color:'black',
            'font-family':'Work Sans, sans-serif',
            'font-size': '14px',
            width:'100%',
            'padding-bottom':'15px',
            'flex-flow': 'row nowrap',
            'font-weight': 'bold',
        },
        heading: {
            color:'#fff', 
            height:'100%',
            'font-family':'Work Sans, sans-serif',
            'font-size': '14px',
            'list-style-type': 'none',        
        },
        catContainer: {
           'list-style-type': 'none',         
                padding:'15px 0px', /* navbar height */
                height:'100%',
                width:'100%',
                '& a': {
                    color:'#fff', 
                    'font-family':'Work Sans, sans-serif',
                    'font-size': '15px',
                    'font-style': 'normal',
                    'text-decoration':'none',
                },
   
        '&:hover $subMenuContainer': {
            visibility: 'visible',
            opacity: 1,  
            // cursor:'pointer'          
        }
        },
        subMenuContainer: {
            position: 'absolute',
            'background-color':'white', 
            minWidth: '240px',
            visibility: 'hidden',
            display:'flex',
            'z-index':'1000',
            "flex-flow": 'row nowrap',
            'background-color': '#fff',
            top: '100%',
            opacity: 0,
            border: '1px solid #ccc',
            transition: 'all 0.25s ease',
            'border-radius': '3px',
            padding: '20px 15px 0px 25px' ,
        },
   
        subItemStyle: {
            'list-style-type': 'none',
            padding: '0px 0px 10px 0px',
            '& > a':{
                'font-family':'Work Sans, sans-serif',
                color:'black',
                'font-size': '14px',
                'text-decoration':'none',
                '&:hover':{
                    color:'#1961a5'
                }
                
            },
        },
        

    }))

export default MegaMenu;