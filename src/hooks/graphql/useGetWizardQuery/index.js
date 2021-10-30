import gql from 'graphql-tag'
import { useQuery } from '@apollo/client'

const getWizardQuery = gql`
  query GetWizard($id: Int!) {
    wizard: wizards_by_pk(id: $id) {
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

export function useGetWizardQuery (queryOptions) {
  return useQuery(getWizardQuery, queryOptions)
}
