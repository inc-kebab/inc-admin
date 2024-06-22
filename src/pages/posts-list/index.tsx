import { Post } from '@/feature/posts-list'
import WithAuth from '@/shared/helpers/hoc/WithAuth'
import { Page } from '@/shared/types/layout'
import { MainLayout } from '@/widgets/layout'

export type PostType = {
  avatarOwner: null | string
  createdAt: string
  description: null | string
  id: number
  ownerId: number
  updatedAt: string
  username: string
}

const post: PostType = {
  avatarOwner:
    'https://storage.yandexcloud.net/kebab-inctagram/media/users/2/avatars/2-1715665706178-avatar-thumbnail.webp',
  createdAt: '2024-06-17T18:58:48.084Z',
  description:
    'Add publication descriptions фывывфы фв фв фв фаываыыав fsfsfsf sfsdfsdf sdfsdfs ffs assadasd asdasdasd asdasd',
  id: 372,
  ownerId: 2,
  updatedAt: '2024-06-17T18:58:48.084Z',
  username: 'art___',
}

const PostsListPage: Page = () => {
  return (
    <div>
      <Post post={post} />
    </div>
  )
}

PostsListPage.getLayout = page => {
  return <MainLayout>{page}</MainLayout>
}

export default WithAuth(PostsListPage)
