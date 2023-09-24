import { RootState } from "../..";
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectParams = (state: RootState) => state.params;
