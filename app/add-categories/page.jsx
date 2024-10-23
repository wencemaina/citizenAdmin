"use client";
import React, { useState } from "react";

export default function AddCategories() {
	const [category, setCategory] = useState("");
	const [subCategories, setSubCategories] = useState([
		{ name: "", leafCategories: [""] },
	]);

	const handleFormSubmit = (e) => {
		e.preventDefault();
		console.log("Category:", category);
		console.log("Sub Categories with Leaf Categories:", subCategories);
		// Add the logic to submit the category data to the backend here
	};

	const handleReset = () => {
		setCategory("");
		setSubCategories([{ name: "", leafCategories: [""] }]);
	};

	// Add or Remove Sub Category
	const addSubCategory = () =>
		setSubCategories([
			...subCategories,
			{ name: "", leafCategories: [""] },
		]);

	const removeSubCategory = (index) => {
		const newSubCategories = subCategories.filter((_, i) => i !== index);
		setSubCategories(newSubCategories);
	};

	// Update Sub Category Input
	const updateSubCategory = (index, value) => {
		const updatedSubCategories = [...subCategories];
		updatedSubCategories[index].name = value;
		setSubCategories(updatedSubCategories);
	};

	// Add or Remove Leaf Category within a specific subcategory
	const addLeafCategory = (subIndex) => {
		const updatedSubCategories = [...subCategories];
		updatedSubCategories[subIndex].leafCategories.push("");
		setSubCategories(updatedSubCategories);
	};

	const removeLeafCategory = (subIndex, leafIndex) => {
		const updatedSubCategories = [...subCategories];
		updatedSubCategories[subIndex].leafCategories = updatedSubCategories[
			subIndex
		].leafCategories.filter((_, i) => i !== leafIndex);
		setSubCategories(updatedSubCategories);
	};

	// Update Leaf Category Input
	const updateLeafCategory = (subIndex, leafIndex, value) => {
		const updatedSubCategories = [...subCategories];
		updatedSubCategories[subIndex].leafCategories[leafIndex] = value;
		setSubCategories(updatedSubCategories);
	};

	return (
		<div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
			<h1 className="text-2xl font-semibold text-center text-gray-700 mb-6">
				Create New Category
			</h1>
			<form onSubmit={handleFormSubmit} className="space-y-6">
				{/* Category */}
				<div>
					<label className="block text-sm font-medium text-gray-700 mb-1">
						Category
					</label>
					<input
						type="text"
						value={category}
						onChange={(e) => setCategory(e.target.value)}
						placeholder="Enter Category Name"
						className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
					/>
				</div>

				{/* Sub Categories with Leaf Categories */}
				{subCategories.map((subCategory, subIndex) => (
					<div key={subIndex} className="border p-4 rounded-lg mb-4">
						{/* Sub Category Name */}
						<div className="flex space-x-2 mb-2">
							<input
								type="text"
								value={subCategory.name}
								onChange={(e) =>
									updateSubCategory(subIndex, e.target.value)
								}
								placeholder={`Sub Category ${subIndex + 1}`}
								className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
							/>
							<button
								type="button"
								onClick={() => removeSubCategory(subIndex)}
								className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
							>
								Remove
							</button>
						</div>

						{/* Leaf Categories for each Sub Category */}
						{subCategory.leafCategories.map(
							(leafCategory, leafIndex) => (
								<div
									key={leafIndex}
									className="flex space-x-2 mb-2"
								>
									<input
										type="text"
										value={leafCategory}
										onChange={(e) =>
											updateLeafCategory(
												subIndex,
												leafIndex,
												e.target.value,
											)
										}
										placeholder={`Leaf Category ${
											leafIndex + 1
										}`}
										className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
									/>
									<button
										type="button"
										onClick={() =>
											removeLeafCategory(
												subIndex,
												leafIndex,
											)
										}
										className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
									>
										Remove
									</button>
								</div>
							),
						)}
						<button
							type="button"
							onClick={() => addLeafCategory(subIndex)}
							className="mt-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
						>
							Add Leaf Category
						</button>
					</div>
				))}
				<button
					type="button"
					onClick={addSubCategory}
					className="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
				>
					Add Sub Category
				</button>

				{/* Action Buttons */}
				<div className="flex justify-between items-center">
					<button
						type="submit"
						className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none"
					>
						Create Category
					</button>
					<button
						type="button"
						onClick={handleReset}
						className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 focus:outline-none"
					>
						Reset
					</button>
				</div>
			</form>
		</div>
	);
}
