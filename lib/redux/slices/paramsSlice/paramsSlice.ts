/* Core */
import { ParamsQuery } from '@/typings';
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

const initialState: ParamsSliceState = {
    loading: false,
    error: null,
    data: null,
}


export const paramsSlice = createSlice({
    name: 'params',
    initialState,
    reducers: {
        fetchDataSuccess(state, action: Required<PayloadAction<ParamsAction | null>>) {
            state.loading = action.payload!.loading;
            state.data = action.payload!.data;
            state.error = action.payload!.error;
        },
    }
});


export const { fetchDataSuccess } = paramsSlice.actions;
export default paramsSlice.reducer;
/* Types */
export interface ParamsSliceState {
    loading: boolean
    error: any
    data: ParamsQuery | null
}
export interface ParamsAction {
    data: ParamsQuery
    error:  any
    loading: boolean
}
