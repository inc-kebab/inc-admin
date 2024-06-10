import { gql } from '@apollo/client'

export const UNBAN_USER = gql`
  mutation UnbanUser($userId: Int!, $status: BanStatus!, $reason: String!) {
    banUser(userId: $userId, status: $status, reason: $reason)
  }
`
