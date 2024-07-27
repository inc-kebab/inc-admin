import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'

import * as Types from '../../../types/apollo'
const defaultOptions = {} as const

export type PostAddedSubscriptionVariables = Types.Exact<{ [key: string]: never }>

export type PostAddedSubscription = {
  __typename?: 'Subscription'
  postAdded: {
    __typename?: 'PostModel'
    avatarOwner?: null | string
    createdAt: any
    description?: null | string
    id: number
    images?: Array<{ __typename?: 'ImageModel'; url: string }> | null
    ownerId: number
    status: Types.BanStatus
    updatedAt: any
    username: string
  }
}

export const PostAddedDocument = gql`
  subscription postAdded {
    postAdded {
      id
      images {
        url
      }
      ownerId
      description
      createdAt
      updatedAt
      status
      avatarOwner
      username
    }
  }
`

/**
 * __usePostAddedSubscription__
 *
 * To run a query within a React component, call `usePostAddedSubscription` and pass it any options that fit your needs.
 * When your component renders, `usePostAddedSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePostAddedSubscription({
 *   variables: {
 *   },
 * });
 */
export function usePostAddedSubscription(
  baseOptions?: Apollo.SubscriptionHookOptions<
    PostAddedSubscription,
    PostAddedSubscriptionVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }

  return Apollo.useSubscription<PostAddedSubscription, PostAddedSubscriptionVariables>(
    PostAddedDocument,
    options
  )
}
export type PostAddedSubscriptionHookResult = ReturnType<typeof usePostAddedSubscription>
export type PostAddedSubscriptionResult = Apollo.SubscriptionResult<PostAddedSubscription>
