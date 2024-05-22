import { setContext } from '@apollo/client/link/context'

export const authLinkBasic = setContext((_, { headers }) => {
  const decodedToken = 'YWRtaW46cXdlcnR5MTI'

  return {
    headers: {
      ...headers,
      authorization: `Basic ${decodedToken}`,
    },
  }
})
