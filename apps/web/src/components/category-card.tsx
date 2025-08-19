'use client'

import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import type React from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { cn } from '@/lib/utils'

interface CategoryCardProps {
	icon: React.ReactElement
	iconBgClass: string
	title: string
	accentText: string
	description: string
	examplesLabel: string
	examples: string[]
	cta: {
		label: string
		href: string
	}
	className?: string
}

/**
 * Reusable category card component with icon, content, and CTA button.
 * Fully responsive with hover effects and accessible design patterns.
 */
export function CategoryCard({
	icon,
	iconBgClass,
	title,
	accentText,
	description,
	examplesLabel,
	examples,
	cta,
	className,
}: CategoryCardProps) {
	return (
		<Card
			className={cn(
				'w-full max-w-sm mx-auto transition-all duration-300 hover:shadow-lg hover:-translate-y-1 p-6 sm:p-8',
				className,
			)}
		>
			<CardHeader className="pb-4 px-0 pt-0">
				<div className="mb-6">
					<div
						className={cn(
							'w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm',
							iconBgClass,
						)}
					>
						{icon}
					</div>
				</div>

				<div className="space-y-2">
					<h2 className="text-xl sm:text-2xl font-bold text-foreground leading-tight ">{title}</h2>
					<p className="text-sm font-medium text-[#176700]">{accentText}</p>
				</div>
			</CardHeader>

			<CardContent className="px-0 pb-6">
				<p className="text-muted-foreground leading-relaxed mb-6 text-sm sm:text-base">
					{description}
				</p>

				<div className="space-y-3">
					<h3 className="text-sm font-semibold text-foreground">{examplesLabel}</h3>
					<div className="flex flex-wrap gap-2">
						{examples.map((example) => (
							<Badge
								key={example}
								variant="outline"
								className="px-3 py-1.5 text-xs font-medium rounded-full sm:text-sm sm:px-4 sm:py-2 transition-colors hover:bg-muted/50 border-muted-foreground/30 text-muted-foreground bg-transparent"
							>
								{example}
							</Badge>
						))}
					</div>
				</div>
			</CardContent>

			<CardFooter className="px-0 pb-0">
				<Button
					asChild
					className="w-full font-semibold bg-[#176700] hover:bg-[#176700]/90 text-white shadow-sm py-3 px-6 text-sm sm:text-base sm:py-4 transition-all duration-200 hover:shadow-md focus:ring-2 focus:ring-[#176700]/40 focus:ring-offset-2 active:scale-[0.98]"
				>
					<Link href={cta.href}>
						<span className="flex items-center justify-center gap-2">
							{cta.label}
							<ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
						</span>
					</Link>
				</Button>
			</CardFooter>
		</Card>
	)
}

export default CategoryCard
