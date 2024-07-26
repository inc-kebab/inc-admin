import { errorLink } from '@/shared/api/links/error'
import { ApolloClient, InMemoryCache, split } from '@apollo/client'
import { WebSocketLink } from '@apollo/client/link/ws'
import { getMainDefinition } from '@apollo/client/utilities'
import { SubscriptionClient } from 'subscriptions-transport-ws'

import { authLinkBasic } from './links/auth'
import { httpLink } from './links/base'

export const wsLink = new WebSocketLink(
  new SubscriptionClient(process.env.NEXT_PUBLIC_SUBSCRIPTIONS!, {
    lazy: true,
    reconnect: true,
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
