'use client'

import { Plus, Search, User } from 'lucide-react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import type React from 'react'
import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'

const navigation = [
	{ name: 'Home', href: '/' },
	{ name: 'Explore', href: '/explore' },
	{ name: 'Categories', href: '/categories' },
	{ name: 'How It Works', href: '/how-it-works' },
]

export function Header() {
	const [searchQuery, setSearchQuery] = useState('')
	const [hasScrolled, setHasScrolled] = useState(false)
	const router = useRouter()
	const pathname = usePathname()

	// Handle scroll shadow effect
	useEffect(() => {
		const handleScroll = () => {
			setHasScrolled(window.scrollY > 0)
		}

		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	// Handle search submission
	const handleSearch = (e: React.FormEvent) => {
		e.preventDefault()
		if (searchQuery.trim()) {
			router.push(`/explore?q=${encodeURIComponent(searchQuery.trim())}`)
		}
	}

	return (
		<header
			className={cn(
				'sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-shadow duration-200',
				hasScrolled && 'shadow-sm',
			)}
		>
			<div className="container mx-auto px-4">
				<div className="flex h-16 items-center justify-between">
					{/* Logo */}
					<div className="flex items-center">
						<Link href="/" className="flex items-center space-x-2">
							<span className="text-xl font-bold text-foreground">FundFlow</span>
						</Link>
					</div>

					{/* Desktop Navigation */}
					<nav className="hidden md:flex items-center space-x-8">
						{navigation.map((item) => (
							<Link
								key={item.name}
								href={item.href}
								className={cn(
									'text-sm font-medium transition-colors hover:text-primary',
									pathname === item.href ? 'text-primary' : 'text-muted-foreground',
								)}
							>
								{item.name}
							</Link>
						))}
					</nav>

					{/* Search Bar */}
					<div className="hidden md:flex flex-1 max-w-sm mx-8">
						<form onSubmit={handleSearch} className="relative w-full">
							<Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
							<Input
								type="search"
								placeholder="Search campaigns..."
								value={searchQuery}
								onChange={(e) => setSearchQuery(e.target.value)}
								className="pl-10 pr-4"
							/>
						</form>
					</div>

					{/* Right Actions */}
					<div className="flex items-center space-x-4">
						{/* Start Campaign Button */}
						<Button asChild variant="outline" className="hidden sm:flex bg-transparent">
							<Link href="/create" className="flex items-center space-x-2">
								<Plus className="h-4 w-4" />
								<span>Start Campaign</span>
							</Link>
						</Button>

						{/* Wallet Connect Placeholder */}
						{/* <Button variant="outline" size="sm" className="hidden md:flex bg-transparent">
              Connect Wallet
            </Button> */}

						{/* Account/Profile */}
						<Button variant="ghost" size="sm" asChild>
							<Link href="/dashboard">
								<User className="h-4 w-4" />
								<span className="sr-only">Account</span>
							</Link>
						</Button>
					</div>
				</div>

				{/* Mobile Search Bar */}
				<div className="md:hidden pb-4">
					<form onSubmit={handleSearch} className="relative">
						<Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
						<Input
							type="search"
							placeholder="Search campaigns..."
							value={searchQuery}
							onChange={(e) => setSearchQuery(e.target.value)}
							className="pl-10 pr-4"
						/>
					</form>
				</div>
			</div>
		</header>
	)
}
