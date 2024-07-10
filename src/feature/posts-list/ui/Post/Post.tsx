import React, { forwardRef, useRef, useState } from 'react'

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

import s from './Post.module.scss'

type Props = {
  className?: string
  onChangeUserStatus: (data: DialogUserData) => void
  post: PostType
}

export const Post = forwardRef<HTMLDivElement, Props>(
  ({ className, onChangeUserStatus, post }: Props, ref) => {
    const { t } = useTranslation()
    const { locale } = useRouter()
    const containerRef = useRef<HTMLParagraphElement>(null)
    const [isExpanded, setIsExpanded] = useState(false)
    const maxLength = 100

    const timeAgo = formatDistanceToNowStrict(parseISO(post.createdAt as string), {
      addSuffix: true,
      locale: locale === 'ru' ? ru : enUS,
    })

    const onShowHandler = () => {
      setIsExpanded(!isExpanded)
      if (containerRef.current && isExpanded) {
        containerRef.current.scrollTop = 0
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
      <div className={s.container}>
        <div className={clsx(s.post, className)} ref={ref}>
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
                <Typography
                  className={clsx(s.description, !isExpanded && s.expDesc)}
                  ref={containerRef}
                  variant="regular14"
                >
                  {post.description}
                  <span style={{ visibility: 'hidden' }}>________________</span>
                </Typography>
                {(post.description.length > maxLength || isExpanded) && (
                  <Typography
                    className={clsx(s.showButton, !isExpanded && s.expButton)}
                    onClick={onShowHandler}
                    variant="regularLink"
                  >
                    {isExpanded ? t.button.showLess : t.button.showMore}
                  </Typography>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
)
