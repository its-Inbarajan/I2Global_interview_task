import { cn } from "@/utils/helper";
import React from "react";

function Button({
  className,
  children,
  ...props
}: React.ComponentProps<"button">) {
  return (
    <button
      className={cn("w-full bg-black rounded-md text-white", className)}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
