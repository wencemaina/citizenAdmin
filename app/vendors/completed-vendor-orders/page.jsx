"use client";
import React, { useState } from "react";
import { Eye, Trash, ChevronLeft, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";

const ordersData = [
	{
		id: "ORD1001",
		customer: "John Doe",
		seller: "Seller A",
		items: 3,
		amount: 299.99,
		deliveryStatus: "Delivered",
		paymentMethod: "Credit Card",
		paymentStatus: "Paid",
		orderDate: "2024-10-01",
	},
	{
		id: "ORD1002",
		customer: "Jane Smith",
		seller: "Seller B",
		items: 1,
		amount: 49.99,
		deliveryStatus: "In Transit",
		paymentMethod: "PayPal",
		paymentStatus: "Pending",
		orderDate: "2024-10-03",
	},
	{
		id: "ORD1003",
		customer: "Alice Johnson",
		seller: "Seller C",
		items: 5,
		amount: 599.99,
		deliveryStatus: "Processing",
		paymentMethod: "Debit Card",
		paymentStatus: "Failed",
		orderDate: "2024-10-05",
	},
];

export default function CompletedVendorOrders() {
	const router = useRouter();
	const [searchTerm, setSearchTerm] = useState("");
	const [entriesPerPage, setEntriesPerPage] = useState(5);
	const [currentPage, setCurrentPage] = useState(1);

	const handleViewDetails = (orderId) => {
		router.push(`/order-details/${orderId}`);
	};

	const filteredOrders = ordersData
		.filter((order) => {
			const searchLower = searchTerm.toLowerCase();
			return (
				order.id.toLowerCase().includes(searchLower) ||
				order.customer.toLowerCase().includes(searchLower) ||
				order.seller.toLowerCase().includes(searchLower) ||
				order.deliveryStatus.toLowerCase().includes(searchLower) ||
				order.paymentMethod.toLowerCase().includes(searchLower) ||
				order.paymentStatus.toLowerCase().includes(searchLower)
			);
		})
		.slice(
			(currentPage - 1) * entriesPerPage,
			currentPage * entriesPerPage,
		);

	React.useEffect(() => {
		setCurrentPage(1);
	}, [searchTerm]);

	const totalFilteredOrders = ordersData.filter((order) => {
		const searchLower = searchTerm.toLowerCase();
		return (
			order.id.toLowerCase().includes(searchLower) ||
			order.customer.toLowerCase().includes(searchLower) ||
			order.seller.toLowerCase().includes(searchLower) ||
			order.deliveryStatus.toLowerCase().includes(searchLower) ||
			order.paymentMethod.toLowerCase().includes(searchLower) ||
			order.paymentStatus.toLowerCase().includes(searchLower)
		);
	}).length;

	const totalPages = Math.ceil(totalFilteredOrders / entriesPerPage);

	const getPaymentStatusColor = (status) => {
		switch (status.toLowerCase()) {
			case "paid":
				return "bg-green-100 text-green-800";
			case "pending":
				return "bg-yellow-100 text-yellow-800";
			case "failed":
				return "bg-red-100 text-red-800";
			default:
				return "bg-gray-100 text-gray-800";
		}
	};

	return (
		<div className="p-4">
			<div className="flex justify-between mb-6">
				<div className="relative w-80">
					<input
						type="text"
						placeholder="Search by order ID, customer, status, or payment..."
						className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm pr-8"
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
					/>
					{searchTerm && (
						<button
							onClick={() => setSearchTerm("")}
							className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
						>
							×
						</button>
					)}
				</div>
				<select
					className="px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm"
					value={entriesPerPage}
					onChange={(e) => setEntriesPerPage(Number(e.target.value))}
				>
					<option value="5">Show 5 entries</option>
					<option value="10">Show 10 entries</option>
					<option value="20">Show 20 entries</option>
				</select>
			</div>

			<div className="overflow-x-auto">
				<table className="w-full text-sm">
					<thead>
						<tr className="bg-gray-100 border-b border-gray-200">
							<th className="py-4 px-4 text-left font-semibold text-gray-700">
								#
							</th>
							<th className="py-4 px-4 text-left font-semibold text-gray-700">
								Order ID
							</th>
							<th className="py-4 px-4 text-left font-semibold text-gray-700">
								Customer
							</th>
							<th className="py-4 px-4 text-left font-semibold text-gray-700">
								Seller
							</th>
							<th className="py-4 px-4 text-left font-semibold text-gray-700">
								No. of Items
							</th>
							<th className="py-4 px-4 text-left font-semibold text-gray-700">
								Payment Method
							</th>
							<th className="py-4 px-4 text-left font-semibold text-gray-700">
								Order Date
							</th>
							<th className="py-4 px-4 text-left font-semibold text-gray-700">
								Amount
							</th>
							<th className="py-4 px-4 text-left font-semibold text-gray-700">
								Payment Status
							</th>
							<th className="py-4 px-4 text-left font-semibold text-gray-700">
								Delivery Status
							</th>
							<th className="py-4 px-4 text-left font-semibold text-gray-700">
								Actions
							</th>
						</tr>
					</thead>
					<tbody className="divide-y divide-gray-200 text-[13px]">
						{filteredOrders.map((order, index) => (
							<tr key={order.id} className="hover:bg-gray-50">
								<td className="py-3 px-4">
									{(currentPage - 1) * entriesPerPage +
										index +
										1}
								</td>
								<td className="py-3 px-4">{order.id}</td>
								<td className="py-3 px-4">{order.customer}</td>
								<td className="py-3 px-4">{order.seller}</td>
								<td className="py-3 px-4">{order.items}</td>
								<td className="py-3 px-4">
									{order.paymentMethod}
								</td>
								<td className="py-3 px-4">{order.orderDate}</td>
								<td className="py-3 text-[13px] px-4">
									Ksh {order.amount.toFixed(2)}
								</td>
								<td className="py-3 px-4">
									<span
										className={`px-2 py-1 rounded-full text-xs ${getPaymentStatusColor(
											order.paymentStatus,
										)}`}
									>
										{order.paymentStatus}
									</span>
								</td>
								<td className="py-3 px-4">
									<span>{order.deliveryStatus}</span>
								</td>
								<td className="py-3 px-4">
									<div className="flex items-center space-x-3">
										<button
											onClick={() =>
												handleViewDetails(order.id)
											}
											className="group flex items-center justify-center w-8 h-8 rounded-lg hover:bg-blue-50 transition-colors"
										>
											<Eye className="w-4 h-4 text-blue-500 group-hover:text-blue-600" />
										</button>
										<button className="group flex items-center justify-center w-8 h-8 rounded-lg hover:bg-red-50 transition-colors">
											<Trash className="w-4 h-4 text-red-500 group-hover:text-red-600" />
										</button>
									</div>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>

			<div className="flex justify-between items-center mt-4 text-sm text-gray-600">
				<div>
					Showing{" "}
					{filteredOrders.length > 0
						? (currentPage - 1) * entriesPerPage + 1
						: 0}{" "}
					to{" "}
					{Math.min(
						currentPage * entriesPerPage,
						totalFilteredOrders,
					)}{" "}
					of {totalFilteredOrders} entries
				</div>
				<div className="flex items-center space-x-2">
					<button
						onClick={() =>
							setCurrentPage((prev) =>
								prev > 1 ? prev - 1 : prev,
							)
						}
						disabled={currentPage === 1}
						className="px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg hover:bg-gray-100 disabled:opacity-50"
					>
						<ChevronLeft className="w-4 h-4" />
					</button>
					<div>
						Page {currentPage} of {totalPages}
					</div>
					<button
						onClick={() =>
							setCurrentPage((prev) =>
								prev < totalPages ? prev + 1 : prev,
							)
						}
						disabled={currentPage === totalPages}
						className="px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg hover:bg-gray-100 disabled:opacity-50"
					>
						<ChevronRight className="w-4 h-4" />
					</button>
				</div>
			</div>
		</div>
	);
}
