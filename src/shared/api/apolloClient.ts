import { ApolloClient, InMemoryCache } from '@apollo/client'

import { authLinkBasic } from './links/auth'
import { httpLink } from './links/base'

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLinkBasic.concat(httpLink),
})
