import React from 'react'
import { Text } from '@chakra-ui/react'
import { VStack, HStack } from '@chakra-ui/layout'

import { FetchPolicySelector } from '../FetchPolicySelector'

const bgGradient = 'linear(to-l, blue.gradient2, blue.gradient2)'

export function Header () {
  return (
    <VStack
      as='header'
      top='0'
      width='full'
      zIndex={10}
      align='flex-start'
      spacing='0'
      padding='2'
      marginBottom='15'
      position='sticky'
      bgGradient={bgGradient}
      borderLeftRadius='5'
      borderRightRadius='5'
      backgroundColor='inherit'
    >
      <HStack>
        <Text fontSize='2xl'>🧙</Text>
        <Text
          fontSize='2xl'
          textShadow='lg'
          fontWeight='bold'
          variant='with-gray-gradient'
        >
          Apollo Wizard
        </Text>
      </HStack>

      <Text variant='with-gray-gradient'>
        Inspect the caching magic by wizards
      </Text>

      <FetchPolicySelector />
    </VStack>
  )
}
