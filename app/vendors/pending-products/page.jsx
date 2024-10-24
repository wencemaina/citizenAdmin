"use client";

import React, { useState } from "react";
import { Eye, Trash, ChevronLeft, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";

const productsData = [
	{
		id: "PRD1040",
		name: "HDMI Cable",
		image: "https://images.pexels.com/photos/276588/pexels-photo-276588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		category: "Cables",
		vendor: "CableWorld",
		price: 15.99,
		quantity: 50,
		status: "Active",
		stock: "In Stock",
		approvalStatus: "Pending",
	},
	{
		id: "PRD1041",
		name: "USB-C to USB Adapter",
		image: "https://images.pexels.com/photos/414511/pexels-photo-414511.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		category: "Adapters",
		vendor: "TechEssentials",
		price: 9.99,
		quantity: 100,
		status: "Active",
		stock: "In Stock",
		approvalStatus: "Pending",
	},
	{
		id: "PRD1042",
		name: "Ethernet Cable",
		image: "https://images.pexels.com/photos/276588/pexels-photo-276588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		category: "Cables",
		vendor: "NetworkHub",
		price: 12.5,
		quantity: 75,
		status: "Active",
		stock: "In Stock",
		approvalStatus: "Pending",
	},
	{
		id: "PRD1043",
		name: "Wireless Mouse",
		image: "https://images.pexels.com/photos/374718/pexels-photo-374718.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		category: "Peripherals",
		vendor: "GadgetZone",
		price: 25.99,
		quantity: 30,
		status: "Active",
		stock: "In Stock",
		approvalStatus: "Pending",
	},
	{
		id: "PRD1044",
		name: "Mechanical Keyboard",
		image: "https://images.pexels.com/photos/4050314/pexels-photo-4050314.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		category: "Keyboards",
		vendor: "KeyTech",
		price: 89.99,
		quantity: 20,
		status: "Active",
		stock: "In Stock",
		approvalStatus: "Pending",
	},
	{
		id: "PRD1045",
		name: "Bluetooth Headphones",
		image: "https://images.pexels.com/photos/4506304/pexels-photo-4506304.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		category: "Audio",
		vendor: "SoundWave",
		price: 59.99,
		quantity: 15,
		status: "Active",
		stock: "In Stock",
		approvalStatus: "Pending",
	},
	{
		id: "PRD1046",
		name: "Portable Charger",
		image: "https://images.pexels.com/photos/4173264/pexels-photo-4173264.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		category: "Chargers",
		vendor: "PowerPlus",
		price: 22.49,
		quantity: 40,
		status: "Active",
		stock: "In Stock",
		approvalStatus: "Pending",
	},
];

export default function PendingVendorProductsPage() {
	const router = useRouter();
	const [searchTerm, setSearchTerm] = useState("");
	const [entriesPerPage, setEntriesPerPage] = useState(5);
	const [currentPage, setCurrentPage] = useState(1);

	const handleViewDetails = (productId) => {
		router.push(`/vendors/vendor-product-details/${productId}`);
	};

	const filteredProducts = productsData
		.filter((product) => {
			const searchLower = searchTerm.toLowerCase();
			return (
				product.name.toLowerCase().includes(searchLower) ||
				product.vendor.toLowerCase().includes(searchLower) ||
				product.status.toLowerCase().includes(searchLower) ||
				product.stock.toLowerCase().includes(searchLower) ||
				product.approvalStatus.toLowerCase().includes(searchLower)
			);
		})
		.slice(
			(currentPage - 1) * entriesPerPage,
			currentPage * entriesPerPage,
		);

	React.useEffect(() => {
		setCurrentPage(1);
	}, [searchTerm]);

	const totalFilteredProducts = productsData.filter((product) => {
		const searchLower = searchTerm.toLowerCase();
		return (
			product.name.toLowerCase().includes(searchLower) ||
			product.vendor.toLowerCase().includes(searchLower) ||
			product.status.toLowerCase().includes(searchLower) ||
			product.stock.toLowerCase().includes(searchLower) ||
			product.approvalStatus.toLowerCase().includes(searchLower)
		);
	}).length;

	const totalPages = Math.ceil(totalFilteredProducts / entriesPerPage);

	const getStatusColor = (status) => {
		switch (status.toLowerCase()) {
			case "active":
				return "bg-green-100 text-green-800";
			case "inactive":
				return "bg-red-100 text-red-800";
			case "scheduled":
				return "bg-blue-100 text-blue-800";
			default:
				return "bg-gray-100 text-gray-800";
		}
	};

	const getStockColor = (stock) => {
		switch (stock.toLowerCase()) {
			case "in stock":
				return "bg-green-100 text-green-800";
			case "out of stock":
				return "bg-red-100 text-red-800";
			case "low stock":
				return "bg-yellow-100 text-yellow-800";
			default:
				return "bg-gray-100 text-gray-800";
		}
	};

	const getApprovalStatusColor = (approvalStatus) => {
		switch (approvalStatus.toLowerCase()) {
			case "approved":
				return "bg-green-100 text-green-800";
			case "pending":
				return "bg-yellow-100 text-yellow-800";
			case "rejected":
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
						placeholder="Search by name, vendor, status, stock or approval..."
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
								Name
							</th>
							<th className="py-4 px-4 text-left font-semibold text-gray-700">
								Vendor
							</th>
							<th className="py-4 px-4 text-left font-semibold text-gray-700">
								Price
							</th>
							<th className="py-4 px-4 text-left font-semibold text-gray-700">
								Quantity
							</th>
							<th className="py-4 px-4 text-left font-semibold text-gray-700">
								Stock
							</th>
							<th className="py-4 px-4 text-left font-semibold text-gray-700">
								Status
							</th>
							<th className="py-4 px-4 text-left font-semibold text-gray-700">
								Approval
							</th>
							<th className="py-4 px-4 text-left font-semibold text-gray-700">
								Actions
							</th>
						</tr>
					</thead>
					<tbody className="divide-y divide-gray-200 text-[13px]">
						{filteredProducts.map((product, index) => (
							<tr key={product.id} className="hover:bg-gray-50">
								<td className="py-3 px-4">
									{(currentPage - 1) * entriesPerPage +
										index +
										1}
								</td>
								<td className="py-3 px-4">
									<div className="flex items-center space-x-3">
										<div className="w-10 h-10 rounded-lg overflow-hidden">
											<img
												src={product.image}
												alt={`${product.name}`}
												className="w-full h-full object-cover"
											/>
										</div>
										<div className="flex flex-col">
											<span className="font-medium">
												{product.name}
											</span>
											<span className="text-xs text-gray-500">
												{product.category}
											</span>
										</div>
									</div>
								</td>
								<td className="py-3 px-4">{product.vendor}</td>
								<td className="py-3 px-4">
									Ksh {product.price.toFixed(2)}
								</td>
								<td className="py-3 px-4">
									{product.quantity}
								</td>
								<td className="py-3 px-4">
									<span
										className={`px-2 py-1 rounded-full text-xs ${getStockColor(
											product.stock,
										)}`}
									>
										{product.stock}
									</span>
								</td>
								<td className="py-3 px-4">
									<span
										className={`px-2 py-1 rounded-full text-xs ${getStatusColor(
											product.status,
										)}`}
									>
										{product.status}
									</span>
								</td>
								<td className="py-3 px-4">
									<span
										className={`px-2 py-1 rounded-full text-xs ${getApprovalStatusColor(
											product.approvalStatus,
										)}`}
									>
										{product.approvalStatus}
									</span>
								</td>
								<td className="py-3 px-4">
									<div className="flex items-center space-x-3">
										<button
											onClick={() =>
												handleViewDetails(product.id)
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
					{filteredProducts.length > 0
						? (currentPage - 1) * entriesPerPage + 1
						: 0}{" "}
					to{" "}
					{Math.min(
						currentPage * entriesPerPage,
						totalFilteredProducts,
					)}{" "}
					of {totalFilteredProducts} entries
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
