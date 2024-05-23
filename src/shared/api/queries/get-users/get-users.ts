import { gql } from '@apollo/client'

export const GET_USERS = gql`
  query GetUsers($pageSize: Int, $pageNumber: Int) {
    getUsers(pageSize: $pageSize, pageNumber: $pageNumber) {
      users {
        username
        id
        fullName
        createdAt
      }
      pagination {
        pagesCount
        pageNumber
        pageSize
        totalCount
      }
    }
  }
`
