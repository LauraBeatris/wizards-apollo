import React from 'react'
import { HStack, Link } from '@chakra-ui/layout'
import { ExternalLinkIcon } from '@chakra-ui/icons'

export function Footer () {
  return (
    <HStack marginTop='auto' paddingY='2'>
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
    </HStack>
  )
}
