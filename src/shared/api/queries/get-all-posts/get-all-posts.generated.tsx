import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'

import * as Types from '../../../types/apollo'
const defaultOptions = {} as const

export type GetAllPostsQueryVariables = Types.Exact<{
  cursor?: Types.InputMaybe<Types.Scalars['String']['input']>
  pageSize?: Types.InputMaybe<Types.Scalars['Int']['input']>
  searchTerm?: Types.InputMaybe<Types.Scalars['String']['input']>
  sortBy?: Types.InputMaybe<Types.Scalars['String']['input']>
  sortDirection?: Types.InputMaybe<Types.SortDirection>
}>

export type GetAllPostsQuery = {
  __typename?: 'Query'
  getAllPosts: {
    __typename?: 'PostsPaginationModel'
    items: Array<{
      __typename?: 'PostModel'
      avatarOwner?: null | string
      description?: null | string
      id: number
      images?: Array<{ __typename?: 'ImageModel'; url: string }> | null
      ownerId: number
      status: Types.BanStatus
      updatedAt: any
      username: string
    }>
  }
}

export const GetAllPostsDocument = gql`
  query GetAllPosts(
    $pageSize: Int = 10
    $sortBy: String = "createdAt"
    $sortDirection: SortDirection = DESC
    $searchTerm: String
    $cursor: String
  ) {
    getAllPosts(
      pageSize: $pageSize
      sortBy: $sortBy
      searchTerm: $searchTerm
      sortDirection: $sortDirection
      cursor: $cursor
    ) {
      items {
        id
        updatedAt
        images {
          url
        }
        avatarOwner
        ownerId
        description
        status
        username
      }
    }
  }
`

/**
 * __useGetAllPostsQuery__
 *
 * To run a query within a React component, call `useGetAllPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllPostsQuery({
 *   variables: {
 *      pageSize: // value for 'pageSize'
 *      sortBy: // value for 'sortBy'
 *      sortDirection: // value for 'sortDirection'
 *      searchTerm: // value for 'searchTerm'
 *      cursor: // value for 'cursor'
 *   },
 * });
 */
export function useGetAllPostsQuery(
  baseOptions?: Apollo.QueryHookOptions<GetAllPostsQuery, GetAllPostsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }

  return Apollo.useQuery<GetAllPostsQuery, GetAllPostsQueryVariables>(GetAllPostsDocument, options)
}
export function useGetAllPostsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetAllPostsQuery, GetAllPostsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }

  return Apollo.useLazyQuery<GetAllPostsQuery, GetAllPostsQueryVariables>(
    GetAllPostsDocument,
    options
  )
}
export function useGetAllPostsSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<GetAllPostsQuery, GetAllPostsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }

  return Apollo.useSuspenseQuery<GetAllPostsQuery, GetAllPostsQueryVariables>(
    GetAllPostsDocument,
    options
  )
}
export type GetAllPostsQueryHookResult = ReturnType<typeof useGetAllPostsQuery>
export type GetAllPostsLazyQueryHookResult = ReturnType<typeof useGetAllPostsLazyQuery>
export type GetAllPostsSuspenseQueryHookResult = ReturnType<typeof useGetAllPostsSuspenseQuery>
export type GetAllPostsQueryResult = Apollo.QueryResult<GetAllPostsQuery, GetAllPostsQueryVariables>
