import { BackIcon } from '@/shared/assets'
import { Person } from '@/shared/assets/icons'
import { useTranslation } from '@/shared/hooks/useTranslation'
import { Skeleton, Typography } from '@tazalov/kebab-ui/components'
import Link from 'next/link'

import s from './UserInfo.module.scss'

export const UserInfoSkeleton = () => {
  const { t } = useTranslation()

  return (
    <>
      <Link className={s.link} href="/">
        <BackIcon />
        {t.back}
      </Link>
      <div className={s.avatarWrapper}>
        <Person className={s.unknownAvatar} />
        <div>
          <Skeleton border="5px" className={s.skeleton} height={20} width={150} />
          <div style={{ height: 3 }} />
          <Skeleton border="5px" className={s.skeleton} height={20} width={150} />
        </div>
      </div>
      <div className={s.infoWrapper}>
        <div>
          <Typography className={s.infoTitle} variant="regular14">
            {t.userID}
          </Typography>
          <Skeleton border="5px" className={s.skeleton} height={20} width="100%" />
        </div>
        <div>
          <Typography className={s.infoTitle} variant="regular14">
            {t.creationDate}
          </Typography>
          <Skeleton border="5px" className={s.skeleton} height={20} width="100%" />
        </div>
      </div>
    </>
  )
}
