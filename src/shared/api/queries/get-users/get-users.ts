import { gql } from '@apollo/client'

export const GET_USERS = gql`
  query GetUsers(
    $pageSize: Int
    $pageNumber: Int
    $searchTerm: String
    $sortBy: String
    $sortDirection: SortDirection
  ) {
    getUsers(
      pageSize: $pageSize
      pageNumber: $pageNumber
      searchTerm: $searchTerm
      sortBy: $sortBy
      sortDirection: $sortDirection
    ) {
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
