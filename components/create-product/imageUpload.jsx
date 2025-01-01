"use client";

import React, { useState, useRef, useEffect } from "react";
import { ImagePlus } from "lucide-react";

export function ImageUpload({
	formData,
	handleThumbnailChange,
	handleImageChange,
}) {
	const [thumbnailPreview, setThumbnailPreview] = useState(null);
	const [productImages, setProductImages] = useState([]);
	const [isDraggingThumbnail, setIsDraggingThumbnail] = useState(false);
	const [isDraggingProducts, setIsDraggingProducts] = useState(false);

	const thumbnailRef = useRef(null);
	const productsRef = useRef(null);

	const handleDragOver = (e, setIsDragging) => {
		e.preventDefault();
		e.stopPropagation();
		setIsDragging(true);
	};

	const handleDragLeave = (e, setIsDragging) => {
		e.preventDefault();
		e.stopPropagation();
		setIsDragging(false);
	};

	const handleDrop = (e, type) => {
		e.preventDefault();
		e.stopPropagation();

		// Reset dragging states
		setIsDraggingThumbnail(false);
		setIsDraggingProducts(false);

		const files = Array.from(e.dataTransfer.files);

		if (type === "thumbnail") {
			// Handle thumbnail drop
			const file = files[0];
			if (file && file.type.startsWith("image/")) {
				handleThumbnailSelect(file);
			}
		} else if (type === "products") {
			// Handle product images drop
			handleProductImagesSelect(files);
		}
	};

	const handleThumbnailSelect = (file) => {
		if (!file || !file.type.startsWith("image/")) return;

		const reader = new FileReader();
		reader.onload = (e) => {
			setThumbnailPreview(e.target.result);
			handleThumbnailChange(file);
		};
		reader.readAsDataURL(file);
	};

	const handleProductImagesSelect = (files) => {
		const validImageFiles = Array.from(files).filter((file) =>
			file.type.startsWith("image/"),
		);

		const newImages = validImageFiles.map((file) => ({
			preview: URL.createObjectURL(file),
			file,
		}));

		setProductImages((prev) => {
			const updatedImages = [...prev, ...newImages];
			handleImageChange(updatedImages.map((img) => img.file));
			return updatedImages;
		});
	};

	const handleRemoveProductImage = (indexToRemove) => {
		setProductImages((prev) => {
			const newImages = prev.filter(
				(_, index) => index !== indexToRemove,
			);
			handleImageChange(newImages.map((img) => img.file));
			return newImages;
		});
	};

	const handleRemoveThumbnail = () => {
		setThumbnailPreview(null);
		handleThumbnailChange(null);
	};

	useEffect(() => {
		return () => {
			productImages.forEach((image) => {
				URL.revokeObjectURL(image.preview);
			});
		};
	}, [productImages]);

	return (
		<div className="space-y-6">
			{/* Thumbnail Upload */}
			<div>
				<label className="block text-sm font-medium text-gray-700">
					Thumbnail Image
				</label>
				<div
					className={`mt-1 flex justify-center px-6 pt-5 pb-6 border-2 ${
						isDraggingThumbnail
							? "border-blue-400 bg-blue-50"
							: "border-gray-300"
					} border-dashed rounded-md relative cursor-pointer`}
					onDragOver={(e) =>
						handleDragOver(e, setIsDraggingThumbnail)
					}
					onDragLeave={(e) =>
						handleDragLeave(e, setIsDraggingThumbnail)
					}
					onDrop={(e) => handleDrop(e, "thumbnail")}
					onClick={() => thumbnailRef.current?.click()}
				>
					<div className="space-y-1 text-center">
						{thumbnailPreview ? (
							<div className="relative inline-block">
								<img
									src={thumbnailPreview}
									alt="Thumbnail preview"
									className="mx-auto h-32 w-32 object-cover rounded-md"
								/>
								<button
									type="button"
									onClick={(e) => {
										e.stopPropagation();
										handleRemoveThumbnail();
									}}
									className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
								>
									×
								</button>
							</div>
						) : (
							<>
								<ImagePlus className="mx-auto h-12 w-12 text-gray-400" />
								<div className="flex text-sm text-gray-600 justify-center">
									<span className="text-blue-600 hover:text-blue-500">
										Upload thumbnail
									</span>
									<input
										ref={thumbnailRef}
										type="file"
										className="hidden"
										accept="image/*"
										onChange={(e) =>
											handleThumbnailSelect(
												e.target.files[0],
											)
										}
									/>
								</div>
								<p className="text-xs text-gray-500">
									Drop image here or click to upload
								</p>
							</>
						)}
					</div>
				</div>
			</div>

			{/* Product Images Upload */}
			<div>
				<label className="block text-sm font-medium text-gray-700">
					Product Images
				</label>
				<div
					className={`mt-1 px-6 pt-5 pb-6 border-2 ${
						isDraggingProducts
							? "border-blue-400 bg-blue-50"
							: "border-gray-300"
					} border-dashed rounded-md relative cursor-pointer`}
					onDragOver={(e) => handleDragOver(e, setIsDraggingProducts)}
					onDragLeave={(e) =>
						handleDragLeave(e, setIsDraggingProducts)
					}
					onDrop={(e) => handleDrop(e, "products")}
					onClick={() => productsRef.current?.click()}
				>
					<div className="space-y-4">
						<div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
							{productImages.map((image, index) => (
								<div key={index} className="relative group">
									<img
										src={image.preview}
										alt={`Product ${index + 1}`}
										className="h-24 w-24 object-cover rounded-md"
									/>
									<button
										type="button"
										onClick={(e) => {
											e.stopPropagation();
											handleRemoveProductImage(index);
										}}
										className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 opacity-0 group-hover:opacity-100 transition-opacity"
									>
										×
									</button>
								</div>
							))}
							<div className="flex items-center justify-center h-24 w-24 border-2 border-dashed border-gray-300 rounded-md">
								<ImagePlus className="h-8 w-8 text-gray-400" />
								<input
									ref={productsRef}
									type="file"
									className="hidden"
									accept="image/*"
									multiple
									onChange={(e) =>
										handleProductImagesSelect(
											e.target.files,
										)
									}
								/>
							</div>
						</div>
						<p className="text-xs text-gray-500 text-center">
							Drop images here or click to upload
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
