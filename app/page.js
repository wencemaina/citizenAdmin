import React from "react";

export default function DashboardPage() {
	return (
		<div className="flex-1 p-8">
			{/* Header */}
			<header className="flex justify-between items-center mb-8">
				<h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
				<button className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-500">
					Add New Product
				</button>
			</header>

			{/* Stats Cards */}
			<section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
				{/* Total Sales */}
				<div className="bg-white p-6 rounded-lg shadow-lg flex items-center">
					<div className="p-4 bg-blue-100 text-blue-600 rounded-full">
						<svg
							className="w-8 h-8"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M3 10h18M9 6l6 6-6 6"
							></path>
						</svg>
					</div>
					<div className="ml-4">
						<p className="text-gray-700 text-xl font-semibold">
							$25,640
						</p>
						<p className="text-gray-500">Total Sales</p>
					</div>
				</div>

				{/* Total Orders */}
				<div className="bg-white p-6 rounded-lg shadow-lg flex items-center">
					<div className="p-4 bg-green-100 text-green-600 rounded-full">
						<svg
							className="w-8 h-8"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M16 11V7a4 4 0 10-8 0v4M5 21h14a2 2 0 002-2v-5a2 2 0 00-2-2H5a2 2 0 00-2 2v5a2 2 0 002 2z"
							></path>
						</svg>
					</div>
					<div className="ml-4">
						<p className="text-gray-700 text-xl font-semibold">
							1,254
						</p>
						<p className="text-gray-500">Total Orders</p>
					</div>
				</div>

				{/* New Customers */}
				<div className="bg-white p-6 rounded-lg shadow-lg flex items-center">
					<div className="p-4 bg-yellow-100 text-yellow-600 rounded-full">
						<svg
							className="w-8 h-8"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M8 9l4-4 4 4m0 6l-4 4-4-4"
							></path>
						</svg>
					</div>
					<div className="ml-4">
						<p className="text-gray-700 text-xl font-semibold">
							320
						</p>
						<p className="text-gray-500">New Customers</p>
					</div>
				</div>

				{/* Pending Orders */}
				<div className="bg-white p-6 rounded-lg shadow-lg flex items-center">
					<div className="p-4 bg-red-100 text-red-600 rounded-full">
						<svg
							className="w-8 h-8"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M3 8l7-7m0 0l7 7M5 10v10a2 2 0 002 2h10a2 2 0 002-2V10"
							></path>
						</svg>
					</div>
					<div className="ml-4">
						<p className="text-gray-700 text-xl font-semibold">
							14
						</p>
						<p className="text-gray-500">Pending Orders</p>
					</div>
				</div>
			</section>

			{/* Recent Activity */}
			<section>
				<h2 className="text-2xl font-bold text-gray-800 mb-6">
					Recent Activity
				</h2>
				<div className="bg-white shadow-lg rounded-lg p-6">
					<ul>
						<li className="mb-4">
							<div className="flex justify-between items-center">
								<p className="text-gray-700">
									John Doe placed an order
								</p>
								<span className="text-gray-500 text-sm">
									2 hours ago
								</span>
							</div>
						</li>
						<li className="mb-4">
							<div className="flex justify-between items-center">
								<p className="text-gray-700">
									Anna Smith registered a new account
								</p>
								<span className="text-gray-500 text-sm">
									3 hours ago
								</span>
							</div>
						</li>
						<li className="mb-4">
							<div className="flex justify-between items-center">
								<p className="text-gray-700">
									Tommy Lee left a product review
								</p>
								<span className="text-gray-500 text-sm">
									5 hours ago
								</span>
							</div>
						</li>
						<li>
							<div className="flex justify-between items-center">
								<p className="text-gray-700">
									Karen Lee updated her shipping address
								</p>
								<span className="text-gray-500 text-sm">
									6 hours ago
								</span>
							</div>
						</li>
					</ul>
				</div>
			</section>
		</div>
	);
}
