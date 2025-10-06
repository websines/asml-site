import type { LinkProps } from "next/link";
import { cn } from "@/lib/utils";
import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactElement,
  ReactNode,
} from "react";
import { cloneElement, isValidElement } from "react";

type BaseProps = {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  icon?: ReactNode;
  className?: string;
};

type ButtonProps = BaseProps &
  (
    | ({ asChild?: false } & ButtonHTMLAttributes<HTMLButtonElement>)
    | ({ asChild?: true } & LinkProps & AnchorHTMLAttributes<HTMLAnchorElement>)
  );

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
  ...props
}: ButtonProps) {
  const shared = cn(
    "inline-flex items-center gap-2 rounded-full font-semibold tracking-tight transition-all duration-200 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 hover:-translate-y-[1px] active:translate-y-0",
    VARIANT_STYLES[variant],
    SIZE_STYLES[size],
    className,
  );

  if (asChild && isValidElement(children)) {
    const child = children as ReactElement;
    const childClassName = child.props.className as string | undefined;
    return cloneElement(child, {
      className: cn(shared, childClassName),
      children: (
        <>
          {icon}
          {child.props.children}
        </>
      ),
    });
  }

  return (
    <button className={shared} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {icon}
      {children}
    </button>
  );
}
