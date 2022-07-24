import React, {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react'
import {
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
} from 'react-native'
import Modal from 'react-native-modal'
import colors from '@/Config/colors'
import WTView from '../Native/WTView'
import WTText from '../Native/WTText'
import WTTouchableOpacity from '../Native/WTTouchableOpacity'
import { Icon } from '@/Assets'
import Button from '../Atoms/Button'

interface Props {}

export type ModalBottomInfoButtonAction = {
  hide: () => void
}
export type ModalBottomInfoButton = {
  label: string
  onPress: (prop: ModalBottomInfoButtonAction) => void
}

export type ModalBottomInfoConfig = {
  title?: string
  content: string
  buttonCenter?: ModalBottomInfoButton
  buttonRight?: ModalBottomInfoButton
  buttonLeft?: ModalBottomInfoButton
  onHide?: () => void
}

export type ModalBottomInfoHandle = {
  show: (param: ModalBottomInfoConfig) => void
  hide: () => void
}

const baseConfig: ModalBottomInfoConfig = {
  title: 'Oops...',
  content: 'Content',
  buttonCenter: undefined,
  buttonRight: undefined,
  buttonLeft: undefined,
  onHide: undefined,
}

const ModalBottomInfo = forwardRef<ModalBottomInfoHandle, Props>((_, ref) => {
  const [visible, setVisible] = useState<boolean>(false)
  const [config, setConfig] = useState<ModalBottomInfoConfig>(baseConfig)

  const enableKeyboardAvoidingView = useRef(Platform.OS === 'ios').current

  const hide = useCallback(() => {
    setVisible(false)
    config?.onHide?.()
  }, [config])

  const onPressButton = useCallback(
    action => {
      action({ hide })
    },
    [hide],
  )

  const button = useMemo(() => {
    if (config.buttonLeft && config.buttonRight) {
      return (
        <WTView style="mt-5 flex-row">
          <Button
            containerStyle="fill"
            mode="outlined"
            full
            onPress={() => onPressButton(config.buttonLeft?.onPress)}
          >
            {config.buttonLeft.label}
          </Button>
          <WTView style="w-2" />
          <Button
            containerStyle="fill"
            full
            onPress={() => onPressButton(config.buttonRight?.onPress)}
          >
            {config.buttonRight.label}
          </Button>
        </WTView>
      )
    }

    // if (config.buttonCenter) {
    return (
      <Button
        containerStyle="mt-5"
        full
        onPress={() => onPressButton(config.buttonCenter?.onPress ?? hide)}
      >
        {config.buttonCenter?.label ?? 'Ok'}
      </Button>
    )
    // }
    // return null
  }, [
    config.buttonLeft,
    config.buttonRight,
    config.buttonCenter,
    onPressButton,
    hide,
  ])

  useImperativeHandle(ref, () => ({
    show: (configParam: ModalBottomInfoConfig) => {
      if (configParam) {
        setConfig({ ...baseConfig, ...configParam })
      }
      setVisible(true)
    },
    hide: () => {
      setVisible(false)
    },
  }))

  return (
    <Modal
      isVisible={visible}
      animationIn={'slideInUp'}
      animationOut={'slideOutDown'}
      onBackdropPress={hide}
      onBackButtonPress={hide}
      style={styles.modal}
    >
      <KeyboardAvoidingView
        enabled={enableKeyboardAvoidingView}
        behavior={'position'}
      >
        <WTView style={styles.contentContainer}>
          <WTView style={'mb-4 flex-row items-center'}>
            <WTText style={'font-semibold text-5 fill'}>{config.title}</WTText>
            <WTTouchableOpacity style="p-1" onPress={hide}>
              <Icon name="close" size={24} />
            </WTTouchableOpacity>
          </WTView>
          <WTText style="text-4 font-light">{config.content}</WTText>
          {button}
        </WTView>
      </KeyboardAvoidingView>
    </Modal>
  )
})

export default React.memo(ModalBottomInfo)

const styles = StyleSheet.create({
  modal: { margin: 0, justifyContent: 'flex-end' },
  contentContainer: {
    backgroundColor: colors.white,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    padding: 16,
    paddingBottom: 24,
    maxHeight: Dimensions.get('screen').height * 0.93,
  },
})
