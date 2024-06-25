import { gql } from '@apollo/client'

export const GET_ALL_PAYMENTS = gql`
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
