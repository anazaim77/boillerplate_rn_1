import React, { useCallback, useEffect, useRef, useState } from 'react'
import { WTView, WTImage, Typography, Button } from '@/Components'
import { ImgIllustration1, ImgIllustration2, ImgIllustration3 } from '@/Assets'
import { Dimensions, FlatList, ImageSourcePropType } from 'react-native'
import { navigateAndSimpleReset } from '@/Navigators/utils'
import { storage, storageKey } from '@/Utils/storage'

type OnboardingData = {
  image: ImageSourcePropType
  title: string
  content: string
}

const onboardingData: Array<OnboardingData> = [
  {
    image: ImgIllustration1,
    title: 'eTWP',
    content:
      'Sistem informasi yang memudahkan setiap prajurit untuk memonitor iuran wajib TWP setiap bulannya',
  },
  {
    image: ImgIllustration2,
    title: 'eKPR',
    content:
      'Kepemilikan perumahan pribadi yang murah, mudah dan layak bagi Prajurit serta PNS TNI AD dimanapun mereka berada dan bertugas.',
  },
  {
    image: ImgIllustration3,
    title: 'eBALTAB',
    content:
      'Memonitor secara online dan realtime tabungan yang akan diberikan kepada personel militer/PNS TNI AD karena dipisahkan/berhenti dari dinas aktif (pensiun, meninggal dunia, berhenti sebelum waktu pensiun dan alih tugas di luar organisasi TNI AD bagi PNS).',
  },
]

const OnboardingContainer = () => {
  const [pageIndex, setPageIndex] = useState<number>(0)
  const onboardingRef = useRef<FlatList>(null)

  const renderItem = useCallback(
    ({ item }: { item: OnboardingData; index: number }) => {
      return (
        <WTView
          style={`items-center justify-start fill w-[${
            Dimensions.get('screen').width
          }px] px-10 pt-10`}
        >
          <WTImage source={item.image} style={'w-60 h-60'} />
          <Typography
            size="xl"
            weight="bold"
            color="neutral-600"
            containerStyle={'pt-8'}
          >
            {item.title}
          </Typography>
          <Typography
            style="text-center"
            size="sm"
            color="neutral-600"
            containerStyle={'pt-4'}
          >
            {item.content}
          </Typography>
        </WTView>
      )
    },
    [],
  )

  const keyExtractor = useCallback((_, index) => `Onboarding_${index}`, [])

  const onMomentumScrollEnd = useCallback(event => {
    const index = Math.floor(
      Math.floor(event.nativeEvent.contentOffset.x) /
        Math.floor(event.nativeEvent.layoutMeasurement.width),
    )
    setPageIndex(index)
  }, [])

  const renderPagination = useCallback(
    (item, index) => {
      return (
        <WTView
          key={`PaginationKey_${index}`}
          style={`w-3 h-3 mx-1 border border-neutral-500 rounded-full ${
            pageIndex === index ? 'bg-neutral-500' : 'bg-white'
          } `}
        />
      )
    },
    [pageIndex],
  )

  const onPressSkip = useCallback(() => {
    if (pageIndex < 2) {
      setPageIndex(pageIndex + 1)
    } else {
      storage.set(storageKey.IS_FINISH_ONBOARDING, true)
      navigateAndSimpleReset('Login')
    }
  }, [pageIndex])

  useEffect(() => {
    onboardingRef.current?.scrollToIndex({ index: pageIndex })
  }, [onboardingRef, pageIndex])

  return (
    <WTView style="fill justify-center items-center bg-white pb-7">
      <Button
        onPress={onPressSkip}
        full={false}
        mode="ghost"
        containerStyle="self-end pt-2 pr-2"
      >
        Lewati
      </Button>
      <FlatList
        ref={onboardingRef}
        data={onboardingData}
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={onMomentumScrollEnd}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
      />
      <WTView style="flex-row">{onboardingData.map(renderPagination)}</WTView>
    </WTView>
  )
}

export default OnboardingContainer
