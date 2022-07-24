import {
  ModalLoadingHandle,
  ModalBottomInfoHandle,
  ModalBottomOptionHandle,
  ModalDatePickerHandle,
  ModalBottomPhotoPickerHandle,
} from '@/Components'

type GlobalRef = {
  loading?: ModalLoadingHandle
  modalBottomInfo?: ModalBottomInfoHandle
  modalBottomOption?: ModalBottomOptionHandle
  modalDatePicker?: ModalDatePickerHandle
  modalBottomPhotoPicker?: ModalBottomPhotoPickerHandle
}

const ref: GlobalRef = {
  loading: undefined,
  modalBottomInfo: undefined,
  modalBottomOption: undefined,
  modalDatePicker: undefined,
  modalBottomPhotoPicker: undefined,
}

export const setGlobalLoadingRef = (itemRef: ModalLoadingHandle) => {
  ref.loading = itemRef
}

export const setGlobalModalBottomInfoRef = (itemRef: ModalBottomInfoHandle) => {
  ref.modalBottomInfo = itemRef
}

export const setGlobalModalBottomOptionRef = (
  itemRef: ModalBottomOptionHandle,
) => {
  ref.modalBottomOption = itemRef
}

export const setGlobalModalDatePicker = (itemRef: ModalDatePickerHandle) => {
  ref.modalDatePicker = itemRef
}

export const setGlobalModalBottomPhotoPicker = (
  itemRef: ModalBottomPhotoPickerHandle,
) => {
  ref.modalBottomPhotoPicker = itemRef
}

export const globalRef = ref
