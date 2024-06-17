import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'

import * as Types from '../../../types/apollo'
const defaultOptions = {} as const

export type DeleteMutationVariables = Types.Exact<{
  userId: Types.Scalars['Int']['input']
}>

export type DeleteMutation = { __typename?: 'Mutation'; deleteUser: string }

export const DeleteDocument = gql`
  mutation delete($userId: Int!) {
    deleteUser(userId: $userId)
  }
`
export type DeleteMutationFn = Apollo.MutationFunction<DeleteMutation, DeleteMutationVariables>

/**
 * __useDeleteMutation__
 *
 * To run a mutation, you first call `useDeleteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteMutation, { data, loading, error }] = useDeleteMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useDeleteMutation(
  baseOptions?: Apollo.MutationHookOptions<DeleteMutation, DeleteMutationVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }

  return Apollo.useMutation<DeleteMutation, DeleteMutationVariables>(DeleteDocument, options)
}
export type DeleteMutationHookResult = ReturnType<typeof useDeleteMutation>
export type DeleteMutationResult = Apollo.MutationResult<DeleteMutation>
export type DeleteMutationOptions = Apollo.BaseMutationOptions<
  DeleteMutation,
  DeleteMutationVariables
>
