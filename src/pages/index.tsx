import WithAuth from '@/feature/SignIn/hoc/WithAuth'
import { Page } from '@/shared/types/layout'
import { MainLayout } from '@/widgets/layout'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const UsersListPage: Page = () => {
  return <div>UsersListPage</div>
}

UsersListPage.getLayout = page => {
  return <MainLayout>{page}</MainLayout>
}

export default WithAuth(UsersListPage)
