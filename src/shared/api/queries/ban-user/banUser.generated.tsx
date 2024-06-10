import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'

import * as Types from '../../../types/apollo'
const defaultOptions = {} as const

export type BanMutationVariables = Types.Exact<{
  reason: Types.Scalars['String']['input']
  status: Types.BanStatus
  userId: Types.Scalars['Int']['input']
}>

export type BanMutation = { __typename?: 'Mutation'; banUser: string }

export const BanDocument = gql`
  mutation ban($userId: Int!, $status: BanStatus!, $reason: String!) {
    banUser(userId: $userId, status: $status, reason: $reason)
  }
`
export type BanMutationFn = Apollo.MutationFunction<BanMutation, BanMutationVariables>

/**
 * __useBanMutation__
 *
 * To run a mutation, you first call `useBanMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useBanMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [banMutation, { data, loading, error }] = useBanMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *      status: // value for 'status'
 *      reason: // value for 'reason'
 *   },
 * });
 */
export function useBanMutation(
  baseOptions?: Apollo.MutationHookOptions<BanMutation, BanMutationVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }

  return Apollo.useMutation<BanMutation, BanMutationVariables>(BanDocument, options)
}
export type BanMutationHookResult = ReturnType<typeof useBanMutation>
export type BanMutationResult = Apollo.MutationResult<BanMutation>
export type BanMutationOptions = Apollo.BaseMutationOptions<BanMutation, BanMutationVariables>
