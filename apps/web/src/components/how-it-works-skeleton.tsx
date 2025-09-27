import { Skeleton } from '@/components/ui/skeleton'

export function HowItWorksSkeleton() {
	return (
		<section className="relative py-20 px-8 md:px-12 lg:px-16 overflow-hidden">
			<div
				className="absolute inset-0 bg-gradient-to-br from-[#176700] via-[#7F9965] to-[#63B376]"
				style={{
					background: 'linear-gradient(135deg, #176700 0%, #7F9965 50%, #63B376 100%)',
				}}
			/>

			<div className="relative z-10 max-w-7xl mx-auto">
				{/* Header Section */}
				<div className="text-center mb-16">
					<div className="mb-6 flex justify-center">
						<Skeleton className="h-8 w-32 rounded-full bg-white/20 backdrop-blur-sm" />
					</div>

					<Skeleton className="h-12 md:h-16 w-full max-w-2xl mx-auto mb-6 bg-white/20" />

					<div className="space-y-2 px-6">
						<Skeleton className="h-5 w-full max-w-xl mx-auto bg-white/20" />
						<Skeleton className="h-5 w-full max-w-lg mx-auto bg-white/20" />
					</div>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-16">
					{[1, 2, 3].map((index) => (
						<div key={index} className="relative text-center px-4">
							<div className="absolute -top-2 -right-4 md:right-0">
								<Skeleton className="w-12 h-12 rounded-full bg-white shadow-lg" />
							</div>

							<div className="flex justify-center mb-6">
								<Skeleton className="w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-sm shadow-lg" />
							</div>

							<div className="space-y-4">
								<Skeleton className="h-7 w-3/4 mx-auto bg-white/30" />
								<div className="space-y-2 px-2">
									<Skeleton className="h-4 w-full bg-white/25" />
									<Skeleton className="h-4 w-5/6 mx-auto bg-white/25" />
									<Skeleton className="h-4 w-4/5 mx-auto bg-white/25" />
								</div>
							</div>
						</div>
					))}
				</div>

				<div className="text-center mt-16">
					<Skeleton className="h-12 w-64 mx-auto bg-white rounded-full shadow-md" />
				</div>
			</div>
		</section>
	)
}
