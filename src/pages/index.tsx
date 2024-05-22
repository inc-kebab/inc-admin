import { UserList } from '@/feature/ui/UserList/UserList'
import { Page } from '@/shared/types/layout'
import { MainLayout } from '@/widgets/layout'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const UsersListPage: Page = () => {
  return <UserList />
}

UsersListPage.getLayout = page => {
  return <MainLayout>{page}</MainLayout>
}

export default UsersListPage
