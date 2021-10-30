import React from 'react'
import { Image } from '@chakra-ui/react'
import { HStack, Flex, Text } from '@chakra-ui/layout'
import { Link, useParams } from 'react-router-dom'

import { ArrowBackIcon } from '@chakra-ui/icons'

import { PageLayout } from '../../components/PageLayout'
import { useGetWizardQuery } from '../../hooks/graphql/useGetWizardQuery'
import { WizardBadge } from '../../components/WizardBadge'

export function WizardDetails () {
  const { id } = useParams()

  const { data } = useGetWizardQuery({
    variables: {
      id: Number(id)
    }
  })

  const {
    name: wizardName,
    house: { name: houseName } = {},
    image_url: imageUrl
  } = data?.wizard ?? {}

  return (
    <PageLayout>
      <Flex width='100%'>
        <HStack
          width='100%'
          spacing='2'
          justify='flex-start'
        >
          <Text
            variant='with-gray-gradient'
            fontWeight='bold'
          >
            {wizardName}
          </Text>

          <WizardBadge houseName={houseName} />
        </HStack>

        <Link
          to='/'
          marginRight='auto'
        >
          <HStack
            color='gray.gradient2'
            spacing='0'
          >
            <ArrowBackIcon />
            <Text>Back</Text>
          </HStack>
        </Link>
      </Flex>

      <Image
        src={imageUrl}
        alt={houseName}
        width='100%'
        height='150'
        marginTop='2'
        objectFit='cover'
        borderRadius='5'
      />
    </PageLayout>
  )
}
