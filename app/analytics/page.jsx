import React from "react";
import {
	BarChart,
	LineChart,
	Line,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
} from "recharts";
import { DollarSign, Users, ShoppingBag, TrendingUp } from "lucide-react";

export default function AnalyticsPage() {
	// Sample data - replace with your actual data
	const salesData = [
		{ month: "Jan", sales: 4000, orders: 240, customers: 150 },
		{ month: "Feb", sales: 4500, orders: 280, customers: 180 },
		{ month: "Mar", sales: 5200, orders: 320, customers: 220 },
		{ month: "Apr", sales: 4800, orders: 280, customers: 200 },
		{ month: "May", sales: 5800, orders: 350, customers: 260 },
		{ month: "Jun", sales: 6000, orders: 380, customers: 290 },
	];

	const MetricCard = ({ title, value, icon: Icon, trend }) => (
		<div className="bg-white rounded-lg shadow p-6">
			<div className="flex items-center justify-between">
				<div>
					<p className="text-sm font-medium text-gray-500">{title}</p>
					<h3 className="text-2xl font-bold mt-2">{value}</h3>
					<p className="text-sm text-green-600 mt-2 flex items-center">
						<TrendingUp className="h-4 w-4 mr-1" />
						{trend}% from last month
					</p>
				</div>
				<div className="rounded-full bg-blue-100 p-3">
					<Icon className="h-6 w-6 text-blue-600" />
				</div>
			</div>
		</div>
	);

	return (
		<div className="p-6 space-y-6 bg-gray-50 min-h-screen">
			<h1 className="text-3xl font-bold mb-8">Dashboard</h1>

			{/* Metrics Overview */}
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
				<MetricCard
					title="Total Revenue"
					value="$28,300"
					icon={DollarSign}
					trend={12}
				/>
				<MetricCard
					title="Total Orders"
					value="1,850"
					icon={ShoppingBag}
					trend={8}
				/>
				<MetricCard
					title="Total Customers"
					value="1,100"
					icon={Users}
					trend={15}
				/>
				<MetricCard
					title="Avg. Order Value"
					value="$153"
					icon={TrendingUp}
					trend={5}
				/>
			</div>

			{/* Charts */}
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
				<div className="bg-white rounded-lg shadow p-6">
					<h2 className="text-lg font-semibold mb-4">
						Revenue Trend
					</h2>
					<div className="w-full">
						<LineChart width={500} height={300} data={salesData}>
							<CartesianGrid strokeDasharray="3 3" />
							<XAxis dataKey="month" />
							<YAxis />
							<Tooltip />
							<Legend />
							<Line
								type="monotone"
								dataKey="sales"
								stroke="#2563eb"
							/>
						</LineChart>
					</div>
				</div>

				<div className="bg-white rounded-lg shadow p-6">
					<h2 className="text-lg font-semibold mb-4">
						Orders vs Customers
					</h2>
					<div className="w-full">
						<BarChart width={500} height={300} data={salesData}>
							<CartesianGrid strokeDasharray="3 3" />
							<XAxis dataKey="month" />
							<YAxis />
							<Tooltip />
							<Legend />
							<Bar dataKey="orders" fill="#2563eb" />
							<Bar dataKey="customers" fill="#7c3aed" />
						</BarChart>
					</div>
				</div>
			</div>
		</div>
	);
}
