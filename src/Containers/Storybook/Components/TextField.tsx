import React, { useMemo } from 'react'
import {
  Button,
  InputFieldDate,
  InputFieldPassword,
  InputFieldSelect,
  InputFieldText,
  Typography,
} from '@/Components'
import * as yup from 'yup'
import { Alert, View } from 'react-native'
import { useInputFieldForm } from '@/Hooks'

const TextField = () => {
  // const dispatch = useDispatch()

  const { setRef, validate } = useInputFieldForm()

  const rules = useMemo(() => {
    return {
      name: yup.string().required(),
      password: yup.string().required().min(8),
      email: yup
        .string()
        .required()
        .matches(/\S+@\S+\.\S+/, 'Format email tidak sesuai'),
      phoneNumber: yup
        .string()
        .required()
        .min(8)
        .matches(/^\d+$/, 'Nomor HP harus berupa angka'),
      rank: yup.string().required(),
      date: yup.string().required(),
    }
  }, [])

  return (
    <View>
      <Typography
        weight="bold"
        containerStyle="border-t mt-5"
        style="mt-5"
        size="2xl"
      >
        Text Field
      </Typography>
      <InputFieldText
        containerStyle="mt-3"
        label="Email"
        placeholder="Ini Placeholder"
        rules={rules.email}
        setRef={setRef}
        refName="email"
      />
      <InputFieldText
        label="Name"
        rules={rules.name}
        containerStyle="mt-3"
        placeholder="Ini Placeholder"
        setRef={setRef}
        refName="name"
      />
      <InputFieldText
        label="Phone Number"
        rules={rules.phoneNumber}
        containerStyle="mt-3"
        placeholder="Ini Placeholder"
        setRef={setRef}
        refName="phone"
      />
      <InputFieldPassword
        label="Password"
        rules={rules.password}
        containerStyle="mt-3"
        setRef={setRef}
        refName="password"
      />
      <InputFieldDate
        label="Tanggal Lahir"
        rules={rules.date}
        containerStyle="mt-3"
        setRef={setRef}
        refName="date"
      />
      <InputFieldSelect
        label="Pangkat Prajurit Local"
        rules={rules.rank}
        containerStyle="mt-3"
        placeholder="Ini Placeholder"
        setRef={setRef}
        refName="rank"
        options={[
          { value: 'cadet', label: 'Cadet' },
          { value: 'gendral', label: 'Gendral' },
          { value: 'mayor', label: 'Mayor' },
        ]}
      />
      <Button
        rounded={false}
        containerStyle="mt-3"
        onPress={async () => {
          const { status } = await validate()
          if (status) {
            Alert.alert('Success')
          }
        }}
      >
        Validate Form
      </Button>
    </View>
  )
}

export default TextField
