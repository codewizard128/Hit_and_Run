import React from "react";
import { Loader2 } from "lucide-react";

/**
 * Reusable Button Component
 * @param {node} children - Button content
 * @param {string} className - Additional CSS classes
 * @param {string} variant - 'primary' | 'secondary' | 'outline' | 'ghost'
 * @param {string} size - 'sm' | 'md' | 'lg'
 * @param {boolean} isLoading - Shows loading spinner
 * @param {boolean} disabled - Disables button
 * @param {string} href - URL to redirect to (renders as <a> tag if present)
 * @param {string} target - Target attribute for link (e.g., '_blank')
 * @param {string} type - 'button' | 'submit' | 'reset'
 */
const RedirectingButton = ({
  children,
  className = "",
  variant = "primary",
  size = "md",
  isLoading = false,
  disabled = false,
  href,
  type = "button",
  ...props
}) => {
  // Base styles: Layout, animation, and focus states
  const baseStyles = "inline-flex items-center justify-center rounded-xl font-bold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 disabled:opacity-50 disabled:pointer-events-none active:scale-95 cursor-pointer no-underline";

  // Variant styles: Colors and borders
  const variants = {
    primary: "bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white shadow-lg shadow-red-900/20",
    secondary: "bg-zinc-800 hover:bg-zinc-700 text-white border border-zinc-700",
    outline: "border-2 border-red-600 text-red-500 hover:bg-red-600 hover:text-white bg-transparent",
    ghost: "text-zinc-400 hover:text-white hover:bg-zinc-800",
  };

  // Size styles: Dimensions and text size
  const sizes = {
    sm: "h-9 px-4 text-sm",
    md: "h-11 px-6 text-base",
    lg: "h-14 px-8 text-lg",
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;
  const content = (
    <>
      {isLoading && <Loader2 className="mr-2 h-5 w-5 animate-spin" />}
      {children}
    </>
  );

  // If href is provided, render as an anchor tag
  if (href) {
    return (
      <a
        href={href}
        className={`${combinedClassName} ${disabled || isLoading ? "pointer-events-none opacity-50" : ""}`}
        {...props}
      >
        {content}
      </a>
    );
  }

  // Otherwise, render as a button
  return (
    <button
      type={type}
      className={combinedClassName}
      disabled={disabled || isLoading}
      {...props}
    >
      {content}
    </button>
  );
};

export default RedirectingButton;