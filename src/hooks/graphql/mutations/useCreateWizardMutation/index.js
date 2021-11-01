import { useMutation } from '@apollo/client'
import gql from 'graphql-tag'

const createWizardMutation = gql`
  mutation CreateWizard ($wizardData: wizard_insert_input!) {
    insert_wizard_one(object: $wizardData) {
      id
      name
    }
  }
`

export function useCreateWizardMutation (mutationOptions) {
  return useMutation(createWizardMutation, mutationOptions)
}
