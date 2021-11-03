import React from 'react'
import { Box, SimpleGrid } from '@chakra-ui/layout'
import { Skeleton } from '@chakra-ui/react'

import { PageLayout } from '../../components/PageLayout'
import { WizardBox } from '../../components/WizardBox'
import { useListWizardsQuery, wizardsPaginationLimit } from '../../hooks/graphql/queries/useListWizardsQuery'
import { useFetchPolicyStore } from '../../hooks/stores/useFetchPolicyStore'
import { getIsQueryLoaded } from '../../queryUtils'
import { Pagination } from '../../components/Pagination'

const skeletonQuantity = [...Array(16).keys()]
const wizardsPageSize = 12

export function Home () {
  const fetchPolicy = useFetchPolicyStore(state => state.fetchPolicy)

  const { data, error, loading, fetchMore } = useListWizardsQuery({
    fetchPolicy: fetchPolicy
  })

  const isLoading = !getIsQueryLoaded({
    data,
    error,
    loading,
    queryKey: 'wizard'
  })

  const wizard = data?.wizard
  const paginationTotal = data?.wizard_aggregate?.aggregate?.count

  const handleFetchMore = ({ offset }) => {
    fetchMore({ variables: { offset } })
  }

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
              wizard?.map(({ id, name, image_url: imageUrl, house }) => (
                <WizardBox
                  key={id}
                  wizardId={id}
                  houseName={house.name}
                  wizardName={name}
                  wizardImageUrl={imageUrl}
                />
              ))
            )}

        <Pagination
          total={paginationTotal}
          limit={wizardsPaginationLimit}
          pageSize={wizardsPageSize}
          onPageChange={handleFetchMore}
        />
      </SimpleGrid>
    </PageLayout>
  )
}
