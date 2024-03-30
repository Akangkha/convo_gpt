import React from "react";
import { cn } from "../lib/utils";

export const Card = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-lg  text-black  text-sm p-3 m-4 font-semibold  bg: linear-gradient(71deg, #080509, #1a171c, #080509)",
      className
    )}
    {...props}
    suppressHydrationWarning
  />
));
