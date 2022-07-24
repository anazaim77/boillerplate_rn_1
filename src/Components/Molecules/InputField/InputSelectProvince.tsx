import { sharedSelector } from '@/Store/Shared'
import {
  PostKecamatanOptions,
  PostKelurahanOptions,
  PostKotaOptions,
} from '@/Store/Shared/actions'
import { ValueLabelOptions } from '@/Types/Component'
import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as yup from 'yup'
import { InputFieldHandle } from './InputField'
import InputFieldSelect from './InputFieldSelect'

interface Props {
  rules?: {
    provinsi: yup.AnySchema
    kota: yup.AnySchema
    kecamatan: yup.AnySchema
    kelurahan: yup.AnySchema
  }
  setRef?: (key: string, ref: InputFieldHandle) => void
  options?: {
    optionsProvinsi: ValueLabelOptions
    optionsKota: ValueLabelOptions
    optionsKecamatan: ValueLabelOptions
    optionsKelurahan: ValueLabelOptions
  }
  refInput?: Record<string, InputFieldHandle>
}

const InputSelectProvince = ({ rules, setRef, options, refInput }: Props) => {
  const dispatch = useDispatch()
  const [provinceFilled, setProvinceFilled] = useState(false)
  const [cityFilled, setCityFilled] = useState(false)
  const [kecamatanFilled, setKecamatanFilled] = useState(false)
  const optionsKota = useSelector(sharedSelector.optionsKota)
  const optionsKecamatan = useSelector(sharedSelector.optionsKecamatan)
  const optionsKelurahan = useSelector(sharedSelector.optionsKelurahan)

  const onProvinceSelected = useCallback(() => {
    refInput?.kota?.setValue('')
    refInput?.kecamatan?.setValue('')
    refInput?.kelurahan?.setValue('')
    setCityFilled(false)
    setKecamatanFilled(false)

    if (refInput?.provinsi?.getValue()) {
      dispatch(
        PostKotaOptions.action({ province_id: refInput?.provinsi?.getValue() }),
      )
      setProvinceFilled(true)
    }
  }, [dispatch, refInput])

  const onCitySelected = useCallback(() => {
    const findKota = optionsKota.filter(
      el => el.value === refInput?.kota?.getValue(),
    )[0]
    refInput?.kecamatan?.setValue('')
    refInput?.kelurahan?.setValue('')
    setKecamatanFilled(false)

    if (refInput?.kota?.getValue()) {
      dispatch(
        PostKecamatanOptions.action({
          province_id: findKota?.i_prop,
          city_id: refInput?.kota?.getValue(),
        }),
      )
      setCityFilled(true)
    }
  }, [dispatch, refInput, optionsKota])

  const onKecamatanSelected = useCallback(() => {
    const findKecamatan = optionsKecamatan.filter(
      el => el.value === refInput?.kota?.getValue(),
    )[0]
    refInput?.kelurahan?.setValue('')
    if (refInput?.kecamatan?.getValue()) {
      dispatch(
        PostKelurahanOptions.action({
          province_id: findKecamatan?.i_prop,
          city_id: findKecamatan?.i_kota,
          kecamatan_id: refInput?.kecamatan?.getValue(),
        }),
      )
      setKecamatanFilled(true)
    }
  }, [dispatch, refInput, optionsKecamatan])

  useEffect(() => {
    return () => {
      setProvinceFilled(false)
      setCityFilled(false)
      setKecamatanFilled(false)
    }
  }, [])

  return (
    <>
      <InputFieldSelect
        label="Provinsi"
        rules={rules?.provinsi}
        setRef={setRef}
        refName="provinsi"
        containerStyle="pb-1"
        options={options?.optionsProvinsi ?? []}
        onValueSelected={onProvinceSelected}
      />
      <InputFieldSelect
        label="Kota"
        rules={rules?.kota}
        setRef={setRef}
        refName="kota"
        containerStyle="pb-1"
        disabled={!optionsKota.length || !provinceFilled}
        options={optionsKota}
        onValueSelected={onCitySelected}
      />
      <InputFieldSelect
        label="Kecamatan"
        rules={rules?.kecamatan}
        setRef={setRef}
        refName="kecamatan"
        containerStyle="pb-1"
        disabled={!optionsKecamatan.length || !cityFilled}
        options={optionsKecamatan}
        onValueSelected={onKecamatanSelected}
      />
      <InputFieldSelect
        label="Kelurahan"
        rules={rules?.kelurahan}
        setRef={setRef}
        refName="kelurahan"
        containerStyle="pb-1"
        disabled={!optionsKelurahan.length || !kecamatanFilled}
        options={optionsKelurahan}
      />
    </>
  )
}

InputSelectProvince.defaultProps = {
  options: {
    optionsProvinsi: [],
    optionsKota: [],
    optionsKecamatan: [],
    optionsKelurahan: [],
  },
  setRef: undefined,
  rules: undefined,
  refInput: undefined,
}

export default React.memo(InputSelectProvince)
