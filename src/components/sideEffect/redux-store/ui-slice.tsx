import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export type notificationType = {
  status: string;
  title: string;
  message: string;
  openNotification: boolean;
};
interface uiInterface {
  showCard: boolean;
  notification: notificationType;
}
type closeN = Pick<notificationType, "openNotification">;

const initialState = {
  showCard: false,
  notification: { status: "", title: "", message: "", openNotification: false },
};
const uiSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    toggleCard(state) {
      state.showCard = !state.showCard;
    },
    showNotifiction(state, action: PayloadAction<notificationType>) {
      state.notification.status = action.payload.status;
      state.notification.title = action.payload.title;
      state.notification.message = action.payload.message;
      state.notification.openNotification = action.payload.openNotification;
    },
    closeNotifiction(state, action: PayloadAction<closeN>) {
      state.notification.openNotification = false;
    },
  },
});

export const uiAction = uiSlice.actions;
export const uiReducer = uiSlice.reducer;
