import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from 'app-store/store';
import { endpointGetListSessions, SessionType } from 'services';

export type CurrentListType = 'futureSessions' | 'pastSessions';
export type CurrentViewListType = 'module' | 'list';

interface IState {
  currentList: CurrentListType;
  currentViewType: CurrentViewListType;
  list: SessionType[];
  pending: boolean;
  error: string;
}

const initialState: IState = {
  currentList: 'futureSessions',
  currentViewType: 'list',
  list: [],
  pending: false,
  error: '',
};

const sessionsSlice = createSlice({
  name: 'sessions',
  initialState,
  reducers: {
    toggleSessionList(state, { payload }: PayloadAction<CurrentListType>) {
      state.currentList = payload;
    },
    toggleViewType(state, { payload }: PayloadAction<CurrentViewListType>) {
      state.currentViewType = payload;
    },
    listStartLoad(state) {
      state.pending = true;
      state.error = '';
    },
    listLoadSuccess(state, { payload }: PayloadAction<SessionType[]>) {
      state.pending = false;
      state.list = payload;
    },
    listErrorLoad(state, { payload }: PayloadAction<string>) {
      state.pending = false;
      state.error = payload;
    },
  },
});

export default sessionsSlice.reducer;

export const {
  toggleSessionList,
  toggleViewType,
  listStartLoad,
  listLoadSuccess,
  listErrorLoad,
} = sessionsSlice.actions;

export const getSessionList = (): AppThunk => async dispatch => {
  try {
    dispatch(listStartLoad());
    const list = await endpointGetListSessions();
    setTimeout(() => {
      dispatch(listLoadSuccess(list));
    }, 2000);
  } catch (err) {
    dispatch(listErrorLoad('Error load')); // TODO Не забыть про обработчик ошибок
  }
};

export const selectCurrentList = (state: RootState) => state.sessions.currentList;
export const selectCurrentViewType = (state: RootState) => state.sessions.currentViewType;
export const selectSessionList = ({ sessions }: RootState) => ({
  list: sessions.list,
  pending: sessions.pending,
  error: sessions.error,
}); // TODO Добавить мемоизацию
