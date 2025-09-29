import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

const Hero = () => {
	return (
		<div className="w-full bg-gradient-to-br from-[#176700] via-[#7F9965] to-[#63B376] flex flex-col gap-6 items-center py-[88px] px-[244px]">
			<div className="bg-[#FFFFFF33] border-[1px] border-[#FFFFFF4D] py-[9px] px-[25px] text-[13.67px] text-[#FFFFFF] font-medium rounded-[8px] w-fit">
				✨ Powered by Blockchain Technology
			</div>
			<div className="text-[72px] text-[#FFFFFF] font-bold text-center leading-[90px] tracking-[-1.8px]">
				Fund the Future with Social Impact
			</div>
			<div className="text-[#FFFFFFE5] text-[21.38px] text-center w-[768px] leading-[39px]">
				Launch your innovative project or support groundbreaking ideas that create positive change.
				Transparent, secure, and community-driven funding for tomorrow&apos;s changemakers.
			</div>
			<div className="flex items-center gap-6">
				<Link href="/explore">
					<button
						type="button"
						className="flex items-center gap-2 py-2 px-4 bg-[#FFFFFF] cursor-pointer text-[17.44px] text-[#176700] font-semibold rounded-[14px]"
					>
						Explore Impact Projects <ArrowRight size={16} />
					</button>
				</Link>
				<Link href="/create">
					<button
						type="button"
						className="bg-[#F1F3EB4D] border-2 border-[#F1F3EB] cursor-pointer py-2 px-4 rounded-[14px] text-[17.44px] text-[#FFFFFF] font-semibold"
					>
						Create Your Campaign
					</button>
				</Link>
			</div>
		</div>
	)
}
export default Hero
