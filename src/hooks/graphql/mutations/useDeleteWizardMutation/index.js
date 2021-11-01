import gql from 'graphql-tag'
import { useMutation } from '@apollo/client'

const deleteWizardMutation = gql`
  mutation DeleteWizard ($id: Int!) {
    delete_wizard_by_pk(id: $id) {
      id
      name
    }
  }
`

export function useDeleteWizardMutation (mutationOptions) {
  return useMutation(deleteWizardMutation, mutationOptions)
}
