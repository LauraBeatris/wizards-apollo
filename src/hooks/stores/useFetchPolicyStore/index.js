import create from 'zustand'

export const useFetchPolicyStore = create(set => ({
  fetchPolicy: 'cache-first',
  setFetchPolicy: (fetchPolicy) => set(() => ({ fetchPolicy }))
}))
