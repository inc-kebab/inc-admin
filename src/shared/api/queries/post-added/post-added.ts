import { gql } from '@apollo/client'

export const POST_ADDED = gql`
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
      owner {
        id
        firstname
      }
      status
      avatarOwner
      username
    }
  }
`
