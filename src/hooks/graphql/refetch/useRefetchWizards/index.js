import { client } from '../../../../config/apolloClient'

/**
 * Re-fetches any queries that depend on Query.wizard
 */
export function useRefetchWizards () {
  const refetchWizards = () => {
    client.refetchQueries({
      updateCache (cache) {
        cache.evict({ fieldName: 'wizard' })
      }
    })
  }

  return refetchWizards
}
