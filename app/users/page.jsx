"use client";
import React, { useState } from "react";
import { Eye, Trash, ChevronLeft, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";

const customersData = [
	// Sample customer data
	{
		id: "CUST0001",
		name: "John Doe",
		email: "john@example.com",
		phone: "555-1234",
		lastLogin: "2024-10-01",
		totalSpend: 1200,
		totalOrders: 5,
		status: "Active",
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
	},
	{
		id: "CUST0004",
		name: "Bob Brown",
		email: "bob@example.com",
		phone: "555-4321",
		lastLogin: "2024-09-20",
		totalSpend: 300,
		totalOrders: 2,
		status: "Inactive",
	},
	{
		id: "CUST0005",
		name: "Charlie Green",
		email: "charlie@example.com",
		phone: "555-9876",
		lastLogin: "2024-10-10",
		totalSpend: 600,
		totalOrders: 4,
		status: "Active",
	},
	{
		id: "CUST0006",
		name: "Diana Prince",
		email: "diana@example.com",
		phone: "555-6543",
		lastLogin: "2024-09-28",
		totalSpend: 950,
		totalOrders: 6,
		status: "Active",
	},
	{
		id: "CUST0007",
		name: "Ethan Hunt",
		email: "ethan@example.com",
		phone: "555-3210",
		lastLogin: "2024-08-30",
		totalSpend: 1200,
		totalOrders: 3,
		status: "Inactive",
	},
	{
		id: "CUST0008",
		name: "Fiona Gallagher",
		email: "fiona@example.com",
		phone: "555-2468",
		lastLogin: "2024-10-15",
		totalSpend: 500,
		totalOrders: 1,
		status: "Active",
	},
	{
		id: "CUST0009",
		name: "George Costanza",
		email: "george@example.com",
		phone: "555-1357",
		lastLogin: "2024-09-10",
		totalSpend: 400,
		totalOrders: 2,
		status: "Active",
	},
	{
		id: "CUST0010",
		name: "Hannah Baker",
		email: "hannah@example.com",
		phone: "555-2460",
		lastLogin: "2024-10-12",
		totalSpend: 2000,
		totalOrders: 10,
		status: "Inactive",
	},
];

const CustomerTable = () => {
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

	// Reset to first page when search changes
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
								Name
							</th>
							<th className="py-4 px-4 text-left font-semibold text-gray-700">
								Email
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
								<td className="py-3 px-4">{customer.name}</td>
								<td className="py-3 px-4">{customer.email}</td>
								<td className="py-3 px-4">{customer.phone}</td>
								<td className="py-3 px-4">
									{customer.lastLogin}
								</td>
								<td className="py-3 px-4">
									${customer.totalSpend}
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

			<div className="flex justify-between items-center mt-4 text-sm text-gray-600">
				<div>
					Showing{" "}
					{filteredCustomers.length > 0
						? (currentPage - 1) * entriesPerPage + 1
						: 0}{" "}
					to{" "}
					{Math.min(
						currentPage * entriesPerPage,
						totalFilteredCustomers,
					)}{" "}
					of {totalFilteredCustomers} entries
				</div>
				<div className="flex items-center space-x-2">
					<ChevronLeft
						className={`w-5 h-5 cursor-pointer ${
							currentPage === 1
								? "text-gray-300"
								: "text-gray-600 hover:text-gray-800"
						}`}
						onClick={() =>
							currentPage > 1 && setCurrentPage(currentPage - 1)
						}
					/>
					<span className="px-2">{currentPage}</span>
					<ChevronRight
						className={`w-5 h-5 cursor-pointer ${
							currentPage === totalPages
								? "text-gray-300"
								: "text-gray-600 hover:text-gray-800"
						}`}
						onClick={() =>
							currentPage < totalPages &&
							setCurrentPage(currentPage + 1)
						}
					/>
				</div>
			</div>
		</div>
	);
};

export default CustomerTable;
