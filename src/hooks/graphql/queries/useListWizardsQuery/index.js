import gql from 'graphql-tag'
import { useQuery } from '@apollo/client'

const listWizardsQuery = gql`
  query ListWizards(
    $limit: Int!
    $offset: Int!
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
