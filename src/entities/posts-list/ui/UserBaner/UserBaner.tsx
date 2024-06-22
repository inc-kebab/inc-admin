import { ReactNode } from 'react'

import { Avatar } from '@/shared/ui/Avatar/Avatar' // add to ui icons
import { Typography } from '@tazalov/kebab-ui/components'
import clsx from 'clsx'

import s from './UserBanner.module.scss'

type Props = {
  actions?: ReactNode
  avatar?: null | string
  avatarSize?: number
  className?: string
  name: string
}

export const UserBanner = ({ actions, avatar, avatarSize = 36, className, name }: Props) => {
  return (
    <div className={clsx(s.userBanner, className)}>
      <div className={s.userInfo}>
        <Avatar
          avatarUrl={avatar}
          circle
          iconSize={(avatarSize / 100) * 60}
          wrapperSize={avatarSize}
        />
        <Typography className={s.name}>
          {name.length > 15 ? name.slice(0, 15) + '...' : name}
        </Typography>
      </div>
      {actions}
    </div>
  )
}
