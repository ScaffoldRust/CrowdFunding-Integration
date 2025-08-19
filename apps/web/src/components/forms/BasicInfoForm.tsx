import { zodResolver } from '@hookform/resolvers/zod'
import { Loader2 } from 'lucide-react'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'

// Validation schema
const basicInfoSchema = z.object({
	title: z
		.string()
		.min(1, 'Project title is required')
		.max(60, 'Keep your title under 60 characters for better visibility'),
	shortDescription: z
		.string()
		.min(1, 'Short description is required')
		.min(10, 'Description should be at least 10 characters')
		.max(200, 'Description should be under 200 characters'),
	category: z.string().min(1, 'Please select a category'),
	location: z.string().min(1, 'Location is required'),
})

type BasicInfoFormData = z.infer<typeof basicInfoSchema>

interface Category {
	label: string
	value: string
}

interface BasicInfoFormProps {
	categories: Category[]
	defaultValues?: Partial<BasicInfoFormData>
	onSubmit: (values: BasicInfoFormData) => void
	onDirtyChange?: (isDirty: boolean) => void
}

export default function BasicInfoForm({
	categories,
	defaultValues = {
		title: '',
		shortDescription: '',
		category: '',
		location: '',
	},
	onSubmit,
	onDirtyChange,
}: BasicInfoFormProps) {
	const [isSubmitting, setIsSubmitting] = React.useState(false)

	const form = useForm<BasicInfoFormData>({
		resolver: zodResolver(basicInfoSchema),
		defaultValues,
		mode: 'onChange',
	})

	const {
		formState: { isDirty, isValid },
	} = form

	useEffect(() => {
		onDirtyChange?.(isDirty)
	}, [isDirty, onDirtyChange])

	const handleSubmit = async (values: BasicInfoFormData) => {
		setIsSubmitting(true)
		try {
			await onSubmit(values)
		} finally {
			setIsSubmitting(false)
		}
	}

	return (
		<div className="max-w-4xl mx-auto p-6">
			<div className="border rounded-2xl p-14 bg-[#FBFCF9] border-[#DDDFD8] shadow-sm">
				<div className="lg:col-span-2">
					{/* Header */}
					<div className="space-y-2 mb-8">
						<h1 className="text-2xl font-bold text-[#0A0C04]">Basic Information</h1>
						<p className="text-[#54574B] text-[15.25px] leading-6">
							Let's start with the basics. Give your project a compelling title and description.
						</p>
					</div>

					<Form {...form}>
						<form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
							<FormField
								control={form.control}
								name="title"
								render={({ field }) => (
									<FormItem className="space-y-2">
										<FormLabel className="text-[13.67px] font-medium text-[#0A0C04]">
											Project Title <span className="text-red-500">*</span>
										</FormLabel>
										<FormControl>
											<Input
												placeholder="Enter your project title"
												{...field}
												className="h-9 border-[#F1F3EB] bg-[#F1F3EB4D] shadow-sm focus:ring-green-500 focus:border-green-500 text-[13.67px] text-[#0A0C04] placeholder-[#54574B]"
											/>
										</FormControl>
										<p className="text-[13.56px] text-[#54574B] leading-5">
											Choose a clear, compelling title that captures the essence of your project.
										</p>
										<FormMessage className="text-red-500 text-sm" />
									</FormItem>
								)}
							/>

							{/* Short Description */}
							<FormField
								control={form.control}
								name="shortDescription"
								render={({ field }) => (
									<FormItem className="space-y-2">
										<FormLabel className="text-[13.67px] font-medium text-[#0A0C04]">
											Short Description <span className="text-red-500">*</span>
										</FormLabel>
										<FormControl>
											<Textarea
												placeholder="Briefly describe your project in 1-2 sentences"
												className="min-h-[100px] resize-none border-[#F1F3EB] bg-[#F1F3EB4D] shadow-sm focus:ring-green-500 focus:border-green-500 text-[13.67px] text-[#0A0C04] placeholder-[#54574B] leading-5"
												{...field}
											/>
										</FormControl>
										<p className="text-[13.56px] text-[#54574B] leading-5">
											This will appear in search results and campaign previews. Keep it concise and
											engaging.
										</p>
										<FormMessage className="text-red-500 text-sm" />
									</FormItem>
								)}
							/>

							{/* Category and Location Row */}
							<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
								<FormField
									control={form.control}
									name="category"
									render={({ field }) => (
										<FormItem className="space-y-2">
											<FormLabel className="text-[13.56px] font-medium text-[#0A0C04]">
												Category <span className="text-red-500">*</span>
											</FormLabel>
											<Select onValueChange={field.onChange} value={field.value}>
												<FormControl>
													<SelectTrigger className="h-9 border-[#F1F3EB] bg-[#F1F3EB4D] shadow-sm focus:ring-green-500 focus:border-green-500 text-[13.56px]">
														<SelectValue
															placeholder="Select a category"
															className="text-[#54574B]"
														/>
													</SelectTrigger>
												</FormControl>
												<SelectContent className="bg-white border-[#F1F3EB] shadow-lg">
													{categories.map((category) => (
														<SelectItem
															key={category.value}
															value={category.value}
															className="text-[13.56px] text-[#0A0C04] hover:bg-[#F1F3EB] focus:bg-[#F1F3EB]"
														>
															{category.label}
														</SelectItem>
													))}
												</SelectContent>
											</Select>
											<FormMessage className="text-red-500 text-sm" />
										</FormItem>
									)}
								/>

								{/* Location */}
								<FormField
									control={form.control}
									name="location"
									render={({ field }) => (
										<FormItem className="space-y-2">
											<FormLabel className="text-[13.56px] font-medium text-[#0A0C04]">
												Location <span className="text-red-500">*</span>
											</FormLabel>
											<FormControl>
												<Input
													placeholder="City, Country"
													{...field}
													className="h-9 border-[#F1F3EB] bg-[#F1F3EB4D] shadow-sm focus:ring-green-500 focus:border-green-500 text-[13.45px] text-[#0A0C04] placeholder-[#54574B]"
												/>
											</FormControl>
											<FormMessage className="text-red-500 text-sm" />
										</FormItem>
									)}
								/>
							</div>

							<div className="bg-[#F1F3EB4D] border border-[#F1F3EB] rounded-[14px] p-4">
								<h3 className="text-[15.5px] font-semibold text-[#0A0C04] mb-2 leading-6">
									Tips for Success
								</h3>
								<ul className="space-y-1">
									<li className="text-[13.45px] text-[#54574B] leading-5">
										• Use keywords that your target audience would search for
									</li>
									<li className="text-[13.45px] text-[#54574B] leading-5">
										• Keep your title under 60 characters for better visibility
									</li>
									<li className="text-[13.45px] text-[#54574B] leading-5">
										• Choose the most relevant category to reach the right backers
									</li>
									<li className="text-[13.45px] text-[#54574B] leading-5">
										• Be specific about your location to build local community support
									</li>
								</ul>
							</div>

							<div className="flex justify-between items-center pt-8 mt-8 border-t border-gray-200">
								<Button type="button" variant="ghost" className="text-gray-600 hover:text-gray-900">
									← Previous
								</Button>
								<Button
									type="submit"
									disabled={!isValid || isSubmitting}
									className="px-8 bg-green-600 hover:bg-green-700 text-white"
								>
									{isSubmitting ? (
										<>
											<Loader2 className="mr-2 h-4 w-4 animate-spin" />
											Submitting...
										</>
									) : (
										'Save & Continue →'
									)}
								</Button>
							</div>
						</form>
					</Form>
				</div>
			</div>
		</div>
	)
}
