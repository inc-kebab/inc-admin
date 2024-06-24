import React, { useState } from 'react'
import Slider from 'react-slick'

import { ImageType } from '@/feature/posts-list'
import { ArrowLeft, ArrowRight } from '@tazalov/kebab-ui/icons'
import clsx from 'clsx'
import Image from 'next/image'

import s from './Slider.module.scss'

type Props = {
  images: ImageType[] | null | undefined
}
export function SlickSlider({ images }: Props) {
  const [currentSlide, setCurrentSlide] = useState(0)

  if (!images) {
    return null
  }
  const settings = {
    adaptiveHeight: true,
    appendDots: (dots: any) => (
      <div>
        <ul className={s.appendDots}>{dots}</ul>
      </div>
    ),
    beforeChange: (current: number, next: number) => setCurrentSlide(next),
    customPaging: (i: number) => (
      <div className={s.customPaging}>
        <div className={clsx(s.customDot, i === currentSlide && s.currentDot)} />
      </div>
    ),
    dots: true,
    infinite: false,
    nextArrow: <NextArrow customClassName={clsx(s.nextArrow, images.length === 1 && s.hide)} />, //TODO: цвет иконок не меняется
    prevArrow: <PrevArrow customClassName={clsx(s.prevArrow, images.length === 1 && s.hide)} />, //TODO: цвет иконок не меняется
    slidesToScroll: 1,
    slidesToShow: 1,
    speed: 300,
    swipeToSlide: true,
  }

  return (
    <Slider {...settings} className={s.slider}>
      {images.map((image, i) => (
        <Image
          alt="Post image "
          className={s.image}
          height={240}
          key={i + image.url}
          src={image.url}
          width={234}
        />
      ))}
    </Slider>
  )
}

type Arrow = {
  className?: string
  customClassName?: string
  onClick?: any
}
function NextArrow({ className, customClassName, onClick }: Arrow) {
  return <ArrowRight className={clsx(className, customClassName)} onClick={onClick} />
}

function PrevArrow({ className, customClassName, onClick }: Arrow) {
  return <ArrowLeft className={clsx(className, customClassName)} onClick={onClick} />
}
