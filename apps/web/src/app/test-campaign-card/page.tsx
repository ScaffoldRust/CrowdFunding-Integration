'use client'

import { CampaignCard, CampaignCardSkeleton } from '@/components/campaign-card'

export default function TestCampaignCardPage() {
	// Sample data matching the design image
	const sampleCampaign = {
		id: 'sustainable-ocean-cleanup',
		category: 'Environment',
		categoryColor: 'green',
		daysLeft: 22,
		title: 'Sustainable Ocean Cleanup Device',
		description: 'Autonomous device to remove plastic waste from oceans and protect marine life',
		highlight: 'Cleans 1000kg plastic/day',
		amountRaised: 89000,
		goalAmount: 150000,
		backersCount: 256,
		coverImageUrl: '/placeholder-campaign.jpg', // Using placeholder for now
	}

	// Additional test cases
	const campaigns = [
		sampleCampaign,
		{
			id: 'test-2',
			category: 'Technology',
			categoryColor: 'blue',
			daysLeft: 15,
			title: 'Revolutionary Smart Home System',
			description: 'AI-powered home automation that learns your preferences and saves energy',
			highlight: 'Saves 40% on electricity bills',
			amountRaised: 75000,
			goalAmount: 100000,
			backersCount: 450,
			coverImageUrl: '/placeholder-campaign.jpg',
		},
		{
			id: 'test-3',
			category: 'Art',
			categoryColor: 'purple',
			daysLeft: 8,
			title: 'Community Art Gallery Project',
			description: 'Creating a space for local artists to showcase their work and connect with the community',
			amountRaised: 120000,
			goalAmount: 80000, // Over-funded example
			backersCount: 324,
			coverImageUrl: '/placeholder-campaign.jpg',
		}
	]

	const handleViewProject = (id: string) => {
		console.log('View project clicked:', id)
		alert(`Navigating to project: ${id}`)
	}

	return (
		<div className="min-h-screen bg-gray-50 py-8">
			<div className="container mx-auto px-4">
				<h1 className="text-3xl font-bold text-gray-900 mb-8">CampaignCard Component Test</h1>
				
				{/* Single card matching the design */}
				<section className="mb-12">
					<h2 className="text-xl font-semibold mb-4">Design Match - Ocean Cleanup Project</h2>
					<div className="max-w-sm">
						<CampaignCard
							{...sampleCampaign}
							onViewProject={handleViewProject}
						/>
					</div>
				</section>

				{/* Grid layout test */}
				<section className="mb-12">
					<h2 className="text-xl font-semibold mb-4">Responsive Grid Layout</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{campaigns.map((campaign) => (
							<CampaignCard
								key={campaign.id}
								{...campaign}
								onViewProject={handleViewProject}
							/>
						))}
					</div>
				</section>

				{/* Loading states */}
				<section className="mb-12">
					<h2 className="text-xl font-semibold mb-4">Loading States</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						<CampaignCardSkeleton />
						<CampaignCardSkeleton />
						<CampaignCardSkeleton />
					</div>
				</section>

				{/* Default navigation (no custom handler) */}
				<section className="mb-12">
					<h2 className="text-xl font-semibold mb-4">Default Navigation (Link to /campaign/[id])</h2>
					<div className="max-w-sm">
						<CampaignCard {...sampleCampaign} />
					</div>
				</section>
			</div>
		</div>
	)
}