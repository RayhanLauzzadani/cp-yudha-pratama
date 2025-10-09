import * as React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { cn } from "../../lib/utils";

export const Sheet = Dialog.Root;
export const SheetTrigger = Dialog.Trigger;
export const SheetClose = Dialog.Close;

const sideClasses = {
  right: "right-0 top-0 h-full w-72",
  left: "left-0 top-0 h-full w-72",
  top: "top-0 left-0 w-full h-72",
  bottom: "bottom-0 left-0 w-full h-72",
};

export const SheetContent = React.forwardRef(
  ({ className, children, side = "right", ...props }, ref) => (
    <Dialog.Portal>
      {/* Overlay di atas navbar (navbar z-50) */}
      <Dialog.Overlay className="fixed inset-0 z-[70] bg-[#A20000]/10 backdrop-blur-[2px]" />
      <Dialog.Content
        ref={ref}
        className={cn(
          "fixed z-[80] bg-white shadow-lg p-6 outline-none",
          sideClasses[side] ?? sideClasses.right,
          className
        )}
        {...props}
      >
        {children}

        {/* Tombol Close (aksesibel) */}
        <Dialog.Close
          className="absolute right-3 top-3 inline-flex h-8 w-8 items-center justify-center rounded-md hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A20000]/30"
          aria-label="Tutup"
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 6l12 12M6 18L18 6" />
          </svg>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  )
);
SheetContent.displayName = "SheetContent";

export const SheetHeader = ({ className, ...props }) => (
  <div className={cn("flex flex-col space-y-2 text-center sm:text-left", className)} {...props} />
);
SheetHeader.displayName = "SheetHeader";

export const SheetTitle = React.forwardRef(({ className, ...props }, ref) => (
  <Dialog.Title ref={ref} className={cn("text-lg font-semibold text-gray-900", className)} {...props} />
));
SheetTitle.displayName = "SheetTitle";
