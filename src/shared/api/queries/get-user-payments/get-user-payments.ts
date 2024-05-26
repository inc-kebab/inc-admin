import { gql } from '@apollo/client'

export const GET_PAYMENTS = gql`
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
