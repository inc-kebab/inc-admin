import { gql } from '@apollo/client'

export const DELETE_USER = gql`
  mutation delete($userId: Int!) {
    deleteUser(userId: $userId)
  }
`
