import colors from '@/Config/colors'
import React, { forwardRef, useImperativeHandle, useState } from 'react'
import { ActivityIndicator, StyleSheet } from 'react-native'
import Modal from 'react-native-modal'

interface Props {}

export type ModalLoadingHandle = {
  show: () => void
  hide: () => void
}

const ModalLoading = forwardRef<ModalLoadingHandle, Props>((_, ref) => {
  const [visible, setVisible] = useState<boolean>(false)

  const isVisible = visible

  useImperativeHandle(ref, () => ({
    show: () => {
      setVisible(true)
    },
    hide: () => {
      setVisible(false)
    },
  }))

  return (
    <Modal
      animationIn="fadeIn"
      animationOut="fadeOut"
      isVisible={isVisible}
      style={styles.backdrop}
    >
      {/* <WTView style="bg-white w-30 h-30 items-center justify-center rounded-4"> */}
      <ActivityIndicator size="large" color={colors.primary[55]} />
      {/* </WTView> */}
    </Modal>
  )
})

export default React.memo(ModalLoading)

const styles = StyleSheet.create({
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    margin: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
