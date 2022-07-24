import { WTSafeAreaView } from '@/Components'
import colors from '@/Config/colors'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React, { Fragment, useCallback, useRef, useState } from 'react'
import { Platform, StatusBar, StatusBarStyle, ViewStyle } from 'react-native'
import MainNavigator from './Main'
import StackNames from './StackNames'
import { navigationRef, RootStackScreenName } from './utils'

const RootStack = createStackNavigator()

const greenHeaders: RootStackScreenName[] = [
  'Tab-Home',
  'Tab-Help',
  'Tab-Profile',
  'Tab-News',
  'Baltab',
  'ForgotPassword1',
  'ForgotPassword2',
  'ForgotPassword3',
  'ChangePassNewUser1',
  'ChangePassNewUser2',
  'ETWP',
]

const ApplicationNavigator = () => {
  const routeNameRef = useRef('')
  const [topSafeAreaViewStyle, setTopSafeAreaViewStyle] = useState<
    string | ViewStyle
  >('bg-neutral-100')

  const onStateChange = useCallback(() => {
    const previousRouteName = routeNameRef.current
    const currentRouteName = navigationRef?.current?.getCurrentRoute()?.name
    if (previousRouteName !== currentRouteName) {
      let bgColor = colors.neutral[100]
      let barStyle: StatusBarStyle = 'dark-content'

      if (
        greenHeaders.includes((currentRouteName as RootStackScreenName) ?? '')
      ) {
        barStyle = 'light-content'
        bgColor = colors.primary[55]
        StatusBar.setHidden(false)
      }
      StatusBar.setBarStyle(barStyle)
      if (Platform.OS === 'android') {
        StatusBar.setBackgroundColor(bgColor)
      }
      setTopSafeAreaViewStyle({ backgroundColor: bgColor })
    }

    routeNameRef.current = currentRouteName ?? ''
  }, [routeNameRef])

  return (
    <Fragment>
      <WTSafeAreaView style={topSafeAreaViewStyle} />
      <WTSafeAreaView style={'fill'}>
        <NavigationContainer ref={navigationRef} onStateChange={onStateChange}>
          <StatusBar />
          {/* <Button onPress={() => navigate('Storybook')}>goto story book</Button> */}
          <RootStack.Navigator screenOptions={{ headerShown: false }}>
            <RootStack.Screen
              name={StackNames.Main}
              component={MainNavigator}
              options={{
                animationEnabled: false,
              }}
            />
          </RootStack.Navigator>
        </NavigationContainer>
      </WTSafeAreaView>
    </Fragment>
  )
}

export default ApplicationNavigator
