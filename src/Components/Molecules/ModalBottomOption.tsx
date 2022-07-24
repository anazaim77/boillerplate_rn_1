import React, {
  forwardRef,
  useCallback,
  useImperativeHandle,
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
import WTText from '../Native/WTText'
import WTTouchableOpacity from '../Native/WTTouchableOpacity'
import { Icon } from '@/Assets'
import WTFlatList from '../Native/WTFlatList'
import WTView from '../Native/WTView'
import Typography from '../Atoms/Typography'
import Ripple from 'react-native-material-ripple'
import { ValueLabelOption, ValueLabelOptions } from '@/Types/Component'

interface Props {}

export type ModalBottomOptionConfig = {
  title?: string
  options: ValueLabelOptions
  onSelect: (data: ValueLabelOption) => void
}

export type ModalBottomOptionHandle = {
  show: (param: ModalBottomOptionConfig) => void
  hide: () => void
}

const baseConfig: ModalBottomOptionConfig = {
  title: 'Pilih',
  options: [],
  onSelect: () => {},
}

const ModalBottomInfo = forwardRef<ModalBottomOptionHandle, Props>((_, ref) => {
  const [visible, setVisible] = useState<boolean>(false)
  const [config, setConfig] = useState<ModalBottomOptionConfig>(baseConfig)

  const enableKeyboardAvoidingView = useRef(Platform.OS === 'ios').current

  const hide = useCallback(() => {
    setVisible(false)
  }, [])

  const onOptionSelect = useCallback(
    (item: ValueLabelOption) => {
      config?.onSelect(item)
      hide()
    },
    [hide, config],
  )

  const renderItem = useCallback(
    ({ item }: { item: ValueLabelOption; index: number }) => {
      return (
        <Ripple onPress={() => onOptionSelect(item)}>
          <WTView style={'py-3 border-b border-b-neutral-200'}>
            <Typography color="neutral-500" weight="medium" size="md">
              {item.label}
            </Typography>
          </WTView>
        </Ripple>
      )
    },
    [onOptionSelect],
  )

  const keyExtractor = useCallback(
    (item, index) => `SelectOption_${item.value}_${index}`,
    [],
  )

  useImperativeHandle(ref, () => ({
    show: (configParam: ModalBottomOptionConfig) => {
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
          <WTFlatList
            data={config.options}
            keyExtractor={keyExtractor}
            renderItem={renderItem}
            ListEmptyComponent={
              <WTView style={'justify-center items-center fill py-18'}>
                <Typography size="xl">Data tidak ditemukan</Typography>
              </WTView>
            }
          />
        </WTView>
      </KeyboardAvoidingView>
    </Modal>
  )
})

export default ModalBottomInfo

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
