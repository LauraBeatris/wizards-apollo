export const getIsQueryLoaded = ({ data, queryKey, error, loading }) => {
  const isDataLoaded = data?.[queryKey] && !error

  return isDataLoaded || !loading
}
