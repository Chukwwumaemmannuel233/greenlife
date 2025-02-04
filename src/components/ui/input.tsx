import * as React from "react";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  inputSize?: "small" | "medium" | "large"; // Renamed size prop to avoid conflict
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, inputSize = "medium", ...props }, ref) => {
  // Define width based on inputSize prop
  const sizeClasses = {
    small: "w-40",   // Small input
    medium: "w-80",  // Default size
    large: "w-full", // Full width
  };

  return (
    <input
      ref={ref}
      className={`border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${sizeClasses[inputSize]} ${className}`}
      {...props}
    />
  );
});

Input.displayName = "Input";

export { Input };
