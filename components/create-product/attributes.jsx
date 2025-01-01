import React, { useState } from "react";
import { Plus, Trash2, X } from "lucide-react";

export const Attributes = ({ formData, handleChange, sizes, colors }) => {
	const [variants, setVariants] = useState(
		formData.variants || [
			{
				sizes: [],
				colors: [],
				material: "",
				weight: "",
			},
		],
	);

	const materials = [
		"Cotton",
		"Polyester",
		"Wool",
		"Leather",
		"Denim",
		"Silk",
		"Linen",
		"Nylon",
		"Canvas",
		"Other",
	];

	const handleVariantChange = (index, field, value) => {
		const updatedVariants = variants.map((variant, i) => {
			if (i === index) {
				return { ...variant, [field]: value };
			}
			return variant;
		});

		setVariants(updatedVariants);
		handleChange({
			target: {
				name: "variants",
				value: updatedVariants,
			},
		});
	};

	const handleMultiSelect = (index, field, value) => {
		const updatedVariants = variants.map((variant, i) => {
			if (i === index) {
				const currentValues = variant[field] || [];
				let newValues;
				if (currentValues.includes(value)) {
					newValues = currentValues.filter((item) => item !== value);
				} else {
					newValues = [...currentValues, value];
				}
				return { ...variant, [field]: newValues };
			}
			return variant;
		});

		setVariants(updatedVariants);
		handleChange({
			target: {
				name: "variants",
				value: updatedVariants,
			},
		});
	};

	const removeSelectedItem = (index, field, itemToRemove) => {
		handleMultiSelect(index, field, itemToRemove);
	};

	const addVariant = () => {
		const newVariant = {
			sizes: [],
			colors: [],
			material: "",
			weight: "",
		};
		setVariants([...variants, newVariant]);
		handleChange({
			target: {
				name: "variants",
				value: [...variants, newVariant],
			},
		});
	};

	const removeVariant = (index) => {
		const updatedVariants = variants.filter((_, i) => i !== index);
		setVariants(updatedVariants);
		handleChange({
			target: {
				name: "variants",
				value: updatedVariants,
			},
		});
	};

	return (
		<div className="space-y-6">
			<div className="flex items-center justify-between">
				<h3 className="text-lg font-medium text-gray-900">
					Product Variants
				</h3>
				<button
					type="button"
					onClick={addVariant}
					className="inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
				>
					<Plus className="h-4 w-4 mr-2" />
					Add Variant
				</button>
			</div>

			{variants.map((variant, index) => (
				<div
					key={index}
					className="border rounded-lg p-4 space-y-4 bg-gray-50"
				>
					<div className="flex justify-between items-center">
						<h4 className="text-md font-medium text-gray-700">
							Variant {index + 1}
						</h4>
						{variants.length > 1 && (
							<button
								type="button"
								onClick={() => removeVariant(index)}
								className="text-red-600 hover:text-red-700"
							>
								<Trash2 className="h-5 w-5" />
							</button>
						)}
					</div>

					<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
						<div>
							<label className="block text-sm font-medium text-gray-700">
								Sizes
							</label>
							<div className="mt-1 space-y-2">
								<select
									onChange={(e) =>
										handleMultiSelect(
											index,
											"sizes",
											e.target.value,
										)
									}
									className="block w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:ring-blue-500"
								>
									<option value="">Add Size</option>
									{sizes
										.filter(
											(size) =>
												!variant.sizes.includes(size),
										)
										.map((size) => (
											<option key={size} value={size}>
												{size}
											</option>
										))}
								</select>
								<div className="flex flex-wrap gap-2">
									{variant.sizes.map((size) => (
										<span
											key={size}
											className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
										>
											{size}
											<button
												type="button"
												onClick={() =>
													removeSelectedItem(
														index,
														"sizes",
														size,
													)
												}
												className="ml-1 inline-flex items-center"
											>
												<X className="h-3 w-3" />
											</button>
										</span>
									))}
								</div>
							</div>
						</div>

						<div>
							<label className="block text-sm font-medium text-gray-700">
								Colors
							</label>
							<div className="mt-1 space-y-2">
								<select
									onChange={(e) =>
										handleMultiSelect(
											index,
											"colors",
											e.target.value,
										)
									}
									className="block w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:ring-blue-500"
								>
									<option value="">Add Color</option>
									{colors
										.filter(
											(color) =>
												!variant.colors.includes(color),
										)
										.map((color) => (
											<option key={color} value={color}>
												{color}
											</option>
										))}
								</select>
								<div className="flex flex-wrap gap-2">
									{variant.colors.map((color) => (
										<span
											key={color}
											className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
										>
											{color}
											<button
												type="button"
												onClick={() =>
													removeSelectedItem(
														index,
														"colors",
														color,
													)
												}
												className="ml-1 inline-flex items-center"
											>
												<X className="h-3 w-3" />
											</button>
										</span>
									))}
								</div>
							</div>
						</div>

						<div>
							<label className="block text-sm font-medium text-gray-700">
								Material
							</label>
							<select
								value={variant.material}
								onChange={(e) =>
									handleVariantChange(
										index,
										"material",
										e.target.value,
									)
								}
								className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:ring-blue-500"
								required
							>
								<option value="">Select Material</option>
								{materials.map((material) => (
									<option key={material} value={material}>
										{material}
									</option>
								))}
							</select>
						</div>

						<div>
							<label className="block text-sm font-medium text-gray-700">
								Weight (kg)
							</label>
							<input
								type="number"
								value={variant.weight}
								onChange={(e) =>
									handleVariantChange(
										index,
										"weight",
										e.target.value,
									)
								}
								min="0"
								step="0.1"
								className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:ring-blue-500"
								required
							/>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};
