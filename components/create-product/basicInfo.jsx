// components/ProductForm/BasicInfo.js
import React from "react";

export const BasicInfo = ({
	formData,
	handleChange,
	categories,
	subCategories,
	leafCategories,
	brands,
}) => (
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
				className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:ring-blue-500"
				required
			/>
		</div>

		<div>
			<label className="block text-sm font-medium text-gray-700">
				Brand
			</label>
			<select
				name="brand"
				value={formData.brand}
				onChange={handleChange}
				className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:ring-blue-500"
				required
			>
				<option value="">Select Brand</option>
				{brands.map((brand) => (
					<option key={brand} value={brand}>
						{brand}
					</option>
				))}
			</select>
		</div>

		<div>
			<label className="block text-sm font-medium text-gray-700">
				Category
			</label>
			<select
				name="category"
				value={formData.category}
				onChange={handleChange}
				className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:ring-blue-500"
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
				className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:ring-blue-500"
				required
			>
				<option value="">Select Sub Category</option>
				{subCategories.map((subCat) => (
					<option key={subCat} value={subCat}>
						{subCat}
					</option>
				))}
			</select>
		</div>
	</div>
);
