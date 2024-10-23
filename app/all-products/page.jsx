"use client";
import React, { useState } from "react";
import { Eye, Trash, ChevronLeft, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";

const productsData = [
	{
		id: "PRD1001",
		name: "Wireless Headphones",
		image: "https://images.pexels.com/photos/1674752/pexels-photo-1674752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		category: "Electronics",
		price: 129.99,
		quantity: 45,
		status: "Active",
		stock: "In Stock",
	},
	{
		id: "PRD1002",
		name: "Smart Watch",
		image: "https://images.pexels.com/photos/2301285/pexels-photo-2301285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		category: "Wearables",
		price: 199.5,
		quantity: 0,
		status: "Inactive",
		stock: "Out of Stock",
	},
	{
		id: "PRD1003",
		name: "Laptop Pro",
		image: "https://images.pexels.com/photos/2633986/pexels-photo-2633986.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		category: "Computers",
		price: 1299.99,
		quantity: 12,
		status: "Scheduled",
		stock: "Low Stock",
	},
	{
		id: "PRD1004",
		name: "Bluetooth Speaker",
		image: "https://images.pexels.com/photos/28968492/pexels-photo-28968492/free-photo-of-luxurious-makeup-collection-display.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		category: "Electronics",
		price: 89.99,
		quantity: 30,
		status: "Active",
		stock: "In Stock",
	},
	{
		id: "PRD1005",
		name: "Gaming Mouse",
		image: "https://images.pexels.com/photos/8500498/pexels-photo-8500498.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		category: "Computers",
		price: 49.99,
		quantity: 20,
		status: "Active",
		stock: "In Stock",
	},
	{
		id: "PRD1006",
		name: "4K Monitor",
		image: "https://images.pexels.com/photos/2638026/pexels-photo-2638026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		category: "Computers",
		price: 499.99,
		quantity: 5,
		status: "Scheduled",
		stock: "Low Stock",
	},
	{
		id: "PRD1007",
		name: "Action Camera",
		image: "https://images.pexels.com/photos/17653878/pexels-photo-17653878/free-photo-of-ice-cream-dessert-with-strawberries.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		category: "Electronics",
		price: 299.99,
		quantity: 15,
		status: "Active",
		stock: "In Stock",
	},
	{
		id: "PRD1008",
		name: "Fitness Tracker",
		image: "https://images.pexels.com/photos/16560453/pexels-photo-16560453/free-photo-of-ice-cream-with-sprinkles-in-a-cup.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		category: "Wearables",
		price: 59.99,
		quantity: 25,
		status: "Active",
		stock: "In Stock",
	},
	{
		id: "PRD1009",
		name: "Wireless Charger",
		image: "https://images.pexels.com/photos/9227962/pexels-photo-9227962.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		category: "Accessories",
		price: 29.99,
		quantity: 50,
		status: "Active",
		stock: "In Stock",
	},
	{
		id: "PRD1010",
		name: "Portable SSD",
		image: "https://images.pexels.com/photos/5060897/pexels-photo-5060897.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		category: "Storage",
		price: 89.99,
		quantity: 10,
		status: "Active",
		stock: "Low Stock",
	},
];

export default function AllProductsPage() {
	const router = useRouter();
	const [searchTerm, setSearchTerm] = useState("");
	const [entriesPerPage, setEntriesPerPage] = useState(5);
	const [currentPage, setCurrentPage] = useState(1);

	const handleViewDetails = (productId) => {
		router.push(`/product-details/${productId}`);
	};

	const filteredProducts = productsData
		.filter((product) => {
			const searchLower = searchTerm.toLowerCase();
			return (
				product.name.toLowerCase().includes(searchLower) ||
				product.category.toLowerCase().includes(searchLower) ||
				product.status.toLowerCase().includes(searchLower) ||
				product.stock.toLowerCase().includes(searchLower)
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
			product.category.toLowerCase().includes(searchLower) ||
			product.status.toLowerCase().includes(searchLower) ||
			product.stock.toLowerCase().includes(searchLower)
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

	return (
		<div className="p-4">
			<div className="flex justify-between mb-6">
				<div className="relative w-80">
					<input
						type="text"
						placeholder="Search by name, category, status or stock..."
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
								Category
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
										<span className="font-medium">
											{product.name}
										</span>
									</div>
								</td>
								<td className="py-3 px-4">
									{product.category}
								</td>
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
