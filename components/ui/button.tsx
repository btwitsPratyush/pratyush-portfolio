import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
  size?: "default" | "sm" | "lg" | "icon"
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", asChild = false, children, ...props }, ref) => {
    const baseClasses =
      "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"

    const variants = {
      default: "bg-purple-600 text-white hover:bg-purple-700",
      destructive: "bg-red-600 text-white hover:bg-red-700",
      outline: "border border-gray-600 bg-transparent hover:bg-gray-800 text-white",
      secondary: "bg-gray-800 text-white hover:bg-gray-700",
      ghost: "hover:bg-gray-800 text-white",
      link: "text-purple-400 underline-offset-4 hover:underline",
    }

    const sizes = {
      default: "h-10 px-4 py-2",
      sm: "h-9 rounded-md px-3",
      lg: "h-11 rounded-md px-8",
      icon: "h-10 w-10",
    }

    const combinedClassName = cn(baseClasses, variants[variant], sizes[size], className)

    if (asChild) {
      return (
        <span className={combinedClassName} ref={ref as any}>
          {children}
        </span>
      )
    }

    return (
      <button className={combinedClassName} ref={ref} {...props}>
        {children}
      </button>
    )
  },
)
Button.displayName = "Button"

export { Button }
