import React, { FC, InputHTMLAttributes, ReactNode } from "react";
import classNames from "classnames";
import * as cls from "./Input.module.scss";

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "value" | "onChange" | "readOnly"
>;

interface InputProps extends HTMLInputProps {
  className?: string;
  disabled?: boolean;
  label?: string;
  value?: string | number;
  error?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  ToggleIcon?: React.FC<React.SVGProps<SVGSVGElement>>;
}

export const Input = (props: InputProps) => {
  const {
    className,
    type = "text",
    label,
    value,
    disabled,
    onChange,
    ToggleIcon,
    error,
    ...otherProps
  } = props;

  return (
    <div className={classNames(cls.InputWrapper, [className])}>
      {label && <label className={cls.label}>{label}</label>}
      <div className={cls.inputContainer}>
        <input
          className={classNames(cls.input, {
            [cls.hasToggleIcon]: !!ToggleIcon,
          })}
          type={type}
          value={value}
          onChange={onChange}
          {...otherProps}
          disabled={disabled}
        />
        {ToggleIcon && (
          <span className={cls.passwordToggleIcon}>
            <ToggleIcon />
          </span>
        )}
        {/* {error && <span className={cls.error}>Required</span>} */}
      </div>
    </div>
  );
};
