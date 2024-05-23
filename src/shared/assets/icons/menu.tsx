import { Ref, SVGProps, forwardRef, memo } from 'react'
import * as React from 'react'

const SvgComponent = (
  { height = 24, width = 24, ...rest }: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    fill="currentColor"
    height={height}
    ref={ref}
    viewBox="0 0 24 24"
    width={width}
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <g clipPath="url(#a)" fill="currentColor">
      <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM19 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM5 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
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
