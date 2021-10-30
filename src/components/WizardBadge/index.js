import React from 'react'
import { Badge } from '@chakra-ui/layout'

const mapColorSchemeToHouseName = {
  Gryffindor: 'red',
  Slytherin: 'green',
  Ravenclaw: 'blue',
  Hufflepuff: 'yellow'
}

export function WizardBadge ({ houseName }) {
  return (
    <Badge
      size='small'
      fontSize='x-small'
      maxWidth='100%'
      colorScheme={mapColorSchemeToHouseName[houseName]}
    >
      {houseName}
    </Badge>
  )
}
