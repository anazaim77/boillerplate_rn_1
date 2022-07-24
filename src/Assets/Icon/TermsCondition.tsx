import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

const TermsCondition = (props: SvgProps) => {
  const { width, height } = props
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <Path fill="#fff" d="M0 0h24v24H0z" />
      <Path
        d="m20.797 5.486-4.615-4.297a.72.72 0 0 0-.49-.189H5.538C4.138 1 3 2.06 3 3.363v17.274C3 21.94 4.139 23 5.538 23h12.924c1.4 0 2.538-1.06 2.538-2.363V5.94a.623.623 0 0 0-.203-.455ZM16.385 3.2l2.251 2.096h-2.251V3.2Zm2.076 18.51H5.539c-.636 0-1.153-.482-1.153-1.074V3.363c0-.592.517-1.074 1.153-1.074H15v3.652c0 .356.31.645.692.645h3.923v14.05c0 .593-.517 1.075-1.153 1.075Z"
        fill="#42494D"
      />
      <Path
        d="M16.616 9.68c-.875 0-1.662-.453-2.053-1.181l-.097-.182a.7.7 0 0 0-.62-.356h-3.692a.7.7 0 0 0-.62.356l-.097.182c-.39.728-1.177 1.18-2.052 1.18-.382 0-.692.29-.692.645v3.678c0 1.446.49 2.824 1.417 3.984.927 1.16 2.204 1.993 3.691 2.409a.74.74 0 0 0 .398 0c1.488-.416 2.764-1.249 3.692-2.409.927-1.16 1.417-2.538 1.417-3.984v-3.678c0-.356-.31-.644-.692-.644Zm-.693 4.322c0 2.332-1.568 4.357-3.923 5.099-2.355-.742-3.923-2.767-3.923-5.099V10.91c1.048-.184 1.959-.782 2.498-1.659h2.85c.54.877 1.45 1.475 2.498 1.659v3.093Z"
        fill="#000"
      />
      <Path
        d="m13.47 12.52-2.122 1.975-.816-.76a.73.73 0 0 0-.979 0 .614.614 0 0 0 0 .912l1.305 1.215a.717.717 0 0 0 .49.19.717.717 0 0 0 .49-.19l2.61-2.43a.614.614 0 0 0 0-.912.729.729 0 0 0-.979 0Z"
        fill="#000"
      />
    </Svg>
  )
}

TermsCondition.defaultProps = {
  fill: '#7B8082',
  width: 24,
  height: 24,
}

export default React.memo(TermsCondition)