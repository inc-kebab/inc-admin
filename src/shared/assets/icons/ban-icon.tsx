import * as React from 'react'
import { Ref, SVGProps, forwardRef, memo } from 'react'

export const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    fill="none"
    height={24}
    ref={ref}
    width={24}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    viewBox="0 0 24 24"
  >
    <g clipPath="url(#a)">
      <path
        d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm0 18a8 8 0 1 1 0-16.001A8 8 0 0 1 12 20Z"
        fill="currentColor"
      />
      <path d="m7.043 19.362 10-15" stroke="currentColor" strokeWidth={2.3} />
    </g>
    <defs>
      <clipPath id="a">
        <path d="M0 0h24v24H0z" fill="#fff" />
      </clipPath>
    </defs>
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export default memo(ForwardRef)
