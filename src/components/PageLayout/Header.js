import React from 'react'
import { Text } from '@chakra-ui/react'
import { Flex, VStack } from '@chakra-ui/layout'

import { FetchPolicySelector } from '../FetchPolicySelector'
import { CreateWizard } from '../CreateWizard'

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
      borderBottomLeftRadius='5'
      borderBottomRightRadius='5'
      backgroundColor='inherit'
    >
      <Flex width='100%' justify='space-between'>
        <Flex>
          <Text
            fontSize='2xl'
            marginRight='1'
          >
            🧙
          </Text>
          <Text
            fontSize='2xl'
            textShadow='lg'
            fontWeight='bold'
            variant='with-gray-gradient'
          >
            Apollo Wizard
          </Text>
        </Flex>

        <CreateWizard />
      </Flex>

      <Text variant='with-gray-gradient'>
        Inspect the caching magic by wizards
      </Text>

      <FetchPolicySelector />
    </VStack>
  )
}
