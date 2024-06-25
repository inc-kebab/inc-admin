import { BanStatus } from '@/shared/types/apollo'

export type DialogUserData = {
  id: number
  name: string
  status: BanStatus
}

export type BanUserParams = {
  reason: Reason
  status: BanStatus
}

export type Reason = '' | 'advertising' | 'anotherReason' | 'badBehavior'

export type OptionsReason = {
  name: string
  value: Reason
}[]
