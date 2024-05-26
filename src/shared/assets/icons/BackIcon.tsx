import * as React from 'react'
import { SVGProps } from 'react'

export const BackIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg fill="none" height={24} width={24} xmlns="http://www.w3.org/2000/svg" {...props}>
    <g clipPath="url(#a)">
      <path
        d="M19 11H7.14l3.63-4.36a1.001 1.001 0 0 0-1.54-1.28l-5 6a1.184 1.184 0 0 0-.09.15c0 .05 0 .08-.07.13A1 1 0 0 0 4 12a1 1 0 0 0 .07.36c0 .05 0 .08.07.13.026.052.056.102.09.15l5 6a1 1 0 0 0 1.54-1.28L7.14 13H19a1 1 0 0 0 0-2Z"
        fill="#fff"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path d="M0 0h24v24H0z" fill="#fff" />
      </clipPath>
    </defs>
  </svg>
)
