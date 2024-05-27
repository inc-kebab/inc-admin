import { useTranslation } from '@/shared/hooks/useTranslation'
import { Skeleton, Typography } from '@tazalov/kebab-ui/components'
import { PersonFill } from '@tazalov/kebab-ui/icons'

import s from './UserInfo.module.scss'

export const UserInfoSkeleton = () => {
  const { t } = useTranslation()

  return (
    <div className={s.container}>
      <div className={s.avatarWrapper}>
        <PersonFill className={s.unknownAvatar} />
        <div className={s.item}>
          <Skeleton border="5px" className={s.skeleton} height={36} width={250} />
          <div style={{ height: 4 }} />
          <Skeleton border="5px" className={s.skeleton} height={20} width={150} />
        </div>
      </div>
      <div className={s.infoWrapper}>
        <div className={s.item}>
          <Typography className={s.infoTitle} variant="regular14">
            {t.table.userID}
          </Typography>
          <Skeleton border="5px" className={s.skeleton} height={24} width="100%" />
        </div>
        <div className={s.item}>
          <Typography className={s.infoTitle} variant="regular14">
            {t.label.creationDate}
          </Typography>
          <Skeleton border="5px" className={s.skeleton} height={24} width="100%" />
        </div>
      </div>
    </div>
  )
}
