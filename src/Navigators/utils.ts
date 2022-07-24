import { StreamStackList } from '@/Streams'
import { StackActions, TabActions } from '@react-navigation/native'
/**
 * Used to navigating without the navigation prop
 * @see https://reactnavigation.org/docs/navigating-without-navigation-prop/
 *
 * You can add other navigation functions that you need and export them
 */
import {
  CommonActions,
  createNavigationContainerRef,
} from '@react-navigation/native'

export type RootStackParamList = {
  Startup: undefined
  Onboarding: undefined
  Main: undefined
  Home: undefined
  'Tab-Home': undefined
  'Tab-Inbox': undefined
  'Tab-News': undefined
  'Tab-Help': undefined
  'Tab-Profile': undefined
  Storybook: undefined
  Login: undefined
  ChangePassNewUser1: undefined
  ChangePassNewUser2: undefined
  ForgotPassword1: undefined
  ForgotPassword2: undefined
  ForgotPassword3: undefined
  InboxDetail: { inboxId: number }
  Baltab: undefined
  BaltabAbout: undefined
  HelpAboutMyAccount: undefined
  HelpAboutMyAccountDetail: { content: string; title: string }
  HelpAppProblem: undefined
  HelpAppProblemDetail: { content: string; title: string }
  HelpContactCenter: undefined
  HelpContactUs: undefined
  HelpTicket: undefined
  AccountChangePassword: undefined
  AccountChangeProfile: undefined
  AccountAboutUs: undefined
  AccountTermsCondition: undefined
  AccountBookmark: undefined
  HomeAbout: undefined
  ETWP: undefined
  ETWPAbout: undefined
  EditDataPokok: undefined
} & StreamStackList

export type RootStackScreenName = keyof RootStackParamList

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export const navigationRef = createNavigationContainerRef<RootStackParamList>()

export function navigate(name: RootStackScreenName, params?: any) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params)
  }
}

export function navigateAndReset(routes = [], index = 0) {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(
      CommonActions.reset({
        index,
        routes,
      }),
    )
  }
}

export function navigateAndSimpleReset(name: RootStackScreenName, index = 0) {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(
      CommonActions.reset({
        index,
        routes: [{ name }],
      }),
    )
  }
}

export function navigateAndReplace(
  name: RootStackScreenName,
  params?: Object | any,
) {
  navigationRef.current?.dispatch(StackActions.replace(name, params))
}

export function jumpTo(routeName: RootStackScreenName, params = {}) {
  const jumpAction = TabActions.jumpTo(routeName, params)

  navigationRef.current?.dispatch(jumpAction)
}

export function goBack() {
  navigationRef.current?.dispatch(CommonActions.goBack())
}

export function push(name: RootStackScreenName, params?: Object | any) {
  navigationRef.current?.dispatch(StackActions.push(name, params))
}
