import { cn } from "@/lib/utils"

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-md backdrop-blur-md bg-slate-800/60", className)}
      {...props}
    />
  )
}

export { Skeleton }
