import classNames from "classnames";
import * as cls from "./Button.module.scss";
import { ButtonHTMLAttributes, ReactNode } from "react";

export enum ButtonTheme {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
  disabled?: boolean;
  children?: ReactNode;
}

export const Button = (props: ButtonProps) => {
  const {
    className,
    theme = ButtonTheme.PRIMARY,
    disabled,
    children,
    ...otherProps
  } = props;

  return (
    <button
      className={classNames(cls.button, {}, [className, cls[theme]])}
      type="button"
      disabled={disabled}
      {...otherProps}
    >
      {children}
    </button>
  );
};
