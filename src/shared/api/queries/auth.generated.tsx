import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'

import * as Types from '../../types/apollo'
const defaultOptions = {} as const

export type AuthMutationVariables = Types.Exact<{
  login: Types.Scalars['String']['input']
  password: Types.Scalars['String']['input']
}>

export type AuthMutation = { __typename?: 'Mutation'; checkAdmin: boolean }

export const AuthDocument = gql`
  mutation Auth($login: String!, $password: String!) {
    checkAdmin(login: $login, password: $password)
  }
`
export type AuthMutationFn = Apollo.MutationFunction<AuthMutation, AuthMutationVariables>

/**
 * __useAuthMutation__
 *
 * To run a mutation, you first call `useAuthMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAuthMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [authMutation, { data, loading, error }] = useAuthMutation({
 *   variables: {
 *      login: // value for 'login'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useAuthMutation(
  baseOptions?: Apollo.MutationHookOptions<AuthMutation, AuthMutationVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }

  return Apollo.useMutation<AuthMutation, AuthMutationVariables>(AuthDocument, options)
}
export type AuthMutationHookResult = ReturnType<typeof useAuthMutation>
export type AuthMutationResult = Apollo.MutationResult<AuthMutation>
export type AuthMutationOptions = Apollo.BaseMutationOptions<AuthMutation, AuthMutationVariables>
