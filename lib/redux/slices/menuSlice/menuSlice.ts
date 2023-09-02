/* Core */
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

const initialState: MenuSliceState = {
    showMenu: false
}

export const menuSlice = createSlice({
  name: 'menu',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    changeVisibilityMenu: (state) => {
      state.showMenu = !state.showMenu;
    }
  },
});


export const { changeVisibilityMenu } = menuSlice.actions;
export default menuSlice.reducer;
/* Types */
export interface MenuSliceState {
  showMenu: boolean
}
