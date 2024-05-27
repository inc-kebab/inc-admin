import { useTranslation } from '@/shared/hooks'
import { Typography } from '@tazalov/kebab-ui/components'
import { PersonFill } from '@tazalov/kebab-ui/icons'
import { format } from 'date-fns'
import Image from 'next/image'

import s from './UserInfo.module.scss'

import { UserInfoSkeleton } from './UserInfoSkeleton'

type UserData = {
  avatar: { url?: string }
  createdAt?: string
  firstname?: null | string
  id: string
  lastname?: null | string
  username?: string
}

type Props = {
  isLoading?: boolean
  userData: UserData
}

export const UserInfo = ({ isLoading, userData }: Props) => {
  const { avatar, createdAt, firstname, id, lastname, username } = userData

  const { t } = useTranslation()

  if (isLoading) {
    return <UserInfoSkeleton />
  }

  return (
    <div className={s.container}>
      <div className={s.avatarWrapper}>
        {avatar?.url ? (
          <Image alt="avatar" className={s.avatar} height={60} src={avatar.url} width={60} />
        ) : (
          <PersonFill className={s.unknownAvatar} />
        )}
        <div className={s.item}>
          <Typography variant="h1">
            {!firstname || !lastname ? t.label.nameNotSpecified : `${firstname} ${lastname}`}
          </Typography>
          <Typography>{username}</Typography>
        </div>
      </div>
      <div className={s.infoWrapper}>
        <div className={s.item}>
          <Typography className={s.infoTitle} variant="regular14">
            {t.table.userID}
          </Typography>
          <Typography variant="regular16">{id}</Typography>
        </div>
        {createdAt && (
          <div className={s.item}>
            <Typography className={s.infoTitle} variant="regular14">
              {t.label.creationDate}
            </Typography>
            <Typography variant="regular16">
              {format(new Date(+createdAt), 'dd.MM.yyyy')}
            </Typography>
          </div>
        )}
      </div>
    </div>
  )
}
