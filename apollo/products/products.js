import { gql, fragment } from '@apollo/client';

// A common fragment for the different fields of a 
//product to be shred among different queries

export const PRODUCT_FIELDS = gql`
  fragment ProductFields on Product {
    id
    name
    thumbnail(size: 100) {
      url
      alt
    }
    variants {
      id
    }
    images {
      url(size: 100)
      alt
    }
    pricing {
      priceRange {
        start {
          gross {
            amount
            currency
          }
        }
      }
      discount {
        gross {
          amount
          currency
        }
      }
      priceRangeUndiscounted {
        start {
          gross {
            amount
            currency
          }
        }
      }
    }
  }
}
`;

/**
 * Query of Products
 * 
 * @param - search keyword
 * @returns - Products with the search keyword in its name or description
 */

export const GET_PRODUCTS_BY_SEARCH = gql`${PRODUCT_FIELDS}
query getProductsBySearch($keyword: String!){
        products(first: 10, filter: { search: $keyword }) {
          edges {
            node {
              
            ...ProductFields
            
          }
        }
      }
  }

`;

/**
 * Query of a singleProduct
 * 
 * @param - id of the product
 * @returns - Product with the specific ID
 */

export const GET_SINGLE_PRODUCT_BY_ID = gql`
query getProductById($id: String!){
    {
        product(id: $id) {
            id
            name
            thumbnail(size: 100) {
                url
                alt
              }
            images {
                url(size: 100)
                alt
              }
              pricing {
                priceRange {
                  start {
                    gross {
                      amount
                      currency
                    }
                  }
                }
                discount {
                  gross {
                    amount
                    currency
                  }
                }
                priceRangeUndiscounted {
                  start {
                    gross {
                      amount
                      currency
                    }
                  }
                }
              }
          }
  }
`;

/**
 * Query of a sorted products with minimal price coming first
 * 
 * @param - category of the product
 * @returns - Products in sorted order with the minimal price at first
 */

export const GET_SORTED_PRODUCTS_BY_MINIMAL_PRICE = gql`
query getProductByMinimalPrice($categoryArray: List, gte: $gte, Ite: $Ite){
        products(
            first: 10
            filter: {categories: categoryArray, price: {gte: $gte, Ite: $Ite}}
            sortBy: { field: PRICE, direction: ASC }
          ) {
          edges {
              cursor
            node {
              id
              name
              
              thumbnail(size: 100) {
                url
                alt
              }
              images {
                url(size: 100)
                alt
              }
              pricing {
                priceRange {
                  start {
                    gross {
                      amount
                      currency
                    }
                  }
                }
                discount {
                  gross {
                    amount
                    currency
                  }
                }
                priceRangeUndiscounted {
                  start {
                    gross {
                      amount
                      currency
                    }
                  }
                }
              }
          }
        }
        pageInfo {
            hasNextPage
            hasPreviousPage
            startCursor
            endCursor
          }
    }
  }
`;

/**
 * Query of a sorted products with maximum price coming first
 * 
 * @param - category of the product
 * @returns - Products in sorted order with the maximum price at first
 */

export const GET_SORTED_PRODUCTS_BY_MAXIMUM_PRICE = gql`
query getProductByMaximumPrice($categoryArray: List,gte: $gte, Ite: $Ite){
        products(
            first: 10
            filter: {categories: categoryArray, price: {gte: $gte, Ite: $Ite}}
            sortBy: { field: PRICE, direction: DESC }
          ) {
          edges {
            node {
              id
              name
              thumbnail(size: 100) {
                url
                alt
              }
              images {
                url(size: 100)
                alt
              }
              pricing {
                priceRange {
                  start {
                    gross {
                      amount
                      currency
                    }
                  }
                }
                discount {
                  gross {
                    amount
                    currency
                  }
                }
                priceRangeUndiscounted {
                  start {
                    gross {
                      amount
                      currency
                    }
                  }
                }
              }
          }
        }
    }
  }
`;

/**
 * Query of a sorted products with respect to date, new products comes a t first
 * 
 * @param - category of the product
 * @returns - Products in sorted order with the lastest date at first
 */

export const GET_SORTED_PRODUCTS_BY_DATE = gql`
query getProductByMaximumPrice($categoryArray: List, gte: $gte, Ite: $Ite){
        products(
            first: 10
            filter: {categories: categoryArray, price: {gte: $gte, Ite: $Ite}}
            sortBy: { field: DATE, direction: DESC }
          ) {
          edges {
            node {
              id
              name
              thumbnail(size: 100) {
                url
                alt
              }
              images {
                url(size: 100)
                alt
              }
              pricing {
                priceRange {
                  start {
                    gross {
                      amount
                      currency
                    }
                  }
                }
                discount {
                  gross {
                    amount
                    currency
                  }
                }
                priceRangeUndiscounted {
                  start {
                    gross {
                      amount
                      currency
                    }
                  }
                }
              }
          }
        }
    }
  }
`;

/**
 * Query of a products of a specific category
 * 
 * @param - category IDs
 * @returns - Products of a specific category
 */

export const GET_PRODUCTS_BY_CATEGORY = gql`
query getProductByCategory($categoryArray: List, $gte: gte, $Ite: Ite){
        products(
            first: 10
            filter: {categories: categoryArray, price: {gte: $gte, Ite: $Ite}}
          ) {
          edges {
            node {
              id
              name
              thumbnail(size: 100) {
                url
                alt
              }
              images {
                url(size: 100)
                alt
              }
              pricing {
                priceRange {
                  start {
                    gross {
                      amount
                      currency
                    }
                  }
                }
                discount {
                  gross {
                    amount
                    currency
                  }
                }
                priceRangeUndiscounted {
                  start {
                    gross {
                      amount
                      currency
                    }
                  }
                }
              }
          }
        }
    }
  }
`;

/**
 * Query of a products of a specific collection
 * 
 * @param - collection IDs
 * @returns - Products of a specific collection
 */

export const GET_PRODUCTS_BY_COLLECTIONS = gql`
query getProductByCollections($collectionArray: List, gte: $gte, Ite: $Ite){
        products(
            first: 10
            filter: {collections: collectionArray}
          ) {
          edges {
            node {
              id
              name
              thumbnail(size: 100) {
                url
                alt
              }
              images {
                url(size: 100)
                alt
              }
              pricing {
                priceRange {
                  start {
                    gross {
                      amount
                      currency
                    }
                  }
                }
                discount {
                  gross {
                    amount
                    currency
                  }
                }
                priceRangeUndiscounted {
                  start {
                    gross {
                      amount
                      currency
                    }
                  }
                }
              }
          }
        }
    }
  }
`;


/**
 * Query of a products of a specific slug string
 * 
 * @param - slug string
 * @returns - Products of a specific slug string
 */

export const GET_PRODUCTS_BY_SLUG = gql`
query getProductBySlug($slug: String!){
        products(
            first: 10
            filter: {attributes: {slug: $slug}}
          ) {
          edges {
            node {
              id
              name
              thumbnail(size: 100) {
                url
                alt
              }
              images {
                url(size: 100)
                alt
              }
              pricing {
                priceRange {
                  start {
                    gross {
                      amount
                      currency
                    }
                  }
                }
                discount {
                  gross {
                    amount
                    currency
                  }
                }
                priceRangeUndiscounted {
                  start {
                    gross {
                      amount
                      currency
                    }
                  }
                }
              }
          }
        }
    }
  }
`;