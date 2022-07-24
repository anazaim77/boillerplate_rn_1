import React from 'react'
import WTView from '../Native/WTView'
import WTTouchableOpacity from '../Native/WTTouchableOpacity'
import Typography from '../Atoms/Typography'
import WTImage from '../Native/WTImage'
import { ImageSourcePropType } from 'react-native'

interface Props {
  label: string
  image: ImageSourcePropType
  onPress: () => void
  isActive: boolean
}

const ButtonMenuCircle = ({ label, image, onPress, isActive }: Props) => {
  return (
    <WTTouchableOpacity
      activeOpacity={0.7}
      style={`justify-center items-center ${isActive ? 'shadow-2xl' : ''} `}
      onPress={onPress}
    >
      <WTView
        style={`w-16 h-16 rounded-full bg-white items-center justify-center `}
      >
        <WTImage source={image} style="w-10 h-10" />
      </WTView>
      <Typography
        containerStyle={'pt-3 pb-2'}
        size="xs"
        color="white"
        style={'text-center leading-3'}
      >
        {label}
      </Typography>
      <WTView
        style={`w-[100%] ${
          isActive
            ? 'border-b border-b-4 border-b-white'
            : 'border-b border-b-4 border-b-transparent'
        } `}
      />
    </WTTouchableOpacity>
  )
}
ButtonMenuCircle.defaultProps = {}

export default React.memo(ButtonMenuCircle)
