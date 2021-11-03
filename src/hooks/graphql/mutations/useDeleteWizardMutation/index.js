import gql from 'graphql-tag'
import { useMutation } from '@apollo/client'

import { useRefetchWizards } from '../../refetch/useRefetchWizards'

const deleteWizardMutation = gql`
  mutation DeleteWizard ($id: Int!) {
    delete_wizard_by_pk(id: $id) {
      id
      name
    }
  }
`

export function useDeleteWizardMutation (mutationOptions) {
  const refetchWizards = useRefetchWizards()

  return useMutation(deleteWizardMutation, {
    ...mutationOptions,
    onCompleted: async () => {
      mutationOptions?.onCompleted()

      await refetchWizards()
    }
  })
}
