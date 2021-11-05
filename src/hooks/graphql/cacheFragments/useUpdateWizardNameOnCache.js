import gql from 'graphql-tag'

import { cache, client } from '../../../config/apolloClient'

const wizardNameFragment = gql`
  fragment WizardName on wizard {
    name
  }
`

export function useUpdateWizardNameOnCache () {
  const updateWizardNameOnCache = ({ name, wizard }) => {
    client.writeFragment({
      id: cache.identify(wizard),
      fragment: wizardNameFragment,
      data: { name }
    })
  }

  return updateWizardNameOnCache
}
