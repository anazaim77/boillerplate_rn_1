import { Icon } from '@/Assets'
import Typography from '@/Components/Atoms/Typography'
import WTTouchableOpacity from '@/Components/Native/WTTouchableOpacity'
import WTView from '@/Components/Native/WTView'
import { globalRef } from '@/Utils/globalRef'
import React, { useCallback, useRef } from 'react'
import InputField, { InputFieldHandle, InputFieldProps } from './InputField'

interface Props extends InputFieldProps {}

const InputUploadPhoto = (props: Props) => {
  const inputRef = useRef<InputFieldHandle>(null)

  const onChangePhoto = useCallback(() => {
    globalRef.modalBottomPhotoPicker?.show({
      onSelectImage: res => {
        if (res.assets?.[0].base64) {
          //   useDispatch(
          //     outboundActions.PostChangePhoto.action({
          //       thumb: res.assets?.[0].base64,
          //     }),
          //   )
          // console.log('res', res)
          inputRef.current?.setValue(
            res.assets?.[0].base64,
            res.assets?.[0].uri,
          )
        }
      },
    })
  }, [inputRef])

  const renderBoxUpload = useCallback(
    value => {
      const isValueExist = !!value
      return (
        <WTView style={`fill `}>
          <Typography weight="medium" color="neutral-500" size="sm">
            {props.label}
          </Typography>
          <WTTouchableOpacity
            onPress={onChangePhoto}
            style={`mt-2 p-7 fill items-center border-2 rounded-md ${
              isValueExist
                ? 'border-neutral-300 bg-neutral-100'
                : 'border-primary-500 bg-neutral-200'
            }`}
          >
            <Icon name="upload" size={24} />
            {isValueExist ? (
              <Typography
                ellipsizeMode="middle"
                numberOfLines={1}
                weight="medium"
                color="neutral-500"
                size="md"
              >
                {value}
              </Typography>
            ) : (
              <Typography weight="medium" color="primary-500" size="md">
                Klik Untuk Upload Gambar
              </Typography>
            )}
            {isValueExist ? (
              <Typography weight="medium" color="primary-500" size="md">
                Klik Untuk Upload Ulang
              </Typography>
            ) : (
              <Typography weight="regular" color="neutral-400" size="md">
                jpg, jpeg da png
              </Typography>
            )}
          </WTTouchableOpacity>
        </WTView>
      )
    },
    [onChangePhoto, props.label],
  )

  return (
    <InputField
      {...props}
      customChildren={(value: string) => renderBoxUpload(value)}
      ref={inputRef}
      focusable={false}
      pointerEvents="none"
      showLabel={false}
    />
  )
}

InputUploadPhoto.defaultProps = {
  style: undefined,
}

export default React.memo(InputUploadPhoto)
