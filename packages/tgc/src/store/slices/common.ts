import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../store';

interface CommonState {
    lastSearches: Array<string>;
}

const initialState: CommonState = {
    lastSearches: [],
};

export const commonSlice = createSlice({
    name: 'common',
    initialState,
    reducers: {
        setLastSearches: (state, action: PayloadAction<Array<string>>) => {
            state.lastSearches = action.payload;
        },
    },
});

export const {
    setLastSearches,
} = commonSlice.actions;

const getRootCommon = (state: RootState) => state.common;
export const getLastSearches = createSelector(
    getRootCommon,
    (common) => common.lastSearches,
);

export default commonSlice.reducer;
