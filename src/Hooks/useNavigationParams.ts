import { useRoute, RouteProp } from '@react-navigation/core'
import { RootStackParamList, RootStackScreenName } from '@/Navigators/utils'

export const useNavigationParams = (routeName: RootStackScreenName) => {
  const route = useRoute<RouteProp<RootStackParamList, typeof routeName>>()
  return route.params
}

export default useNavigationParams
