import { CircleDot, Github, Twitter } from 'lucide-react'
import Link from 'next/link'

export function Footer() {
	return (
		<footer className="bg-background border-t border-border">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					{/* Brand Column */}
					<div className="space-y-4">
						<Link href="/" className="flex items-center space-x-2">
							<div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
								<span className="text-primary-foreground font-bold text-sm">F</span>
							</div>
							<span className="text-xl font-semibold text-foreground">FundFlow</span>
						</Link>
						<p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
							Empowering creators and innovators through decentralized crowdfunding on the
							blockchain.
						</p>
						<div className="flex space-x-4">
							<Link
								href="https://twitter.com"
								target="_blank"
								rel="noopener noreferrer"
								className="text-muted-foreground hover:text-foreground transition-colors"
								aria-label="Follow us on Twitter"
							>
								<Twitter className="w-5 h-5" />
							</Link>
							<Link
								href="https://lens.xyz"
								target="_blank"
								rel="noopener noreferrer"
								className="text-muted-foreground hover:text-foreground transition-colors"
								aria-label="Follow us on Lens Protocol"
							>
								<CircleDot className="w-5 h-5" />
							</Link>
							<Link
								href="https://github.com"
								target="_blank"
								rel="noopener noreferrer"
								className="text-muted-foreground hover:text-foreground transition-colors"
								aria-label="View our GitHub repository"
							>
								<Github className="w-5 h-5" />
							</Link>
						</div>
					</div>

					{/* Platform Column */}
					<div className="space-y-4">
						<h3 className="text-sm font-semibold text-foreground">Platform</h3>
						<nav className="space-y-3">
							<Link
								href="/explore"
								className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
							>
								Explore
							</Link>
							<Link
								href="/explore"
								className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
							>
								Campaigns
							</Link>
							<Link
								href="/categories"
								className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
							>
								Categories
							</Link>
							<Link
								href="/create"
								className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
							>
								Start Campaign
							</Link>
							<Link
								href="/dao"
								className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
							>
								DAO Governance
							</Link>
						</nav>
					</div>

					{/* Support Column */}
					<div className="space-y-4">
						<h3 className="text-sm font-semibold text-foreground">Support</h3>
						<nav className="space-y-3">
							<Link
								href="/how-it-works"
								className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
							>
								How It Works
							</Link>
							<Link
								href="/faq"
								className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
							>
								FAQ
							</Link>
							<Link
								href="/contact"
								className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
							>
								Contact Us
							</Link>
							<Link
								href="/help"
								className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
							>
								Help Center
							</Link>
						</nav>
					</div>

					{/* Company Column */}
					<div className="space-y-4">
						<h3 className="text-sm font-semibold text-foreground">Company</h3>
						<nav className="space-y-3">
							<Link
								href="/about"
								className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
							>
								About Us
							</Link>
							<Link
								href="/legal/terms"
								className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
							>
								Terms of Service
							</Link>
							<Link
								href="/legal/privacy"
								className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
							>
								Privacy Policy
							</Link>
							<Link
								href="/legal/cookies"
								className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
							>
								Cookie Policy
							</Link>
						</nav>
					</div>
				</div>

				{/* Copyright */}
				<div className="mt-12 pt-8 border-t border-border">
					<p className="text-center text-sm text-muted-foreground">
						© 2024 FundFlow. All rights reserved. Built on blockchain technology.
					</p>
				</div>
			</div>
		</footer>
	)
}
