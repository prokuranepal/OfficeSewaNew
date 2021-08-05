import React from 'react';
import { makeStyles } from "@material-ui/core/styles"
import Head from '../layouts/modules/Head'

const SiteFeatures = () => {
    const classes = useStyles()

    return (
        <>
      <Head/>

    <div className={classes.container}>
            <div className={classes.subContainer}>
                <div style={{  'max-width':' 20%'}}>
                    <div className={classes.icon}>
                        <i className="icon-rocket"></i>
                    </div>
                    <div className={classes.texts}>
                        <h4>Free Delivery</h4>
                        <p>For all oders over Rs 1000</p>
                    </div>
                </div>
                <div className="ps-block__item">
                    <div className={classes.icon}>
                        <i className="icon-sync"></i>
                    </div>
                    <div className={classes.texts}>
                        <h4>90 Days Return</h4>
                        <p>If goods have problems</p>
                    </div>
                </div>
                <div className="ps-block__item">
                    <div className={classes.icon}>
                        <i className="icon-credit-card"></i>
                    </div>
                    <div className={classes.texts}>
                        <h4>Secure Payment</h4>
                        <p>100% secure payment</p>
                    </div>
                </div>
                <div className="ps-block__item">
                    <div className={classes.icon}>
                        <i className="icon-bubbles"></i>
                    </div>
                    <div className={classes.texts}>
                        <h4>24/7 Support</h4>
                        <p>Dedicated support</p>
                    </div>
                </div>
                <div className="ps-block__item">
                    <div className={classes.icon}>
                        <i className="icon-gift"></i>
                    </div>
                    <div className={classes.texts}>
                        <h4>Gift Service</h4>
                        <p>Support gift service</p>
                    </div>
                </div>
            </div>
    </div>
    </>
)};

export default SiteFeatures;

const useStyles = makeStyles(theme => ({
    container:{
            display: 'flex',
   ' flex-flow':' row nowrap',
    'justify-content':' space-between',
    alignSelf:'center',
    padding:'20px 40px',
    margin:'auto',
    'margin-top':'10px',
    width: '95vw',
    border:' 1px solid #d9d9d9',
    'background-color':'white'
    },
    subContainer:{
            display: 'flex',
    'flex-flow':' row nowrap',
    'justify-content': 'space-between',
    padding: '20px 40px',
    width:' 100%',
    },
    icon:{
      
         '& >i' :{
            ' font-size':' 40px',
             color: 'blue',
         }
    },
    texts:{
            '& >h4' :{
            'font-size': '18px',
            'font-weight': 500,
            'margin-bottom': 0,
            'margin-top': '20px',
            color: '#000',
        },

        '& >p ':{
            'margin-bottom': 0,
            'margin-top': '5px',
            'font-size': '14px',
            color: '#666',
        }
    }
    
}))

// .ps-block--site-features {
//     display: flex;
//     flex-flow: row nowrap;
//     justify-content: space-between;
//     padding: 20px 40px;
//     width: 100%;
//     border: 1px solid #d9d9d9;

//     .ps-block__left {
//         i {
//             font-size: 40px;
//             color: $color-1st;
//         }
//     }

//     .ps-block__right {
//         padding-left: 25px;

//         h4 {
//             font-size: 18px;
//             font-weight: 500;
//             margin-bottom: 0;
//             margin-top: 0;
//             color: #000;
//         }

//         p {
//             margin-bottom: 0;
//             color: $color-text;
//         }
//     }

//     .ps-block__item {
//         display: flex;
//         flex-flow: row nowrap;
//         align-items: center;
//         padding: 10px 40px;
//         border-right: 1px solid #dadada;
//         max-width: 20%;
//         width: 100%;

//         &:first-child {
//             padding-left: 0;
//         }

//         &:last-child {
//             border-right: none;
//             padding-right: 0;
//         }
//     }

//     &.ps-block--site-features-2 {
//         border: none;
//         padding: 0;

//         .ps-block__item {
//             max-width: 25%;
//             padding: 10px 30px;
//         }

//         @media (max-width: 1440px) {
//             .ps-block__item {
//                 flex-flow: row nowrap;
//                 border-right: 1px solid #dadada;

//                 &:last-child {
//                     border-right: none;
//                 }
//             }
//             .ps-block__left {
//                 margin-bottom: 15px;
//             }
//             .ps-block__right {
//                 width: 100%;
//                 padding-left: 15px;
//             }
//         }
//         @include media('<md') {
//             .ps-block__item {
//                 border-right: none;
//             }
//         }
//     }

//     @media (max-width: 1680px) {
//         padding: 30px;
//         .ps-block__item {
//             padding: 0 15px;
//         }
//     }

//     @media (max-width: 1440px) {
//         .ps-block__item {
//             flex-flow: row wrap;
//             border-right: none;
//         }
//         .ps-block__left {
//             margin-bottom: 15px;
//         }
//         .ps-block__right {
//             width: 100%;
//             padding-left: 0;
//         }
//     }

//     @media (max-width: 1024px) {
//         flex-flow: row wrap;
//         .ps-block__item {
//             margin-bottom: 30px;
//             max-width: 25%;
//             padding: 0;
//         }
//     }

//     @include media('<md') {
//         justify-content: flex-start;
//         .ps-block__item {
//             max-width: 50%;
//             max-width: 33.33333%;
//         }

//         &.ps-block--site-features-2 {
//             .ps-block__item {
//                 max-width: 50%;
//             }
//         }
//     }
//     @media (max-width: 420px) {
//         .ps-block__item {
//             max-width: 100%;
//             flex-flow: row nowrap;

//             .ps-block__right {
//                 padding-left: 20px;
//             }
//             &:last-child {
//                 margin-bottom: 0;
//             }
//         }

//         &.ps-block--site-features-2 {
//             .ps-block__item {
//                 max-width: 100%;
//             }
//         }
//     }
// }