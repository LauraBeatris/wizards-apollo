import React from 'react'
import { SimpleGrid } from '@chakra-ui/layout'

import { PageLayout } from '../../components/PageLayout'
import { WizardBox } from '../../components/WizardBox'
import { useListWizardsQuery } from '../../hooks/useListWizardsQuery'

export function Home () {
  const { data } = useListWizardsQuery()

  return (
    <PageLayout>
      <SimpleGrid
        w='full'
        columns={[2, null, 4]}
        spacingX='40px'
        spacingY='20px'
      >
        {data?.wizards?.map(({ id, name, image_url: imageUrl, house }) => (
          <WizardBox
            key={id}
            houseName={house.name}
            wizardName={name}
            wizardImageUrl={imageUrl}
          />
        ))}
      </SimpleGrid>
    </PageLayout>
  )
}
