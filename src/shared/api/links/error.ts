import { toast } from 'react-toastify'

import { onError } from '@apollo/client/link/error'

export const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ locations, message, path }) =>
      toast.error(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`)
    )
  }
  if (networkError) {
    toast.error(`[Network error]: ${networkError}`)
  }
})
