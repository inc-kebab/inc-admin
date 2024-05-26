import { useGetUserQuery } from '@/shared/api/queries/get-user/get-user.generated'
import { useTranslation } from '@/shared/hooks/useTranslation'
import { UserInfoSkeleton } from '@/widgets/get-user/ui/UserInfoSkeleton'
import { Typography } from '@tazalov/kebab-ui/components'
import { Arrow, PersonFill } from '@tazalov/kebab-ui/icons'
import { format } from 'date-fns'
import Image from 'next/image'
import Link from 'next/link'

import s from './UserInfo.module.scss'

type Props = {
  userID: string | string[] | undefined
}

export const UserInfo = ({ userID }: Props) => {
  const { t } = useTranslation()
  const { data, loading } = useGetUserQuery({
    variables: { id: Number(userID) },
  })

  return loading ? (
    <UserInfoSkeleton />
  ) : (
    <>
      <Link className={s.link} href="/">
        <Arrow />
        {t.button.back}
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
          <PersonFill className={s.unknownAvatar} />
        )}
        <div>
          <Typography variant="h1">
            {data?.getUser.firstname} {data?.getUser.lastname}
          </Typography>
          <Typography>{data?.getUser.username}</Typography>
        </div>
      </div>
      <div className={s.infoWrapper}>
        <div>
          <Typography className={s.infoTitle} variant="regular14">
            {t.table.userID}
          </Typography>
          <Typography variant="regular16">{userID}</Typography>
        </div>
        <div>
          <Typography className={s.infoTitle} variant="regular14">
            {t.label.creationDate}
          </Typography>
          <Typography variant="regular16">
            {data?.getUser.createdAt && format(new Date(+data?.getUser.createdAt), 'dd.MM.yyyy')}
          </Typography>
        </div>
      </div>
    </>
  )
}
