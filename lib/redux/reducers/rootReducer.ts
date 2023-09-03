/* Instruments */
import { authSlice, menuSlice } from '../slices'

export const reducer = {
  auth: authSlice.reducer,
  menu: menuSlice.reducer
}
