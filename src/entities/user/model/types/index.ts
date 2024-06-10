import { BanStatus } from '@/shared/types/apollo'

export type DialogUserData = {
  id: number
  name: string
  status: BanStatus
}

export type BanUserParams = {
  reason: string
  status: BanStatus
}
