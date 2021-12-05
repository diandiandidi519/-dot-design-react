import React from "react";

import classNames from "classnames";

export enum ButtonSize {
  Large = "lg",
  Small = "sm",
}

export enum ButtonType {
  Primary = "primary",
  Link = "link",
  Danger = "danger",
  Default = "default",
}

interface BaseButtonProps {
  className?: string;
  disabled?: boolean;
  size?: ButtonSize;
  btnType?: ButtonType;
  children: React.ReactNode;
  href?: string;
}

type NativeButtonProps = BaseButtonProps &
  React.ButtonHTMLAttributes<HTMLElement>;

type AnchorButtonProps = BaseButtonProps &
  React.AnchorHTMLAttributes<HTMLElement>;

export type ButtonProps = Partial<AnchorButtonProps & NativeButtonProps>;

const Button = (props: ButtonProps) => {
  const { disabled, size, btnType, children, href, className, ...rest } = props;
  const cls = classNames("btn", className, {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    disabled: btnType === ButtonType.Link && disabled,
  });
  if (ButtonType.Link === btnType && href) {
    return (
      <a className={cls} href={href} {...rest}>
        {children}
      </a>
    );
  }
  return (
    <button className={cls} disabled={disabled} {...rest}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  btnType: ButtonType.Default,
  disabled: false,
};

export default Button;
