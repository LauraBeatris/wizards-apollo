import React from 'react'
import { Image } from '@chakra-ui/react'
import { HStack, Flex, Text } from '@chakra-ui/layout'
import { Link, useParams } from 'react-router-dom'

import { ArrowBackIcon } from '@chakra-ui/icons'

import { Helmet } from 'react-helmet'

import { PageLayout } from '../../components/PageLayout'
import { useGetWizardQuery } from '../../hooks/graphql/useGetWizardQuery'
import { WizardBadge } from '../../components/WizardBadge'
import { useFetchPolicyStore } from '../../hooks/stores/useFetchPolicyStore'

export function WizardDetails () {
  const { id } = useParams()

  const fetchPolicy = useFetchPolicyStore(state => state.fetchPolicy)
  const { data } = useGetWizardQuery({
    variables: {
      id: Number(id)
    },
    fetchPolicy
  })

  const {
    name: wizardName,
    house: { name: houseName } = {},
    image_url: imageUrl
  } = data?.wizard ?? {}

  return (
    <PageLayout>
      <Helmet>
        <title>Apollo Wizard - {wizardName ?? ''}</title>
      </Helmet>

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
        marginTop='2'
        objectFit='cover'
        borderRadius='5'
        marginRight='auto'
        width={['100%', '40%', '40%']}
      />
    </PageLayout>
  )
}
