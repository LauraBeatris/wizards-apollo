import gql from 'graphql-tag'
import { useQuery } from '@apollo/client'

export const wizardsPaginationLimit = 12

const listWizardsQuery = gql`
  query ListWizards(
    $limit: Int = 12
    $offset: Int = 0
  ) {
    wizard_aggregate {
      aggregate {
        count
      }
    }
    wizard(
      limit: $limit
      offset: $offset
      order_by: { name: asc }
    ) {
      id
      name
      image_url
      house {
        id
        name
      }
    }
  }
`

export function useListWizardsQuery (queryOptions) {
  return useQuery(listWizardsQuery, queryOptions)
}
