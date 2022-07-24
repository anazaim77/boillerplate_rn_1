import React, { createContext, useCallback, useMemo } from 'react'
import { useWindowDimensions } from 'react-native'
import {
  TabView as RNTabView,
  SceneMap,
  TabBar,
  SceneRendererProps,
  NavigationState,
  Route,
} from 'react-native-tab-view'
import WTView from '../Native/WTView'
import Typography from '../Atoms/Typography'
import { tw } from '@/Utils'

interface Props {
  data: {
    title: string
    component: React.ComponentType<unknown>
  }[]
}

interface TabViewPropsContext {
  setIndex: (id: number) => void
}

export const TabViewContext = createContext<TabViewPropsContext | null>(null)

const TabView: React.FC<Props> = ({ data }) => {
  const layout = useWindowDimensions()

  const [index, setIndex] = React.useState(0)

  const [routes, renderScene] = React.useMemo(() => {
    const route = data.map((item, i) => ({
      key: i.toString(),
      title: item.title,
    }))

    let scene: Record<string, React.ComponentType<unknown>> = {}
    data.forEach(({ component }, i) => {
      scene[i.toString()] = component
    })
    return [route, SceneMap(scene)]
  }, [data])

  const renderTabBar = useCallback(
    (
      props: SceneRendererProps & {
        navigationState: NavigationState<Route>
      },
    ) => (
      <WTView style={'bg-white border-b-2 border-b-neutral-200'}>
        <TabBar
          {...props}
          // scrollEnabled
          indicatorStyle={tw`bg-primary-600 h-[2px]`}
          style={tw`bg-white `}
          // tabStyle={tw`w-auto`}
          renderLabel={({ route, focused }) => (
            <Typography
              weight="bold"
              size="sm"
              style={tw`text-${focused ? 'primary-600' : 'neutral-400'}`}
              containerStyle={tw`px-0`}
            >
              {route.title}
            </Typography>
          )}
        />
      </WTView>
    ),
    [],
  )

  const TabViewContextValue: TabViewPropsContext = useMemo(
    () => ({
      setIndex,
    }),
    [setIndex],
  )

  return (
    <TabViewContext.Provider value={TabViewContextValue}>
      <RNTabView
        lazy
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        renderTabBar={renderTabBar}
        initialLayout={{ width: layout.width }}
      />
    </TabViewContext.Provider>
  )
}

TabView.defaultProps = {}

export default TabView
