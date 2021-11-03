import gql from 'graphql-tag'
import { useQuery } from '@apollo/client'

export const getWizardQuery = gql`
  query GetWizard($id: Int!) {
    wizard: wizard_by_pk(id: $id) {
      id
      name
      image_url
      comments {
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
