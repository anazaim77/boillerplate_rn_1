import { Icon } from '@/Assets'
import React from 'react'

interface Props {
  value: boolean
  onPress: () => void
}

const Checkbox: React.FC<Props> = ({ value, onPress }) => {
  return (
    <Icon
      size={22}
      onPress={onPress}
      name={value ? 'checkbox-checked' : 'checkbox'}
    />
  )
}

Checkbox.defaultProps = {
  initialValue: false,
}

export default Checkbox
