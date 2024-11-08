import {cn} from "@/lib/utils";
import React, {forwardRef, HTMLAttributes} from "react";

const MaxWidthWrapper = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({className, ...props}, ref) => (
  <div
    ref={ref}
    className={cn(className, "mx-auto max-w-[1440px] px-4 md:px-8 w-full")}
    {...props}
  />
));

MaxWidthWrapper.displayName = "MaxWidthWrapper";

export default MaxWidthWrapper;
