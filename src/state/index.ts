import {configureStore} from '@reduxjs/toolkit';
import {save, load} from 'redux-localstorage-simple';
import transactions from './transactions/reducer';
import application from './application/reducer';
import {eventApi} from '../services/event';

const PERSISTED_KEYS: string[] = ['transactions'];

export const store = configureStore({
  reducer: {
    application,
    transactions,
    [eventApi.reducerPath]: eventApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(eventApi.middleware),
  
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


