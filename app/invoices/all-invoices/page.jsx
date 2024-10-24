"use client";

import React, { useState } from "react";
import { Eye, Trash, ChevronLeft, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";

const invoicesData = [
	{
		id: "INV1100",
		customer: {
			name: "John Doe",
			email: "john.doe@example.com",
		},
		date: "2024-03-15",
		amount: 1599.99,
		quantity: 3,
		status: "Paid",
	},
];

export default function AllInvoicesPage() {
	const router = useRouter();
	const [searchTerm, setSearchTerm] = useState("");
	const [entriesPerPage, setEntriesPerPage] = useState(5);
	const [currentPage, setCurrentPage] = useState(1);

	const handleViewDetails = (invoiceId) => {
		router.push(`/invoices/invoice-details/${invoiceId}`);
	};

	const filteredInvoices = invoicesData
		.filter((invoice) => {
			const searchLower = searchTerm.toLowerCase();
			return (
				invoice.customer.name.toLowerCase().includes(searchLower) ||
				invoice.customer.email.toLowerCase().includes(searchLower) ||
				invoice.status.toLowerCase().includes(searchLower) ||
				invoice.id.toLowerCase().includes(searchLower)
			);
		})
		.slice(
			(currentPage - 1) * entriesPerPage,
			currentPage * entriesPerPage,
		);

	React.useEffect(() => {
		setCurrentPage(1);
	}, [searchTerm]);

	const totalFilteredInvoices = invoicesData.filter((invoice) => {
		const searchLower = searchTerm.toLowerCase();
		return (
			invoice.customer.name.toLowerCase().includes(searchLower) ||
			invoice.customer.email.toLowerCase().includes(searchLower) ||
			invoice.status.toLowerCase().includes(searchLower) ||
			invoice.id.toLowerCase().includes(searchLower)
		);
	}).length;

	const totalPages = Math.ceil(totalFilteredInvoices / entriesPerPage);

	const getStatusColor = (status) => {
		switch (status.toLowerCase()) {
			case "paid":
				return "bg-green-100 text-green-800";
			case "pending":
				return "bg-yellow-100 text-yellow-800";
			case "overdue":
				return "bg-red-100 text-red-800";
			case "cancelled":
				return "bg-gray-100 text-gray-800";
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
						placeholder="Search by invoice #, customer name, email or status..."
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
								Invoice #
							</th>
							<th className="py-4 px-4 text-left font-semibold text-gray-700">
								Customer
							</th>
							<th className="py-4 px-4 text-left font-semibold text-gray-700">
								Invoice Date
							</th>
							<th className="py-4 px-4 text-left font-semibold text-gray-700">
								Total Amount
							</th>
							<th className="py-4 px-4 text-left font-semibold text-gray-700">
								Qty
							</th>
							<th className="py-4 px-4 text-left font-semibold text-gray-700">
								Status
							</th>
							<th className="py-4 px-4 text-left font-semibold text-gray-700">
								Actions
							</th>
						</tr>
					</thead>
					<tbody className="divide-y divide-gray-200 text-[13px]">
						{filteredInvoices.map((invoice, index) => (
							<tr key={invoice.id} className="hover:bg-gray-50">
								<td className="py-3 px-4">{invoice.id}</td>
								<td className="py-3 px-4">
									<div className="flex flex-col">
										<span className="font-medium">
											{invoice.customer.name}
										</span>
										<span className="text-xs text-gray-500">
											{invoice.customer.email}
										</span>
									</div>
								</td>
								<td className="py-3 px-4">
									{new Date(
										invoice.date,
									).toLocaleDateString()}
								</td>
								<td className="py-3 px-4">
									Ksh {invoice.amount.toFixed(2)}
								</td>
								<td className="py-3 px-4">
									{invoice.quantity}
								</td>
								<td className="py-3 px-4">
									<span
										className={`px-2 py-1 rounded-full text-xs ${getStatusColor(
											invoice.status,
										)}`}
									>
										{invoice.status}
									</span>
								</td>
								<td className="py-3 px-4">
									<div className="flex items-center space-x-3">
										<button
											onClick={() =>
												handleViewDetails(invoice.id)
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
					{filteredInvoices.length > 0
						? (currentPage - 1) * entriesPerPage + 1
						: 0}{" "}
					to{" "}
					{Math.min(
						currentPage * entriesPerPage,
						totalFilteredInvoices,
					)}{" "}
					of {totalFilteredInvoices} entries
				</div>
				<div className="flex items-center space-x-2">
					<button
						onClick={() =>
							setCurrentPage((prev) =>
								prev > 1 ? prev - 1 : prev,
							)
						}
						disabled={currentPage === 1}
						className={`${
							currentPage === 1
								? "text-gray-400 cursor-not-allowed"
								: "text-blue-500 hover:text-blue-600"
						}`}
					>
						<ChevronLeft />
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
						className={`${
							currentPage === totalPages
								? "text-gray-400 cursor-not-allowed"
								: "text-blue-500 hover:text-blue-600"
						}`}
					>
						<ChevronRight />
					</button>
				</div>
			</div>
		</div>
	);
}
