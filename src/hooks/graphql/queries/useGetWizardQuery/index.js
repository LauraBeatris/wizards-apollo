import gql from 'graphql-tag'
import { useQuery } from '@apollo/client'

const getWizardQuery = gql`
  query GetWizard(
    $id: Int!
    $limit: Int = 4
    $offset: Int = 0
  ) {
    wizard: wizard_by_pk(id: $id) {
      id
      name
      image_url
      comments(
        limit: $limit 
        offset: $offset
      ) {
        id
        text
      }
      house {
        id
        name
      }
    }
  }
`

export function useGetWizardQuery (queryOptions) {
  return useQuery(getWizardQuery, queryOptions)
}
