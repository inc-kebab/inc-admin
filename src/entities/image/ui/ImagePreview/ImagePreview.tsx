import { ComponentPropsWithoutRef, forwardRef } from 'react'

import clsx from 'clsx'
import Image from 'next/image'

import s from './ImagePreview.module.scss'

type Props = {
  description?: null | string
  imageSrc: string
} & ComponentPropsWithoutRef<'div'>

export const ImagePreview = forwardRef<HTMLDivElement, Props>(
  ({ className, description, imageSrc, ...rest }, ref) => {
    return (
      <div className={clsx(s.image, className)} {...rest} ref={ref}>
        <Image
          alt={description || 'post'}
          fill
          sizes="(max-width: 576px) 100vw, (max-width: 1200px) 50vw, 30vw"
          src={imageSrc}
          style={{ objectFit: 'cover' }} //? or contain
        />
      </div>
    )
  }
)
