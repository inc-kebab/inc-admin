import React, { useState } from 'react'

import { UserBanner } from '@/entities/posts-list'
import { PostType } from '@/pages/posts-list'
import { useTranslation } from '@/shared/hooks'
import { SlickSlider } from '@/shared/ui/Slider/Slider'
import { Typography } from '@tazalov/kebab-ui/components'
import { Block } from '@tazalov/kebab-ui/icons'
import clsx from 'clsx'
import { formatDistanceToNowStrict, parseISO } from 'date-fns'
import { enUS, ru } from 'date-fns/locale'
import { useRouter } from 'next/router'

import s from './post.module.scss'

type ImageType = {
  url: string
}

type Props = {
  className?: string
  post: PostType
}

export const Post = ({ className, post }: Props) => {
  const { t } = useTranslation()
  const { locale } = useRouter()
  const currentMaxLength = 80
  const [maxLength, setMaxLength] = useState(currentMaxLength)
  const [isExpanded, setIsExpanded] = useState(false)

  const timeAgo = formatDistanceToNowStrict(parseISO(post.createdAt as string), {
    addSuffix: true,
    locale: locale === 'ru' ? ru : enUS,
  })
  const images: ImageType[] = [
    {
      url: 'https://storage.yandexcloud.net/kebab-inctagram/media/users/2/posts/2-1711365227421.webp',
    },
    {
      url: 'https://storage.yandexcloud.net/kebab-inctagram/media/users/2/posts/2-1711366432949.webp',
    },
    {
      url: 'https://storage.yandexcloud.net/kebab-inctagram/media/users/2/posts/2-1711366432949.webp',
    },
  ]

  const onShowHandler = () => {
    setIsExpanded(!isExpanded)
    if (post.description) {
      setMaxLength(prev =>
        prev === currentMaxLength ? post.description!.length : currentMaxLength
      )
    }
  }

  if (!post) {
    return null
  }

  return (
    <div className={clsx(s.post, className)}>
      {images.length ? <SlickSlider images={images} /> : <div className={s.noImage}>no image</div>}
      <div className={s.wrapper}>
        <UserBanner
          actions={<Block />}
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
              <Typography variant="regular14">
                {post.description}
                <span style={{ visibility: 'hidden' }}>_____</span>
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
