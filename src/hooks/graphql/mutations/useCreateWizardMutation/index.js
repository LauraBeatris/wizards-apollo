import { useMutation } from '@apollo/client'
import gql from 'graphql-tag'

const createWizardMutation = gql`
  mutation CreateWizard ($wizardData: wizards_insert_input!) {
    insert_wizards_one(object: $object) {
      id
      name
    }
  }
`

export function useCreateWizardMutation (mutationOptions) {
  return useMutation(createWizardMutation, mutationOptions)
}
