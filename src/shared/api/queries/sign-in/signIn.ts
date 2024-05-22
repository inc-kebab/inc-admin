import { gql } from '@apollo/client'

export const SIGN_IN = gql`
  mutation SignIn($login: String!, $password: String!) {
    checkAdmin(login: $login, password: $password)
  }
`
