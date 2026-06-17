import { type HTMLAttributes } from "react";

export interface BadgeProps extends HTMLAttributes<HTMLDivElement> {
	className?: string;
	props?: HTMLAttributes<HTMLDivElement>;
}

function Badge({ className, ...props }: BadgeProps) {
  return (
		<div
			className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 bg-secondary text-secondary-foreground ${className}`}
			{...props}
		/>
	)
}

export { Badge };
