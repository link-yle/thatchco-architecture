import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { mapApi } from '../__fake-api__/map-api';
import type { AppThunk } from '../store';
import type { Map } from '../types/map';

interface MapState {
  maps: null | Map[]
}

const initialState: MapState = {
  maps: null
};

const slice = createSlice({
  name: 'map',
  initialState,
  reducers: {
    getMaps(state: MapState, action: PayloadAction<Map[]>): void {
      state.maps = action.payload;
    },
  }
});

export const { reducer } = slice;

export const getMaps = (): AppThunk => async (dispatch): Promise<void> => {
  const data = await mapApi.getMaps();

  dispatch(slice.actions.getMaps(data));
};
