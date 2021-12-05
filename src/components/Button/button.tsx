import React, { FC } from "react";

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
  /**
   * className
   */
  className?: string;
  /**
   * Boolean indicating whether the button should render as disabled
   */
  disabled?: boolean;
  /**
   * 大小
   */
  size?: ButtonSize;
  /**
   * 类型
   */
  btnType?: ButtonType;
  /**
   * 元素
   */
  children: React.ReactNode;
  /**
   * 链接
   */
  href?: string;
}

type NativeButtonProps = BaseButtonProps &
  React.ButtonHTMLAttributes<HTMLElement>;

type AnchorButtonProps = BaseButtonProps &
  React.AnchorHTMLAttributes<HTMLElement>;

export type ButtonProps = Partial<AnchorButtonProps & NativeButtonProps>;

/**
 * Button component description
 */
const Button: FC<ButtonProps> = (props) => {
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
export default Button;
