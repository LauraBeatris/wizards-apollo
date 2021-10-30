import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { ApolloProvider } from '@apollo/client'

import { theme } from '../styles/theme'
import { client } from '../config/apolloClient'

export function AppProvider ({ children }) {
  return (
    <ChakraProvider theme={theme}>
      <ApolloProvider client={client}>
        {children}
      </ApolloProvider>
    </ChakraProvider>
  )
};

export default AppProvider
