import { gql, fragment } from '@apollo/client';

export const GET_PRODUCTBY_ID= gql`query 
productById($id: ID!)
{
  product(id:$id){
        name
        id
        rating
        description
         attributes{
          attribute{
            id
            name
          }
            values{
              name
            } 
        }
        variants{
          name
          id
          images{
            url
          }
          product{
            name
            id
          }
        }
        category{
          id
          name
        }
        thumbnail{
          url
        }
     pricing{
      priceRangeUndiscounted{
        start{
          net{
            currency
            amount
          }
        }
      }
    }
        metadata{
          key
          value
          
        }
        
      }
    }
  `

export const GET_PRODUCTS= gql`query 
productByCategoryId($id: [ID]!)
{
  products(first:10,filter:{categories:$id}){
    edges{
      node{
        id
        name
        id
        description
         attributes{
          attribute{
            id
            name
          }
            values{
              name
            } 
        }
        category{
          id
          name
        }
        rating
        variants{
          id
          name
          images{
            url
          }
        }
        thumbnail{
          url
        }
     pricing{
      priceRangeUndiscounted{
        start{
          net{
            currency
            amount
          }
        }
      }
    }
        metadata{
          key
          value
          
        }
        
      }
    }
    
  }
  
}`

 export const GET_PRODUCTS_SORTBY_PRICE_ASC=gql`query 
getProductsByPriceAsc($id:[ID])
{
  products(first:10, filter:{categories:$id,channel:"default-channel"},sortBy:{direction:ASC,channel:"default-channel",field:PRICE}){
    edges{
      node{
        name
        id
        rating
        variants {
          id
        }
        description
         attributes{
          attribute{
            id
            name
          }
            values{
              name
            } 
        }
        category{
          id,
          name
        }
        thumbnail{
          url
        }
     pricing{
      priceRangeUndiscounted{
        start{
          net{
            currency
            amount
          }
        }
      }
    }
        metadata{
          key
          value
          
        }
        
      }
    }
    
  }
  
}`

 export const GET_PRODUCTS_SORTBY_PRICE_DESC=gql`query 
getProductsByPriceDesc($id:[ID])
{
  products(first:10, filter:{categories:$id,channel:"default-channel"},sortBy:{direction:DESC,channel:"default-channel",field:PRICE}){
    edges{
      node{
        name
        id
        rating
        variants {
          id
        }
        description
         attributes{
          attribute{
            id
            name
          }
            values{
              name
            } 
        }
        category{
          id,
          name
        }
        thumbnail{
          url
        }
     pricing{
      priceRangeUndiscounted{
        start{
          net{
            currency
            amount
          }
        }
      }
    }
        metadata{
          key
          value
          
        }
        
      }
    }
    
  }
  
}`

 export const GET_PRODUCTS_FILTERBY_PRICE=gql`query 
getProductsFilteredByPrice($id:[ID], $lte:Float, $gte:Float)
{
  products(first:10, filter:{categories:$id,channel:"default-channel", minimalPrice:{lte:$lte, gte:$gte}}){
    edges{
      node{
        name
        id
        rating
        variants {
          id
        }
        description
         attributes{
          attribute{
            id
            name
          }
            values{
              name
            } 
        }
        category{
          id,
          name
        }
        thumbnail{
          url
        }
     pricing{
      priceRangeUndiscounted{
        start{
          net{
            currency
            amount
          }
        }
      }
    }
        metadata{
          key
          value
          
        }
        
      }
    }
    
  }
  
}`

 export const GET_PRODUCTS_FILTERBY_SORTBY_PRICE_ASC=gql`query 
getProductsFilteredSortByPrice($id:[ID], $lte:Float, $gte:Float)
{
  products(first:10, filter:{categories:$id,channel:"default-channel", minimalPrice:{lte:$lte, gte:$gte}},sortBy:{direction:ASC,field:PRICE, channel:"default-channel"}){
    edges{
      node{
        id
        name
        rating
        variants {
          id
        }
        description
         attributes{
          attribute{
            id
            name
          }
            values{
              name
            } 
        }
        category{
          id,
          name
        }
        thumbnail{
          url
        }
     pricing{
      priceRangeUndiscounted{
        start{
          net{
            currency
            amount
          }
        }
      }
    }
        metadata{
          key
          value
          
        }
        
      }
    }
    
  }
  
}`

 export const GET_PRODUCTS_FILTERBY_SORTBY_PRICE_DESC=gql`query 
getProductsFilteredSortByPrice($id:[ID], $lte:Float, $gte:Float)
{
  products(first:10, filter:{categories:$id,channel:"default-channel", minimalPrice:{lte:$lte, gte:$gte}},sortBy:{direction:DESC,channel:"default-channel",field:PRICE}){
    edges{
      node{
        id
        name
        rating
        variants {
          id
        }
        description
         attributes{
          attribute{
            id
            name
          }
            values{
              name
            } 
        }
        category{
          id,
          name
        }
        thumbnail{
          url
        }
     pricing{
      priceRangeUndiscounted{
        start{
          net{
            currency
            amount
          }
        }
      }
    }
        metadata{
          key
          value
          
        }
        
      }
    }
    
  }
  
}`
// const productGetter=(selection)=>{
//   switch (selection){
//     case 1:
//       return GET_PRODUCTS;
//       break;
//     case 2:
//       return GET_PRODUCTS_SORTBY_PRICE_ASC;
//       break;
//     case 3:
//       return GET_PRODUCTS_SORTBY_PRICE_DESC;
//       break;
//     case 4:
//       return GET_PRODUCTS_FILTERBY_SORTBY_PRICE_ASC;
//       break;
//     case 5:
//       return GET_PRODUCTS_FILTERBY_SORTBY_PRICE_DESC;
//       break;
//     case 6:
//       return GET_PRODUCTS_FILTERBY_PRICE;
//       break;
//   }
// }

