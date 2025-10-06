import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactElement, ReactNode } from "react";
import { cloneElement, isValidElement } from "react";
import { cn } from "@/lib/utils";

type BaseProps = {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  icon?: ReactNode;
  className?: string;
  asChild?: boolean;
};

type ButtonAsButton = BaseProps & ButtonHTMLAttributes<HTMLButtonElement> & { asChild?: false };
type ButtonAsChild = BaseProps & AnchorHTMLAttributes<HTMLAnchorElement> & { asChild: true };

export type ButtonProps = ButtonAsButton | ButtonAsChild;

const VARIANT_STYLES: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary:
    "bg-primary text-primary-foreground hover:bg-primary-soft hover:shadow-[0_18px_40px_rgba(249,115,22,0.28)] focus-visible:outline-primary",
  secondary:
    "bg-secondary/15 text-secondary hover:bg-secondary/25 hover:shadow-[0_18px_40px_rgba(34,211,238,0.2)] focus-visible:outline-secondary",
  ghost:
    "bg-transparent text-foreground/80 hover:text-foreground focus-visible:outline-foreground",
  outline:
    "border border-border/60 bg-transparent text-foreground hover:border-foreground/60 hover:bg-surface/40 focus-visible:outline-foreground",
};

const SIZE_STYLES: Record<NonNullable<ButtonProps["size"]>, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-sm",
  lg: "h-12 px-7 text-base",
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  icon,
  asChild,
  ...rest
}: ButtonProps) {
  const sharedClasses = cn(
    "inline-flex items-center gap-2 rounded-full font-semibold tracking-tight transition-all duration-200 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 hover:-translate-y-[1px] active:translate-y-0",
    VARIANT_STYLES[variant],
    SIZE_STYLES[size],
    className,
  );

  if (asChild && isValidElement(children)) {
    const child = children as ReactElement<Record<string, unknown>>;
    const childClassName = (child.props as { className?: string }).className;
    const childProps = rest as AnchorHTMLAttributes<HTMLAnchorElement>;

    return cloneElement(child, {
      ...childProps,
      className: cn(sharedClasses, childClassName),
      children: (
        <>
          {icon}
          {child.props.children as ReactNode}
        </>
      ),
    });
  }

  const buttonProps = rest as ButtonHTMLAttributes<HTMLButtonElement>;

  return (
    <button className={sharedClasses} {...buttonProps}>
      {icon}
      {children}
    </button>
  );
}
