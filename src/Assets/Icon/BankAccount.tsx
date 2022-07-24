import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

const AccountOutline = (props: SvgProps) => {
  const { width, height, fill } = props
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 17 17"
      {...props}
      fill="none"
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M.708 3.711c0-.87.692-1.586 1.56-1.586H13.28c.868 0 1.56.717 1.56 1.586v3.46a.336.336 0 1 1-.673 0v-3.46a.9.9 0 0 0-.887-.913H2.268a.9.9 0 0 0-.887.913V9.96a.9.9 0 0 0 .887.913h4.833a.337.337 0 0 1 0 .673H2.268c-.868 0-1.56-.717-1.56-1.586V3.71Z"
        fill={fill}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M.708 4.48c0-.186.151-.336.337-.336h13.458a.336.336 0 0 1 0 .673H1.045a.336.336 0 0 1-.337-.337ZM2.054 7.845c0-.186.15-.337.337-.337h1.345a.336.336 0 0 1 0 .673H2.391a.336.336 0 0 1-.337-.336ZM2.054 9.527c0-.186.15-.336.337-.336h2.691a.336.336 0 0 1 0 .673H2.391a.336.336 0 0 1-.337-.337ZM12.484 8.854a3.028 3.028 0 1 0 0 6.056 3.028 3.028 0 0 0 0-6.056Zm-3.7 3.028a3.701 3.701 0 1 1 7.401 0 3.701 3.701 0 0 1-7.402 0Z"
        fill={fill}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.592 11.308a.337.337 0 0 1 .476.476l-1.346 1.346a.337.337 0 0 1-.476 0l-1.01-1.01a.337.337 0 0 1 .477-.476l.771.772 1.108-1.108Z"
        fill={fill}
      />
    </Svg>
  )
}

AccountOutline.defaultProps = {
  fill: '#558F4D',
  width: 32,
  height: 32,
}

export default React.memo(AccountOutline)
