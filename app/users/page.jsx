"use client";
import React, { useState } from "react";
import { Eye, Trash, ChevronLeft, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";

const customersData = [
	{
		id: "CUST0001",
		name: "John Doe",
		email: "john@example.com",
		phone: "555-1234",
		lastLogin: "2024-10-01",
		totalSpend: 1200,
		totalOrders: 5,
		status: "Active",
		memberSince: "2022-03-12",
		image: "", // No image provided
	},
	{
		id: "CUST0002",
		name: "Jane Smith",
		email: "jane@example.com",
		phone: "555-5678",
		lastLogin: "2024-09-15",
		totalSpend: 800,
		totalOrders: 3,
		status: "Inactive",
		memberSince: "2021-05-08",
		image: "", // No image provided
	},
	{
		id: "CUST0003",
		name: "Alice Johnson",
		email: "alice@example.com",
		phone: "555-8765",
		lastLogin: "2024-10-05",
		totalSpend: 1500,
		totalOrders: 7,
		status: "Active",
		memberSince: "2020-11-22",
		image: "https://i.pinimg.com/enabled/236x/d9/bc/1a/d9bc1abeb5be60f7e6075790946dfc01.jpg", // Sample image
	},
];

export default function CustomerTable() {
	const router = useRouter();
	const [searchTerm, setSearchTerm] = useState("");
	const [entriesPerPage, setEntriesPerPage] = useState(5);
	const [currentPage, setCurrentPage] = useState(1);

	const handleViewDetails = (userId) => {
		router.push(`/user-details/${userId}`);
	};

	const filteredCustomers = customersData
		.filter((customer) => {
			const searchLower = searchTerm.toLowerCase();
			return (
				customer.name.toLowerCase().includes(searchLower) ||
				customer.email.toLowerCase().includes(searchLower) ||
				customer.id.toString().includes(searchLower)
			);
		})
		.slice(
			(currentPage - 1) * entriesPerPage,
			currentPage * entriesPerPage,
		);

	React.useEffect(() => {
		setCurrentPage(1);
	}, [searchTerm]);

	const totalFilteredCustomers = customersData.filter((customer) => {
		const searchLower = searchTerm.toLowerCase();
		return (
			customer.name.toLowerCase().includes(searchLower) ||
			customer.email.toLowerCase().includes(searchLower) ||
			customer.id.toString().includes(searchLower)
		);
	}).length;

	const totalPages = Math.ceil(totalFilteredCustomers / entriesPerPage);

	// Function to get initials for the name if no image is provided
	const getInitials = (name) => {
		const nameParts = name.split(" ");
		return nameParts.map((part) => part[0].toUpperCase()).join("");
	};

	return (
		<div className="p-4">
			<div className="flex justify-between mb-6">
				<div className="relative w-80">
					<input
						type="text"
						placeholder="Search by name, email, or ID..."
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
								User ID
							</th>
							<th className="py-4 px-4 text-left font-semibold text-gray-700">
								Name & Email
							</th>
							<th className="py-4 px-4 text-left font-semibold text-gray-700">
								Member Since
							</th>
							<th className="py-4 px-4 text-left font-semibold text-gray-700">
								Phone
							</th>
							<th className="py-4 px-4 text-left font-semibold text-gray-700">
								Last Login
							</th>
							<th className="py-4 px-4 text-left font-semibold text-gray-700">
								Total Spend
							</th>
							<th className="py-4 px-4 text-left font-semibold text-gray-700">
								Total Orders
							</th>
							<th className="py-4 px-4 text-left font-semibold text-gray-700">
								Status
							</th>
							<th className="py-4 px-4 text-left font-semibold text-gray-700">
								Actions
							</th>
						</tr>
					</thead>
					<tbody className="divide-y divide-gray-200">
						{filteredCustomers.map((customer, index) => (
							<tr key={customer.id} className="hover:bg-gray-50">
								<td className="py-3 px-4">
									{(currentPage - 1) * entriesPerPage +
										index +
										1}
								</td>
								<td className="py-3 px-4">{customer.id}</td>
								<td className="py-3 px-4 flex items-center">
									{customer.image ? (
										<img
											src={customer.image}
											alt={customer.name}
											className="w-10 h-10 rounded-full object-cover mr-3"
										/>
									) : (
										<div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center mr-3">
											<span className="text-gray-600">
												{getInitials(customer.name)}
											</span>
										</div>
									)}
									<div>
										<p>{customer.name}</p>
										<p className="text-xs text-gray-500">
											{customer.email}
										</p>
									</div>
								</td>
								<td className="py-3 px-4">
									{customer.memberSince}
								</td>
								<td className="py-3 px-4">{customer.phone}</td>
								<td className="py-3 px-4">
									{customer.lastLogin}
								</td>
								<td className="py-3 px-4">
									Ksh {customer.totalSpend}
								</td>
								<td className="py-3 px-4">
									{customer.totalOrders}
								</td>
								<td className="py-3 px-4">
									<span
										className={`px-2 py-1 rounded-full text-xs ${
											customer.status === "Active"
												? "bg-green-100 text-green-800"
												: "bg-gray-100 text-gray-800"
										}`}
									>
										{customer.status}
									</span>
								</td>
								<td className="py-3 px-4">
									<div className="flex items-center space-x-3">
										<button
											onClick={() =>
												handleViewDetails(customer.id)
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

			<div className="flex justify-between mt-4">
				<p className="text-sm text-gray-600">
					Showing {filteredCustomers.length} of{" "}
					{totalFilteredCustomers} entries
				</p>
				<div className="flex items-center space-x-2">
					<button
						onClick={() =>
							setCurrentPage((prev) => Math.max(prev - 1, 1))
						}
						disabled={currentPage === 1}
						className="p-2 text-gray-500 hover:text-gray-700 disabled:text-gray-300"
					>
						<ChevronLeft className="w-5 h-5" />
					</button>
					<span className="text-sm text-gray-600">
						Page {currentPage} of {totalPages}
					</span>
					<button
						onClick={() =>
							setCurrentPage((prev) =>
								Math.min(prev + 1, totalPages),
							)
						}
						disabled={currentPage === totalPages}
						className="p-2 text-gray-500 hover:text-gray-700 disabled:text-gray-300"
					>
						<ChevronRight className="w-5 h-5" />
					</button>
				</div>
			</div>
		</div>
	);
}
