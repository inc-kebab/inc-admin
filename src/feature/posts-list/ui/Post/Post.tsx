import React, { useState } from 'react'

import { UserBanner } from '@/entities/posts-list'
import { DialogUserData } from '@/entities/user'
import { PostType } from '@/feature/posts-list'
import { useTranslation } from '@/shared/hooks'
import { BanStatus } from '@/shared/types/apollo'
import { SlickSlider } from '@/shared/ui/Slider/Slider'
import { Typography } from '@tazalov/kebab-ui/components'
import { Block } from '@tazalov/kebab-ui/icons'
import clsx from 'clsx'
import { formatDistanceToNowStrict, parseISO } from 'date-fns'
import { enUS, ru } from 'date-fns/locale'
import { useRouter } from 'next/router'

import s from './post.module.scss'

type Props = {
  className?: string
  onChangeUserStatus: (data: DialogUserData) => void
  post: PostType
}

export const Post = ({ className, onChangeUserStatus, post }: Props) => {
  const { t } = useTranslation()
  const { locale } = useRouter()
  const currentMaxLength = 70
  const [maxLength, setMaxLength] = useState(currentMaxLength)
  const [isExpanded, setIsExpanded] = useState(false)

  const timeAgo = formatDistanceToNowStrict(parseISO(post.createdAt as string), {
    addSuffix: true,
    locale: locale === 'ru' ? ru : enUS,
  })

  const onShowHandler = () => {
    setIsExpanded(!isExpanded)
    if (post.description) {
      setMaxLength(prev =>
        prev === currentMaxLength ? post.description!.length : currentMaxLength
      )
    }
  }

  const dialogUserData = {
    id: post.ownerId,
    name: post.username,
    status: post.status,
  }

  if (!post) {
    return null
  }

  return (
    <div className={clsx(s.post, className)}>
      {post?.images?.length ? (
        <SlickSlider images={post.images} />
      ) : (
        <div className={s.noImage}>no image</div>
      )}
      <div className={s.wrapper}>
        <UserBanner
          actions={
            <Block
              className={clsx(s.block, dialogUserData.status === BanStatus.Banned && s.banned)}
              onClick={() => onChangeUserStatus(dialogUserData)}
            />
          }
          avatar={post.avatarOwner}
          className={s.banner}
          name={post.username}
        />
        <Typography className={s.timeAgo} variant="small">
          {timeAgo}
        </Typography>
        {post.description && (
          <div className={s.descriptionWrapper}>
            {post.description.length > maxLength ? (
              <Typography variant="regular14">{post.description.slice(0, maxLength)}...</Typography>
            ) : (
              <Typography className={s.description} variant="regular14">
                {post.description}
                <span style={{ visibility: 'hidden' }}>________________</span>
              </Typography>
            )}
            {(post.description.length > maxLength || isExpanded) && (
              <Typography className={s.showButton} onClick={onShowHandler} variant="regularLink">
                {isExpanded ? t.button.showLess : t.button.showMore}
              </Typography>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
