import React, { useState } from "react";

export const CreateCoupon = ({ onSubmit }) => {
	const [generationType, setGenerationType] = useState("single");
	const [bulkSettings, setBulkSettings] = useState({
		prefix: "",
		quantity: 1,
		codeLength: 8,
	});
	const [newCoupon, setNewCoupon] = useState({
		code: "",
		type: "store_wide",
		discountType: "percentage",
		discountValue: "",
		minPurchase: "",
		expiryDate: "",
		usageLimit: "",
		products: [],
		categories: [],
		status: "active",
	});

	const handleCouponChange = (e) => {
		const { name, value } = e.target;
		setNewCoupon((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleBulkSettingsChange = (e) => {
		const { name, value } = e.target;
		setBulkSettings((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const generateRandomCode = (length) => {
		const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
		let result = "";
		for (let i = 0; i < length; i++) {
			result += characters.charAt(
				Math.floor(Math.random() * characters.length),
			);
		}
		return result;
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (generationType === "single") {
			onSubmit([{ ...newCoupon }]);
		} else {
			// Generate bulk coupons
			const bulkCoupons = Array.from(
				{ length: parseInt(bulkSettings.quantity) },
				() => ({
					...newCoupon,
					code: `${bulkSettings.prefix}${generateRandomCode(
						bulkSettings.codeLength,
					)}`,
				}),
			);
			onSubmit(bulkCoupons);
		}

		// Reset form
		setNewCoupon({
			code: "",
			type: "store_wide",
			discountType: "percentage",
			discountValue: "",
			minPurchase: "",
			expiryDate: "",
			usageLimit: "",
			products: [],
			categories: [],
			status: "active",
		});
		setBulkSettings({
			prefix: "",
			quantity: 1,
			codeLength: 8,
		});
	};

	return (
		<div className="p-6">
			<h2 className="text-xl font-bold text-gray-900 mb-6">
				Create New Coupon
			</h2>

			{/* Generation Type Selection */}
			<div className="mb-6">
				<label className="block text-sm font-medium text-gray-700 mb-2">
					Generation Type
				</label>
				<div className="flex space-x-4">
					<button
						type="button"
						onClick={() => setGenerationType("single")}
						className={`px-4 py-2 rounded-md ${
							generationType === "single"
								? "bg-blue-600 text-white"
								: "bg-gray-100 text-gray-700 hover:bg-gray-200"
						}`}
					>
						Single Coupon
					</button>
					<button
						type="button"
						onClick={() => setGenerationType("bulk")}
						className={`px-4 py-2 rounded-md ${
							generationType === "bulk"
								? "bg-blue-600 text-white"
								: "bg-gray-100 text-gray-700 hover:bg-gray-200"
						}`}
					>
						Bulk Generation
					</button>
				</div>
			</div>

			<form onSubmit={handleSubmit} className="space-y-6">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					{/* Coupon Code / Bulk Settings */}
					{generationType === "single" ? (
						<div>
							<label className="block text-sm font-medium text-gray-700 mb-1">
								Coupon Code
							</label>
							<input
								type="text"
								name="code"
								required
								value={newCoupon.code}
								onChange={handleCouponChange}
								className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
								placeholder="e.g., SUMMER2024"
							/>
						</div>
					) : (
						<>
							<div>
								<label className="block text-sm font-medium text-gray-700 mb-1">
									Code Prefix
								</label>
								<input
									type="text"
									name="prefix"
									value={bulkSettings.prefix}
									onChange={handleBulkSettingsChange}
									className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
									placeholder="e.g., SUMMER24_"
								/>
							</div>
							<div>
								<label className="block text-sm font-medium text-gray-700 mb-1">
									Number of Coupons
								</label>
								<input
									type="number"
									name="quantity"
									required
									min="1"
									max="1000"
									value={bulkSettings.quantity}
									onChange={handleBulkSettingsChange}
									className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
									placeholder="e.g., 100"
								/>
							</div>
							<div>
								<label className="block text-sm font-medium text-gray-700 mb-1">
									Random Code Length
								</label>
								<input
									type="number"
									name="codeLength"
									required
									min="4"
									max="16"
									value={bulkSettings.codeLength}
									onChange={handleBulkSettingsChange}
									className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
									placeholder="e.g., 8"
								/>
							</div>
						</>
					)}

					{/* Coupon Type */}
					<div>
						<label className="block text-sm font-medium text-gray-700 mb-1">
							Coupon Type
						</label>
						<select
							name="type"
							value={newCoupon.type}
							onChange={handleCouponChange}
							className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
						>
							<option value="store_wide">Store Wide</option>
							<option value="category_specific">
								Category Specific
							</option>
							<option value="product_specific">
								Product Specific
							</option>
						</select>
					</div>

					{/* Conditional Fields based on Coupon Type */}
					{newCoupon.type === "category_specific" && (
						<div>
							<label className="block text-sm font-medium text-gray-700 mb-1">
								Categories
							</label>
							<select
								name="categories"
								multiple
								value={newCoupon.categories}
								onChange={(e) => {
									const selectedCategories = Array.from(
										e.target.selectedOptions,
										(option) => option.value,
									);
									setNewCoupon((prev) => ({
										...prev,
										categories: selectedCategories,
									}));
								}}
								className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
							>
								<option value="electronics">Electronics</option>
								<option value="clothing">Clothing</option>
								<option value="books">Books</option>
								<option value="home">Home & Garden</option>
								<option value="sports">Sports</option>
							</select>
							<p className="text-sm text-gray-500 mt-1">
								Hold Ctrl/Cmd to select multiple
							</p>
						</div>
					)}

					{newCoupon.type === "product_specific" && (
						<div>
							<label className="block text-sm font-medium text-gray-700 mb-1">
								Products
							</label>
							<select
								name="products"
								multiple
								value={newCoupon.products}
								onChange={(e) => {
									const selectedProducts = Array.from(
										e.target.selectedOptions,
										(option) => option.value,
									);
									setNewCoupon((prev) => ({
										...prev,
										products: selectedProducts,
									}));
								}}
								className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
							>
								<option value="laptop">Laptop</option>
								<option value="smartphone">Smartphone</option>
								<option value="headphones">Headphones</option>
								<option value="watch">Watch</option>
								<option value="camera">Camera</option>
							</select>
							<p className="text-sm text-gray-500 mt-1">
								Hold Ctrl/Cmd to select multiple
							</p>
						</div>
					)}

					{/* Discount Type */}
					<div>
						<label className="block text-sm font-medium text-gray-700 mb-1">
							Discount Type
						</label>
						<select
							name="discountType"
							value={newCoupon.discountType}
							onChange={handleCouponChange}
							className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
						>
							<option value="percentage">Percentage</option>
							<option value="fixed">Fixed Amount</option>
						</select>
					</div>

					{/* Discount Value */}
					<div>
						<label className="block text-sm font-medium text-gray-700 mb-1">
							Discount Value
						</label>
						<input
							type="number"
							name="discountValue"
							required
							value={newCoupon.discountValue}
							onChange={handleCouponChange}
							className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
							placeholder={
								newCoupon.discountType === "percentage"
									? "e.g., 20"
									: "e.g., 10.00"
							}
						/>
					</div>

					{/* Minimum Purchase */}
					<div>
						<label className="block text-sm font-medium text-gray-700 mb-1">
							Minimum Purchase Amount
						</label>
						<input
							type="number"
							name="minPurchase"
							value={newCoupon.minPurchase}
							onChange={handleCouponChange}
							className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
							placeholder="e.g., 50.00"
						/>
					</div>

					{/* Expiry Date */}
					<div>
						<label className="block text-sm font-medium text-gray-700 mb-1">
							Expiry Date
						</label>
						<input
							type="date"
							name="expiryDate"
							required
							value={newCoupon.expiryDate}
							onChange={handleCouponChange}
							className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
						/>
					</div>

					{/* Usage Limit */}
					<div>
						<label className="block text-sm font-medium text-gray-700 mb-1">
							Usage Limit
						</label>
						<input
							type="number"
							name="usageLimit"
							value={newCoupon.usageLimit}
							onChange={handleCouponChange}
							className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
							placeholder="Leave empty for unlimited"
						/>
					</div>
				</div>

				<button
					type="submit"
					className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
				>
					{generationType === "single"
						? "Create Coupon"
						: "Generate Coupons"}
				</button>
			</form>
		</div>
	);
};
