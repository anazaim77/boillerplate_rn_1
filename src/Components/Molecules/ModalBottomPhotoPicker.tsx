import React, {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useRef,
  useState,
} from 'react'
import Modal from 'react-native-modal'
import WTView from '../Native/WTView'
import {
  ImagePickerResponse,
  launchCamera,
  launchImageLibrary,
} from 'react-native-image-picker'
import { tw } from '@/Utils'
import Typography from '../Atoms/Typography'
import colors from '@/Config/colors'
import { Icon } from '@/Assets'
import Ripple from 'react-native-material-ripple'
import { StyleSheet } from 'react-native'
import WTTouchableOpacity from '../Native/WTTouchableOpacity'

interface Props {}

export type ModalBottomPhotoPickerConfig = {
  onSelectImage?: (data: ImagePickerResponse) => void
}

export type ModalBottomPhotoPickerHandle = {
  show: (param: ModalBottomPhotoPickerConfig) => void
  hide: () => void
}

const baseConfig: ModalBottomPhotoPickerConfig = {
  onSelectImage: undefined,
}

const ModalBottomInfo = forwardRef<ModalBottomPhotoPickerHandle, Props>(
  (_, ref) => {
    const [visible, setVisible] = useState<boolean>(false)
    const config = useRef<ModalBottomPhotoPickerConfig>(baseConfig)

    const cameraConfig = useRef({
      mediaType: 'photo',
      saveToPhotos: false,
      maxHeight: 500,
      maxWidth: 500,
      includeBase64: true,
    }).current
    const hide = useCallback(() => {
      setVisible(false)
    }, [])

    const onReceivePhoto = useCallback(
      (response: ImagePickerResponse) => {
        hide()
        setTimeout(() => {
          config.current?.onSelectImage?.(response)
        }, 300)
      },
      [hide],
    )

    const openCamera = useCallback(async () => {
      await launchCamera(
        { ...cameraConfig, mediaType: 'photo' },
        onReceivePhoto,
      )
    }, [onReceivePhoto, cameraConfig])

    const openGallery = useCallback(async () => {
      await launchImageLibrary(
        { ...cameraConfig, mediaType: 'photo', selectionLimit: 1 },
        onReceivePhoto,
      )
    }, [onReceivePhoto, cameraConfig])

    useImperativeHandle(ref, () => ({
      show: (configParam: ModalBottomPhotoPickerConfig) => {
        if (configParam) {
          config.current = { ...baseConfig, ...configParam }
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
        style={tw`m-0 justify-end`}
      >
        <WTView style={'bg-white rounded-t-4 p-4 pb-6 pt-5'}>
          <WTView style={'mb-4 flex-row items-center justify-center mb-10'}>
            <WTTouchableOpacity
              style="p-1 absolute left-0 top-0"
              onPress={hide}
            >
              <Icon name="close" size={24} />
            </WTTouchableOpacity>
            <Typography weight="bold" size="md">
              Upload Foto
            </Typography>
          </WTView>
          <WTView style="flex-row mx-7 mb-5">
            <Ripple
              rippleContainerBorderRadius={12}
              style={Styles.containerBtnGallery}
              onPress={openGallery}
            >
              <WTView style="fill p-3 items-center justify-center rounded-xl border border-[#ECEDED]">
                <Icon name="gallery" />
                <Typography
                  size="sm"
                  weight="medium"
                  color={colors.primary[500]}
                  style={'mt-2'}
                >
                  Dari Galeri
                </Typography>
              </WTView>
            </Ripple>
            <Ripple
              rippleContainerBorderRadius={12}
              style={Styles.containerBtnCamera}
              onPress={openCamera}
            >
              <WTView style="fill p-3 items-center justify-center rounded-xl border border-[#ECEDED]">
                <Icon name="camera" fill={colors.primary[500]} />
                <Typography
                  size="sm"
                  weight="medium"
                  color={colors.primary[500]}
                  style={'mt-2'}
                >
                  Dari Kamera
                </Typography>
              </WTView>
            </Ripple>
          </WTView>
        </WTView>
      </Modal>
    )
  },
)

const Styles = StyleSheet.create({
  containerBtnGallery: {
    flex: 1,
    height: 150,
    marginRight: 8,
    borderRadius: 25,
  },
  containerBtnCamera: {
    flex: 1,
    height: 150,
  },
})
export default React.memo(ModalBottomInfo)
