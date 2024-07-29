import { configureStore } from "@reduxjs/toolkit";
import { StateSchema } from "./StateSchema";
import { loginReducer } from "features/loginForm";
import { notificationReducer } from "features/notification";

export function createReduxStore(initialState?: StateSchema) {
  return configureStore<StateSchema>({
    reducer: {
      loginForm: loginReducer,
      notification: notificationReducer,
    },
    preloadedState: initialState,
  });
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
