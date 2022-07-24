import { Icon } from '@/Assets'
import { IconName } from '@/Assets/Icon/Icon'
import { Typography, WTTouchableOpacity } from '@/Components'
import colors from '@/Config/colors'
import {
  ChangePasswordNewUser,
  ChangePasswordNewUser2,
  ForgotPassword1Container,
  ForgotPassword2Container,
  ForgotPassword3Container,
  LoginContainer,
  OnboardingContainer,
  StartupContainer,
  StorybookContainer,
} from '@/Containers'
import type { HeaderBackButtonProps } from '@react-navigation/elements'
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack'
import React, { Fragment } from 'react'
import HomeTabNavigator from './HomeTabNavigator'
import { RootStackParamList } from './utils'

export const Stack = createStackNavigator<RootStackParamList>()

const options: StackNavigationOptions = {
  headerStyle: {
    backgroundColor: 'white',
    borderBottomWidth: 0,
    shadowOpacity: 0,
    elevation: 0,
  },
  headerTitleAlign: 'center',
  headerLeft: ({ canGoBack, onPress }) =>
    canGoBack ? (
      <WTTouchableOpacity style={'pl-3'} onPress={onPress}>
        <Icon name="arrow-back" size={24} />
      </WTTouchableOpacity>
    ) : null,
}

export const customOptions = ({
  title,
  ...props
}: {
  title: string
} & StackNavigationOptions) =>
  ({
    headerTitle: () => (
      <Typography weight="bold" color={'neutral-500'}>
        {title}
      </Typography>
    ),
    ...props,
  } as StackNavigationOptions)

export const customOptionsGreen = ({
  title,
  rightIcon,
  rightIconPress,
  ...props
}: {
  title: string
  rightIcon?: IconName
  rightIconPress?: () => void
} & StackNavigationOptions) => ({
  headerTitle: () => (
    <Typography weight="bold" color={'white'}>
      {title}
    </Typography>
  ),
  headerLeft: ({ canGoBack, onPress }: HeaderBackButtonProps) =>
    canGoBack ? (
      <WTTouchableOpacity style={'w-6 h-6 ml-4'} onPress={onPress}>
        <Icon name="arrow-back" fill="white" size={24} />
      </WTTouchableOpacity>
    ) : (
      <Fragment />
    ),
  headerRight: () => {
    if (!rightIcon) {
      return
    }
    return (
      <WTTouchableOpacity onPress={rightIconPress} style="w-6 h-6 mr-4">
        <Icon name={'question'} />
      </WTTouchableOpacity>
    )
  },
  headerStyle: {
    backgroundColor: colors.primary[55],
    borderBottomWidth: 0,
    shadowOpacity: 0,
    elevation: 0,
  },
  ...props,
})

// @refresh reset
const MainNavigator = () => {
  // const initialRouteName = useMemo<RootStackScreenName>(() => {
  //   return 'Startup'
  // }, [])

  return (
    <Stack.Navigator initialRouteName={'Startup'} screenOptions={options}>
      <Stack.Screen
        name={'Startup'}
        component={StartupContainer}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={'Onboarding'}
        component={OnboardingContainer}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={'Login'}
        component={LoginContainer}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={'ChangePassNewUser1'}
        component={ChangePasswordNewUser}
        options={customOptionsGreen({ title: 'Ganti Password' })}
      />
      <Stack.Screen
        name={'ChangePassNewUser2'}
        component={ChangePasswordNewUser2}
        options={customOptionsGreen({ title: 'Ganti Password' })}
      />
      <Stack.Screen
        name={'ForgotPassword1'}
        component={ForgotPassword1Container}
        options={customOptionsGreen({ title: 'Lupa Password' })}
      />
      <Stack.Screen
        name={'ForgotPassword2'}
        component={ForgotPassword2Container}
        options={customOptionsGreen({ title: 'Lupa Password' })}
      />
      <Stack.Screen
        name={'ForgotPassword3'}
        component={ForgotPassword3Container}
        options={customOptionsGreen({ title: 'Lupa Password' })}
      />

      <Stack.Screen
        name={'Home'}
        component={HomeTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen name={'Storybook'} component={StorybookContainer} />
    </Stack.Navigator>
  )
}

export default MainNavigator
