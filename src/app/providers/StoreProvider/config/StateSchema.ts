import { LoginSchema } from "features/loginForm";
import { NotificationSchema } from "features/notification";

export interface StateSchema {
    loginForm: LoginSchema;
    notification: NotificationSchema
}
