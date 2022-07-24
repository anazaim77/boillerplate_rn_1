import React, { useCallback } from 'react'
import {
  ImageBackground,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { BottomTabBarProps } from '@react-navigation/bottom-tabs'
import ScreenNames from './ScreenNames'
import { tw } from '@/Utils'
import { jumpTo, RootStackScreenName } from './utils'
import { Icon, ImgCircleGradient } from '@/Assets'
import { IconName } from '@/Assets/Icon/Icon'

const BottomTab = ({ state, navigation }: BottomTabBarProps) => {
  const getMenuProps = useCallback((routeName: string) => {
    const map: Record<
      string,
      { label: string; activeIcon: IconName; unactiveIcon: IconName }
    > = {
      [ScreenNames.Tab.Home]: {
        label: 'Home',
        activeIcon: 'home-fill',
        unactiveIcon: 'home-outline',
      },
      [ScreenNames.Tab.Profile]: {
        label: 'Akun',
        activeIcon: 'account-fill',
        unactiveIcon: 'account-outline',
      },
      [ScreenNames.Tab.Inbox]: {
        label: 'Inbox',
        activeIcon: 'inbox-fill',
        unactiveIcon: 'inbox-outline',
      },
      [ScreenNames.Tab.News]: {
        label: 'Berita',
        activeIcon: 'news-fill',
        unactiveIcon: 'news-outline',
      },
      [ScreenNames.Tab.Help]: {
        label: 'Bantuan',
        activeIcon: 'help-fill',
        unactiveIcon: 'help-outline',
      },
    }
    return map[routeName]
  }, [])

  return (
    <SafeAreaView style={tw.style('bg-neutral-100 shadow-lg rounded-t-4')}>
      <View
        style={tw.style('flex-row bg-neutral-100 items-center p-3 rounded-t-4')}
      >
        {state.routes.map((route, index: number) => {
          const props = getMenuProps(route.name)
          const isFocused = state.index === index

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            })

            if (!isFocused && !event.defaultPrevented) {
              jumpTo(route.name as RootStackScreenName)
            }
          }

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            })
          }

          return (
            <TouchableOpacity
              activeOpacity={0.8}
              key={`BottomTab_${index}`}
              onPress={onPress}
              onLongPress={onLongPress}
              style={tw.style('flex-1 items-center')}
            >
              {isFocused ? (
                <ImageBackground
                  source={ImgCircleGradient}
                  style={tw`items-center justify-center -mt-8 w-16 h-16`}
                >
                  <Icon name={props?.activeIcon} />
                </ImageBackground>
              ) : (
                <Icon name={props?.unactiveIcon} />
              )}

              <View style={tw`pt-2`}>
                <Text style={tw`text-primary-55 text-[11px] font-bold`}>
                  {props?.label}
                </Text>
              </View>
            </TouchableOpacity>
          )
        })}
      </View>
    </SafeAreaView>
  )
}

export default BottomTab
