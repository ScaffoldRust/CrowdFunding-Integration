'use client'

import { useState } from 'react'

interface Step {
	id: string
	title: string
	subtitle: string
}

interface ProgressTrackerProps {
	steps: Step[]
	initialStepIndex?: number
	onStepChange?: (stepIndex: number, stepId: string) => void
}

export default function ProgressTracker({
	steps,
	initialStepIndex = 0,
	onStepChange,
}: ProgressTrackerProps) {
	const [currentStepIndex, setCurrentStepIndex] = useState(initialStepIndex)
	const totalSteps = steps.length
	const progressPercentage = Math.round(((currentStepIndex + 1) / totalSteps) * 100)

	const handleStepClick = (stepIndex: number) => {
		setCurrentStepIndex(stepIndex)
		onStepChange?.(stepIndex, steps[stepIndex].id)
	}

	return (
		<div className="w-full max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
			{/* Header with step indicator and percentage */}
			<div className="flex items-center justify-between mb-4">
				<h2 className="text-lg font-medium text-gray-900">
					Step {currentStepIndex + 1} of {totalSteps}
				</h2>
				<span className="text-sm text-gray-500">{progressPercentage}% Complete</span>
			</div>

			{/* Progress bar */}
			<div className="w-full bg-gray-200 rounded-full h-2 mb-6">
				<div
					className="bg-green-600 h-2 rounded-full transition-all duration-300 ease-out"
					style={{ width: `${progressPercentage}%` }}
				/>
			</div>

			{/* Step navigation tabs */}
			<div className="flex flex-wrap gap-3 justify-start">
				{steps.map((step, index) => {
					const isActive = index === currentStepIndex

					return (
						<button
							key={step.id}
							type="button"
							onClick={() => handleStepClick(index)}
							className={`
                flex flex-col items-start px-4 py-3 rounded-lg text-left transition-all duration-200
                ${
									isActive
										? 'bg-green-600 text-white'
										: 'bg-gray-100 text-gray-700 hover:bg-gray-150'
								}
                cursor-pointer flex-shrink-0 min-w-[120px] max-w-[160px] flex-grow
              `}
						>
							<span className={`font-medium text-sm ${isActive ? 'text-white' : 'text-gray-900'}`}>
								{step.title}
							</span>
							<span className={`text-xs mt-1 ${isActive ? 'text-green-100' : 'text-gray-500'}`}>
								{step.subtitle}
							</span>
						</button>
					)
				})}
			</div>
		</div>
	)
}
