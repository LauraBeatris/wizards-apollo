import React from 'react'
import { Flex } from '@chakra-ui/react'
import { Container } from '@chakra-ui/layout'

import { Header } from './Header'
import { Footer } from './Footer'

export function PageLayout ({ children, footerContent }) {
  return (
    <Flex
      width='100vw'
      padding='5'
      height='100vh'
      bgGradient='linear(to-t, gray.gradient1, gray.gradient2)'
    >
      <Container
        maxW='container.lg'
        overflow='scroll'
        position='relative'
        boxShadow='xl'
        borderRadius='lg'
        bgGradient='linear(to-t, blue.gradient1, blue.gradient2)'
        centerContent
      >
        <Header />
        {children}
        <Footer>
          {footerContent}
        </Footer>
      </Container>
    </Flex>
  )
}
