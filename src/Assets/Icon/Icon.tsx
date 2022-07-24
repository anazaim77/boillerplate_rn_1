import { WTView } from '@/Components'
import { tw } from '@/Utils'
import React from 'react'
import Ripple from 'react-native-material-ripple'
import { SvgProps } from 'react-native-svg'

export type IconName =
  | 'account-fill'
  | 'account-outline'
  | 'help-fill'
  | 'help-outline'
  | 'home-fill'
  | 'home-outline'
  | 'news-fill'
  | 'news-outline'
  | 'inbox-fill'
  | 'inbox-outline'
  | 'close'
  | 'arrow-down'
  | 'eye'
  | 'eye-slash'
  | 'calendar'
  | 'nrp'
  | 'lock-outline'
  | 'arrow-back'
  | 'chevron-left'
  | 'question'
  | 'chart'
  | 'credit-card'
  | 'saving'
  | 'info'
  | 'circle-chevron-right'
  | 'chevron-right'
  | 'chevron-down'
  | 'check'
  | 'settings'
  | 'account'
  | 'agent'
  | 'card-id'
  | 'cell'
  | 'pin-mark'
  | 'mail'
  | 'pencil'
  | 'saved'
  | 'star'
  | 'bed'
  | 'shower'
  | 'terms-condition'
  | 'checkbox'
  | 'checkbox-checked'
  | 'camera'
  | 'search'
  | 'luas-tanah'
  | 'luas-bangunan'
  | 'rp'
  | 'outline-date'
  | 'percentage'
  | 'notebook'
  | 'family'
  | 'bank-account'
  | 'double-chevron-right'
  | 'pencil'
  | 'pangkat'
  | 'menu-etwp'
  | 'menu-kpr'
  | 'menu-baltab'
  | 'medal-line'
  | 'upload'
  | 'gallery'
  | 'plane'

const IconMap: Record<IconName, React.FC> = {
  'account-fill': require('./AccountFill').default,
  'account-outline': require('./AccountOutline').default,
  'help-fill': require('./HelpFill').default,
  'help-outline': require('./HelpOutline').default,
  'home-fill': require('./HomeFill').default,
  'home-outline': require('./HomeOutline').default,
  'news-fill': require('./NewsFill').default,
  'news-outline': require('./NewsOutline').default,
  'inbox-fill': require('./InboxFill').default,
  'inbox-outline': require('./InboxOutline').default,
  close: require('./Close').default,
  eye: require('./Eye').default,
  'eye-slash': require('./EyeSlash').default,
  'arrow-down': require('./ArrowDown').default,
  calendar: require('./Calendar').default,
  nrp: require('./Nrp').default,
  'lock-outline': require('./LockOutline').default,
  'arrow-back': require('./ArrowBack').default,
  'chevron-left': require('./ChevronLeft').default,
  chart: require('./Chart').default,
  'credit-card': require('./CreditCard').default,
  question: require('./Question').default,
  saving: require('./Saving').default,
  info: require('./Info').default,
  'circle-chevron-right': require('./CircleChevronRight').default,
  'chevron-right': require('./ChevronRight').default,
  'chevron-down': require('./ChevronDown').default,
  check: require('./Check').default,
  settings: require('./Settings').default,
  account: require('./Account').default,
  agent: require('./Agent').default,
  'card-id': require('./CardId').default,
  cell: require('./Cell').default,
  'pin-mark': require('./PinMark').default,
  mail: require('./Mail').default,
  pencil: require('./Pencil').default,
  saved: require('./Saved').default,
  star: require('./Star').default,
  bed: require('./Bed').default,
  shower: require('./Shower').default,
  checkbox: require('./Checkbox').default,
  'checkbox-checked': require('./CheckboxChecked').default,
  'terms-condition': require('./TermsCondition').default,
  camera: require('./Camera').default,
  search: require('./Search').default,
  'luas-tanah': require('./LuasTanah').default,
  'luas-bangunan': require('./LuasBangunan').default,
  rp: require('./Rp').default,
  'outline-date': require('./OutlineDate').default,
  percentage: require('./Percentage').default,
  notebook: require('./Notebook').default,
  family: require('./Family').default,
  'bank-account': require('./BankAccount').default,
  'double-chevron-right': require('./DoubleChevronRight').default,
  pangkat: require('./Pangkat').default,
  'menu-etwp': require('./MenuHome/MenuETWP').default,
  'menu-kpr': require('./MenuHome/MenuKPR').default,
  'menu-baltab': require('./MenuHome/MenuBaltab').default,
  'medal-line': require('./MedalLine').default,
  upload: require('./Upload').default,
  gallery: require('./Gallery').default,
  plane: require('./Plane').default,
}

const Icon = (
  props: SvgProps & { name: IconName; size?: number; onPress?: () => void },
) => {
  const IconComponent = IconMap[props.name]
  const pressable = props.onPress && typeof props.onPress === 'function'

  if (pressable) {
    return (
      <WTView style="items-start">
        <Ripple
          style={tw`-m-3 p-3`}
          rippleContainerBorderRadius={99}
          onPress={props.onPress}
        >
          <IconComponent
            width={props.size ?? props.width}
            height={props.size ?? props.height}
            {...props}
          />
        </Ripple>
      </WTView>
    )
  }
  return (
    <IconComponent
      width={props.size ?? props.width}
      height={props.size ?? props.height}
      {...props}
    />
  )
}

Icon.defaultProps = {
  size: undefined,
  onPress: undefined,
}

export default React.memo(Icon)
