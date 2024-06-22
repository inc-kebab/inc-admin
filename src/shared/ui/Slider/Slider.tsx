import React, { useState } from 'react'
import Slider from 'react-slick'

import { ArrowLeft, ArrowRight } from '@tazalov/kebab-ui/icons'
import clsx from 'clsx'
import Image from 'next/image'

import s from './Slider.module.scss'

type ImageType = {
  url: string
}
type Props = {
  images: ImageType[]
}
export function SlickSlider({ images }: Props) {
  const [currentSlide, setCurrentSlide] = useState(0)

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
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
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

function NextArrow({ className, onClick }: { className?: string; onClick?: any }) {
  return <ArrowRight className={clsx(className, s.nextArrow)} onClick={onClick} />
}

function PrevArrow({ className, onClick }: { className?: string; onClick?: any }) {
  return <ArrowLeft className={clsx(className, s.prevArrow)} onClick={onClick} />
}
