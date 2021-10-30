import React from 'react'
import { Text } from '@chakra-ui/react'
import { Image } from '@chakra-ui/image'
import { Badge, Box, VStack } from '@chakra-ui/layout'
import { EditIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom'

const mapColorSchemeToHouseName = {
  Gryffindor: 'red',
  Slytherin: 'green',
  Ravenclaw: 'blue',
  Hufflepuff: 'yellow'
}

export function WizardBox ({
  wizardId,
  houseName,
  wizardName,
  wizardImageUrl
}) {
  return (
    <Link to={`/wizards/${wizardId}`}>
      <Box
        p='5'
        bgColor='white'
        boxShadow='md'
        borderRadius='5'
      >
        <Image
          src={wizardImageUrl}
          width='100%'
          height='100'
          objectFit='cover'
          borderRadius='md'
          objectPosition='top'
        />
        <VStack
          align='flex-start'
          spacing='1'
          marginTop='1'
        >
          <Badge
            size='small'
            fontSize='x-small'
            maxWidth='100%'
            colorScheme={mapColorSchemeToHouseName[houseName]}
          >
            {houseName}
          </Badge>

          <VStack
            align='flex-start'
            spacing='0'
            marginTop='1'
          >
            <Text
              fontSize='md'
              marginTop='auto'
              fontWeight='bold'
              noOfLines={['2', '1']}
            >
              {wizardName}
            </Text>
            <Text fontSize='xs' _hover={{ textDecoration: 'underline' }}>
              <EditIcon />
              {' '}
              Click to edit details
            </Text>
          </VStack>
        </VStack>
      </Box>
    </Link>
  )
}
