"use client";

import React, { useState } from "react";
import { Eye, Trash, ChevronLeft, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";

const categoriesData = [
	{
		id: "CAT1010",
		name: "Storage",
		image: "https://images.pexels.com/photos/5060897/pexels-photo-5060897.jpeg",
		dateCreated: "2023-01-01",
		createdBy: "Wence",
		numberOfItems: 10,
		numberOfSubCategories: 2,
		numberOfLeaveCategories: 1,
		status: "Active",
		description: "Various storage devices including SSDs and HDDs.",
	},
	{
		id: "CAT1020",
		name: "Accessories",
		image: "https://images.pexels.com/photos/3730765/pexels-photo-3730765.jpeg",
		dateCreated: "2023-02-15",
		createdBy: "Alice",
		numberOfItems: 25,
		numberOfSubCategories: 4,
		numberOfLeaveCategories: 2,
		status: "Active",
		description: "Essential accessories for all your devices.",
	},
	{
		id: "CAT1030",
		name: "Audio",
		image: "https://images.pexels.com/photos/8839604/pexels-photo-8839604.jpeg",
		dateCreated: "2023-03-10",
		createdBy: "John",
		numberOfItems: 15,
		numberOfSubCategories: 3,
		numberOfLeaveCategories: 1,
		status: "Active",
		description: "High-quality audio equipment for music lovers.",
	},
	{
		id: "CAT1040",
		name: "Displays",
		image: "https://images.pexels.com/photos/4596556/pexels-photo-4596556.jpeg",
		dateCreated: "2023-04-20",
		createdBy: "Sara",
		numberOfItems: 8,
		numberOfSubCategories: 2,
		numberOfLeaveCategories: 0,
		status: "Active",
		description: "Stunning displays for gaming and productivity.",
	},
	{
		id: "CAT1050",
		name: "Furniture",
		image: "https://images.pexels.com/photos/3824848/pexels-photo-3824848.jpeg",
		dateCreated: "2023-05-05",
		createdBy: "Mike",
		numberOfItems: 30,
		numberOfSubCategories: 3,
		numberOfLeaveCategories: 1,
		status: "Active",
		description: "Ergonomic furniture for a comfortable workspace.",
	},
	{
		id: "CAT1060",
		name: "Cables",
		image: "https://images.pexels.com/photos/276588/pexels-photo-276588.jpeg",
		dateCreated: "2023-06-12",
		createdBy: "Nina",
		numberOfItems: 50,
		numberOfSubCategories: 1,
		numberOfLeaveCategories: 2,
		status: "Active",
		description: "A variety of cables for all your connectivity needs.",
	},
	{
		id: "CAT1070",
		name: "Gaming",
		image: "https://images.pexels.com/photos/8839604/pexels-photo-8839604.jpeg",
		dateCreated: "2023-07-18",
		createdBy: "Leo",
		numberOfItems: 5,
		numberOfSubCategories: 2,
		numberOfLeaveCategories: 1,
		status: "Active",
		description: "Top-notch gaming equipment for serious gamers.",
	},
	{
		id: "CAT1080",
		name: "Chargers",
		image: "https://images.pexels.com/photos/4056013/pexels-photo-4056013.jpeg",
		dateCreated: "2023-08-25",
		createdBy: "Emma",
		numberOfItems: 40,
		numberOfSubCategories: 3,
		numberOfLeaveCategories: 2,
		status: "Active",
		description: "Fast and reliable chargers for your devices.",
	},
	{
		id: "CAT1090",
		name: "Smart Home",
		image: "https://images.pexels.com/photos/4596556/pexels-photo-4596556.jpeg",
		dateCreated: "2023-09-30",
		createdBy: "Tom",
		numberOfItems: 12,
		numberOfSubCategories: 4,
		numberOfLeaveCategories: 1,
		status: "Active",
		description: "Innovative smart home devices for a modern lifestyle.",
	},
	{
		id: "CAT1100",
		name: "Wearables",
		image: "https://images.pexels.com/photos/5060897/pexels-photo-5060897.jpeg",
		dateCreated: "2023-10-05",
		createdBy: "Sophia",
		numberOfItems: 20,
		numberOfSubCategories: 2,
		numberOfLeaveCategories: 0,
		status: "Active",
		description: "Wearable technology for health and fitness tracking.",
	},
];

export default function AllCategoriesPage() {
	const router = useRouter();
	const [searchTerm, setSearchTerm] = useState("");
	const [entriesPerPage, setEntriesPerPage] = useState(5);
	const [currentPage, setCurrentPage] = useState(1);

	const handleViewDetails = (categoryId) => {
		router.push(`/category-details/${categoryId}`);
	};

	const filteredCategories = categoriesData
		.filter((category) => {
			const searchLower = searchTerm.toLowerCase();
			return (
				category.name.toLowerCase().includes(searchLower) ||
				category.createdBy.toLowerCase().includes(searchLower) ||
				category.status.toLowerCase().includes(searchLower)
			);
		})
		.slice(
			(currentPage - 1) * entriesPerPage,
			currentPage * entriesPerPage,
		);

	React.useEffect(() => {
		setCurrentPage(1);
	}, [searchTerm]);

	const totalFilteredCategories = categoriesData.filter((category) => {
		const searchLower = searchTerm.toLowerCase();
		return (
			category.name.toLowerCase().includes(searchLower) ||
			category.createdBy.toLowerCase().includes(searchLower) ||
			category.status.toLowerCase().includes(searchLower)
		);
	}).length;

	const totalPages = Math.ceil(totalFilteredCategories / entriesPerPage);

	return (
		<div className="p-4">
			<div className="flex justify-between mb-6">
				<div className="relative w-80">
					<input
						type="text"
						placeholder="Search by name, created by, or status..."
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
								Category
							</th>
							<th className="py-4 px-4 text-left font-semibold text-gray-700">
								Date Created
							</th>
							<th className="py-4 px-4 text-left font-semibold text-gray-700">
								Created By
							</th>
							<th className="py-4 px-4 text-left font-semibold text-gray-700">
								Number of Items
							</th>
							<th className="py-4 px-4 text-left font-semibold text-gray-700">
								Sub Categories
							</th>
							<th className="py-4 px-4 text-left font-semibold text-gray-700">
								Leaf Categories
							</th>
							<th className="py-4 px-4 text-left font-semibold text-gray-700">
								Status
							</th>
							<th className="py-4 px-4 text-left font-semibold text-gray-700">
								Description
							</th>
							<th className="py-4 px-4 text-left font-semibold text-gray-700">
								Actions
							</th>
						</tr>
					</thead>
					<tbody className="divide-y divide-gray-200 text-[13px]">
						{filteredCategories.map((category, index) => (
							<tr key={category.id} className="hover:bg-gray-50">
								<td className="py-3 px-4">
									{(currentPage - 1) * entriesPerPage +
										index +
										1}
								</td>
								<td className="py-3 px-4">
									<div className="flex items-center space-x-3">
										<div className="w-10 h-10 rounded-lg overflow-hidden">
											<img
												src={category.image}
												alt={`${category.name}`}
												className="w-full h-full object-cover"
											/>
										</div>
										<span className="font-medium">
											{category.name}
										</span>
									</div>
								</td>
								<td className="py-3 px-4">
									{category.dateCreated}
								</td>
								<td className="py-3 px-4">
									{category.createdBy}
								</td>
								<td className="py-3 px-4">
									{category.numberOfItems}
								</td>
								<td className="py-3 px-4">
									{category.numberOfSubCategories}
								</td>
								<td className="py-3 px-4">
									{category.numberOfLeaveCategories}
								</td>
								<td className="py-3 px-4">
									<span
										className={`px-2 py-1 rounded-full text-xs ${
											category.status.toLowerCase() ===
											"active"
												? "bg-green-100 text-green-800"
												: "bg-red-100 text-red-800"
										}`}
									>
										{category.status}
									</span>
								</td>
								<td className="py-3 px-4">
									{category.description}
								</td>
								<td className="py-3 px-4">
									<div className="flex items-center space-x-3">
										<button
											onClick={() =>
												handleViewDetails(category.id)
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
					{filteredCategories.length > 0
						? (currentPage - 1) * entriesPerPage + 1
						: 0}{" "}
					to{" "}
					{Math.min(
						currentPage * entriesPerPage,
						totalFilteredCategories,
					)}{" "}
					of {totalFilteredCategories} entries
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
