'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'

export interface StatCardProps {
	icon: React.ReactElement
	value: string
	label: string
	iconBgColor?: string
	iconColor?: string
	className?: string
}

/**
 * StatCard - A compact, reusable stat card component
 * 
 * Displays an icon, primary value, and descriptive label in a clean layout.
 * Perfect for displaying key metrics, statistics, and KPIs.
 */
export function StatCard({
	icon,
	value,
	label,
	iconBgColor = 'bg-gray-50',
	iconColor = 'text-gray-600',
	className,
}: StatCardProps) {
	return (
		<div
			className={cn(
				'flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200',
				className
			)}
		>
			{/* Icon Container */}
			<div
				className={cn(
					'w-16 h-16 rounded-2xl flex items-center justify-center mb-4 shadow-sm',
					iconBgColor
				)}
			>
				<div className={cn('w-6 h-6', iconColor)}>
					{React.cloneElement(icon, {
						className: cn('w-6 h-6', iconColor),
					})}
				</div>
			</div>

			{/* Primary Value */}
			<div className="mb-2">
				<span className="text-3xl font-bold text-gray-900 tracking-tight">
					{value}
				</span>
			</div>

			{/* Label */}
			<div>
				<span className="text-sm font-medium text-gray-600 leading-relaxed">
					{label}
				</span>
			</div>
		</div>
	)
}