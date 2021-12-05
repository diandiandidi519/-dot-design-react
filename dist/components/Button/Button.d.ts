import React, { FC } from "react";
export declare enum ButtonSize {
    Large = "lg",
    Small = "sm"
}
export declare enum ButtonType {
    Primary = "primary",
    Link = "link",
    Danger = "danger",
    Default = "default"
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
declare type NativeButtonProps = BaseButtonProps & React.ButtonHTMLAttributes<HTMLElement>;
declare type AnchorButtonProps = BaseButtonProps & React.AnchorHTMLAttributes<HTMLElement>;
export declare type ButtonProps = Partial<AnchorButtonProps & NativeButtonProps>;
/**
 * Button component description
 */
declare const Button: FC<ButtonProps>;
export default Button;
