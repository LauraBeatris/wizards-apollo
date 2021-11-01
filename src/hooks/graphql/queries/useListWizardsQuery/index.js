import gql from 'graphql-tag'
import { useQuery } from '@apollo/client'

const listWizardsQuery = gql`
  query ListWizards {
    wizard {
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
