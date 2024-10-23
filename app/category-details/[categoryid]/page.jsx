"use client";
import React, { useState } from "react";
import {
	Pencil,
	Trash2,
	ChevronRight,
	ChevronDown,
	FolderTree,
	Plus,
} from "lucide-react";

export default function CategoryDetails() {
	// Restructured data to show hierarchy
	const [category, setCategory] = useState({
		id: 1,
		name: "Electronics",
		subcategories: [
			{
				id: 1,
				name: "Computers",
				leafCategories: [
					{ id: 1, name: "Laptops" },
					{ id: 2, name: "Desktop PCs" },
				],
			},
			{
				id: 2,
				name: "Smartphones",
				leafCategories: [
					{ id: 3, name: "iPhones" },
					{ id: 4, name: "Android Phones" },
				],
			},
		],
	});

	const [editingItem, setEditingItem] = useState(null);
	const [editingType, setEditingType] = useState(null); // 'main', 'sub', or 'leaf'
	const [editValue, setEditValue] = useState("");
	const [showDeleteModal, setShowDeleteModal] = useState(false);
	const [itemToDelete, setItemToDelete] = useState(null);
	const [expandedSubcategories, setExpandedSubcategories] = useState({});

	const toggleSubcategory = (subcategoryId) => {
		setExpandedSubcategories((prev) => ({
			...prev,
			[subcategoryId]: !prev[subcategoryId],
		}));
	};

	const handleEdit = (item, type) => {
		setEditingItem(item);
		setEditingType(type);
		setEditValue(item.name);
	};

	const handleUpdate = () => {
		if (!editValue.trim()) return;

		if (editingType === "main") {
			setCategory((prev) => ({ ...prev, name: editValue }));
		} else if (editingType === "sub") {
			setCategory((prev) => ({
				...prev,
				subcategories: prev.subcategories.map((sub) =>
					sub.id === editingItem.id
						? { ...sub, name: editValue }
						: sub,
				),
			}));
		} else if (editingType === "leaf") {
			setCategory((prev) => ({
				...prev,
				subcategories: prev.subcategories.map((sub) => ({
					...sub,
					leafCategories: sub.leafCategories.map((leaf) =>
						leaf.id === editingItem.id
							? { ...leaf, name: editValue }
							: leaf,
					),
				})),
			}));
		}

		setEditingItem(null);
		setEditingType(null);
		setEditValue("");
	};

	const handleDelete = (item, type, subcategoryId = null) => {
		setItemToDelete({ item, type, subcategoryId });
		setShowDeleteModal(true);
	};

	const confirmDelete = () => {
		const { item, type, subcategoryId } = itemToDelete;

		if (type === "sub") {
			setCategory((prev) => ({
				...prev,
				subcategories: prev.subcategories.filter(
					(sub) => sub.id !== item.id,
				),
			}));
		} else if (type === "leaf") {
			setCategory((prev) => ({
				...prev,
				subcategories: prev.subcategories.map((sub) =>
					sub.id === subcategoryId
						? {
								...sub,
								leafCategories: sub.leafCategories.filter(
									(leaf) => leaf.id !== item.id,
								),
						  }
						: sub,
				),
			}));
		}

		setShowDeleteModal(false);
		setItemToDelete(null);
	};

	const addSubcategory = () => {
		const newId =
			Math.max(...category.subcategories.map((sub) => sub.id)) + 1;
		setCategory((prev) => ({
			...prev,
			subcategories: [
				...prev.subcategories,
				{
					id: newId,
					name: `New Subcategory ${newId}`,
					leafCategories: [],
				},
			],
		}));
	};

	const addLeafCategory = (subcategoryId) => {
		setCategory((prev) => ({
			...prev,
			subcategories: prev.subcategories.map((sub) => {
				if (sub.id === subcategoryId) {
					const newId =
						sub.leafCategories.length > 0
							? Math.max(
									...sub.leafCategories.map(
										(leaf) => leaf.id,
									),
							  ) + 1
							: 1;
					return {
						...sub,
						leafCategories: [
							...sub.leafCategories,
							{
								id: newId,
								name: `New Leaf Category ${newId}`,
							},
						],
					};
				}
				return sub;
			}),
		}));
	};

	return (
		<div className="p-4 max-w-3xl mx-auto space-y-6">
			<div className="bg-white rounded-lg shadow-sm p-6">
				{/* Main Category Header */}
				<div className="mb-6">
					{editingType === "main" ? (
						<div className="flex items-center gap-2">
							<input
								type="text"
								value={editValue}
								onChange={(e) => setEditValue(e.target.value)}
								className="px-3 py-2 border rounded-md w-full max-w-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
							/>
							<button
								onClick={handleUpdate}
								className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
							>
								Save
							</button>
						</div>
					) : (
						<div className="flex items-center justify-between">
							<div className="flex items-center gap-2">
								<FolderTree className="w-6 h-6 text-gray-600" />
								<h1 className="text-2xl font-bold">
									{category.name}
								</h1>
								<button
									onClick={() => handleEdit(category, "main")}
									className="p-1 hover:bg-gray-100 rounded-full"
								>
									<Pencil className="w-4 h-4 text-gray-600" />
								</button>
							</div>
							<button
								onClick={addSubcategory}
								className="flex items-center gap-1 px-3 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
							>
								<Plus className="w-4 h-4" />
								Add Subcategory
							</button>
						</div>
					)}
				</div>

				{/* Subcategories with their Leaf Categories */}
				<div className="space-y-4">
					{category.subcategories.map((subcategory) => (
						<div key={subcategory.id} className="border rounded-lg">
							{/* Subcategory Header */}
							<div className="flex items-center justify-between p-3 bg-gray-50 rounded-t-lg">
								{editingItem?.id === subcategory.id &&
								editingType === "sub" ? (
									<div className="flex items-center gap-2 flex-1">
										<input
											type="text"
											value={editValue}
											onChange={(e) =>
												setEditValue(e.target.value)
											}
											className="px-3 py-2 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
										/>
										<button
											onClick={handleUpdate}
											className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
										>
											Save
										</button>
									</div>
								) : (
									<>
										<div className="flex items-center gap-2">
											<button
												onClick={() =>
													toggleSubcategory(
														subcategory.id,
													)
												}
												className="p-1 hover:bg-gray-200 rounded-full"
											>
												{expandedSubcategories[
													subcategory.id
												] ? (
													<ChevronDown className="w-4 h-4" />
												) : (
													<ChevronRight className="w-4 h-4" />
												)}
											</button>
											<span className="font-semibold">
												{subcategory.name}
											</span>
										</div>
										<div className="flex items-center gap-2">
											<button
												onClick={() =>
													addLeafCategory(
														subcategory.id,
													)
												}
												className="flex items-center gap-1 px-2 py-1 text-sm text-blue-500 hover:bg-blue-50 rounded-md"
											>
												<Plus className="w-4 h-4" />
												Add Leaf
											</button>
											<button
												onClick={() =>
													handleEdit(
														subcategory,
														"sub",
													)
												}
												className="p-1 hover:bg-gray-200 rounded-full"
											>
												<Pencil className="w-4 h-4 text-gray-600" />
											</button>
											<button
												onClick={() =>
													handleDelete(
														subcategory,
														"sub",
													)
												}
												className="p-1 hover:bg-gray-200 rounded-full"
											>
												<Trash2 className="w-4 h-4 text-red-600" />
											</button>
										</div>
									</>
								)}
							</div>

							{/* Leaf Categories */}
							{expandedSubcategories[subcategory.id] && (
								<div className="p-3 space-y-2">
									{subcategory.leafCategories.map((leaf) => (
										<div
											key={leaf.id}
											className="flex items-center justify-between p-2 bg-gray-50 rounded-md ml-6"
										>
											{editingItem?.id === leaf.id &&
											editingType === "leaf" ? (
												<div className="flex items-center gap-2 flex-1">
													<input
														type="text"
														value={editValue}
														onChange={(e) =>
															setEditValue(
																e.target.value,
															)
														}
														className="px-3 py-2 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
													/>
													<button
														onClick={handleUpdate}
														className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
													>
														Save
													</button>
												</div>
											) : (
												<>
													<span>{leaf.name}</span>
													<div className="flex gap-2">
														<button
															onClick={() =>
																handleEdit(
																	leaf,
																	"leaf",
																)
															}
															className="p-1 hover:bg-gray-200 rounded-full"
														>
															<Pencil className="w-4 h-4 text-gray-600" />
														</button>
														<button
															onClick={() =>
																handleDelete(
																	leaf,
																	"leaf",
																	subcategory.id,
																)
															}
															className="p-1 hover:bg-gray-200 rounded-full"
														>
															<Trash2 className="w-4 h-4 text-red-600" />
														</button>
													</div>
												</>
											)}
										</div>
									))}
								</div>
							)}
						</div>
					))}
				</div>
			</div>

			{/* Delete Confirmation Modal */}
			{showDeleteModal && (
				<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
					<div className="bg-white p-6 rounded-lg max-w-sm w-full mx-4">
						<h3 className="text-lg font-semibold mb-2">
							Are you sure?
						</h3>
						<p className="text-gray-600 mb-4">
							This action cannot be undone. This will permanently
							delete this category
							{itemToDelete?.type === "sub" &&
								" and all its leaf categories"}
							.
						</p>
						<div className="flex justify-end gap-2">
							<button
								onClick={() => setShowDeleteModal(false)}
								className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-md"
							>
								Cancel
							</button>
							<button
								onClick={confirmDelete}
								className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
							>
								Delete
							</button>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}
