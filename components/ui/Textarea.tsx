import { TextareaHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium text-text-primary mb-2">
            {label}
          </label>
        )}
        <textarea
          className={cn(
            "w-full px-4 py-3 rounded-lg border border-border bg-surface text-text-primary",
            "placeholder:text-text-secondary",
            "focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent",
            "disabled:opacity-50 disabled:cursor-not-allowed",
            "transition-all duration-200 resize-y min-h-[120px]",
            error && "border-error focus:ring-error",
            className
          )}
          ref={ref}
          {...props}
        />
        {error && (
          <p className="mt-1 text-sm text-error">{error}</p>
        )}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";

export default Textarea;
