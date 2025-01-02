"use client";
import { Attributes } from "@/components/create-product/attributes";
import { BasicInfo } from "@/components/create-product/basicInfo";
import { Description } from "@/components/create-product/description";
import { ImageUpload } from "@/components/create-product/imageUpload";
import { Pricing } from "@/components/create-product/pricing";
import { useState } from "react";

const initialFormState = {
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
	stock: 50,
	currency: "USD",
	lowStockThreshold: 0,
};

const generateProductId = () => {
	const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
	let result = "";
	for (let i = 0; i < 8; i++) {
		result += characters.charAt(
			Math.floor(Math.random() * characters.length),
		);
	}
	return result;
};

export default function CreateProduct() {
	const [formData, setFormData] = useState(initialFormState);
	const [showSuccess, setShowSuccess] = useState(false);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [error, setError] = useState(null);

	// Sample data
	const categories = ["Electronics", "Clothing", "Home & Garden", "Books"];
	const subCategories = ["Phones", "Laptops", "Accessories"];
	const leafCategories = ["iPhone", "Samsung", "Google Pixel"];
	const sizes = ["S", "M", "L", "XL"];
	const colors = ["Red", "Blue", "Green", "Black", "White"];
	const brands = ["Apple", "Samsung", "Google", "Sony", "LG"];

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleThumbnailChange = (file) => {
		setFormData((prev) => ({
			...prev,
			thumbnail: file,
		}));
	};

	const handleImageChange = (files) => {
		setFormData((prev) => ({
			...prev,
			images: Array.from(files),
		}));
	};

	const resetForm = () => {
		setFormData(initialFormState);
		setError(null);
		const fileInputs = document.querySelectorAll('input[type="file"]');
		fileInputs.forEach((input) => {
			input.value = "";
		});
	};

	const validateForm = () => {
		const requiredFields = [
			"name",
			"brand",
			"category",
			"shortDescription",
			"price",
		];
		const missingFields = requiredFields.filter(
			(field) => !formData[field],
		);

		if (missingFields.length > 0) {
			setError(
				`Please fill in all required fields: ${missingFields.join(
					", ",
				)}`,
			);
			return false;
		}

		if (!formData.thumbnail) {
			setError("Please upload a thumbnail image");
			return false;
		}

		return true;
	};

	const formatDataForAPI = () => {
		const now = new Date().toISOString();
		const productId = generateProductId();

		// Create FormData object
		const formDataToSend = new FormData();

		// Add all the text/number data as a JSON string with the key 'data'
		const productData = {
			product_id: productId,
			name: formData.name,
			short_description: formData.shortDescription,
			brand: formData.brand,
			category: formData.category,
			sub_category: formData.subCategory,
			leaf_category: formData.leafCategory,
			price: parseFloat(formData.price),
			points: parseInt(formData.points),
			currency: "KSH",
			status: "active",
			stock: parseInt(formData.stock),
			created_at: now,
			updated_at: now,
			long_description: formData.longDescription,
			size: formData.size,
			color: formData.color,
			weight: formData.weight,
			low_stock_threshold: parseInt(formData.lowStockThreshold),
		};

		// Add the JSON data
		formDataToSend.append("data", JSON.stringify(productData));

		// Add thumbnail
		if (formData.thumbnail) {
			formDataToSend.append("thumbnail", formData.thumbnail);
		}

		// Add product images
		if (formData.images?.length > 0) {
			formData.images.forEach((image, index) => {
				formDataToSend.append(`images`, image);
			});
		}

		// Debug logging
		console.log("Product Data:", productData);
		console.log("FormData contents:");
		for (let pair of formDataToSend.entries()) {
			console.log(pair[0], pair[1]);
		}

		return formDataToSend;
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setError(null);

		if (!validateForm()) {
			return;
		}

		setIsSubmitting(true);

		try {
			const formDataToSend = formatDataForAPI();

			const response = await fetch(
				"http://localhost:8080/rango/api/new/product/create-product",
				{
					method: "POST",
					body: formDataToSend,
				},
			);

			const responseText = await response.text();
			console.log("Raw server response:", responseText);

			if (!response.ok) {
				throw new Error(`Failed to create product: ${responseText}`);
			}

			let result;
			try {
				result = JSON.parse(responseText);
			} catch (e) {
				console.warn("Could not parse response as JSON:", responseText);
				result = responseText;
			}

			console.log("Product created:", result);

			setShowSuccess(true);
			resetForm();

			setTimeout(() => {
				setShowSuccess(false);
			}, 5000);
		} catch (error) {
			console.error("Error submitting form:", error);
			setError(
				error.message || "Failed to create product. Please try again.",
			);
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
			<div className="max-w-3xl mx-auto">
				{showSuccess && (
					<div className="mb-6 bg-green-50 border border-green-200 rounded-lg p-4">
						<div className="flex justify-between items-center">
							<p className="text-green-800">
								Product has been created successfully!
							</p>
							<button
								onClick={() => setShowSuccess(false)}
								className="text-green-800 hover:text-green-900"
							>
								<svg
									className="w-4 h-4"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M6 18L18 6M6 6l12 12"
									/>
								</svg>
							</button>
						</div>
					</div>
				)}

				{error && (
					<div className="mb-6 bg-red-50 border border-red-200 rounded-lg p-4">
						<p className="text-red-800">{error}</p>
					</div>
				)}

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
							formData={formData}
							handleThumbnailChange={handleThumbnailChange}
							handleImageChange={handleImageChange}
						/>

						<Pricing
							formData={formData}
							handleChange={handleChange}
						/>

						<div className="flex justify-end gap-4">
							<button
								type="button"
								onClick={resetForm}
								className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 text-sm"
							>
								Reset Form
							</button>
							<button
								type="submit"
								disabled={isSubmitting}
								className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 text-sm disabled:opacity-50 disabled:cursor-not-allowed"
							>
								{isSubmitting
									? "Adding Product..."
									: "Add Product"}
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
