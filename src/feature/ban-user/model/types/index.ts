import { BanUser } from '@/shared/types/apollo'

export type BanUserData = {
  id: number
  name: string
  reason: string
  status: BanUser
}
