import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CITIES, NameSpace, SortName } from '../../constants';
import { CityNames, SortNames } from '../../types';

type AppProcess = {
  activeCity: CityNames;
  activeSort: SortNames;
  error: string | null;
};

const initialState: AppProcess = {
  activeCity: CITIES[0],
  activeSort: SortName.Popular,
  error: null,
};

export const appProcess = createSlice({
  name: NameSpace.App,
  initialState,
  reducers: {
    changeActiveCity: (state, action: PayloadAction<CityNames>) => {
      state.activeCity = action.payload;
    },
    changeActiveSort: (state, action: PayloadAction<SortNames>) => {
      state.activeSort = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const { changeActiveCity, changeActiveSort, setError } =
  appProcess.actions;
