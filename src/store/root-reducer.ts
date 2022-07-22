import { combineReducers } from '@reduxjs/toolkit';
import { reducer as mapReducer } from '../slices/map';

export const rootReducer = combineReducers({
  map: mapReducer,
});
