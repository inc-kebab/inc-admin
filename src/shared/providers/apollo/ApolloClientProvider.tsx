import { PropsWithChildren } from 'react'

import { client } from '@/shared/api/apolloClient'
import { ApolloProvider } from '@apollo/client'

export const ApolloClientProvider = ({ children }: PropsWithChildren) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>
}
