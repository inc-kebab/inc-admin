import { gql } from '@apollo/client'

export const GET_USERS = gql`
  query GetUsers(
    $pageSize: Int
    $pageNumber: Int
    $searchTerm: String
    $sortBy: String
    $sortDirection: SortDirection
    $statusFilter: BanStatus
  ) {
    getUsers(
      pageSize: $pageSize
      pageNumber: $pageNumber
      searchTerm: $searchTerm
      sortBy: $sortBy
      sortDirection: $sortDirection
      statusFilter: $statusFilter
    ) {
      users {
        username
        id
        fullName
        createdAt
        status
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
