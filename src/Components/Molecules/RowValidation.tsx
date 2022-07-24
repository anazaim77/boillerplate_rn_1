import React, { forwardRef, useImperativeHandle, useState } from 'react'

import colors from '@/Config/colors'
import WTView from '../Native/WTView'
import { Icon } from '@/Assets'
import Typography from '../Atoms/Typography'

interface Props {
  label: string
}

export type RowValidationHandle = {
  check: () => void
  uncheck: () => void
}

const RowValidation = forwardRef<RowValidationHandle, Props>(
  ({ label }, ref) => {
    const [checked, setChecked] = useState<boolean>(false)

    useImperativeHandle(ref, () => ({
      check: () => {
        setChecked(true)
      },
      uncheck: () => {
        setChecked(false)
      },
    }))

    return (
      <WTView style="flex-row pb-2">
        <Icon
          name={checked ? 'checkbox-checked' : 'checkbox'}
          size={16}
          fill={checked ? colors.primary[500] : colors.neutral[300]}
        />
        <Typography color="neutral-400" size="xs" containerStyle="pl-2">
          {label}
        </Typography>
      </WTView>
    )
  },
)

export default React.memo(RowValidation)
