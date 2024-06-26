import { CSSProperties, useState } from 'react'

import { ImageOutline } from '@tazalov/kebab-ui/icons'
import clsx from 'clsx'
import Image from 'next/image'

import s from './Avatar.module.scss'

type Props = {
  avatarUrl?: null | string
  circle?: boolean
  className?: string
  iconSize?: number
  style?: CSSProperties
  wrapperSize?: number
}

export const Avatar = ({
  avatarUrl,
  circle,
  className,
  iconSize = 48,
  style,
  wrapperSize = 300,
}: Props) => {
  const [imageError, setImageError] = useState(false)

  return avatarUrl && !imageError ? (
    <Image
      alt="avatar"
      className={className}
      height={wrapperSize}
      onError={() => setImageError(true)}
      priority
      src={avatarUrl}
      style={{
        borderRadius: circle ? '50%' : '',
        ...style,
      }}
      width={wrapperSize}
    />
  ) : (
    <div
      className={clsx(s.iconWrapper, className)}
      style={{
        borderRadius: circle ? '50%' : '',
        height: `${wrapperSize}px`,
        width: `${wrapperSize}px`,
        ...style,
      }}
    >
      <ImageOutline
        style={{
          height: `${iconSize}px`,
          width: `${iconSize}px`,
        }}
      />
    </div>
  )
}
