import React from 'react'
import { Text } from '@chakra-ui/react'
import { VStack, HStack } from '@chakra-ui/layout'

export function Header () {
  return (
    <VStack
      as='header'
      width='full'
      align='flex-start'
      spacing='0'
      paddingY='2'
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
    </VStack>
  )
}
