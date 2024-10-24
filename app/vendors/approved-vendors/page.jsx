import React, { useState } from "react";
import { Eye, ChevronLeft, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";

// Sample data modified to represent vendor applications
const vendorApplicationsData = [
	{
		id: "APP1001",
		name: "Tech Haven",
		logo: "/api/placeholder/80/80",
		phone: "+254 712 345 678",
		email: "contact@techhaven.com",
		businessType: "Electronics",
		applicationDate: "2024-03-15",
		documents: {
			business: true,
			tax: true,
			identity: true,
		},
		status: "Pending Review",
		description:
			"Specialized in premium electronics and gadgets with 5 years of retail experience.",
	},
	{
		id: "APP1002",
		name: "Global Gadgets",
		logo: "/api/placeholder/80/80",
		phone: "+254 723 456 789",
		email: "sales@globalgadgets.com",
		businessType: "Mobile Accessories",
		applicationDate: "2024-03-14",
		documents: {
			business: true,
			tax: false,
			identity: true,
		},
		status: "Documents Pending",
		description:
			"Mobile accessories wholesaler with international supply chain connections.",
	},
	{
		id: "APP1003",
		name: "Digital Dreams",
		logo: "/api/placeholder/80/80",
		phone: "+254 734 567 890",
		email: "info@digitaldreams.com",
		businessType: "Computer Hardware",
		applicationDate: "2024-03-16",
		documents: {
			business: true,
			tax: true,
			identity: true,
		},
		status: "Pending Review",
		description:
			"Specialized in computer hardware and custom PC builds with certified technicians.",
	},
];

export default function VendorApplicationsPage() {
	const router = useRouter();
	const [searchTerm, setSearchTerm] = useState("");
	const [entriesPerPage, setEntriesPerPage] = useState(5);
	const [currentPage, setCurrentPage] = useState(1);

	const handleViewDetails = (applicationId) => {
		router.push(`/vendor-application-details/${applicationId}`);
	};

	const getStatusColor = (status) => {
		switch (status.toLowerCase()) {
			case "pending review":
				return "bg-yellow-100 text-yellow-800";
			case "documents pending":
				return "bg-orange-100 text-orange-800";
			case "approved":
				return "bg-green-100 text-green-800";
			case "rejected":
				return "bg-red-100 text-red-800";
			default:
				return "bg-gray-100 text-gray-800";
		}
	};

	const filteredApplications = vendorApplicationsData
		.filter((application) => {
			const searchLower = searchTerm.toLowerCase();
			return (
				application.name.toLowerCase().includes(searchLower) ||
				application.email.toLowerCase().includes(searchLower) ||
				application.phone.toLowerCase().includes(searchLower) ||
				application.status.toLowerCase().includes(searchLower)
			);
		})
		.slice(
			(currentPage - 1) * entriesPerPage,
			currentPage * entriesPerPage,
		);

	const totalFilteredApplications = vendorApplicationsData.filter(
		(application) => {
			const searchLower = searchTerm.toLowerCase();
			return (
				application.name.toLowerCase().includes(searchLower) ||
				application.email.toLowerCase().includes(searchLower) ||
				application.phone.toLowerCase().includes(searchLower) ||
				application.status.toLowerCase().includes(searchLower)
			);
		},
	).length;

	const totalPages = Math.ceil(totalFilteredApplications / entriesPerPage);

	return (
		<div className="p-4">
			<div className="mb-6">
				<h1 className="text-2xl font-bold text-gray-800 mb-2">
					Vendor Applications
				</h1>
				<p className="text-gray-600">
					Review vendor applications to join your marketplace
				</p>
			</div>

			<div className="flex justify-between mb-6">
				<div className="relative w-80">
					<input
						type="text"
						placeholder="Search applications..."
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
								Applicant
							</th>
							<th className="py-4 px-4 text-left font-semibold text-gray-700">
								Business Type
							</th>
							<th className="py-4 px-4 text-left font-semibold text-gray-700">
								Contact
							</th>
							<th className="py-4 px-4 text-left font-semibold text-gray-700">
								Documents
							</th>
							<th className="py-4 px-4 text-left font-semibold text-gray-700">
								Status
							</th>
							<th className="py-4 px-4 text-left font-semibold text-gray-700">
								Applied On
							</th>
							<th className="py-4 px-4 text-center font-semibold text-gray-700">
								Details
							</th>
						</tr>
					</thead>
					<tbody className="divide-y divide-gray-200 text-[13px]">
						{filteredApplications.map((application, index) => (
							<tr
								key={application.id}
								className="hover:bg-gray-50"
							>
								<td className="py-3 px-4">
									{(currentPage - 1) * entriesPerPage +
										index +
										1}
								</td>
								<td className="py-3 px-4">
									<div className="flex items-center space-x-3">
										<img
											src={application.logo}
											alt={`${application.name} logo`}
											className="w-10 h-10 rounded-full object-cover"
										/>
										<div>
											<div className="font-medium">
												{application.name}
											</div>
											<div className="text-gray-500 text-xs">
												{application.id}
											</div>
										</div>
									</div>
								</td>
								<td className="py-3 px-4">
									{application.businessType}
								</td>
								<td className="py-3 px-4">
									<div>{application.email}</div>
									<div className="text-gray-500">
										{application.phone}
									</div>
								</td>
								<td className="py-3 px-4">
									<div className="flex space-x-2">
										<span
											className={`px-2 py-1 rounded-full text-xs ${
												application.documents.business
													? "bg-green-100 text-green-800"
													: "bg-red-100 text-red-800"
											}`}
										>
											Business
										</span>
										<span
											className={`px-2 py-1 rounded-full text-xs ${
												application.documents.tax
													? "bg-green-100 text-green-800"
													: "bg-red-100 text-red-800"
											}`}
										>
											Tax
										</span>
										<span
											className={`px-2 py-1 rounded-full text-xs ${
												application.documents.identity
													? "bg-green-100 text-green-800"
													: "bg-red-100 text-red-800"
											}`}
										>
											ID
										</span>
									</div>
								</td>
								<td className="py-3 px-4">
									<span
										className={`px-2 py-1 rounded-full text-xs ${getStatusColor(
											application.status,
										)}`}
									>
										{application.status}
									</span>
								</td>
								<td className="py-3 px-4">
									{application.applicationDate}
								</td>
								<td className="py-3 px-4">
									<div className="flex justify-center">
										<button
											onClick={() =>
												handleViewDetails(
													application.id,
												)
											}
											className="group flex items-center justify-center w-8 h-8 rounded-lg hover:bg-blue-50 transition-colors"
											title="View Application Details"
										>
											<Eye className="w-4 h-4 text-blue-500 group-hover:text-blue-600" />
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
					{filteredApplications.length > 0
						? (currentPage - 1) * entriesPerPage + 1
						: 0}{" "}
					to{" "}
					{Math.min(
						currentPage * entriesPerPage,
						totalFilteredApplications,
					)}{" "}
					of {totalFilteredApplications} applications
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
