import React, { useState } from "react";
import { Pencil, Trash2, ChevronRight, FolderTree } from "lucide-react";

export default function CategoryDetails() {
	// Sample data structure - replace with your actual data
	const [category, setCategory] = useState({
		id: 1,
		name: "Electronics",
		subcategories: [
			{ id: 1, name: "Computers" },
			{ id: 2, name: "Smartphones" },
		],
		leafCategories: [
			{ id: 1, name: "Laptops", parentId: 1 },
			{ id: 2, name: "Desktop PCs", parentId: 1 },
			{ id: 3, name: "iPhones", parentId: 2 },
			{ id: 4, name: "Android Phones", parentId: 2 },
		],
	});

	// State for editing
	const [editingItem, setEditingItem] = useState(null);
	const [editingType, setEditingType] = useState(null); // 'main', 'sub', or 'leaf'
	const [editValue, setEditValue] = useState("");

	// State for delete confirmation
	const [showDeleteModal, setShowDeleteModal] = useState(false);
	const [itemToDelete, setItemToDelete] = useState(null);

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
				leafCategories: prev.leafCategories.map((leaf) =>
					leaf.id === editingItem.id
						? { ...leaf, name: editValue }
						: leaf,
				),
			}));
		}

		setEditingItem(null);
		setEditingType(null);
		setEditValue("");
	};

	const handleDelete = (item, type) => {
		setItemToDelete({ item, type });
		setShowDeleteModal(true);
	};

	const confirmDelete = () => {
		const { item, type } = itemToDelete;

		if (type === "sub") {
			setCategory((prev) => ({
				...prev,
				subcategories: prev.subcategories.filter(
					(sub) => sub.id !== item.id,
				),
				leafCategories: prev.leafCategories.filter(
					(leaf) => leaf.parentId !== item.id,
				),
			}));
		} else if (type === "leaf") {
			setCategory((prev) => ({
				...prev,
				leafCategories: prev.leafCategories.filter(
					(leaf) => leaf.id !== item.id,
				),
			}));
		}

		setShowDeleteModal(false);
		setItemToDelete(null);
	};

	return (
		<div className="p-4 max-w-3xl mx-auto space-y-6">
			<div className="bg-white rounded-lg shadow-sm p-6">
				{/* Header */}
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
					)}
				</div>

				{/* Subcategories Section */}
				<div className="mb-6">
					<h2 className="text-lg font-semibold mb-2">
						Subcategories
					</h2>
					<div className="space-y-2">
						{category.subcategories.map((sub) => (
							<div
								key={sub.id}
								className="flex items-center justify-between p-2 bg-gray-50 rounded-md"
							>
								{editingItem?.id === sub.id &&
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
											className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
										>
											Save
										</button>
									</div>
								) : (
									<>
										<div className="flex items-center gap-2">
											<ChevronRight className="w-4 h-4 text-gray-600" />
											<span>{sub.name}</span>
										</div>
										<div className="flex gap-2">
											<button
												onClick={() =>
													handleEdit(sub, "sub")
												}
												className="p-1 hover:bg-gray-200 rounded-full"
											>
												<Pencil className="w-4 h-4 text-gray-600" />
											</button>
											<button
												onClick={() =>
													handleDelete(sub, "sub")
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
				</div>

				{/* Leaf Categories Section */}
				<div>
					<h2 className="text-lg font-semibold mb-2">
						Leaf Categories
					</h2>
					<div className="space-y-2">
						{category.leafCategories.map((leaf) => (
							<div
								key={leaf.id}
								className="flex items-center justify-between p-2 bg-gray-50 rounded-md"
							>
								{editingItem?.id === leaf.id &&
								editingType === "leaf" ? (
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
											className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
										>
											Save
										</button>
									</div>
								) : (
									<>
										<div className="flex items-center gap-2">
											<ChevronRight className="w-4 h-4 text-gray-600" />
											<span>{leaf.name}</span>
										</div>
										<div className="flex gap-2">
											<button
												onClick={() =>
													handleEdit(leaf, "leaf")
												}
												className="p-1 hover:bg-gray-200 rounded-full"
											>
												<Pencil className="w-4 h-4 text-gray-600" />
											</button>
											<button
												onClick={() =>
													handleDelete(leaf, "leaf")
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
								className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
							>
								Cancel
							</button>
							<button
								onClick={confirmDelete}
								className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
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
