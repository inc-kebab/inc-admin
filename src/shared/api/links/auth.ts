import { setContext } from '@apollo/client/link/context'

export const authLinkBasic = setContext((_, { headers }) => {
  const decodedToken = btoa('Here log:pass')

  return {
    headers: {
      ...headers,
      authorization: `Basic ${decodedToken}`,
    },
  }
})
