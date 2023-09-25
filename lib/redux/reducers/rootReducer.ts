/* Instruments */
import { authSlice, menuSlice, paramsSlice } from '../slices'

export const reducer = {
  auth: authSlice.reducer,
  menu: menuSlice.reducer,
  params: paramsSlice.reducer,
}
