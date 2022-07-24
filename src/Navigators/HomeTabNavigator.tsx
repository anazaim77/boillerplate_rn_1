import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React, { useMemo } from 'react'

import { HomeContexts } from '@/Navigators/Contexts'
import { useRoute } from '@react-navigation/core'

import BottomTab from './BottomTab'
import ScreenNames from './ScreenNames'

const Tab = createBottomTabNavigator()

interface Props {}

const HomeTabNavigator: React.FC<Props> = ({}) => {
  const route = useRoute()
  const screenOptions = useMemo(
    () => ({
      tabBarShowLabel: false,
    }),
    [],
  )

  // const hiddenHeader = useMemo(() => ({ headerShown: false }), [])

  return (
    <HomeContexts.Provider value={route.params}>
      <Tab.Navigator
        screenOptions={screenOptions}
        initialRouteName={ScreenNames.Tab.Home}
        tabBar={props => <BottomTab {...props} />}
      >
        {/* <Tab.Screen
          name={ScreenNames.Tab.Inbox}
          // options={hiddenHeader}
          options={{ title: 'Inbox' }}
          component={InboxContainer}
        />
        <Tab.Screen
          name={ScreenNames.Tab.News}
          component={NewsContainer}
          options={
            customOptionsGreen({
              title: 'Berita',
              rightIcon: 'question',
              rightIconPress: () => navigate('NewsAbout'),
            }) as BottomTabNavigationOptions
          }
        />
        <Tab.Screen
          name={ScreenNames.Tab.Home}
          component={HomeContainer}
          options={hiddenHeader}
        />
        <Tab.Screen
          name={ScreenNames.Tab.Profile}
          component={AccountContainer}
          options={
            customOptionsGreen({
              title: 'Akun Saya',
            }) as BottomTabNavigationOptions
          }
        />
        <Tab.Screen
          name={ScreenNames.Tab.Help}
          component={HelpContainer}
          options={
            customOptionsGreen({
              title: 'Pusat Bantuan',
            }) as BottomTabNavigationOptions
          }
        /> */}
      </Tab.Navigator>
    </HomeContexts.Provider>
  )
}

export default HomeTabNavigator
