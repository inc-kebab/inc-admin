import { BanStatus } from '@/shared/types/apollo'

export type ImageType = {
  url: string
}
export type PostType = {
  avatarOwner?: null | string | undefined
  createdAt: string
  description?: null | string | undefined
  id: number
  images?: ImageType[] | null | undefined
  ownerId: number
  status: BanStatus
  updatedAt: string
  username: string
}
