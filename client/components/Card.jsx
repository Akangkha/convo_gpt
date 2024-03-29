import React from "react";
import { cn } from "../lib/utils";

export const Card = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-lg  bg-[#0000001a] text-black  text-sm p-3 m-4 font-semibold",
      className
    )}
    {...props}
    suppressHydrationWarning
  />
));
