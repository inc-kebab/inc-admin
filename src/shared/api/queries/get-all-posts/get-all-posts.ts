import { gql } from '@apollo/client'

export const GET_ALL_POSTS = gql`
  query GetAllPosts($pageSize: Int) {
    getAllPosts(pageSize: $pageSize) {
      items {
        id
        images {
          url
        }
        ownerId
        description
        status
        createdAt
        updatedAt
        avatarOwner
        username
      }
      pageSize
    }
  }
`
