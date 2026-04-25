import * as React from "react";
import { cn } from "@/utils";

type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[100px] w-full rounded-xl border border-[#acb4bd] bg-white px-3 py-2 text-base text-[#212429] placeholder:text-[#636e7c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#003d5c] focus-visible:border-transparent disabled:cursor-not-allowed disabled:opacity-50 resize-none transition-colors",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea };
