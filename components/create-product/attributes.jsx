// components/ProductForm/Attributes.js
export const Attributes = ({ formData, handleChange, sizes, colors }) => (
	<div className="grid grid-cols-1 gap-6 md:grid-cols-3">
		<div>
			<label className="block text-sm font-medium text-gray-700">
				Size
			</label>
			<select
				name="size"
				value={formData.size}
				onChange={handleChange}
				className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:ring-blue-500"
				required
			>
				<option value="">Select Size</option>
				{sizes.map((size) => (
					<option key={size} value={size}>
						{size}
					</option>
				))}
			</select>
		</div>

		<div>
			<label className="block text-sm font-medium text-gray-700">
				Color
			</label>
			<select
				name="color"
				value={formData.color}
				onChange={handleChange}
				className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:ring-blue-500"
				required
			>
				<option value="">Select Color</option>
				{colors.map((color) => (
					<option key={color} value={color}>
						{color}
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
				name="weight"
				value={formData.weight}
				onChange={handleChange}
				min="0"
				step="0.1"
				className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:ring-blue-500"
				required
			/>
		</div>
	</div>
);
