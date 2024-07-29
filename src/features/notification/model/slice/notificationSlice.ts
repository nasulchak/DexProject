import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { NotificationSchema } from "../types/notificationSchema";

const initialState: NotificationSchema = {
    message: '',
    type: 'info',
    visible: false,
};

const notificationSlice = createSlice({
    name: 'notification',
    initialState,
    reducers: {
        showNotification: (state, action: PayloadAction<{ message: string; type: 'success' | 'error' | 'info' }>) => {
            state.message = action.payload.message;
            state.type = action.payload.type;
            state.visible = true;
        },
        hideNotification: (state) => {
            state.visible = false;
        },
    },
});

export const { actions: notificationActions } = notificationSlice;
export const { reducer: notificationReducer } = notificationSlice;