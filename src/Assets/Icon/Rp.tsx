import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

const Rp = (props: SvgProps) => {
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
        d="M4 15.646V5.5h3.657c.795 0 1.454.135 1.979.406.527.271.921.646 1.182 1.125.26.475.39 1.025.39 1.65 0 .62-.131 1.167-.395 1.64-.26.469-.655.834-1.182 1.094-.525.261-1.184.392-1.98.392h-2.77v-1.318h2.63c.502 0 .909-.071 1.223-.213a1.42 1.42 0 0 0 .696-.62c.147-.27.22-.596.22-.975 0-.383-.075-.715-.225-.996a1.45 1.45 0 0 0-.696-.644c-.314-.152-.726-.228-1.237-.228H5.548v8.833H4Zm5.065-4.577 2.534 4.577H9.836L7.35 11.07h1.714ZM12.972 18.5V8.037h1.463V9.27h.125c.087-.158.212-.342.375-.55.164-.208.391-.39.682-.545.29-.158.674-.238 1.152-.238a3.03 3.03 0 0 1 1.663.466c.488.31.87.758 1.147 1.343.28.584.421 1.288.421 2.11 0 .823-.139 1.528-.416 2.116-.277.584-.658 1.035-1.142 1.352a2.982 2.982 0 0 1-1.658.471c-.468 0-.85-.078-1.147-.233a2.166 2.166 0 0 1-.692-.545 4.121 4.121 0 0 1-.385-.555h-.09V18.5h-1.498Zm1.468-6.659c0 .536.078 1.005.235 1.408.157.402.384.718.681.946.297.224.661.337 1.092.337.448 0 .822-.118 1.122-.352.301-.238.528-.56.682-.966.157-.407.235-.864.235-1.373 0-.502-.077-.952-.23-1.352-.15-.4-.378-.715-.681-.946-.301-.232-.677-.347-1.128-.347-.434 0-.801.11-1.102.332-.297.221-.522.53-.676.926-.154.397-.23.859-.23 1.387Z"
        fill={fill}
      />
    </Svg>
  )
}

Rp.defaultProps = {
  fill: '#7B8082',
  width: 24,
  height: 24,
}

export default React.memo(Rp)
