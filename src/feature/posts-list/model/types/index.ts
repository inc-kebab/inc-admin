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
  updatedAt: string
  username: string
}
