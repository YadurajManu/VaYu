import { cn } from "@/lib/utils"

interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  className?: string
  containerClassName?: string
}

export function Section({
  children,
  className,
  containerClassName,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn("py-20 relative overflow-hidden", className)}
      {...props}
    >
      <div className={cn("container mx-auto px-4", containerClassName)}>
        {children}
      </div>
    </section>
  )
}

