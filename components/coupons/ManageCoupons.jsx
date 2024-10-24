import React, { useState } from "react";
import { Eye, Trash, ChevronLeft, ChevronRight, Edit } from "lucide-react";

export const ManageCoupons = ({ coupons: initialCoupons }) => {
	const [searchTerm, setSearchTerm] = useState("");
	const [entriesPerPage, setEntriesPerPage] = useState(5);
	const [currentPage, setCurrentPage] = useState(1);

	const filteredCoupons = initialCoupons
		.filter((coupon) => {
			const searchLower = searchTerm.toLowerCase();
			return (
				coupon.code.toLowerCase().includes(searchLower) ||
				coupon.type.toLowerCase().includes(searchLower) ||
				coupon.status.toLowerCase().includes(searchLower)
			);
		})
		.slice(
			(currentPage - 1) * entriesPerPage,
			currentPage * entriesPerPage,
		);

	React.useEffect(() => {
		setCurrentPage(1);
	}, [searchTerm]);

	const totalFilteredCoupons = initialCoupons.filter((coupon) => {
		const searchLower = searchTerm.toLowerCase();
		return (
			coupon.code.toLowerCase().includes(searchLower) ||
			coupon.type.toLowerCase().includes(searchLower) ||
			coupon.status.toLowerCase().includes(searchLower)
		);
	}).length;

	const totalPages = Math.ceil(totalFilteredCoupons / entriesPerPage);

	const getStatusColor = (status) => {
		switch (status.toLowerCase()) {
			case "active":
				return "bg-green-100 text-green-800";
			case "expired":
			case "inactive":
				return "bg-red-100 text-red-800";
			default:
				return "bg-gray-100 text-gray-800";
		}
	};

	const formatType = (type) => {
		return type
			.split("_")
			.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
			.join(" ");
	};

	return (
		<div className="p-4">
			<div className="flex justify-between mb-6">
				<div className="relative w-80">
					<input
						type="text"
						placeholder="Search by code, type, or status..."
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
								Code
							</th>
							<th className="py-4 px-4 text-left font-semibold text-gray-700">
								Type
							</th>
							<th className="py-4 px-4 text-left font-semibold text-gray-700">
								Discount
							</th>
							<th className="py-4 px-4 text-left font-semibold text-gray-700">
								Usage
							</th>
							<th className="py-4 px-4 text-left font-semibold text-gray-700">
								Expiry
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
						{filteredCoupons.map((coupon, index) => (
							<tr key={coupon.id} className="hover:bg-gray-50">
								<td className="py-3 px-4">
									{(currentPage - 1) * entriesPerPage +
										index +
										1}
								</td>
								<td className="py-3 px-4">
									<div className="font-medium text-gray-900">
										{coupon.code}
									</div>
								</td>
								<td className="py-3 px-4">
									{formatType(coupon.type)}
								</td>
								<td className="py-3 px-4">
									{coupon.discountType === "percentage"
										? `${coupon.discountValue}%`
										: `$${coupon.discountValue}`}
								</td>
								<td className="py-3 px-4">
									<div className="flex items-center">
										<span className="font-medium">
											{coupon.usedCount}
										</span>
										<span className="mx-1">/</span>
										<span>{coupon.usageLimit || "∞"}</span>
									</div>
								</td>
								<td className="py-3 px-4">
									{coupon.expiryDate}
								</td>
								<td className="py-3 px-4">
									<span
										className={`px-2 py-1 rounded-full text-xs ${getStatusColor(
											coupon.status,
										)}`}
									>
										{coupon.status}
									</span>
								</td>
								<td className="py-3 px-4">
									<div className="flex items-center space-x-3">
										<button className="group flex items-center justify-center w-8 h-8 rounded-lg hover:bg-blue-50 transition-colors">
											<Edit className="w-4 h-4 text-blue-500 group-hover:text-blue-600" />
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
					{filteredCoupons.length > 0
						? (currentPage - 1) * entriesPerPage + 1
						: 0}{" "}
					to{" "}
					{Math.min(
						currentPage * entriesPerPage,
						totalFilteredCoupons,
					)}{" "}
					of {totalFilteredCoupons} entries
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
};

export default ManageCoupons;
