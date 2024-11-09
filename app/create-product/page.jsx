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
			images: files,
		}));
	};

	const resetForm = () => {
		setFormData(initialFormState);
		const fileInputs = document.querySelectorAll('input[type="file"]');
		fileInputs.forEach((input) => {
			input.value = "";
		});
	};

	const formatDataForAPI = () => {
		const now = new Date().toISOString();
		const productId = generateProductId();

		// Create FormData object to handle file uploads
		const formDataToSend = new FormData();

		// Add the thumbnail if it exists
		if (formData.thumbnail) {
			formDataToSend.append("thumbnail", formData.thumbnail);
		}

		// Add all product images
		if (formData.images && formData.images.length > 0) {
			formData.images.forEach((image) => {
				formDataToSend.append(`images`, image);
			});
		}

		// Create the product data object
		const productData = {
			product: {
				product_id: productId,
				name: formData.name,
				short_description: formData.shortDescription,
				vendor_id: "VENDOR00001",
				brand_id: formData.brand,
				category_id: formData.category,
				sub_category_id: formData.subCategory,
				leaf_category_id: formData.leafCategory,
				price: parseFloat(formData.price),
				points: parseInt(formData.points),
				currency: "USD",
				status: "active",
				stock: 50,
				created_by: "USER000001",
				created_at: now,
				updated_at: now,
			},
			long_description: {
				product_id: productId,
				long_description: formData.longDescription,
				created_at: now,
				updated_at: now,
			},
			attributes: {
				product_id: productId,
				size: formData.size,
				color: formData.color,
				weight: formData.weight,
				created_at: now,
				updated_at: now,
			},
		};

		// Add the JSON data to the FormData
		formDataToSend.append("productData", JSON.stringify(productData));

		return formDataToSend;
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsSubmitting(true);

		try {
			const formDataToSend = formatDataForAPI();

			const response = await fetch(
				"http://localhost:8080/rango/api/new/product/create",
				{
					method: "POST",
					body: formDataToSend,
				},
			);

			if (!response.ok) {
				throw new Error("Failed to create product");
			}

			const result = await response.json();
			console.log("Product created:", result);

			setShowSuccess(true);
			resetForm();

			setTimeout(() => {
				setShowSuccess(false);
			}, 5000);
		} catch (error) {
			console.error("Error submitting form:", error);
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
							handleChange={handleChange}
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
