import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'app-store/store';

interface IUiState {
  isHide: boolean;
}

const initialState: IUiState = {
  isHide: false,
};

const header = createSlice({
  name: 'header',
  initialState,
  reducers: {
    showHeader(state) {
      state.isHide = false;
    },
    hideHeader(state) {
      state.isHide = true;
    },
    toggleHeader(state) {
      state.isHide = !state.isHide;
    },
  },
});

export default header.reducer;

export const { hideHeader, showHeader, toggleHeader } = header.actions;

export const selectHeaderState = (state: RootState) => state.header.isHide;
