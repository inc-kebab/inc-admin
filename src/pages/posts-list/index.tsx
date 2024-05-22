import WithAuth from '@/feature/SignIn/hoc/WithAuth'
import { Page } from '@/shared/types/layout'
import { MainLayout } from '@/widgets/layout'

const PostsListPage: Page = () => {
  return <div>PostsListPage</div>
}

PostsListPage.getLayout = page => {
  return <MainLayout>{page}</MainLayout>
}

export default WithAuth(PostsListPage)
