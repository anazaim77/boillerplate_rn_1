import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

const Calendar = (props: SvgProps) => {
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
        d="M1.5 21.75C1.5 22.9922 2.50781 24 3.75 24H20.25C21.4922 24 22.5 22.9922 22.5 21.75V9H1.5V21.75ZM16.5 12.5625C16.5 12.2531 16.7531 12 17.0625 12H18.9375C19.2469 12 19.5 12.2531 19.5 12.5625V14.4375C19.5 14.7469 19.2469 15 18.9375 15H17.0625C16.7531 15 16.5 14.7469 16.5 14.4375V12.5625ZM16.5 18.5625C16.5 18.2531 16.7531 18 17.0625 18H18.9375C19.2469 18 19.5 18.2531 19.5 18.5625V20.4375C19.5 20.7469 19.2469 21 18.9375 21H17.0625C16.7531 21 16.5 20.7469 16.5 20.4375V18.5625ZM10.5 12.5625C10.5 12.2531 10.7531 12 11.0625 12H12.9375C13.2469 12 13.5 12.2531 13.5 12.5625V14.4375C13.5 14.7469 13.2469 15 12.9375 15H11.0625C10.7531 15 10.5 14.7469 10.5 14.4375V12.5625ZM10.5 18.5625C10.5 18.2531 10.7531 18 11.0625 18H12.9375C13.2469 18 13.5 18.2531 13.5 18.5625V20.4375C13.5 20.7469 13.2469 21 12.9375 21H11.0625C10.7531 21 10.5 20.7469 10.5 20.4375V18.5625ZM4.5 12.5625C4.5 12.2531 4.75312 12 5.0625 12H6.9375C7.24687 12 7.5 12.2531 7.5 12.5625V14.4375C7.5 14.7469 7.24687 15 6.9375 15H5.0625C4.75312 15 4.5 14.7469 4.5 14.4375V12.5625ZM4.5 18.5625C4.5 18.2531 4.75312 18 5.0625 18H6.9375C7.24687 18 7.5 18.2531 7.5 18.5625V20.4375C7.5 20.7469 7.24687 21 6.9375 21H5.0625C4.75312 21 4.5 20.7469 4.5 20.4375V18.5625ZM20.25 3H18V0.75C18 0.3375 17.6625 0 17.25 0H15.75C15.3375 0 15 0.3375 15 0.75V3H9V0.75C9 0.3375 8.6625 0 8.25 0H6.75C6.3375 0 6 0.3375 6 0.75V3H3.75C2.50781 3 1.5 4.00781 1.5 5.25V7.5H22.5V5.25C22.5 4.00781 21.4922 3 20.25 3Z"
        fill={fill}
      />
    </Svg>
  )
}

Calendar.defaultProps = {
  fill: '#45494A',
  width: 24,
  height: 24,
}

export default React.memo(Calendar)