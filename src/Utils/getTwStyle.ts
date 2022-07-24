import { tw } from '@/Utils'

const getTwStyle = (style?: string | any) => {
  if (!style) {
    return style
  }
  if (typeof style === 'string') {
    return tw.style(style)
  }
  return style
}

export default getTwStyle
