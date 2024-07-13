import { ComponentProps, ReactNode } from "react";
import { tv, VariantProps } from "tailwind-variants";

const ButtonVariants = tv({
  base: 'py-2 px-5 rounded-lg font-medium flex items-center justify-center gap-2',
  variants: {
    variant: {
      primary: 'bg-blue-300 text-blue-950 hover:bg-blue-400',
      secondary: 'bg-zinc-800 text-zinc-200 hover:bg-zinc-700',
    },
    size: {
      default: 'py-2',
      full: 'w-full h-11'
    }
  },
  defaultVariants: {
    variant: 'primary',
    size: 'default',
  }
})

interface ButtonProps extends ComponentProps<"button">, VariantProps<typeof ButtonVariants> {
  children: ReactNode
}

export function Button({children, variant, size, ...props}: ButtonProps) {
  return (
    <button {...props} className={ButtonVariants({variant, size})}>
      {children}
    </button>
  );
}
