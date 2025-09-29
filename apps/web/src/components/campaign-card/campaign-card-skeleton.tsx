import { Skeleton } from '@/components/ui/skeleton'

export function CampaignCardSkeleton() {
	return (
		<div className="bg-white rounded-lg shadow-md overflow-hidden">
			{/* Cover Image Skeleton */}
			<div className="relative aspect-video">
				<Skeleton className="w-full h-full" />

				{/* Category Badge Skeleton */}
				<div className="absolute top-3 right-3">
					<Skeleton className="h-6 w-20 rounded-full" />
				</div>

				{/* Days Left Badge Skeleton */}
				<div className="absolute bottom-3 left-3">
					<Skeleton className="h-6 w-24 rounded-full" />
				</div>
			</div>

			{/* Content Section */}
			<div className="p-6 space-y-4">
				{/* Title Skeleton */}
				<div className="space-y-2">
					<Skeleton className="h-5 w-3/4" />
					<Skeleton className="h-5 w-1/2" />
				</div>

				{/* Description Skeleton */}
				<div className="space-y-2">
					<Skeleton className="h-4 w-full" />
					<Skeleton className="h-4 w-full" />
					<Skeleton className="h-4 w-2/3" />
				</div>

				{/* Highlight Skeleton */}
				<Skeleton className="h-6 w-32 rounded-full" />

				{/* Funding Stats Skeleton */}
				<div className="space-y-3">
					{/* Amount and Goal */}
					<div className="flex justify-between">
						<Skeleton className="h-6 w-20" />
						<Skeleton className="h-4 w-24" />
					</div>

					{/* Progress Bar */}
					<Skeleton className="h-2 w-full rounded-full" />

					{/* Percentage */}
					<Skeleton className="h-4 w-20" />
				</div>

				{/* Footer */}
				<div className="flex justify-between items-center pt-2">
					<Skeleton className="h-4 w-24" />
					<Skeleton className="h-4 w-24" />
				</div>
			</div>
		</div>
	)
}
