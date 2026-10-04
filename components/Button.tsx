import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> & {
  text?: ReactNode;
  children?: ReactNode;
};

export default function Button({
  text,
  children,
  type = "button",
  className,
  ...buttonProps
}: ButtonProps) {
  return (
    <button className={className ? `button ${className}` : "button"} type={type} {...buttonProps}>
      {children}
      {text}
    </button>
  );
}
