import { BanStatus, SortDirection } from '@/shared/types/apollo'

export type Column = {
  key: string
  sortable: boolean
  title?: string
}

export type Sort = {
  direction: SortDirection
  key: string
}

export type User = {
  createdAt: string
  fullName?: null | string
  id: number
  status: BanStatus
  username?: null | string
}
