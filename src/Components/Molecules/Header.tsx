import React, { useCallback } from 'react'
import WTView from '../Native/WTView'
import WTTouchableOpacity from '../Native/WTTouchableOpacity'
import Typography from '../Atoms/Typography'
import { Icon } from '@/Assets'
import { useNavigation } from '@react-navigation/core'
import { IconName } from '@/Assets/Icon/Icon'

interface Props {
  title?: string
  rightIcon?: IconName
  rightIconPress?: () => void
}

const Header = ({ title, rightIcon, rightIconPress }: Props) => {
  const navigation = useNavigation()
  const goBack = useCallback(() => {
    navigation.goBack()
  }, [navigation])

  return (
    <WTView style={'flex-row px-4 py-4 pt-5 justify-center items-center'}>
      <WTTouchableOpacity onPress={goBack} style="w-6 h-6">
        <Icon fill="white" name="arrow-back" />
      </WTTouchableOpacity>
      <WTView style="fill items-center">
        <Typography weight="bold" size="xl" color="white">
          {title}
        </Typography>
      </WTView>
      <WTTouchableOpacity onPress={rightIconPress} style="w-6 h-6">
        {!!rightIcon && <Icon name={rightIcon} />}
      </WTTouchableOpacity>
    </WTView>
  )
}
Header.defaultProps = {
  title: '',
  rightIcon: undefined,
  rightIconPress: undefined,
}

export default React.memo(Header)
