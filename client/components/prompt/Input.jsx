import React from "react";
import { cn } from "../../lib/utils";
import IosShareIcon from "@mui/icons-material/IosShare";
export const Input = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "w-[60vw] bg-accent-1 flex justify-between   h-12 rounded-lg p-2 text-black font-medium text-sm m-4 items-center ",
      className
    )}
    suppressHydrationWarning
  >
    <input
      className="w-[88%] h-full bg-transparent outline-none px-6 focus:ring-1 ring-transparent focus:ring-[black] rounded-lg "
      placeholder="Talk to ConvoGPT...."
      {...props}
    />
    <IosShareIcon />
    <img
      src="/icons/link.png"
      //   className="absolute right-4 top-3"
      alt="link button"
      width={20}
    />
    <img
      src="/icons/mic.png"
      //   className="absolute right-12 top-3"
      alt="microphone"
      width={20}
    />
  </div>
));
