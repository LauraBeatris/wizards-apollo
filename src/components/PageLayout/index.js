import React from 'react'
import { Flex } from '@chakra-ui/react'
import { Container } from '@chakra-ui/layout'

import { Header } from './Header'
import { Footer } from './Footer'

export function PageLayout ({ children }) {
  return (
    <Flex
      width='100vw'
      padding='5'
      minHeight='100vh'
      bgGradient='linear(to-t, #B6C0E7, #D8DCEB)'
    >
      <Container
        maxW='container.lg'
        boxShadow='xl'
        centerContent
        borderRadius='lg'
        bgGradient='linear(to-t, #101993, #3163D2)'
      >
        <Header />
        {children}
        <Footer />
      </Container>
    </Flex>
  )
}
