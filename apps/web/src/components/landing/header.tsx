'use client'

import { Menu, Plus, Search, User, X } from 'lucide-react'
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
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
	const router = useRouter()
	const pathname = usePathname()

	useEffect(() => {
		const handleScroll = () => {
			setHasScrolled(window.scrollY > 0)
		}

		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

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
					<div className="flex items-center">
						<Link href="/" className="flex items-center space-x-2">
							<span className="text-xl font-bold text-foreground">FundFlow</span>
						</Link>
					</div>

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

					<div className="flex items-center space-x-4">
						<Button asChild variant="outline" className="hidden sm:flex bg-transparent">
							<Link href="/create" className="flex items-center space-x-2">
								<Plus className="h-4 w-4" />
								<span>Start Campaign</span>
							</Link>
						</Button>

						<Button variant="ghost" size="sm" asChild className="hidden sm:flex">
							<Link href="/dashboard">
								<User className="h-4 w-4" />
								<span className="sr-only">Account</span>
							</Link>
						</Button>

						<Button
							variant="ghost"
							size="sm"
							className="md:hidden"
							onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
						>
							{isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
							<span className="sr-only">Toggle menu</span>
						</Button>
					</div>
				</div>

				{isMobileMenuOpen && (
					<div className="md:hidden border-t bg-background">
						<nav className="px-4 py-4 space-y-3">
							{navigation.map((item) => (
								<Link
									key={item.name}
									href={item.href}
									className={cn(
										'block text-sm font-medium transition-colors hover:text-primary py-2',
										pathname === item.href ? 'text-primary' : 'text-muted-foreground',
									)}
									onClick={() => setIsMobileMenuOpen(false)}
								>
									{item.name}
								</Link>
							))}

							<div className="pt-4 space-y-3 border-t">
								<Button asChild variant="outline" className="w-full justify-start bg-transparent">
									<Link
										href="/create"
										className="flex items-center space-x-2"
										onClick={() => setIsMobileMenuOpen(false)}
									>
										<Plus className="h-4 w-4" />
										<span>Start Campaign</span>
									</Link>
								</Button>

								<Button variant="ghost" asChild className="w-full justify-start">
									<Link
										href="/dashboard"
										className="flex items-center space-x-2"
										onClick={() => setIsMobileMenuOpen(false)}
									>
										<User className="h-4 w-4" />
										<span>Account</span>
									</Link>
								</Button>
							</div>
						</nav>
					</div>
				)}

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
