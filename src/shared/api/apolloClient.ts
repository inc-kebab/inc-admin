import { errorLink } from '@/shared/api/links/error'
import { ApolloClient, InMemoryCache, split } from '@apollo/client'
import { GraphQLWsLink } from '@apollo/client/link/subscriptions'
import { getMainDefinition } from '@apollo/client/utilities'
import { createClient } from 'graphql-ws'

import { authLinkBasic } from './links/auth'
import { httpLink } from './links/base'

export const wsLink = new GraphQLWsLink(
  createClient({
    url: process.env.NEXT_PUBLIC_GQL!,
  })
)

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query)

    return definition.kind === 'OperationDefinition' && definition.operation === 'subscription'
  },
  wsLink,
  errorLink.concat(authLinkBasic).concat(httpLink)
)

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  // link: errorLink.concat(authLinkBasic).concat(httpLink),
  link: splitLink,
})
