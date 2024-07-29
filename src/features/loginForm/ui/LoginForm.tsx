import classNames from "classnames";
import cls from "./LoginForm.module.scss";

interface LoginFormProps {
  className?: string;
}

export const LoginForm = ({ className }: LoginFormProps) => {
  return <div className={classNames(cls.LoginForm, [className])}></div>;
};
