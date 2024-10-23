/* "use client";
import React, { useState } from "react";
import { ImagePlus } from "lucide-react";
export default function CreateProduct() {
	const [formData, setFormData] = useState({
		name: "",
		category: "",
		subCategory: "",
		leafCategory: "",
		shortDescription: "",
		longDescription: "",
		size: "",
		color: "",
		images: [],
	});

	// Sample data - replace with your actual data
	const categories = ["Electronics", "Clothing", "Home & Garden", "Books"];
	const subCategories = ["Phones", "Laptops", "Accessories"];
	const leafCategories = ["iPhone", "Samsung", "Google Pixel"];
	const sizes = ["S", "M", "L", "XL"];
	const colors = ["Red", "Blue", "Green", "Black", "White"];

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("Form submitted:", formData);
	};

	return (
		<div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
			<div className="max-w-3xl mx-auto">
				<div className="bg-white shadow-md rounded-lg p-6">
					<h2 className="text-2xl font-bold mb-6 text-gray-800">
						Create New Product
					</h2>

					<form onSubmit={handleSubmit} className="space-y-6">
						
						<div className="grid grid-cols-1 gap-6 md:grid-cols-2">
							<div>
								<label className="block text-sm font-medium text-gray-700">
									Product Name
								</label>
								<input
									type="text"
									name="name"
									value={formData.name}
									onChange={handleChange}
									className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500"
									required
								/>
							</div>

							<div>
								<label className="block text-sm font-medium text-gray-700">
									Category
								</label>
								<select
									name="category"
									value={formData.category}
									onChange={handleChange}
									className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500"
									required
								>
									<option value="">Select Category</option>
									{categories.map((cat) => (
										<option key={cat} value={cat}>
											{cat}
										</option>
									))}
								</select>
							</div>

							<div>
								<label className="block text-sm font-medium text-gray-700">
									Sub Category
								</label>
								<select
									name="subCategory"
									value={formData.subCategory}
									onChange={handleChange}
									className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500"
									required
								>
									<option value="">
										Select Sub Category
									</option>
									{subCategories.map((subCat) => (
										<option key={subCat} value={subCat}>
											{subCat}
										</option>
									))}
								</select>
							</div>

							<div>
								<label className="block text-sm font-medium text-gray-700">
									Leaf Category
								</label>
								<select
									name="leafCategory"
									value={formData.leafCategory}
									onChange={handleChange}
									className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500"
									required
								>
									<option value="">
										Select Leaf Category
									</option>
									{leafCategories.map((leafCat) => (
										<option key={leafCat} value={leafCat}>
											{leafCat}
										</option>
									))}
								</select>
							</div>
						</div>

				
						<div>
							<label className="block text-sm font-medium text-gray-700">
								Short Description
							</label>
							<input
								type="text"
								name="shortDescription"
								value={formData.shortDescription}
								onChange={handleChange}
								maxLength={100}
								className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500"
								placeholder="Maximum two lines"
								required
							/>
						</div>

						<div>
							<label className="block text-sm font-medium text-gray-700">
								Long Description
							</label>
							<textarea
								name="longDescription"
								value={formData.longDescription}
								onChange={handleChange}
								rows={4}
								className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500"
								required
							/>
						</div>

			
						<div className="grid grid-cols-1 gap-6 md:grid-cols-2">
							<div>
								<label className="block text-sm font-medium text-gray-700">
									Size
								</label>
								<select
									name="size"
									value={formData.size}
									onChange={handleChange}
									className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500"
									required
								>
									<option value="">Select Size</option>
									{sizes.map((size) => (
										<option key={size} value={size}>
											{size}
										</option>
									))}
								</select>
							</div>

							<div>
								<label className="block text-sm font-medium text-gray-700">
									Color
								</label>
								<select
									name="color"
									value={formData.color}
									onChange={handleChange}
									className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500"
									required
								>
									<option value="">Select Color</option>
									{colors.map((color) => (
										<option key={color} value={color}>
											{color}
										</option>
									))}
								</select>
							</div>
						</div>

			
						<div>
							<label className="block text-sm font-medium text-gray-700">
								Product Images
							</label>
							<div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
								<div className="space-y-1 text-center">
									<ImagePlus className="mx-auto h-12 w-12 text-gray-400" />
									<div className="flex text-sm text-gray-600">
										<label
											htmlFor="images"
											className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500"
										>
											<span>Upload images</span>
											<input
												id="images"
												name="images"
												type="file"
												multiple
												className="sr-only"
												accept="image/*"
												onChange={(e) =>
													console.log(
														"Files:",
														e.target.files,
													)
												}
											/>
										</label>
										<p className="pl-1">or drag and drop</p>
									</div>
									<p className="text-xs text-gray-500">
										PNG, JPG, GIF up to 10MB
									</p>
								</div>
							</div>
						</div>

						
						<div className="flex justify-end">
							<button
								type="submit"
								className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
							>
								Save Product
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
 */

