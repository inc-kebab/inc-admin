import { errorLink } from '@/shared/api/links/error'
import { ApolloClient, InMemoryCache, from } from '@apollo/client'

import { authLinkBasic } from './links/auth'
import { httpLink } from './links/base'

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: errorLink.concat(authLinkBasic).concat(httpLink),
})
