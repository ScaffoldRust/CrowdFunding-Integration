'use client'

import BasicInfoForm from '@/components/forms/BasicInfoForm'
import { Footer } from '@/components/landing/footer'
import { Header } from '@/components/landing/header'

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
    <main>
    <Header />
		<BasicInfoForm
			categories={categories}
			onSubmit={handleSubmit}
			onDirtyChange={handleDirtyChange}
		/>
    <Footer />
    </main>
}
