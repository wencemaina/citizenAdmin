"use client";
import React from "react";
import {
	LineChart,
	Line,
	BarChart,
	Bar,
	PieChart,
	Pie,
	Cell,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from "recharts";
import {
	TrendingUp,
	TrendingDown,
	Users,
	ShoppingBag,
	DollarSign,
	Package,
	ArrowUpRight,
	ArrowDownRight,
	Calendar,
} from "lucide-react";

export default function MarketplaceAnalytics() {
	// Sample data
	const revenueData = [
		{ name: "Mon", revenue: 4500, orders: 45, visitors: 1200 },
		{ name: "Tue", revenue: 5200, orders: 52, visitors: 1400 },
		{ name: "Wed", revenue: 4800, orders: 48, visitors: 1300 },
		{ name: "Thu", revenue: 6000, orders: 60, visitors: 1600 },
		{ name: "Fri", revenue: 5500, orders: 55, visitors: 1500 },
		{ name: "Sat", revenue: 6800, orders: 68, visitors: 1800 },
		{ name: "Sun", revenue: 6200, orders: 62, visitors: 1700 },
	];

	const categoryData = [
		{ name: "Electronics", value: 35, color: "#FF6384" },
		{ name: "Fashion", value: 25, color: "#36A2EB" },
		{ name: "Home & Garden", value: 20, color: "#FFCE56" },
		{ name: "Books", value: 15, color: "#4BC0C0" },
		{ name: "Sports", value: 5, color: "#9966FF" },
	];

	return (
		<div className="min-h-screen bg-gray-50 p-6">
			{/* Header */}
			<div className="flex justify-between items-center mb-8">
				<h1 className="text-2xl font-bold text-gray-800">
					Analytics Dashboard
				</h1>
				<div className="flex items-center space-x-2">
					<Calendar className="w-5 h-5 text-gray-500" />
					<select className="bg-white border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
						<option value="7d">Last 7 Days</option>
						<option value="30d">Last 30 Days</option>
						<option value="90d">Last 90 Days</option>
						<option value="1y">Last Year</option>
					</select>
				</div>
			</div>

			{/* Quick Stats Grid */}
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
				{/* Revenue Card */}
				<div className="bg-white rounded-xl shadow-sm p-6">
					<div className="flex justify-between items-start">
						<div>
							<p className="text-sm text-gray-500 font-medium">
								Total Revenue
							</p>
							<h3 className="text-2xl font-bold mt-2">$39,200</h3>
							<div className="flex items-center mt-2 space-x-1">
								<ArrowUpRight className="w-4 h-4 text-green-500" />
								<span className="text-sm font-medium text-green-500">
									+12.5%
								</span>
							</div>
						</div>
						<div className="bg-blue-50 p-3 rounded-lg">
							<DollarSign className="w-6 h-6 text-blue-500" />
						</div>
					</div>
				</div>

				{/* Users Card */}
				<div className="bg-white rounded-xl shadow-sm p-6">
					<div className="flex justify-between items-start">
						<div>
							<p className="text-sm text-gray-500 font-medium">
								Active Users
							</p>
							<h3 className="text-2xl font-bold mt-2">2,854</h3>
							<div className="flex items-center mt-2 space-x-1">
								<ArrowUpRight className="w-4 h-4 text-green-500" />
								<span className="text-sm font-medium text-green-500">
									+8.2%
								</span>
							</div>
						</div>
						<div className="bg-purple-50 p-3 rounded-lg">
							<Users className="w-6 h-6 text-purple-500" />
						</div>
					</div>
				</div>

				{/* Orders Card */}
				<div className="bg-white rounded-xl shadow-sm p-6">
					<div className="flex justify-between items-start">
						<div>
							<p className="text-sm text-gray-500 font-medium">
								Total Orders
							</p>
							<h3 className="text-2xl font-bold mt-2">390</h3>
							<div className="flex items-center mt-2 space-x-1">
								<ArrowDownRight className="w-4 h-4 text-red-500" />
								<span className="text-sm font-medium text-red-500">
									-3.1%
								</span>
							</div>
						</div>
						<div className="bg-orange-50 p-3 rounded-lg">
							<ShoppingBag className="w-6 h-6 text-orange-500" />
						</div>
					</div>
				</div>

				{/* Products Card */}
				<div className="bg-white rounded-xl shadow-sm p-6">
					<div className="flex justify-between items-start">
						<div>
							<p className="text-sm text-gray-500 font-medium">
								Products Listed
							</p>
							<h3 className="text-2xl font-bold mt-2">1,245</h3>
							<div className="flex items-center mt-2 space-x-1">
								<ArrowUpRight className="w-4 h-4 text-green-500" />
								<span className="text-sm font-medium text-green-500">
									+5.3%
								</span>
							</div>
						</div>
						<div className="bg-green-50 p-3 rounded-lg">
							<Package className="w-6 h-6 text-green-500" />
						</div>
					</div>
				</div>
			</div>

			{/* Charts Grid */}
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
				{/* Revenue Chart */}
				<div className="bg-white rounded-xl shadow-sm p-6">
					<h2 className="text-lg font-semibold mb-4">
						Revenue Overview
					</h2>
					<ResponsiveContainer width="100%" height={300}>
						<LineChart data={revenueData}>
							<CartesianGrid strokeDasharray="3 3" />
							<XAxis dataKey="name" />
							<YAxis />
							<Tooltip />
							<Legend />
							<Line
								type="monotone"
								dataKey="revenue"
								stroke="#4F46E5"
								strokeWidth={2}
							/>
							<Line
								type="monotone"
								dataKey="orders"
								stroke="#10B981"
								strokeWidth={2}
							/>
						</LineChart>
					</ResponsiveContainer>
				</div>

				{/* Category Distribution */}
				<div className="bg-white rounded-xl shadow-sm p-6">
					<h2 className="text-lg font-semibold mb-4">
						Category Distribution
					</h2>
					<ResponsiveContainer width="100%" height={300}>
						<PieChart>
							<Pie
								data={categoryData}
								cx="50%"
								cy="50%"
								innerRadius={60}
								outerRadius={100}
								paddingAngle={5}
								dataKey="value"
							>
								{categoryData.map((entry, index) => (
									<Cell
										key={`cell-${index}`}
										fill={entry.color}
									/>
								))}
							</Pie>
							<Tooltip />
							<Legend />
						</PieChart>
					</ResponsiveContainer>
				</div>
			</div>

			{/* Recent Orders Table */}
			<div className="bg-white rounded-xl shadow-sm mt-6 p-6">
				<h2 className="text-lg font-semibold mb-4">Recent Orders</h2>
				<div className="overflow-x-auto">
					<table className="w-full text-left">
						<thead>
							<tr className="border-b border-gray-200">
								<th className="pb-4 font-medium text-gray-500">
									Order ID
								</th>
								<th className="pb-4 font-medium text-gray-500">
									Customer
								</th>
								<th className="pb-4 font-medium text-gray-500">
									Product
								</th>
								<th className="pb-4 font-medium text-gray-500">
									Amount
								</th>
								<th className="pb-4 font-medium text-gray-500">
									Status
								</th>
							</tr>
						</thead>
						<tbody>
							<tr className="border-b border-gray-100">
								<td className="py-4">#12345</td>
								<td className="py-4">John Doe</td>
								<td className="py-4">Wireless Earbuds</td>
								<td className="py-4">$129.99</td>
								<td className="py-4">
									<span className="px-3 py-1 text-sm text-green-700 bg-green-100 rounded-full">
										Completed
									</span>
								</td>
							</tr>
							<tr className="border-b border-gray-100">
								<td className="py-4">#12346</td>
								<td className="py-4">Jane Smith</td>
								<td className="py-4">Smart Watch</td>
								<td className="py-4">$199.99</td>
								<td className="py-4">
									<span className="px-3 py-1 text-sm text-yellow-700 bg-yellow-100 rounded-full">
										Pending
									</span>
								</td>
							</tr>
							<tr>
								<td className="py-4">#12347</td>
								<td className="py-4">Mike Johnson</td>
								<td className="py-4">Laptop Stand</td>
								<td className="py-4">$29.99</td>
								<td className="py-4">
									<span className="px-3 py-1 text-sm text-blue-700 bg-blue-100 rounded-full">
										Processing
									</span>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}
