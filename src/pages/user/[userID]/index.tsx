import { UserInfo } from '@/entities/user'
import { useGetUserQuery } from '@/shared/api/queries/get-user/get-user.generated'
import WithAuth from '@/shared/helpers/hoc/WithAuth'
import { useTranslation } from '@/shared/hooks'
import { Page } from '@/shared/types/layout'
import { AuthLayout } from '@/widgets/layout'
import { UserInfoTabs } from '@/widgets/user-info-tabs'
import { BackToPage } from '@tazalov/kebab-ui/components'
import { useRouter } from 'next/router'

import s from './UsersInfoPage.module.scss'

const UsersInfoPage: Page = () => {
  const { t } = useTranslation()

  const { push, query } = useRouter()

  const { data, loading } = useGetUserQuery({
    variables: { id: Number(query.userID as string) },
  })

  const handleNavigate = () => push('/')

  return (
    <div className={s.container}>
      <BackToPage className={s.link} onNavigate={handleNavigate} title={t.button.back} />
      <UserInfo
        isLoading={loading}
        userData={{
          avatar: { url: data?.getUser.avatars?.thumbnail?.url },
          createdAt: data?.getUser.createdAt,
          firstname: data?.getUser.firstname,
          id: query.userID as string,
          lastname: data?.getUser.lastname,
          username: data?.getUser.username,
        }}
      />
      <UserInfoTabs />
    </div>
  )
}

UsersInfoPage.getLayout = page => {
  return <AuthLayout>{page}</AuthLayout>
}
export default WithAuth(UsersInfoPage)
