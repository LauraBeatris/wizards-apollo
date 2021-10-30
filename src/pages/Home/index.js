import React from 'react'
import { SimpleGrid } from '@chakra-ui/layout'

import { PageLayout } from '../../components/PageLayout'
import { WizardBox } from '../../components/WizardBox'

export function Home () {
  return (
    <PageLayout>
      <SimpleGrid
        w='full'
        columns={[2, null, 4]}
        spacingX='40px'
        spacingY='20px'
      >
        <WizardBox
          houseName='Gryffindor'
          wizardName='Harry Potter'
          wizardImageUrl='http://imagem.band.com.br/f_480959.jpg'
        />
      </SimpleGrid>
    </PageLayout>
  )
}
