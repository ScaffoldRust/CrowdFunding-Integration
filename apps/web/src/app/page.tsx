'use client'

import BasicInfoForm from '@/components/forms/BasicInfoForm'

export default function Home() {
	const categories = [
		{ label: 'Social Impact', value: 'social-impact' },
		{ label: 'Technology', value: 'technology' },
		{ label: 'Art', value: 'art' },
		{ label: 'Music', value: 'music' },
		{ label: 'Film', value: 'film' },
	]

	interface FormValues {
		title: string
		shortDescription: string
		category: string
		location: string
	}

	const handleSubmit = (values: FormValues): void => {
		console.log('Form submitted:', values)
		alert('Form submitted! Check the console for values.')
	}

	type DirtyChangeHandler = (isDirty: boolean) => void

	const handleDirtyChange: DirtyChangeHandler = (isDirty) => {
		console.log('Form dirty state:', isDirty)
	}

	return (
		<BasicInfoForm
			categories={categories}
			onSubmit={handleSubmit}
			onDirtyChange={handleDirtyChange}
		/>
	)
}
