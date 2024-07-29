import classNames from "classnames";
import * as cls from "./LoginForm.module.scss";
import { Input } from "shared/ui/Input";
import { Button } from "shared/ui/Button";
import { ButtonTheme } from "shared/ui/Button/Button";
import usePasswordToggle from "shared/lib/hooks/usePasswordToggle/usePasswrodToggle";
import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";
import { loginActions } from "../model/slice/loginSlice";
import { getLoginState } from "../model/selectors/loginFormSelector";
import { loginByUsername } from "../model/services/loginByUsername/loginByUsername";
import { AppDispatch } from "app/providers/StoreProvider";
import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";
import { Notification } from "shared/ui/Notification";
import { notificationActions } from "features/notification/model/slice/notificationSlice";

interface LoginFormProps {
  className?: string;
}

export const LoginForm = ({ className }: LoginFormProps) => {
  const [PasswordInputType, ToggleIcon] = usePasswordToggle();

  const dispatch = useDispatch<AppDispatch>();

  const notification = useSelector((state: StateSchema) => state.notification);

  const { login, password, isLoading } = useSelector(getLoginState)

  const onChangeUsername = useCallback((value: string) => {
    dispatch(loginActions.setUsername(value))
  }, [dispatch])

  const onChangePassword = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value))
  }, [dispatch])

  const onLoginClick = useCallback(() => {
    dispatch(loginByUsername({login, password}))
  }, [dispatch, login, password])

  console.log(notification)
  return (
    <div className={classNames(cls.LoginForm, [className])}>
      <div style={{ padding: "20px" }}>
        <Input
          type="text"
          label="Login"
          onChange={onChangeUsername}
          value={login}
          disabled={isLoading}
        />
        <Input
          type={PasswordInputType}
          label="Password"
          value={password}
          onChange={onChangePassword}
          ToggleIcon={ToggleIcon}
          disabled={isLoading}
        />
        <br />
        <Button 
          theme={ButtonTheme.PRIMARY}
          onClick={onLoginClick}
          disabled={isLoading}
        >
          Sign In
        </Button>
      </div>
      {notification.visible && (
                <Notification
                    message={notification.message}
                    type={notification.type}
                    onClose={() => dispatch(notificationActions.hideNotification())}
                />
            )}
    </div>
  )
};
