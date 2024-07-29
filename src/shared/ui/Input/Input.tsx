import React, { ChangeEvent, FC, InputHTMLAttributes, ReactNode } from "react";
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
  onChange?: (value: string) => void;
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

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

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
          onChange={onChangeHandler}
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
