import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'

import * as Types from '../../../types/apollo'
const defaultOptions = {} as const

export type GetPhotosQueryVariables = Types.Exact<{
  id: Types.Scalars['Int']['input']
}>

export type GetPhotosQuery = {
  __typename?: 'Query'
  getPhotosOfUser?: Array<{
    __typename?: 'ImageModel'
    type?: null | string
    url: string
  } | null> | null
}

export const GetPhotosDocument = gql`
  query getPhotos($id: Int!) {
    getPhotosOfUser(id: $id) {
      url
      type
    }
  }
`

/**
 * __useGetPhotosQuery__
 *
 * To run a query within a React component, call `useGetPhotosQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPhotosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPhotosQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetPhotosQuery(
  baseOptions: ({ skip: boolean } | { skip?: boolean; variables: GetPhotosQueryVariables }) &
    Apollo.QueryHookOptions<GetPhotosQuery, GetPhotosQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }

  return Apollo.useQuery<GetPhotosQuery, GetPhotosQueryVariables>(GetPhotosDocument, options)
}
export function useGetPhotosLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetPhotosQuery, GetPhotosQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }

  return Apollo.useLazyQuery<GetPhotosQuery, GetPhotosQueryVariables>(GetPhotosDocument, options)
}
export function useGetPhotosSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<GetPhotosQuery, GetPhotosQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }

  return Apollo.useSuspenseQuery<GetPhotosQuery, GetPhotosQueryVariables>(
    GetPhotosDocument,
    options
  )
}
export type GetPhotosQueryHookResult = ReturnType<typeof useGetPhotosQuery>
export type GetPhotosLazyQueryHookResult = ReturnType<typeof useGetPhotosLazyQuery>
export type GetPhotosSuspenseQueryHookResult = ReturnType<typeof useGetPhotosSuspenseQuery>
export type GetPhotosQueryResult = Apollo.QueryResult<GetPhotosQuery, GetPhotosQueryVariables>
