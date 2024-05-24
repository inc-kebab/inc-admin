import { useGetUserQuery } from '@/shared/api/queries/get-user/get-user.generated'
import { BackIcon } from '@/shared/assets'
import { Person } from '@/shared/assets/icons'
import WithAuth from '@/shared/helpers/hoc/WithAuth'
import { useTranslation } from '@/shared/hooks/useTranslation'
import { Page } from '@/shared/types/layout'
import { AuthLayout } from '@/widgets/layout'
import { Skeleton, Typography } from '@tazalov/kebab-ui/components'
import { format } from 'date-fns'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

import s from './UsersInfoPage.module.scss'

const UsersInfoPage: Page = () => {
  const { t } = useTranslation()
  const router = useRouter()
  const { userID } = router.query

  const { data, loading } = useGetUserQuery({
    variables: { id: Number(userID) },
  })

  return (
    <div className={s.container}>
      <Link className={s.link} href="/">
        <BackIcon />
        {t.back}
      </Link>
      <div className={s.avatarWrapper}>
        {data?.getUser.avatars?.thumbnail?.url ? (
          <Image
            alt="avatar"
            className={s.avatar}
            height={60}
            src={data?.getUser.avatars?.thumbnail?.url}
            width={60}
          />
        ) : (
          <Person className={s.unknownAvatar} />
        )}
        {/*{loading && <Skeleton border="5px" height={34} width={200} />}*/}
        <div>
          <Typography variant="h1">{data?.getUser.username}</Typography>
          <Typography>{data?.getUser.username}</Typography>
        </div>
      </div>
      <div className={s.infoWrapper}>
        <div>
          <Typography className={s.infoTitle} variant="regular14">
            {t.userID}
          </Typography>
          <Typography variant="regular16">{userID}</Typography>
        </div>
        <div>
          <Typography className={s.infoTitle} variant="regular14">
            {t.creationDate}
          </Typography>
          <Typography variant="regular16">
            {data?.getUser.createdAt
              ? format(new Date(+data?.getUser.createdAt), 'dd.MM.yyyy')
              : null}
          </Typography>
        </div>
      </div>
    </div>
  )
}

UsersInfoPage.getLayout = page => {
  return <AuthLayout>{page}</AuthLayout>
}
export default WithAuth(UsersInfoPage)
