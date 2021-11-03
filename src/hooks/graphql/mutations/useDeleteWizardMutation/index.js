import gql from 'graphql-tag'
import { useMutation } from '@apollo/client'

const deleteWizardMutation = gql`
  mutation DeleteWizard ($id: Int!) {
    wizard: delete_wizard_by_pk(id: $id) {
      id
      name
    }
  }
`

const deleteWizardFromCache = ({ cache, wizard }) => {
  cache.modify({
    fields: {
      wizard (cachedWizards, { readField }) {
        return cachedWizards.filter(
          commentRef => wizard.id !== readField('id', commentRef)
        )
      }
    }
  })
}

export function useDeleteWizardMutation (mutationOptions) {
  return useMutation(deleteWizardMutation, {
    ...mutationOptions,
    update (cache, { data: { wizard } }) {
      deleteWizardFromCache({ cache, wizard })
    }
  })
}
