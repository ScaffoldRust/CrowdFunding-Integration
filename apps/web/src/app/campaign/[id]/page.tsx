export default function CampaignPage({ params }: { params: { id: string } }) {
	return (
		<div className="min-h-screen bg-gray-50 py-12">
			<div className="container mx-auto px-4">
				<div className="max-w-4xl mx-auto">
					<h1 className="text-3xl font-bold text-gray-900 mb-4">Campaign Details</h1>
					<p className="text-lg text-gray-600">
						This is the detailed view for campaign: <strong>{params.id}</strong>
					</p>
					<div className="mt-8 p-6 bg-white rounded-lg shadow-md">
						<h2 className="text-xl font-semibold mb-4">Campaign Information</h2>
						<p className="text-gray-600">
							This page would contain the full campaign details, including:
						</p>
						<ul className="mt-4 space-y-2 text-gray-600">
							<li>• Complete project description</li>
							<li>• Funding progress details</li>
							<li>• Backer information</li>
							<li>• Project updates</li>
							<li>• Contribution options</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	)
}
