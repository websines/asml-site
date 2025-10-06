import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  kickerClassName?: string;
  headingClassName?: string;
  children: ReactNode;
};

export function Section({
  id,
  eyebrow,
  title,
  description,
  align = "left",
  className,
  kickerClassName,
  headingClassName,
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "w-full",
        className,
      )}
    >
      <div
        className={cn(
          "container-xl flex flex-col gap-10 lg:gap-14",
          align === "center" && "items-center text-center",
        )}
      >
        <div className={cn("max-w-3xl space-y-4", align === "center" && "mx-auto")}>
          {eyebrow ? (
            <p
              className={cn(
                "text-xs font-semibold uppercase tracking-[0.32em] text-primary",
                kickerClassName,
              )}
            >
              {eyebrow}
            </p>
          ) : null}
          <h2
            className={cn(
              "text-3xl font-semibold leading-tight text-foreground sm:text-4xl lg:text-[44px] lg:leading-[1.1]",
              headingClassName,
            )}
          >
            {title}
          </h2>
          {description ? (
            <p className="text-base leading-relaxed text-muted sm:text-lg">{description}</p>
          ) : null}
        </div>
        {children}
      </div>
    </section>
  );
}
