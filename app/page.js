// app/dashboard/page.js
export default function DashboardPage() {
	return (
		<div className="space-y-6">
			<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
				{/* Stats Cards */}
				<div className="bg-blue-50 p-6 rounded-lg">
					<h3 className="text-lg font-semibold text-blue-800">
						Total Users
					</h3>
					<p className="text-3xl font-bold text-blue-600">1,234</p>
				</div>
				<div className="bg-green-50 p-6 rounded-lg">
					<h3 className="text-lg font-semibold text-green-800">
						Active Users
					</h3>
					<p className="text-3xl font-bold text-green-600">892</p>
				</div>
				<div className="bg-purple-50 p-6 rounded-lg">
					<h3 className="text-lg font-semibold text-purple-800">
						Revenue
					</h3>
					<p className="text-3xl font-bold text-purple-600">
						$12,345
					</p>
				</div>
			</div>

			{/* Recent Activity */}
			<div className="mt-8">
				<h3 className="text-xl font-semibold mb-4">Recent Activity</h3>
				<div className="bg-white rounded-lg divide-y">
					{[1, 2, 3].map((item) => (
						<div key={item} className="p-4">
							<div className="flex justify-between items-center">
								<div>
									<p className="font-medium">
										New user registered
									</p>
									<p className="text-sm text-gray-500">
										2 hours ago
									</p>
								</div>
								<span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
									Completed
								</span>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
