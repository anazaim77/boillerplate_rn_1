import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'

const MenuETWP = (props: SvgProps) => {
  const { width, height, fill } = props

  return (
    <Svg
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <Path
        d="M21 12h-3V3a1 1 0 0 0-1.5-.87l-3 1.72-3-1.72a1 1 0 0 0-1 0l-3 1.72-3-1.72A1 1 0 0 0 2 3v16a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-6a1 1 0 0 0-1-1ZM5 20a1 1 0 0 1-1-1V4.73l2 1.14a1.08 1.08 0 0 0 1 0l3-1.72 3 1.72a1.08 1.08 0 0 0 1 0l2-1.14V19a3 3 0 0 0 .18 1H5Zm15-1a1 1 0 1 1-2 0v-5h2v5Z"
        fill={fill}
      />
      <Path
        d="M5.65 14.59c-.212 0-.373-.054-.484-.164-.11-.11-.166-.263-.166-.462V9.62C5 9.206 5.22 9 5.658 9H7.68c.655 0 1.16.149 1.515.446.356.298.533.713.533 1.245 0 .413-.114.757-.341 1.034-.222.271-.541.457-.957.556.294.083.535.284.724.603l.516.9c.117.198.139.384.067.556-.073.167-.247.25-.525.25a.834.834 0 0 1-.45-.109.892.892 0 0 1-.3-.337l-.798-1.386a.661.661 0 0 0-.308-.297 1.096 1.096 0 0 0-.433-.078H6.29v1.581c0 .199-.055.353-.166.462-.106.11-.264.165-.475.165Zm.64-3.084h1.157c.694 0 1.04-.261 1.04-.783 0-.517-.346-.776-1.04-.776H6.29v1.559ZM11.32 16c-.421 0-.632-.201-.632-.603v-4.189c0-.397.205-.595.616-.595.416 0 .624.198.624.595v.024c.117-.194.289-.348.516-.462.228-.115.483-.173.766-.173.355 0 .666.081.933.243.271.162.482.392.632.69.15.297.225.652.225 1.064 0 .412-.075.77-.225 1.073-.15.297-.36.53-.632.697a1.76 1.76 0 0 1-.933.242c-.272 0-.521-.054-.749-.164a1.291 1.291 0 0 1-.516-.439v1.394c0 .402-.208.603-.624.603Zm1.516-2.278a.838.838 0 0 0 .649-.275c.166-.182.25-.467.25-.853 0-.381-.084-.66-.25-.838a.838.838 0 0 0-.65-.274.847.847 0 0 0-.657.274c-.167.178-.25.457-.25.838 0 .386.083.67.25.853a.847.847 0 0 0 .658.275Z"
        fill={fill}
      />
    </Svg>
  )
}

MenuETWP.defaultProps = {
  fill: '#6FA068',
  width: 20,
  height: 20,
}

export default React.memo(MenuETWP)
