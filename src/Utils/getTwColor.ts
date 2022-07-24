import colors from '@/Config/colors'
import { ColorVariant, ColorWeight } from '@/Types/Component'

export default (color?: string) => {
  if (!color) {
    return color
  }
  if (color.includes('-')) {
    const colorName = color.split('-')[0] as ColorVariant
    const colorWeight = parseInt(color.split('-')[1], 10) as ColorWeight
    return colors[colorName][colorWeight]
  }

  return color
}
