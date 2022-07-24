import AsyncStorage from '@react-native-community/async-storage'
import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist'
import createTransform from 'redux-persist/es/createTransform'
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2'
import { PersistConfig } from 'redux-persist/es/types'
import { authReducer } from './Auth'
import { AuthState } from './Auth/reducer'
import { useDispatch } from 'react-redux'

export type RootState = {
  auth: AuthState
}

export type Selector<S> = (state: RootState) => S

// includes all reducer modules
const reducers = combineReducers({
  auth: authReducer,
})

const whitelistTransform = createTransform((inboundState: any, key) => {
  if (key === 'auth') {
    return {
      user: inboundState.user,
    }
  } else if (key === 'user') {
    return {
      user: inboundState.user,
    }
  }
  return inboundState
})

// put the reducer state in whitelist to persist
const persistConfig: PersistConfig<any> = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['auth', 'shared'],
  transforms: [whitelistTransform],
  stateReconciler: autoMergeLevel2,
}

const persistedReducer = persistReducer(persistConfig, reducers)

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => {
    const middlewares = getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        warnAfter: 128,
      },
      immutableCheck: { warnAfter: 128 },
    })

    if (__DEV__) {
      const createDebugger = require('redux-flipper').default
      middlewares.push(createDebugger())
    }

    return middlewares
  },
})

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()

const persistor = persistStore(store)
export { store, persistor }
