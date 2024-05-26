import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'

import * as Types from '../../../types/apollo'
const defaultOptions = {} as const

export type GetPaymentsQueryVariables = Types.Exact<{
  id: Types.Scalars['Int']['input']
  pageNumber?: Types.InputMaybe<Types.Scalars['Int']['input']>
  pageSize?: Types.InputMaybe<Types.Scalars['Int']['input']>
}>

export type GetPaymentsQuery = {
  __typename?: 'Query'
  getPaymentsOfUser: {
    __typename?: 'UserPaymentsPaginationModel'
    items: Array<{
      __typename?: 'PaymentModel'
      dateOfPayments: string
      endDateOfSubscription: string
      id: number
      paymentType: string
      price: number
      subscriptionType: string
    }>
    pageNumber: number
    pageSize: number
    pagesCount: number
    totalCount: number
  }
}

export const GetPaymentsDocument = gql`
  query getPayments($id: Int!, $pageSize: Int, $pageNumber: Int) {
    getPaymentsOfUser(id: $id, pageSize: $pageSize, pageNumber: $pageNumber) {
      items {
        id
        price
        dateOfPayments
        endDateOfSubscription
        subscriptionType
        paymentType
      }
      pagesCount
      pageNumber
      pageSize
      totalCount
    }
  }
`

/**
 * __useGetPaymentsQuery__
 *
 * To run a query within a React component, call `useGetPaymentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPaymentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPaymentsQuery({
 *   variables: {
 *      id: // value for 'id'
 *      pageSize: // value for 'pageSize'
 *      pageNumber: // value for 'pageNumber'
 *   },
 * });
 */
export function useGetPaymentsQuery(
  baseOptions: ({ skip: boolean } | { skip?: boolean; variables: GetPaymentsQueryVariables }) &
    Apollo.QueryHookOptions<GetPaymentsQuery, GetPaymentsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }

  return Apollo.useQuery<GetPaymentsQuery, GetPaymentsQueryVariables>(GetPaymentsDocument, options)
}
export function useGetPaymentsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetPaymentsQuery, GetPaymentsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }

  return Apollo.useLazyQuery<GetPaymentsQuery, GetPaymentsQueryVariables>(
    GetPaymentsDocument,
    options
  )
}
export function useGetPaymentsSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<GetPaymentsQuery, GetPaymentsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }

  return Apollo.useSuspenseQuery<GetPaymentsQuery, GetPaymentsQueryVariables>(
    GetPaymentsDocument,
    options
  )
}
export type GetPaymentsQueryHookResult = ReturnType<typeof useGetPaymentsQuery>
export type GetPaymentsLazyQueryHookResult = ReturnType<typeof useGetPaymentsLazyQuery>
export type GetPaymentsSuspenseQueryHookResult = ReturnType<typeof useGetPaymentsSuspenseQuery>
export type GetPaymentsQueryResult = Apollo.QueryResult<GetPaymentsQuery, GetPaymentsQueryVariables>
