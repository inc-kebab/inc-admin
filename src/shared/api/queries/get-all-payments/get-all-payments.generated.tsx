import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'

import * as Types from '../../../types/apollo'
const defaultOptions = {} as const

export type GetAllPaymentsQueryVariables = Types.Exact<{
  isAutoUpdate?: Types.InputMaybe<Types.Scalars['Boolean']['input']>
  pageNumber?: Types.InputMaybe<Types.Scalars['Int']['input']>
  pageSize?: Types.InputMaybe<Types.Scalars['Int']['input']>
  searchTerm?: Types.InputMaybe<Types.Scalars['String']['input']>
  sortBy?: Types.InputMaybe<Types.Scalars['String']['input']>
  sortDirection?: Types.InputMaybe<Types.SortDirection>
}>

export type GetAllPaymentsQuery = {
  __typename?: 'Query'
  getAllPayments: {
    __typename?: 'UsersPaymentsPaginationModel'
    items: Array<{
      __typename?: 'UsersPaymentsModel'
      avatar?: null | string
      dateOfPayments: string
      paymentType: string
      price: number
      subscriptionType: string
      userId: number
      username: string
    }>
    pageNumber: number
    pageSize: number
    pagesCount: number
    totalCount: number
  }
}

export const GetAllPaymentsDocument = gql`
  query getAllPayments(
    $searchTerm: String
    $pageSize: Int
    $pageNumber: Int
    $isAutoUpdate: Boolean
    $sortBy: String
    $sortDirection: SortDirection
  ) {
    getAllPayments(
      searchTerm: $searchTerm
      pageSize: $pageSize
      pageNumber: $pageNumber
      isAutoUpdate: $isAutoUpdate
      sortBy: $sortBy
      sortDirection: $sortDirection
    ) {
      items {
        userId
        username
        price
        dateOfPayments
        subscriptionType
        paymentType
        avatar
      }
      pagesCount
      pageNumber
      pageSize
      totalCount
    }
  }
`

/**
 * __useGetAllPaymentsQuery__
 *
 * To run a query within a React component, call `useGetAllPaymentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllPaymentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllPaymentsQuery({
 *   variables: {
 *      searchTerm: // value for 'searchTerm'
 *      pageSize: // value for 'pageSize'
 *      pageNumber: // value for 'pageNumber'
 *      isAutoUpdate: // value for 'isAutoUpdate'
 *      sortBy: // value for 'sortBy'
 *      sortDirection: // value for 'sortDirection'
 *   },
 * });
 */
export function useGetAllPaymentsQuery(
  baseOptions?: Apollo.QueryHookOptions<GetAllPaymentsQuery, GetAllPaymentsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }

  return Apollo.useQuery<GetAllPaymentsQuery, GetAllPaymentsQueryVariables>(
    GetAllPaymentsDocument,
    options
  )
}
export function useGetAllPaymentsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetAllPaymentsQuery, GetAllPaymentsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }

  return Apollo.useLazyQuery<GetAllPaymentsQuery, GetAllPaymentsQueryVariables>(
    GetAllPaymentsDocument,
    options
  )
}
export function useGetAllPaymentsSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<GetAllPaymentsQuery, GetAllPaymentsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }

  return Apollo.useSuspenseQuery<GetAllPaymentsQuery, GetAllPaymentsQueryVariables>(
    GetAllPaymentsDocument,
    options
  )
}
export type GetAllPaymentsQueryHookResult = ReturnType<typeof useGetAllPaymentsQuery>
export type GetAllPaymentsLazyQueryHookResult = ReturnType<typeof useGetAllPaymentsLazyQuery>
export type GetAllPaymentsSuspenseQueryHookResult = ReturnType<
  typeof useGetAllPaymentsSuspenseQuery
>
export type GetAllPaymentsQueryResult = Apollo.QueryResult<
  GetAllPaymentsQuery,
  GetAllPaymentsQueryVariables
>
