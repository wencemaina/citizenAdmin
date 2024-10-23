"use state";
import React, { useState } from "react";
import { Eye, Trash, ChevronLeft, ChevronRight, Toggle } from "lucide-react";
import { Switch } from "@/components/ui/switch";

const reviewsData = [
	{
		id: "REV0001",
		customerId: "CUST0001",
		customerName: "John Doe",
		email: "john@example.com",
		review: "Great product! The quality exceeded my expectations. Would definitely recommend to others.",
		rating: 5,
		productName: "Wireless Headphones",
		orderId: "ORD123456",
		purchaseDate: "2024-09-15",
		verifiedPurchase: true,
		isPublished: true,
		image: "", // No image provided
		reviewDate: "2024-10-01",
	},
	{
		id: "REV0002",
		customerId: "CUST0002",
		customerName: "Jane Smith",
		email: "jane@example.com",
		review: "Product was okay, but delivery took longer than expected.",
		rating: 3,
		productName: "Smart Watch",
		orderId: "ORD123457",
		purchaseDate: "2024-08-20",
		verifiedPurchase: true,
		isPublished: false,
		image: "", // No image provided
		reviewDate: "2024-09-15",
	},
	{
		id: "REV0003",
		customerId: "CUST0003",
		customerName: "Alice Johnson",
		email: "alice@example.com",
		review: "Absolutely love this product! Perfect fit and great value for money.",
		rating: 4,
		productName: "Running Shoes",
		orderId: "ORD123458",
		purchaseDate: "2024-09-01",
		verifiedPurchase: true,
		isPublished: true,
		image: "https://i.pinimg.com/enabled/236x/d9/bc/1a/d9bc1abeb5be60f7e6075790946dfc01.jpg",
		reviewDate: "2024-10-05",
	},
];

export default function ReviewDetailsPage() {
	const [searchTerm, setSearchTerm] = useState("");
	const [entriesPerPage, setEntriesPerPage] = useState(5);
	const [currentPage, setCurrentPage] = useState(1);

	// Function to render star rating
	const renderStars = (rating) => {
		return "★".repeat(rating) + "☆".repeat(5 - rating);
	};

	const handleTogglePublish = (reviewId) => {
		// In a real app, this would update the backend
		console.log(`Toggle publish for review: ${reviewId}`);
	};

	const handleDeleteReview = (reviewId) => {
		// In a real app, this would show a confirmation dialog and delete from backend
		console.log(`Delete review: ${reviewId}`);
	};

	const filteredReviews = reviewsData
		.filter((review) => {
			const searchLower = searchTerm.toLowerCase();
			return (
				review.customerName.toLowerCase().includes(searchLower) ||
				review.email.toLowerCase().includes(searchLower) ||
				review.review.toLowerCase().includes(searchLower) ||
				review.productName.toLowerCase().includes(searchLower)
			);
		})
		.slice(
			(currentPage - 1) * entriesPerPage,
			currentPage * entriesPerPage,
		);

	const totalFilteredReviews = reviewsData.filter((review) => {
		const searchLower = searchTerm.toLowerCase();
		return (
			review.customerName.toLowerCase().includes(searchLower) ||
			review.email.toLowerCase().includes(searchLower) ||
			review.review.toLowerCase().includes(searchLower) ||
			review.productName.toLowerCase().includes(searchLower)
		);
	}).length;

	const totalPages = Math.ceil(totalFilteredReviews / entriesPerPage);

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
						placeholder="Search reviews..."
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
								Customer
							</th>
							<th className="py-4 px-4 text-left font-semibold text-gray-700">
								Product
							</th>
							<th className="py-4 px-4 text-left font-semibold text-gray-700">
								Review & Rating
							</th>
							<th className="py-4 px-4 text-left font-semibold text-gray-700">
								Purchase Info
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
						{filteredReviews.map((review) => (
							<tr key={review.id} className="hover:bg-gray-50">
								<td className="py-3 px-4">
									<div className="flex items-center">
										{review.image ? (
											<img
												src={review.image}
												alt={review.customerName}
												className="w-10 h-10 rounded-full object-cover mr-3"
											/>
										) : (
											<div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center mr-3">
												<span className="text-gray-600">
													{getInitials(
														review.customerName,
													)}
												</span>
											</div>
										)}
										<div>
											<p className="font-medium">
												{review.customerName}
											</p>
											<p className="text-xs text-gray-500">
												{review.email}
											</p>
										</div>
									</div>
								</td>
								<td className="py-3 px-4">
									<p className="font-medium">
										{review.productName}
									</p>
									<p className="text-xs text-gray-500">
										Review Date: {review.reviewDate}
									</p>
								</td>
								<td className="py-3 px-4">
									<p className="mb-1">{review.review}</p>
									<div className="text-yellow-400">
										{renderStars(review.rating)}
									</div>
								</td>
								<td className="py-3 px-4">
									<p className="text-sm">
										Order ID: {review.orderId}
									</p>
									<p className="text-xs text-gray-500">
										Purchase Date: {review.purchaseDate}
									</p>
									{review.verifiedPurchase && (
										<span className="inline-block mt-1 px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
											Verified Purchase
										</span>
									)}
								</td>
								<td className="py-3 px-4">
									<div className="flex items-center space-x-2">
										<Switch
											checked={review.isPublished}
											onCheckedChange={() =>
												handleTogglePublish(review.id)
											}
										/>
										<span className="text-sm text-gray-600">
											{review.isPublished
												? "Published"
												: "Hidden"}
										</span>
									</div>
								</td>
								<td className="py-3 px-4">
									<button
										onClick={() =>
											handleDeleteReview(review.id)
										}
										className="group flex items-center justify-center w-8 h-8 rounded-lg hover:bg-red-50 transition-colors"
									>
										<Trash className="w-4 h-4 text-red-500 group-hover:text-red-600" />
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>

			<div className="flex justify-between mt-4">
				<p className="text-sm text-gray-600">
					Showing {filteredReviews.length} of {totalFilteredReviews}{" "}
					entries
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
