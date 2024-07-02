import { gql } from '@apollo/client'

export const GET_ALL_POSTS = gql`
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
