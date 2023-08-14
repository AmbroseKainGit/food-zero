/* Core */
import { configureStore } from '@reduxjs/toolkit'
/* Instruments */
import { reducer } from './reducers/rootReducer'
import { middleware } from './middleware'

export const reduxStore = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(middleware)
  },
});

export type RootState = ReturnType<typeof reduxStore.getState>;
export type AppDispatch = typeof reduxStore.dispatch;
