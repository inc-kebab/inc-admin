import WithAuth from '@/shared/helpers/hoc/WithAuth'
import { Page } from '@/shared/types/layout'
import { UserInfo } from '@/widgets/get-user'
import { AuthLayout } from '@/widgets/layout'
import { useRouter } from 'next/router'

import s from './UsersInfoPage.module.scss'

const UsersInfoPage: Page = () => {
  const router = useRouter()
  const { userID } = router.query

  return (
    <div className={s.container}>
      <UserInfo userID={userID} />
    </div>
  )
}

UsersInfoPage.getLayout = page => {
  return <AuthLayout>{page}</AuthLayout>
}
export default WithAuth(UsersInfoPage)
