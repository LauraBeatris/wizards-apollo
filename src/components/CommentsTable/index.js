import React from 'react'
import { Flex, HStack, VStack, Text, StackDivider } from '@chakra-ui/layout'
import { Skeleton, IconButton } from '@chakra-ui/react'
import { PlusSquareIcon } from '@chakra-ui/icons'

export function CommentsTable ({
  comments,
  isLoaded
}) {
  return (
    <Skeleton
      flex={1}
      width={['100%', '100%', '50%']}
      marginTop='5'
      marginRight='auto'
      borderRadius='5'
      isLoaded={isLoaded}
    >
      <VStack
        padding={5}
        align='flex-start'
        borderRadius='5'
        backgroundColor='gray.gradient2'
        divider={<StackDivider borderColor='gray.200' />}
      >
        <Flex as='header' width='100%' align='center'>
          <Text fontWeight='bold'>Comments</Text>

          <IconButton
            icon={<PlusSquareIcon />}
            title='Add comment'
            marginLeft='auto'
          />
        </Flex>

        <VStack
          spacing='1'
          maxHeight='200'
          overflow='scroll'
          align='flex-start'
          divider={<StackDivider borderColor='gray.200' />}
        >
          {comments?.map(({ id, text }) => (
            <HStack spacing='2' key={id}>
              <Text>{text}</Text>
            </HStack>
          ))}
        </VStack>
      </VStack>
    </Skeleton>
  )
}
