import { createHttpLink } from '@apollo/client'

export const httpLink = createHttpLink({
  uri: process.env.NEXT_PUBLIC_GQL!,
})
