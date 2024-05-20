import { gql } from '@apollo/client'

export const AUTH = gql`
  mutation Auth($login: String!, $password: String!) {
    checkAdmin(login: $login, password: $password)
  }
`
