import { useMutation } from '@apollo/client'
import gql from 'graphql-tag'

const createWizardMutation = gql`
  mutation CreateWizard ($wizardData: wizard_insert_input!) {
    new_wizard: insert_wizard_one(object: $wizardData) {
      id
      name
    }
  }
`

const addWizardToCache = ({ cache, newWizard }) => {
  cache.modify({
    fields: {
      wizard (existingWizards = []) {
        const newWizardRef = cache.writeFragment({
          data: newWizard,
          fragment: gql`
            fragment NewWizard on wizard {
              id
              name
            }
          `
        })

        return [...existingWizards, newWizardRef]
      }
    }
  })
}

export function useCreateWizardMutation (mutationOptions) {
  return useMutation(createWizardMutation, {
    ...mutationOptions,
    update (cache, { data: { new_wizard: newWizard } }) {
      addWizardToCache({ cache, newWizard })
    }
  })
}
