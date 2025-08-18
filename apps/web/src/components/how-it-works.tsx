'use client'

import { ArrowRight, Heart, Lightbulb, Users } from 'lucide-react'
import type React from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

interface Step {
	id: string
	number: string
	icon: React.ComponentType<{ className?: string }>
	title: string
	description: string
}

const steps: Step[] = [
	{
		id: '01',
		number: '01',
		icon: Lightbulb,
		title: 'Create Your Vision',
		description:
			'Set up your social impact project with compelling content, clear goals, and meaningful rewards for your supporters',
	},
	{
		id: '02',
		number: '02',
		icon: Users,
		title: 'Build Your Community',
		description:
			'Share your mission and engage with supporters who believe in creating positive change in the world',
	},
	{
		id: '03',
		number: '03',
		icon: Heart,
		title: 'Make Impact Real',
		description:
			'Receive secure funding through blockchain technology and deliver measurable social impact to your community',
	},
]

export function HowItWorks() {
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
			<div className="relative z-10 max-w-7xl mx-auto px-8 md:px-12 lg:px-16">
				{/* Header Section */}
				<div className="text-center mb-16">
					<Badge
						variant="secondary"
						className="mb-6 bg-white/20 text-white border-white/30 backdrop-blur-sm hover:bg-white/25 transition-colors px-4 py-2"
					>
						✨ Simple Process
					</Badge>

					<h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight px-4">
						How Social Impact Happens
					</h2>

					<p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed px-6">
						Three simple steps to create meaningful change in the world through community-powered
						funding
					</p>
				</div>

				{/* Steps Section */}
				<div className="relative">
					{/* Desktop Layout */}
					<div className="hidden md:block">
						<div className="grid grid-cols-3 gap-8 lg:gap-12 mb-20">
							{steps.map((step, index) => (
								<div key={step.id} className="relative">
									<div className="absolute -top-2 -right-4 z-10">
										<div className="bg-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg">
											<span className="text-gray-800 font-semibold text-sm">{step.number}</span>
										</div>
									</div>

									{/* Step Content */}
									<div className="text-center pt-6 px-4">
										{/* Icon */}
										<div className="bg-white/20 backdrop-blur-sm rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-6 border border-white/30 shadow-lg">
											<step.icon className="w-8 h-8 text-white" />
										</div>

										{/* Content */}
										<h3 className="text-xl font-semibold text-white mb-4 px-2">{step.title}</h3>
										<p className="text-white/80 text-sm leading-relaxed max-w-xs mx-auto px-2">
											{step.description}
										</p>
									</div>
								</div>
							))}
						</div>
					</div>

					{/* Mobile Layout */}
					<div className="md:hidden space-y-8 mb-20">
						{steps.map((step, index) => (
							<div key={step.id} className="relative px-4">
								{/* Step Content */}
								<div className="flex items-start gap-4">
									<div className="bg-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 shadow-lg">
										<span className="text-gray-800 font-semibold text-sm">{step.number}</span>
									</div>

									<div className="flex-1">
										{/* Icon */}
										<div className="bg-white/20 backdrop-blur-sm rounded-xl w-12 h-12 flex items-center justify-center mb-3 border border-white/30 shadow-lg">
											<step.icon className="w-6 h-6 text-white" />
										</div>

										{/* Content */}
										<h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
										<p className="text-white/80 text-sm leading-relaxed">{step.description}</p>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>

				{/* CTA Button */}
				<div className="text-center">
					<Button
						size="lg"
						className="bg-white hover:bg-gray-50 text-gray-900 border-0 shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-3 text-base font-medium"
					>
						Learn More About Our Process
						<ArrowRight className="ml-2 w-4 h-4" />
					</Button>
				</div>
			</div>
		</section>
	)
}
