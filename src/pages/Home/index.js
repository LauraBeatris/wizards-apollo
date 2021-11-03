import React, { useState } from 'react'
import { Box, SimpleGrid } from '@chakra-ui/layout'
import { Skeleton } from '@chakra-ui/react'

import { PageLayout } from '../../components/PageLayout'
import { WizardBox } from '../../components/WizardBox'
import { useListWizardsQuery } from '../../hooks/graphql/queries/useListWizardsQuery'
import { useFetchPolicyStore } from '../../hooks/stores/useFetchPolicyStore'
import { getIsQueryLoaded } from '../../queryUtils'
import { Pagination } from '../../components/Pagination'

const skeletonQuantity = [...Array(16).keys()]
const wizardsPageSize = 12
const initialOffset = 0

export function Home () {
  const [offset, setOffset] = useState(initialOffset)
  const fetchPolicy = useFetchPolicyStore(state => state.fetchPolicy)

  const { data, error, loading, fetchMore } = useListWizardsQuery({
    fetchPolicy,
    variables: {
      offset,
      limit: wizardsPageSize
    }
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
    fetchMore({
      variables: { offset, limit: wizardsPageSize }
    }).then(() => {
      setOffset(offset)
    })
  }

  return (
    <PageLayout footerContent={
      <Pagination
        total={paginationTotal}
        limit={wizardsPageSize}
        pageSize={wizardsPageSize}
        onPageChange={handleFetchMore}
      />
    }
    >
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

      </SimpleGrid>
    </PageLayout>
  )
}
