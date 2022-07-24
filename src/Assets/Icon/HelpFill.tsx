import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

const HelpFill = (props: SvgProps) => {
  const { width, height, fill } = props
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 32 32"
      fill="none"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="m17.944 26.193.012-.012.002-.001 2.13-2.131a.828.828 0 0 0 .22-.79 1.742 1.742 0 0 0-.303-.596c-.23-.311-.636-.707-1.117-1.093-.683-.55-1.52-1.088-2.16-1.364-.378-.163-.714-.239-.956-.239a.829.829 0 0 0-.775.533l-.666 1.74h-.003a1.76 1.76 0 0 1-.417-.117c-.483-.19-1.026-.544-1.566-.983-1.024-.833-2.036-1.973-2.6-3.017-.214-.395-.384-.76-.41-1.073l1.518-.858a.832.832 0 0 0 .421-.723c0-.242-.075-.577-.239-.957-.276-.639-.814-1.476-1.363-2.159-.387-.48-.782-.886-1.093-1.117a1.742 1.742 0 0 0-.597-.302.828.828 0 0 0-.789.219l-2.131 2.13c-.852.852-1.2 2.343-1.013 4.054.252 2.297 1.429 4.996 3.144 6.712 1.712 1.711 4.405 2.888 6.7 3.143 1.708.189 3.199-.155 4.052-1h-.001ZM7.858 12.836c.167.161.365.365.52.557.393.49.783 1.07 1.032 1.563l.057.113-1.313.742a.835.835 0 0 0-.388.492c-.157.543-.087 1.23.216 1.973.556 1.369 1.915 3.014 3.315 4.152.843.685 1.704 1.183 2.411 1.376.69.188 1.28.105 1.714-.19a.827.827 0 0 0 .31-.39l.536-1.401.018.009a9.51 9.51 0 0 1 1.562 1.032c.193.154.396.353.557.52l-1.629 1.63c-.562.556-1.574.652-2.7.527-1.954-.216-4.251-1.21-5.71-2.666-1.46-1.461-2.452-3.763-2.667-5.718-.122-1.127-.024-2.14.537-2.7l1.622-1.62Z"
        fill={fill}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="m14.809 12.656-1.626 4.335a.829.829 0 0 0 1.271.96l3.7-2.736a7.469 7.469 0 0 0 2.448.407c3.698 0 6.641-2.641 6.641-5.81C27.243 6.641 24.3 4 20.602 4c-3.699 0-6.642 2.642-6.642 5.811 0 1.031.307 2.002.849 2.845Zm1.707.174a.828.828 0 0 0-.117-.796c-.49-.639-.778-1.402-.778-2.223 0-2.328 2.264-4.15 4.98-4.15 2.718 0 4.982 1.822 4.982 4.15 0 2.329-2.264 4.151-4.981 4.151a5.765 5.765 0 0 1-2.252-.45.827.827 0 0 0-.817.097l-1.81 1.338.793-2.117Z"
        fill={fill}
      />
      <Path
        d="M18.11 10.643a.83.83 0 1 0 .001-1.66.83.83 0 0 0 0 1.66ZM20.602 10.643a.83.83 0 1 0 0-1.66.83.83 0 0 0 0 1.66ZM23.093 10.643a.83.83 0 1 0 0-1.66.83.83 0 0 0 0 1.66ZM19.565 23.5l-3 3h-2l-2.5-.5-2.5-1-2.5-1.5-2-3.5-.5-3.5 1-2.5 2.5-2.5 1 1.5 1 2-.5 1-1 1 1 2.5 4 3.5h1l1-2.5 2.5 1 1.5 2Z"
        fill={fill}
      />
    </Svg>
  )
}

HelpFill.defaultProps = {
  fill: '#FFFFFF',
  width: 32,
  height: 32,
}

export default React.memo(HelpFill)
