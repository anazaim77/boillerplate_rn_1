import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

const Mail = (props: SvgProps) => {
  const { width, height, fill } = props
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <Path
        d="M21.644 3H2.629C1.58 3 .727 3.893.727 4.992v13.944c0 1.1.853 1.993 1.902 1.993h19.015c1.049 0 1.902-.894 1.902-1.992V4.991c0-1.099-.853-1.992-1.902-1.992Zm-19.015.996h19.015c.07 0 .132.027.198.042-1.647 1.578-7.105 6.81-9.016 8.613-.15.141-.39.31-.69.31-.299 0-.54-.169-.69-.31-1.91-1.803-7.369-7.035-9.015-8.613.066-.015.128-.042.198-.042Zm-.951 14.94V4.992c0-.098.028-.186.053-.275a3959.99 3959.99 0 0 0 7.539 7.211c-2.462 2.215-6.272 6-7.542 7.268-.022-.085-.05-.167-.05-.26Zm19.966.997H2.629c-.076 0-.144-.028-.215-.046 1.313-1.31 5.147-5.116 7.565-7.284l.83.787c.392.37.851.566 1.327.566.477 0 .935-.195 1.327-.565l.83-.788c2.419 2.167 6.253 5.973 7.565 7.284-.07.018-.138.046-.214.046Zm.95-.997c0 .093-.027.175-.05.26-1.27-1.27-5.08-5.053-7.541-7.268 2.47-2.353 6.278-6.003 7.538-7.211.026.089.054.177.054.275v13.944Z"
        fill={fill}
      />
    </Svg>
  )
}

Mail.defaultProps = {
  fill: '#42494D',
  width: 24,
  height: 24,
}

export default React.memo(Mail)