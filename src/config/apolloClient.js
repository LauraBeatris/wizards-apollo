import { ApolloClient, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
  uri: process.env.REACT_APP_API_URI,
  cache: new InMemoryCache(),
  headers: {
    'x-hasura-admin-secret': process.env.REACT_APP_API_ADMIN_SECRET
  }
})

export const getIsQueryLoaded = ({ data, queryKey, error, loading }) => {
  const isDataLoaded = data?.[queryKey] && !error

  return isDataLoaded || !loading
}
