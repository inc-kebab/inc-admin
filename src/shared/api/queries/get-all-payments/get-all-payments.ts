import { gql } from '@apollo/client'

export const GET_ALL_PAYMENTS = gql`
  query getAllPayments($searchTerm: String, $pageSize: Int, $pageNumber: Int) {
    getAllPayments(searchTerm: $searchTerm, pageSize: $pageSize, pageNumber: $pageNumber) {
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
