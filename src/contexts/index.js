import { ApolloProvider } from '@apollo/client'
import React from 'react'

import { client } from '../config/apolloClient'

export function AppProvider ({ children }) {
  return (
    <ApolloProvider client={client}>
      {children}
    </ApolloProvider>
  )
};

export default AppProvider
