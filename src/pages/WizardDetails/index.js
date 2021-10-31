import React from 'react'
import { Image, Skeleton } from '@chakra-ui/react'
import { HStack, Flex, Text } from '@chakra-ui/layout'
import { Link, useParams } from 'react-router-dom'
import { ArrowBackIcon } from '@chakra-ui/icons'
import { Helmet } from 'react-helmet'

import { PageLayout } from '../../components/PageLayout'
import { useGetWizardQuery } from '../../hooks/graphql/useGetWizardQuery'
import { WizardBadge } from '../../components/WizardBadge'
import { useFetchPolicyStore } from '../../hooks/stores/useFetchPolicyStore'
import { CommentsTable } from '../../components/CommentsTable'

const textPlaceholderForSkeletons = 'Placeholder'

export function WizardDetails () {
  const { id } = useParams()

  const fetchPolicy = useFetchPolicyStore(state => state.fetchPolicy)
  const { data, loading } = useGetWizardQuery({
    variables: {
      id: Number(id)
    },
    fetchPolicy
  })

  const {
    name: wizardName,
    house: { name: houseName } = {},
    image_url: imageUrl,
    comments
  } = data?.wizard ?? {}

  const isLoaded = !loading

  return (
    <PageLayout>
      <Helmet>
        <title>Apollo Wizard {wizardName ? `- ${wizardName}` : ''}</title>
      </Helmet>

      <Flex width='100%'>
        <HStack
          width='100%'
          spacing='2'
          justify='flex-start'
        >
          <Skeleton isLoaded={isLoaded}>
            <Text
              variant='with-gray-gradient'
              fontWeight='bold'
            >
              {wizardName ?? textPlaceholderForSkeletons}
            </Text>
          </Skeleton>

          <Skeleton isLoaded={isLoaded}>
            <WizardBadge houseName={houseName ?? textPlaceholderForSkeletons} />
          </Skeleton>
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
        height={['200', null, '40%']}
        width={['100%', '40%', '40%']}
        marginTop='2'
        objectFit='cover'
        marginRight='auto'
        fallback={(
          <Skeleton
            height={['200', null, '40%']}
            width={['100%', '40%', '40%']}
            marginTop='2'
            marginRight='auto'
          />
        )}
        borderRadius='5'
        objectPosition='top'
      />

      <CommentsTable comments={comments} isLoaded={isLoaded} />
    </PageLayout>
  )
}
