import { Card } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'

export function HowItWorksSkeleton() {
	return (
		<section className="relative py-20 px-4 overflow-hidden">
			{/* Gradient Background */}
			<div
				className="absolute inset-0 bg-gradient-to-br from-[#176700] via-[#7F9965] to-[#63B376]"
				style={{
					background: 'linear-gradient(135deg, #176700 0%, #7F9965 50%, #63B376 100%)',
				}}
			/>

			{/* Content Container */}
			<div className="relative z-10 max-w-7xl mx-auto">
				{/* Header Section */}
				<div className="text-center mb-16">
					<div className="mb-6 flex justify-center">
						<Skeleton className="h-6 w-32 bg-white/20" />
					</div>

					<Skeleton className="h-12 md:h-16 w-full max-w-2xl mx-auto mb-6 bg-white/20" />

					<div className="space-y-2">
						<Skeleton className="h-5 w-full max-w-xl mx-auto bg-white/20" />
						<Skeleton className="h-5 w-full max-w-lg mx-auto bg-white/20" />
					</div>
				</div>

				{/* Steps Section */}
				<div className="relative">
					{/* Desktop Layout */}
					<div className="hidden md:block">
						<div className="grid grid-cols-3 gap-8 lg:gap-12 mb-12">
							{[1, 2, 3].map((index) => (
								<div key={index} className="relative">
									{/* Step Number Badge */}
									<div className="flex justify-center mb-6">
										<Skeleton className="w-12 h-12 rounded-full bg-white/20" />
									</div>

									{/* Step Card */}
									<Card className="bg-white/10 backdrop-blur-md border-white/20 p-6 text-center">
										{/* Icon */}
										<div className="flex justify-center mb-4">
											<Skeleton className="w-16 h-16 rounded-2xl bg-white/20" />
										</div>

										{/* Content */}
										<Skeleton className="h-6 w-3/4 mx-auto mb-3 bg-white/20" />
										<div className="space-y-2">
											<Skeleton className="h-4 w-full bg-white/20" />
											<Skeleton className="h-4 w-5/6 mx-auto bg-white/20" />
											<Skeleton className="h-4 w-4/5 mx-auto bg-white/20" />
										</div>
									</Card>
								</div>
							))}
						</div>
					</div>

					{/* Mobile Layout */}
					<div className="md:hidden space-y-8 mb-12">
						{[1, 2, 3].map((index) => (
							<div key={index} className="relative">
								<Card className="bg-white/10 backdrop-blur-md border-white/20 p-6">
									<div className="flex items-start gap-4">
										{/* Step Number */}
										<Skeleton className="w-10 h-10 rounded-full bg-white/20 flex-shrink-0" />

										<div className="flex-1">
											{/* Icon */}
											<Skeleton className="w-12 h-12 rounded-xl mb-3 bg-white/20" />

											{/* Content */}
											<Skeleton className="h-5 w-3/4 mb-2 bg-white/20" />
											<div className="space-y-2">
												<Skeleton className="h-4 w-full bg-white/20" />
												<Skeleton className="h-4 w-5/6 bg-white/20" />
												<Skeleton className="h-4 w-4/5 bg-white/20" />
											</div>
										</div>
									</div>
								</Card>
							</div>
						))}
					</div>
				</div>

				{/* CTA Button */}
				<div className="text-center">
					<Skeleton className="h-12 w-64 mx-auto bg-white/20 rounded-md" />
				</div>
			</div>
		</section>
	)
}
