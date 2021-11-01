import React from 'react'
import { Box, SimpleGrid } from '@chakra-ui/layout'
import { Skeleton } from '@chakra-ui/react'

import { PageLayout } from '../../components/PageLayout'
import { WizardBox } from '../../components/WizardBox'
import { useListWizardsQuery } from '../../hooks/graphql/queries/useListWizardsQuery'
import { useFetchPolicyStore } from '../../hooks/stores/useFetchPolicyStore'
import { getIsQueryLoaded } from '../../config/apolloClient'

const skeletonQuantity = [...Array(16).keys()]

export function Home () {
  const fetchPolicy = useFetchPolicyStore(state => state.fetchPolicy)

  const { data, error, loading } = useListWizardsQuery({
    fetchPolicy: fetchPolicy
  })

  const isLoading = !getIsQueryLoaded({
    data,
    error,
    loading,
    queryKey: 'wizards'
  })

  return (
    <PageLayout>
      <SimpleGrid
        w='full'
        columns={[2, null, 4]}
        spacingX='40px'
        spacingY='20px'
      >
        {isLoading
          ? (
              skeletonQuantity.map((index) => (
                <Skeleton key={index}>
                  <Box height='200' />
                </Skeleton>
              ))
            )
          : (
              data?.wizards?.map(({ id, name, image_url: imageUrl, house }) => (
                <WizardBox
                  key={id}
                  wizardId={id}
                  houseName={house.name}
                  wizardName={name}
                  wizardImageUrl={imageUrl}
                />
              ))
            )}

      </SimpleGrid>
    </PageLayout>
  )
}
