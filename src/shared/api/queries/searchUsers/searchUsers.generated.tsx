import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'

import * as Types from '../../../types/apollo'
const defaultOptions = {} as const

export type GetUserByNameQueryVariables = Types.Exact<{
  searchTerm: Types.Scalars['String']['input']
}>

export type GetUserByNameQuery = {
  __typename?: 'Query'
  getUsers?: {
    __typename?: 'UserPaginationModel'
    pagination?: { __typename?: 'PaginationModel'; totalCount: number } | null
    users?: Array<{
      __typename?: 'UserModel'
      email: string
      fullName: string
      id: number
      profile?: {
        __typename?: 'ProfileModel'
        firstname?: null | string
        lastname?: null | string
      } | null
      username: string
    }> | null
  } | null
}

export const GetUserByNameDocument = gql`
  query GetUserByName($searchTerm: String!) {
    getUsers(searchTerm: $searchTerm) {
      users {
        id
        fullName
        username
        email
        profile {
          firstname
          lastname
        }
      }
      pagination {
        totalCount
      }
    }
  }
`

/**
 * __useGetUserByNameQuery__
 *
 * To run a query within a React component, call `useGetUserByNameQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserByNameQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserByNameQuery({
 *   variables: {
 *      searchTerm: // value for 'searchTerm'
 *   },
 * });
 */
export function useGetUserByNameQuery(
  baseOptions: ({ skip: boolean } | { skip?: boolean; variables: GetUserByNameQueryVariables }) &
    Apollo.QueryHookOptions<GetUserByNameQuery, GetUserByNameQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }

  return Apollo.useQuery<GetUserByNameQuery, GetUserByNameQueryVariables>(
    GetUserByNameDocument,
    options
  )
}
export function useGetUserByNameLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetUserByNameQuery, GetUserByNameQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }

  return Apollo.useLazyQuery<GetUserByNameQuery, GetUserByNameQueryVariables>(
    GetUserByNameDocument,
    options
  )
}
export function useGetUserByNameSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<GetUserByNameQuery, GetUserByNameQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }

  return Apollo.useSuspenseQuery<GetUserByNameQuery, GetUserByNameQueryVariables>(
    GetUserByNameDocument,
    options
  )
}
export type GetUserByNameQueryHookResult = ReturnType<typeof useGetUserByNameQuery>
export type GetUserByNameLazyQueryHookResult = ReturnType<typeof useGetUserByNameLazyQuery>
export type GetUserByNameSuspenseQueryHookResult = ReturnType<typeof useGetUserByNameSuspenseQuery>
export type GetUserByNameQueryResult = Apollo.QueryResult<
  GetUserByNameQuery,
  GetUserByNameQueryVariables
>
