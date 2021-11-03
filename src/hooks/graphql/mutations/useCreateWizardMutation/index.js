import { useMutation } from '@apollo/client'
import gql from 'graphql-tag'

import { useRefetchWizards } from '../../refetch/useRefetchWizards'

const createWizardMutation = gql`
  mutation CreateWizard ($wizardData: wizard_insert_input!) {
    insert_wizard_one(object: $wizardData) {
      id
      name
    }
  }
`

export function useCreateWizardMutation (mutationOptions) {
  const refetchWizards = useRefetchWizards()

  return useMutation(createWizardMutation, {
    ...mutationOptions,
    onCompleted: async () => {
      mutationOptions?.onCompleted()

      await refetchWizards()
    }
  })
}
