import React from 'react'
import { Button, Typography, WTSafeAreaView, WTScrollView } from '@/Components'
import { globalRef } from '@/Utils/globalRef'
// import { useDispatch } from 'react-redux'
import TextField from './Components/TextField'

const LoginContainer = () => {
  // const dispatch = useDispatch()

  return (
    <WTSafeAreaView style="bg-neutral-100 fill">
      <WTScrollView style="fill" contentContainerStyle="px-4 pt-5 pb-5">
        <Typography>regular/md</Typography>
        <Typography weight="medium" size="xl">
          medium/xl
        </Typography>
        <Typography weight="bold" size="3xl">
          bold/3xl
        </Typography>
        <Typography color="red-400" weight="bold" size="3xl">
          bold/3xl - red-400
        </Typography>

        <TextField />

        <Typography
          weight="bold"
          containerStyle="border-t mt-5"
          style="mt-5"
          size="2xl"
        >
          Button
        </Typography>
        <Button
          rounded={false}
          leftIcon="close"
          rightIcon="news-fill"
          containerStyle="mt-3"
        >
          Square/Solid/Icon
        </Button>
        <Button mode="outlined" size="lg" containerStyle="mt-3">
          Rounded/Outline/lg
        </Button>

        <Button
          full={false}
          variant="red"
          mode="ghost"
          size="lg"
          containerStyle="mt-3"
        >
          Square/Ghost/lg/red/NonFull
        </Button>
        <Button full={false} variant="red" size="sm" containerStyle="mt-3">
          sm
        </Button>

        <Typography
          containerStyle="border-t mt-5"
          weight="bold"
          style="mt-5"
          size="2xl"
        >
          Global Ref
        </Typography>
        <Button
          containerStyle="mt-3"
          onPress={() => {
            globalRef.loading?.show()
            setTimeout(() => {
              globalRef.loading?.hide()
            }, 1000)
          }}
        >
          Show Loading
        </Button>
        <Button
          containerStyle="mt-3"
          onPress={() => {
            globalRef.modalBottomInfo?.show({
              title: 'Ini Title',
              content:
                'Ini konten, Ini konten, Ini konten, Ini konten, Ini konten, Ini konten, Ini konten, Ini konten, Ini konten, Ini konten,',
              buttonRight: {
                label: 'Kanan',
                onPress: () => {
                  console.log('kanan')
                },
              },
              buttonLeft: {
                label: 'Kiri',
                onPress: ({ hide }) => {
                  hide()
                },
              },
              buttonCenter: {
                label: 'Center',
                onPress: ({ hide }) => {
                  hide()
                },
              },
            })
            setTimeout(() => {
              globalRef.loading?.hide()
            }, 1000)
          }}
        >
          Show Modal Info
        </Button>
        <Button
          containerStyle="mt-3"
          onPress={() => {
            globalRef.modalBottomOption?.show({
              title: 'Pilihlah',
              onSelect: selected => {
                console.log({ selected })
              },
              options: [
                { label: 'satu', value: 1 },
                { label: 'dua', value: 2 },
                { label: 'tiga', value: 3 },
                { label: 'tiga', value: 4 },
                { label: 'tiga', value: 5 },
                { label: 'tiga', value: 6 },
                { label: 'tiga', value: 7 },
                { label: 'tiga', value: 8 },
                { label: 'tiga', value: 9 },
                { label: 'tiga', value: 10 },
                { label: 'tiga', value: 11 },
                { label: 'tiga', value: 12 },
                { label: 'tiga', value: 13 },
                { label: 'tiga', value: 14 },
                { label: 'tiga', value: 15 },
                { label: 'tiga', value: 16 },
                { label: 'tiga', value: 17 },
                { label: 'q', value: 18 },
                { label: 'we', value: 19 },
                { label: 'rewr', value: 20 },
                { label: 'wrtrt', value: 21 },
              ],
            })
          }}
        >
          Show Modal Option
        </Button>
        <Button
          containerStyle="mt-3"
          onPress={() => {
            globalRef.modalDatePicker?.show({
              onSelect: selected => {
                console.log({ selected })
              },
            })
          }}
        >
          Show Date Picker
        </Button>
      </WTScrollView>
    </WTSafeAreaView>
  )
}

export default LoginContainer
