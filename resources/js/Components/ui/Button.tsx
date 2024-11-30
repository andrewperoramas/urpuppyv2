import { cn } from '@/utils/cn'
import { Link } from '@inertiajs/react'
import {cva} from 'class-variance-authority'
import React from 'react'

type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
    href: string
    variant?: 'primary' | 'secondary',
    size?: 'sm' | 'md' | 'lg'
    type?: 'button' | 'a'
}

const Button = ({ type = 'a', className, size = 'md', variant, ...props }: ButtonProps) => {
  return (
        <Link href={props.href} as={type} className={cn(buttonVariants({variant, size}), className )}>{props.children}</Link>
  )
}

export default Button

const buttonVariants = cva(
  // Base styles shared by all variants
  "py-2 px-4 rounded-md  justify-center inline-flex items-center border border-transparent px-4 py-2  tracking-tight transition duration-500 ease-in-out hover:opacity-75 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-white font-redhat hover:opacity-75 focus:bg-gray-700 active:bg-secondary",
        secondary:
          "bg-secondary text-white font-redhat hover:opacity-75 focus:bg-gray-700 active:bg-secondary",
      },
       size: {
           sm: "text-[0.7em] px-2 py-1 font-semibold",
           md: "text-[0.8em] px-3 py-2 font-semibold rounded-full",
           lg: "text-[0.9em] px-3 py-2 font-semibold",
       }
    },

    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

