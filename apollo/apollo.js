import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: 'https://shovan.prokurainnovations.com/graphql/'
  // uri: 'http://206.189.141.84:8002/graphql/',
  // uri: 'http://localhost:8000/graphql/',
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('token')
  // const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2MjEyNjI5MDEsImV4cCI6MTYyMzc2ODUwMSwidG9rZW4iOiJ0WTJwQkdLSk0zSUUiLCJlbWFpbCI6ImFkbWluQGV4YW1wbGUuY29tIiwidHlwZSI6ImFjY2VzcyIsInVzZXJfaWQiOiJWWE5sY2pveU1RPT0iLCJpc19zdGFmZiI6dHJ1ZX0.BV4DT1FI6JNO2HwNMDpy3hOcsKCUbmvEMRy-XvuD3wA";
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      Authorization: token ? `JWT ${token}` : "",
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
  credentials: 'include'
});


export default client;