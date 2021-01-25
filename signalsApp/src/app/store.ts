import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import header from 'redux-root/headerSlice';
import sessions from 'redux-root/sessionsSlice';

export const store = configureStore({
  reducer: {
    header,
    sessions,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