// export default-channel productGetter;

export const GET_PRODUCTS_BY_NAME=gql `query
getProductsByName($name:String!, $number:Int!) {
  products(first: $number, filter: { search: $name ,channel:"default-channel"}) {
    edges{
      node{
        id
        name
        rating
        variants {
          id
        }
        description
         attributes{
          attribute{
            id
            name
          }
            values{
              name
            } 
        }
        category{
          id,
          name
        }
        thumbnail{
          url
        }
     pricing{
      priceRangeUndiscounted{
        start{
          net{
            currency
            amount
          }
        }
      }
    }
        metadata{
          key
          value
          
        }
        
      }
    }
  }
}
`

export const GET_PRODUCTS_BY_NAME_CATEGORY=gql `query
getProductsByNameCategory($name:String!,$number:Int!,$id:[ID]!) {
  products(first: $number, filter: { search: $name,categories:$id,channel:"default-channel" }) {
    edges{
      node{
        id
        name
        rating
        variants {
          id
        }
        description
         attributes{
          attribute{
            id
            name
          }
            values{
              name
            } 
        }
        category{
          id,
          name
        }
        thumbnail{
          url
        }
     pricing{
      priceRangeUndiscounted{
        start{
          net{
            currency
            amount
          }
        }
      }
    }
        metadata{
          key
          value
          
        }
        
      }
    }
  }
}
`

export const GET_PRODUCTS_BY_COLLECTION=gql `query
getProductsByCollection($number:Int!,$collectionId:[ID]!) {
  products(first: $number, filter: { collections:$collectionId,channel:"default-channel" }) {
    edges{
      node{
        id
        name
        rating
        variants {
          id
        }
        description
         attributes{
          attribute{
            id
            name
          }
            values{
              name
            } 
        }
        category{
          id,
          name
        }
        thumbnail{
          url
        }
     pricing{
      priceRangeUndiscounted{
        start{
          net{
            currency
            amount
          }
        }
      }
    }
        metadata{
          key
          value
          
        }
        
      }
    }
  }
}
`

export const GET_PRODUCTS_BY_COLLECTION_CATEGORY=gql `query
getProductsByCollection($number:Int!,$collectionId:[ID]!, $categoryId:[ID]!) {
  products(first: $number, filter: { collections:$collectionId, categories:$categoryId ,channel:"default-channel"}) {
    edges{
      node{
        id
        name
        rating
        variants {
          id
        }
        description
         attributes{
          attribute{
            id
            name
          }
            values{
              name
            } 
        }
        category{
          id,
          name
        }
        thumbnail{
          url
        }
     pricing{
      priceRangeUndiscounted{
        start{
          net{
            currency
            amount
          }
        }
      }
    }
        metadata{
          key
          value
          
        }
        
      }
    }
  }
}
`