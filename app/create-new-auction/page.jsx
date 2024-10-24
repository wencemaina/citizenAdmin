"use client";
import React, { useState } from "react";
export default function CreateNewAuctionPage() {
	const [formData, setFormData] = useState({
		itemName: "",
		shortDescription: "",
		longDescription: "",
		startDate: "",
		startTime: "",
		endDate: "",
		endTime: "",
		startingPrice: "",
		isFutureAuction: false,
	});

	const [images, setImages] = useState([]);
	const [thumbnail, setThumbnail] = useState(null);
	const [previewImages, setPreviewImages] = useState([]);
	const [previewThumbnail, setPreviewThumbnail] = useState(null);

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("Form submitted:", { ...formData, images, thumbnail });
	};

	const handleChange = (e) => {
		const { name, value, type, checked } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: type === "checkbox" ? checked : value,
		}));
	};

	const handleImageChange = (e) => {
		const files = Array.from(e.target.files);
		setImages(files);

		// Create preview URLs
		const previews = files.map((file) => URL.createObjectURL(file));
		setPreviewImages(previews);
	};

	const handleThumbnailChange = (e) => {
		const file = e.target.files[0];
		setThumbnail(file);

		// Create preview URL
		if (file) {
			setPreviewThumbnail(URL.createObjectURL(file));
		}
	};

	return (
		<div className="min-h-screen bg-gray-50 py-8 px-4">
			<div className="max-w-3xl mx-auto">
				<div className="bg-white rounded-lg shadow-lg p-6">
					<div className="text-center mb-8">
						<h1 className="text-2xl font-bold text-gray-900">
							Create New Auction
						</h1>
						<p className="text-gray-500 mt-2">
							Fill in the details to create a new auction listing
						</p>
					</div>

					<form onSubmit={handleSubmit} className="space-y-6">
						{/* Basic Information */}
						<div className="space-y-4">
							<div>
								<label
									htmlFor="itemName"
									className="block text-sm font-medium text-gray-700 mb-1"
								>
									Item Name
								</label>
								<input
									type="text"
									name="itemName"
									id="itemName"
									value={formData.itemName}
									onChange={handleChange}
									className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
									placeholder="Enter item name"
									required
								/>
							</div>

							{/* Descriptions */}
							<div>
								<label
									htmlFor="shortDescription"
									className="block text-sm font-medium text-gray-700 mb-1"
								>
									Short Description
								</label>
								<input
									type="text"
									name="shortDescription"
									id="shortDescription"
									value={formData.shortDescription}
									onChange={handleChange}
									className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
									placeholder="Brief overview of the item (max 150 characters)"
									maxLength={150}
									required
								/>
							</div>

							<div>
								<label
									htmlFor="longDescription"
									className="block text-sm font-medium text-gray-700 mb-1"
								>
									Long Description
								</label>
								<textarea
									name="longDescription"
									id="longDescription"
									value={formData.longDescription}
									onChange={handleChange}
									rows="6"
									className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
									placeholder="Detailed description of the item"
									required
								></textarea>
							</div>

							{/* Images Section */}
							<div className="space-y-4">
								<div>
									<label className="block text-sm font-medium text-gray-700 mb-1">
										Thumbnail Image
									</label>
									<input
										type="file"
										onChange={handleThumbnailChange}
										accept="image/*"
										className="hidden"
										id="thumbnail"
									/>
									<label
										htmlFor="thumbnail"
										className="cursor-pointer block w-full p-4 border-2 border-dashed border-gray-300 rounded-md text-center hover:border-blue-500"
									>
										{previewThumbnail ? (
											<img
												src={previewThumbnail}
												alt="Thumbnail preview"
												className="mx-auto h-32 w-32 object-cover rounded-md"
											/>
										) : (
											<div className="text-gray-500">
												Click to upload thumbnail
											</div>
										)}
									</label>
								</div>

								<div>
									<label className="block text-sm font-medium text-gray-700 mb-1">
										Additional Images
									</label>
									<input
										type="file"
										multiple
										onChange={handleImageChange}
										accept="image/*"
										className="hidden"
										id="images"
									/>
									<label
										htmlFor="images"
										className="cursor-pointer block w-full p-4 border-2 border-dashed border-gray-300 rounded-md text-center hover:border-blue-500"
									>
										{previewImages.length > 0 ? (
											<div className="grid grid-cols-3 gap-4">
												{previewImages.map(
													(preview, index) => (
														<img
															key={index}
															src={preview}
															alt={`Preview ${
																index + 1
															}`}
															className="h-24 w-24 object-cover rounded-md mx-auto"
														/>
													),
												)}
											</div>
										) : (
											<div className="text-gray-500">
												Click to upload additional
												images
											</div>
										)}
									</label>
								</div>
							</div>

							{/* Date and Time Section */}
							<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
								<div>
									<label
										htmlFor="startDate"
										className="block text-sm font-medium text-gray-700 mb-1"
									>
										Start Date
									</label>
									<input
										type="date"
										name="startDate"
										id="startDate"
										value={formData.startDate}
										onChange={handleChange}
										className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
										required
									/>
								</div>
								<div>
									<label
										htmlFor="startTime"
										className="block text-sm font-medium text-gray-700 mb-1"
									>
										Start Time
									</label>
									<input
										type="time"
										name="startTime"
										id="startTime"
										value={formData.startTime}
										onChange={handleChange}
										className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
										required
									/>
								</div>
								<div>
									<label
										htmlFor="endDate"
										className="block text-sm font-medium text-gray-700 mb-1"
									>
										End Date
									</label>
									<input
										type="date"
										name="endDate"
										id="endDate"
										value={formData.endDate}
										onChange={handleChange}
										className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
										required
									/>
								</div>
								<div>
									<label
										htmlFor="endTime"
										className="block text-sm font-medium text-gray-700 mb-1"
									>
										End Time
									</label>
									<input
										type="time"
										name="endTime"
										id="endTime"
										value={formData.endTime}
										onChange={handleChange}
										className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
										required
									/>
								</div>
							</div>

							{/* Price and Future Auction */}
							<div>
								<label
									htmlFor="startingPrice"
									className="block text-sm font-medium text-gray-700 mb-1"
								>
									Starting Price ($)
								</label>
								<input
									type="number"
									name="startingPrice"
									id="startingPrice"
									value={formData.startingPrice}
									onChange={handleChange}
									className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
									placeholder="0.00"
									min="0"
									step="0.01"
									required
								/>
							</div>

							<div className="flex items-center space-x-2">
								<input
									type="checkbox"
									name="isFutureAuction"
									id="isFutureAuction"
									checked={formData.isFutureAuction}
									onChange={handleChange}
									className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
								/>
								<label
									htmlFor="isFutureAuction"
									className="text-sm font-medium text-gray-700"
								>
									Schedule as future auction
								</label>
							</div>
						</div>

						<button
							type="submit"
							className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
						>
							Create Auction
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}
