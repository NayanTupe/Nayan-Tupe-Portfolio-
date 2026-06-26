import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "magnetic inline-flex h-12 items-center justify-center gap-2 rounded-full border px-5 text-sm font-bold transition-transform duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "border-white/40 bg-[linear-gradient(135deg,#fff,#00E5FF_45%,#7B5CFF)] text-black shadow-[0_18px_60px_rgba(0,229,255,.18)]",
        glass:
          "border-white/10 bg-white/[.055] text-white shadow-[inset_0_1px_0_rgba(255,255,255,.08)] backdrop-blur-xl",
        ghost: "border-transparent bg-transparent text-white hover:bg-white/[.06]",
      },
    },
    defaultVariants: {
      variant: "glass",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

function Button({ className, variant, asChild = false, ...props }: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return <Comp className={cn(buttonVariants({ variant, className }))} {...props} />;
}

export { Button, buttonVariants };
