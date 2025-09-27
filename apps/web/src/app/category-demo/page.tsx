import { Lightbulb, ShoppingCart, TrendingUp } from 'lucide-react'
import { CategoryCard } from '@/components/category-card'

/**
 * Demo page showcasing the CategoryCard component
 * Demonstrates the component with the exact content from the design specification
 */
export default function Home() {
	return (
		<main className="min-h-screen bg-background p-4 sm:p-8">
			<div className="container mx-auto max-w-6xl">
				<div className="text-center mb-12">
					<h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
						Category Card Component
					</h1>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
					<CategoryCard
						icon={<Lightbulb className="w-8 h-8" />}
						iconBgClass="bg-blue-500 text-white"
						title="Technology & Innovation"
						accentText="156 active projects"
						description="Cutting-edge tech solutions, AI projects, and innovative digital platforms."
						examplesLabel="Popular examples:"
						examples={['AI Solutions', 'Blockchain', 'IoT Devices']}
						cta={{
							label: 'Explore Projects',
							href: '/explore?category=technology',
						}}
					/>

					<CategoryCard
						icon={<TrendingUp className="w-8 h-8" />}
						iconBgClass="bg-green-500 text-white"
						title="Digital Marketing"
						accentText="89 active campaigns"
						description="Strategic marketing solutions, brand development, and digital advertising platforms."
						examplesLabel="Popular examples:"
						examples={['SEO Tools', 'Social Media', 'Analytics']}
						cta={{
							label: 'View Campaigns',
							href: '/explore?category=marketing',
						}}
					/>

					<CategoryCard
						icon={<ShoppingCart className="w-8 h-8" />}
						iconBgClass="bg-purple-500 text-white"
						title="E-commerce Solutions"
						accentText="234 online stores"
						description="Complete e-commerce platforms, payment integrations, and inventory management systems."
						examplesLabel="Popular examples:"
						examples={['Online Stores', 'Payment Systems', 'Inventory']}
						cta={{
							label: 'Browse Solutions',
							href: '/explore?category=ecommerce',
						}}
					/>
				</div>
			</div>
		</main>
	)
}
