import { gql, fragment } from '@apollo/client';

export const GET_CATEGORY= gql`query 
Category($slug: String!){
    category(slug: $slug) {
      id
      name
    	slug
      children(first:50)
      {
        edges{
          node{
            name
            slug
            children(first:50)
            {
              edges{
                node{
                  id
                  name
                  slug
                  backgroundImage{
                    url
                    alt
                  }
                }
              }
            }
          }
        }
      }
    }
  }`

  export const GET_CATEGORIES= `query 
  {
      categories(first:100, level:0) {
      totalCount
      edges{
        node{
          id
          name
          slug
          level
          children(first:100){
            totalCount
            edges{
              node{
                name
                id
                slug
                level
                children(first:100)
                {
                  edges{
                    node{
                      name
                      id
                      level
                      slug
                    }
                  }
                }
              }
            }
          }
          
        }
      }
    }
    }`

export const GET_COLLECTIONS=`query 
  {
    collections(first: 100) {
      edges{
        node{
          id
          name
          slug
         
    }
  }
    }}`