"use client";
import { Attributes } from "@/components/create-product/attributes";
import { BasicInfo } from "@/components/create-product/basicInfo";
import { Description } from "@/components/create-product/description";
import { ImageUpload } from "@/components/create-product/imageUpload";
import { Pricing } from "@/components/create-product/pricing";
import { ShippingConfig } from "@/components/create-product/shippingConfig";
import { useState } from "react";

// CreateProduct.js (Main Component)
export default function CreateProduct() {
	const [formData, setFormData] = useState({
		name: "",
		brand: "",
		category: "",
		subCategory: "",
		leafCategory: "",
		shortDescription: "",
		longDescription: "",
		size: "",
		color: "",
		weight: "",
		thumbnail: null,
		images: [],
		price: "",
		points: 0,
		shippingOptions: [],
	});

	// Sample data
	const categories = ["Electronics", "Clothing", "Home & Garden", "Books"];
	const subCategories = ["Phones", "Laptops", "Accessories"];
	const leafCategories = ["iPhone", "Samsung", "Google Pixel"];
	const sizes = ["S", "M", "L", "XL"];
	const colors = ["Red", "Blue", "Green", "Black", "White"];
	const brands = ["Apple", "Samsung", "Google", "Sony", "LG"];
	const shippingOptions = [
		{
			id: "standard",
			name: "Standard Shipping",
			price: 5.99,
			duration: "5-7 days",
		},
		{
			id: "express",
			name: "Express Shipping",
			price: 14.99,
			duration: "2-3 days",
		},
		{
			id: "overnight",
			name: "Overnight Shipping",
			price: 29.99,
			duration: "1 day",
		},
	];

	const handleChange = (e) => {
		const { name, value, type, checked } = e.target;

		if (type === "checkbox") {
			const options = [...formData.shippingOptions];
			if (checked) {
				options.push(value);
			} else {
				const index = options.indexOf(value);
				if (index > -1) options.splice(index, 1);
			}
			setFormData((prev) => ({ ...prev, shippingOptions: options }));
		} else {
			setFormData((prev) => ({ ...prev, [name]: value }));
		}
	};

	const handleImageChange = (e) => {
		const files = Array.from(e.target.files);
		setFormData((prev) => ({ ...prev, images: files }));
	};

	const handleThumbnailChange = (e) => {
		const file = e.target.files[0];
		setFormData((prev) => ({ ...prev, thumbnail: file }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("Form submitted:", formData);
	};

	return (
		<div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
			<div className="max-w-3xl mx-auto">
				<div className="bg-white shadow-md rounded-lg p-6">
					<h2 className="text-2xl font-bold mb-6 text-gray-800">
						Create New Product
					</h2>

					<form onSubmit={handleSubmit} className="space-y-8">
						<BasicInfo
							formData={formData}
							handleChange={handleChange}
							categories={categories}
							subCategories={subCategories}
							leafCategories={leafCategories}
							brands={brands}
						/>

						<Description
							formData={formData}
							handleChange={handleChange}
						/>

						<Attributes
							formData={formData}
							handleChange={handleChange}
							sizes={sizes}
							colors={colors}
						/>

						<ImageUpload
							handleImageChange={handleImageChange}
							handleThumbnailChange={handleThumbnailChange}
						/>

						<Pricing
							formData={formData}
							handleChange={handleChange}
						/>

						<ShippingConfig
							formData={formData}
							handleChange={handleChange}
							shippingOptions={shippingOptions}
						/>

						<div className="flex justify-end">
							<button
								type="submit"
								className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 text-sm"
							>
								Save Product
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
