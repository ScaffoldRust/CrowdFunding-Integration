'use client'

import { Users } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { cn, formatCurrency, formatNumber } from '@/lib/utils'

export type CampaignCardProps = {
	id: string
	category: string
	categoryColor?: string
	daysLeft: number
	title: string
	description: string
	highlight?: string
	amountRaised: number
	goalAmount: number
	backersCount: number
	coverImageUrl: string
	onViewProject?: (id: string) => void
}

export function CampaignCard({
	id,
	category,
	categoryColor,
	daysLeft,
	title,
	description,
	highlight,
	amountRaised,
	goalAmount,
	backersCount,
	coverImageUrl,
	onViewProject,
}: CampaignCardProps) {
	const fundingPercentage = Math.min((amountRaised / goalAmount) * 100, 100)
	const _isFullyFunded = amountRaised >= goalAmount

	const handleClick = () => {
		if (onViewProject) {
			onViewProject(id)
		}
	}

	const _handleKeyDown = (event: React.KeyboardEvent) => {
		if (event.key === 'Enter' || event.key === ' ') {
			event.preventDefault()
			handleClick()
		}
	}

	const cardContent = (
		<>
			{/* Cover Image Section */}
			<div className="relative aspect-video overflow-hidden">
				<Image
					src={coverImageUrl || '/placeholder-campaign.jpg'}
					alt={title}
					fill
					className="object-cover group-hover:scale-105 transition-transform duration-300"
				/>

				{/* Category Badge */}
				<div className="absolute top-3 right-3">
					<Badge
						variant="secondary"
						className={cn(
							'bg-white/90 text-gray-900 backdrop-blur-sm',
							categoryColor && `bg-${categoryColor}/90`,
						)}
					>
						{category}
					</Badge>
				</div>

				{/* Days Left Badge */}
				<div className="absolute bottom-3 left-3">
					<Badge variant="default" className="bg-gray-900/80 text-white backdrop-blur-sm">
						{daysLeft} days left
					</Badge>
				</div>
			</div>

			{/* Content Section */}
			<div className="flex flex-col flex-1 p-6 space-y-4">
				{/* Title */}
				<h3 className="font-semibold text-lg text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors">
					{title}
				</h3>

				{/* Description */}
				<p className="text-gray-600 text-sm line-clamp-3 leading-relaxed">{description}</p>

				{/* Highlight Pill */}
				{highlight && (
					<div className="flex">
						<Badge variant="success" className="text-xs">
							{highlight}
						</Badge>
					</div>
				)}

				{/* Bottom Section - Funding Stats and Footer */}
				<div className="mt-auto space-y-4">
					{/* Funding Stats */}
					<div className="space-y-3">
						{/* Amount Raised and Goal */}
						<div className="flex justify-between items-baseline">
							<span className="text-lg font-bold text-gray-900">
								{formatCurrency(amountRaised)}
							</span>
							<span className="text-sm text-gray-500">of {formatCurrency(goalAmount)}</span>
						</div>

						{/* Progress Bar */}
						<Progress value={fundingPercentage} className="h-2" />

						{/* Percentage Funded */}
						<div className="flex justify-center">
							<span className={cn('text-sm font-extrabold', 'text-green-600 ')}>
								{Math.round(fundingPercentage)}% funded
							</span>
						</div>
					</div>

					{/* Footer */}
					<div className="flex justify-between items-center pt-4">
						<div className="flex items-center gap-2 text-gray-600">
							<Users size={18} className="text-gray-500" />
							<span className="text-base font-medium">{formatNumber(backersCount)} backers</span>
						</div>
						<span className="text-green-600 text-base font-semibold group-hover:underline flex items-center gap-1">
							View Project →
						</span>
					</div>
				</div>
			</div>
		</>
	)

	return (
		<div className="group cursor-pointer h-full">
			{onViewProject ? (
				<button
					type="button"
					onClick={handleClick}
					className="flex flex-col h-full bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden text-left"
				>
					{cardContent}
				</button>
			) : (
				<Link
					href={`/campaign/${id}`}
					className="flex flex-col h-full bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
				>
					{cardContent}
				</Link>
			)}
		</div>
	)
}
