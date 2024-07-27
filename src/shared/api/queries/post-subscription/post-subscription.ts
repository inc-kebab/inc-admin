import { gql } from '@apollo/client'

export const POSTS_SUBSCRIPTION = gql`
  subscription postAdded {
    postAdded {
      id
      images {
        url
      }
      ownerId
      description
      createdAt
      updatedAt
      status
      avatarOwner
      username
    }
  }
`
