import { gql } from '@apollo/client'

export const BAN_USER = gql`
  mutation ban($userId: Int!, $status: BanStatus!, $reason: String!) {
    banUser(userId: $userId, status: $status, reason: $reason)
  }
`
