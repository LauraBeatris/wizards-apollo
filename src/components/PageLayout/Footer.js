import React from 'react'
import { VStack, Link } from '@chakra-ui/layout'
import { ExternalLinkIcon } from '@chakra-ui/icons'

const bgGradient = 'linear(to-l, blue.gradient1, blue.gradient1)'

export function Footer ({ children }) {
  return (
    <VStack
      as='footer'
      left='0'
      right='0'
      width='100%'
      bottom='0'
      justify='center'
      position='sticky'
      paddingY='2'
      marginTop='auto'
      bgGradient={bgGradient}
    >
      {children}
      <Link
        href='https://www.apollographql.com/docs/react/caching/overview/'
        variant='with-gray-gradient'
        isExternal
      >
        AC Caching Docs
        {' '}
        <ExternalLinkIcon
          color='gray.gradient2'
          mx='2px'
        />
      </Link>
    </VStack>
  )
}
