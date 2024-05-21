import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'

import * as Types from '../../../types/apollo'
const defaultOptions = {} as const

export type GetUserQueryVariables = Types.Exact<{
  id: Types.Scalars['Int']['input']
}>

export type GetUserQuery = {
  __typename?: 'Query'
  getUser: {
    __typename?: 'ProfileModel'
    aboutMe?: null | string
    city?: null | string
    firstname?: null | string
    lastname?: null | string
  }
}

export const GetUserDocument = gql`
  query GetUser($id: Int!) {
    getUser(id: $id) {
      firstname
      lastname
      aboutMe
      city
    }
  }
`

/**
 * __useGetUserQuery__
 *
 * To run a query within a React component, call `useGetUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetUserQuery(
  baseOptions: ({ skip: boolean } | { skip?: boolean; variables: GetUserQueryVariables }) &
    Apollo.QueryHookOptions<GetUserQuery, GetUserQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }

  return Apollo.useQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options)
}
export function useGetUserLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetUserQuery, GetUserQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }

  return Apollo.useLazyQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options)
}
export function useGetUserSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<GetUserQuery, GetUserQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }

  return Apollo.useSuspenseQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options)
}
export type GetUserQueryHookResult = ReturnType<typeof useGetUserQuery>
export type GetUserLazyQueryHookResult = ReturnType<typeof useGetUserLazyQuery>
export type GetUserSuspenseQueryHookResult = ReturnType<typeof useGetUserSuspenseQuery>
export type GetUserQueryResult = Apollo.QueryResult<GetUserQuery, GetUserQueryVariables>
