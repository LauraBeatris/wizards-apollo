import { ApolloClient, InMemoryCache } from '@apollo/client'
import { offsetLimitPagination } from '@apollo/client/utilities'

export const cache = new InMemoryCache({
  typePolicies: {
    RootQuery: {
      fields: {
        wizard: {
          read (existing, { args }) {
            if (args) {
              return (
                existing &&
                existing.slice(args.offset, args.offset + args.limit)
              )
            }

            return existing
          },
          ...offsetLimitPagination()
        }
      }
    }
  }
})

export const client = new ApolloClient({
  uri: process.env.REACT_APP_API_URI,
  cache,
  headers: {
    'x-hasura-admin-secret': process.env.REACT_APP_API_ADMIN_SECRET
  }
})
