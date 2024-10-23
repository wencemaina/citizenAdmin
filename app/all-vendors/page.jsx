"use client";
import React, { useState } from "react";
import { Eye, Trash, ChevronLeft, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";

const vendorsData = [
	{
		id: "VEN1001",
		name: "Tech Haven",
		logo: "https://images.pexels.com/photos/1674752/pexels-photo-1674752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		phone: "+254 712 345 678",
		email: "contact@techhaven.com",
		verified: true,
		productsCount: 45,
		status: "Active",
		dueAmount: 2499.99,
	},
	{
		id: "VEN1002",
		name: "Global Gadgets",
		logo: "https://images.pexels.com/photos/2301285/pexels-photo-2301285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		phone: "+254 723 456 789",
		email: "sales@globalgadgets.com",
		verified: false,
		productsCount: 28,
		status: "Suspended",
		dueAmount: 1299.5,
	},
	{
		id: "VEN1003",
		name: "Digital Dreams",
		logo: "https://images.pexels.com/photos/20637414/pexels-photo-20637414/free-photo-of-muscular-housewife-with-makeup.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		phone: "+254 734 567 890",
		email: "info@digitaldreams.com",
		verified: true,
		productsCount: 67,
		status: "Active",
		dueAmount: 3750.25,
	},
];

export default function AllVendorsPage() {
	const router = useRouter();
	const [searchTerm, setSearchTerm] = useState("");
	const [entriesPerPage, setEntriesPerPage] = useState(5);
	const [currentPage, setCurrentPage] = useState(1);

	const handleViewDetails = (vendorId) => {
		router.push(`/vendor-details/${vendorId}`);
	};

	const filteredVendors = vendorsData
		.filter((vendor) => {
			const searchLower = searchTerm.toLowerCase();
			return (
				vendor.name.toLowerCase().includes(searchLower) ||
				vendor.email.toLowerCase().includes(searchLower) ||
				vendor.phone.toLowerCase().includes(searchLower) ||
				vendor.status.toLowerCase().includes(searchLower)
			);
		})
		.slice(
			(currentPage - 1) * entriesPerPage,
			currentPage * entriesPerPage,
		);

	React.useEffect(() => {
		setCurrentPage(1);
	}, [searchTerm]);

	const totalFilteredVendors = vendorsData.filter((vendor) => {
		const searchLower = searchTerm.toLowerCase();
		return (
			vendor.name.toLowerCase().includes(searchLower) ||
			vendor.email.toLowerCase().includes(searchLower) ||
			vendor.phone.toLowerCase().includes(searchLower) ||
			vendor.status.toLowerCase().includes(searchLower)
		);
	}).length;

	const totalPages = Math.ceil(totalFilteredVendors / entriesPerPage);

	const getStatusColor = (status) => {
		switch (status.toLowerCase()) {
			case "active":
				return "bg-green-100 text-green-800";
			case "suspended":
				return "bg-red-100 text-red-800";
			case "pending":
				return "bg-yellow-100 text-yellow-800";
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
						placeholder="Search by name, email, phone or status..."
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
								Vendor
							</th>
							<th className="py-4 px-4 text-left font-semibold text-gray-700">
								Phone
							</th>
							<th className="py-4 px-4 text-left font-semibold text-gray-700">
								Email
							</th>
							<th className="py-4 px-4 text-left font-semibold text-gray-700">
								Verification
							</th>
							<th className="py-4 px-4 text-left font-semibold text-gray-700">
								Products
							</th>
							<th className="py-4 px-4 text-left font-semibold text-gray-700">
								Status
							</th>
							<th className="py-4 px-4 text-left font-semibold text-gray-700">
								Due Amount
							</th>
							<th className="py-4 px-4 text-left font-semibold text-gray-700">
								Actions
							</th>
						</tr>
					</thead>
					<tbody className="divide-y divide-gray-200 text-[13px]">
						{filteredVendors.map((vendor, index) => (
							<tr key={vendor.id} className="hover:bg-gray-50">
								<td className="py-3 px-4">
									{(currentPage - 1) * entriesPerPage +
										index +
										1}
								</td>
								<td className="py-3 px-4">
									<div className="flex items-center space-x-3">
										<img
											src={vendor.logo}
											alt={`${vendor.name} logo`}
											className="w-10 h-10 rounded-full object-cover"
										/>
										<span className="font-medium">
											{vendor.name}
										</span>
									</div>
								</td>
								<td className="py-3 px-4">{vendor.phone}</td>
								<td className="py-3 px-4">{vendor.email}</td>
								<td className="py-3 px-4">
									<span
										className={`px-2 py-1 rounded-full text-xs ${
											vendor.verified
												? "bg-green-100 text-green-800"
												: "bg-yellow-100 text-yellow-800"
										}`}
									>
										{vendor.verified
											? "Verified"
											: "Pending"}
									</span>
								</td>
								<td className="py-3 px-4">
									{vendor.productsCount}
								</td>
								<td className="py-3 px-4">
									<span
										className={`px-2 py-1 rounded-full text-xs ${getStatusColor(
											vendor.status,
										)}`}
									>
										{vendor.status}
									</span>
								</td>
								<td className="py-3 px-4">
									Ksh {vendor.dueAmount.toFixed(2)}
								</td>
								<td className="py-3 px-4">
									<div className="flex items-center space-x-3">
										<button
											onClick={() =>
												handleViewDetails(vendor.id)
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
					{filteredVendors.length > 0
						? (currentPage - 1) * entriesPerPage + 1
						: 0}{" "}
					to{" "}
					{Math.min(
						currentPage * entriesPerPage,
						totalFilteredVendors,
					)}{" "}
					of {totalFilteredVendors} entries
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
