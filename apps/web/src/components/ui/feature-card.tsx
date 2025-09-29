'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'

export interface FeatureCardProps {
	icon: React.ReactElement
	title: string
	description: string
	iconColor?: string
	className?: string
}

/**
 * FeatureCard - A reusable card component for displaying platform features
 * 
 * Displays an icon, title, and description in a clean, centered layout.
 * Perfect for feature grids and platform highlights.
 */
export function FeatureCard({
	icon,
	title,
	description,
	iconColor = 'text-gray-600',
	className,
}: FeatureCardProps) {
	return (
		<div
			className={cn(
				'flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg border border-gray-100 hover:shadow-sm transition-shadow duration-200',
				className
			)}
		>
			{/* Icon */}
			<div className="mb-4">
				{React.cloneElement(icon, {
					className: cn('w-6 h-6', iconColor),
				})}
			</div>

			{/* Title */}
			<h3 className="text-lg font-bold text-gray-900 mb-2">
				{title}
			</h3>

			{/* Description */}
			<p className="text-sm text-gray-600 leading-relaxed">
				{description}
			</p>
		</div>
	)
}