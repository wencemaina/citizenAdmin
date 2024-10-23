"use client";
import React, { useState } from "react";
export default function AddCategories() {
	const [category, setCategory] = useState("");
	const [subCategories, setSubCategories] = useState([""]);
	const [leafCategories, setLeafCategories] = useState([""]);

	const handleFormSubmit = (e) => {
		e.preventDefault();
		console.log("Category:", category);
		console.log("Sub Categories:", subCategories);
		console.log("Leaf Categories:", leafCategories);
		// You can add the logic to submit the category data to the backend here
	};

	const handleReset = () => {
		setCategory("");
		setSubCategories([""]);
		setLeafCategories([""]);
	};

	// Add or Remove Sub Category
	const addSubCategory = () => setSubCategories([...subCategories, ""]);
	const removeSubCategory = (index) => {
		const newSubCategories = subCategories.filter((_, i) => i !== index);
		setSubCategories(newSubCategories);
	};

	// Add or Remove Leaf Category
	const addLeafCategory = () => setLeafCategories([...leafCategories, ""]);
	const removeLeafCategory = (index) => {
		const newLeafCategories = leafCategories.filter((_, i) => i !== index);
		setLeafCategories(newLeafCategories);
	};

	// Update Sub Category Input
	const updateSubCategory = (index, value) => {
		const updatedSubCategories = [...subCategories];
		updatedSubCategories[index] = value;
		setSubCategories(updatedSubCategories);
	};

	// Update Leaf Category Input
	const updateLeafCategory = (index, value) => {
		const updatedLeafCategories = [...leafCategories];
		updatedLeafCategories[index] = value;
		setLeafCategories(updatedLeafCategories);
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

				{/* Sub Categories */}
				<div>
					<label className="block text-sm font-medium text-gray-700 mb-1">
						Sub Categories
					</label>
					{subCategories.map((subCategory, index) => (
						<div key={index} className="flex space-x-2 mb-2">
							<input
								type="text"
								value={subCategory}
								onChange={(e) =>
									updateSubCategory(index, e.target.value)
								}
								placeholder={`Sub Category ${index + 1}`}
								className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
							/>
							<button
								type="button"
								onClick={() => removeSubCategory(index)}
								className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
							>
								Remove
							</button>
						</div>
					))}
					<button
						type="button"
						onClick={addSubCategory}
						className="mt-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
					>
						Add Sub Category
					</button>
				</div>

				{/* Leaf Categories */}
				<div>
					<label className="block text-sm font-medium text-gray-700 mb-1">
						Leaf Categories
					</label>
					{leafCategories.map((leafCategory, index) => (
						<div key={index} className="flex space-x-2 mb-2">
							<input
								type="text"
								value={leafCategory}
								onChange={(e) =>
									updateLeafCategory(index, e.target.value)
								}
								placeholder={`Leaf Category ${index + 1}`}
								className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
							/>
							<button
								type="button"
								onClick={() => removeLeafCategory(index)}
								className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
							>
								Remove
							</button>
						</div>
					))}
					<button
						type="button"
						onClick={addLeafCategory}
						className="mt-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
					>
						Add Leaf Category
					</button>
				</div>

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
