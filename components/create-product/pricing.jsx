// components/ProductForm/Pricing.js
export const Pricing = ({ formData, handleChange }) => (
	<div className="grid grid-cols-1 gap-6 md:grid-cols-2">
		<div>
			<label className="block text-sm font-medium text-gray-700">
				Unit Price
			</label>
			<div className="mt-1 relative rounded-md shadow-sm">
				<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
					<span className="text-gray-500 sm:text-sm">$</span>
				</div>
				<input
					type="number"
					name="price"
					value={formData.price}
					onChange={handleChange}
					min="0"
					step="0.01"
					className="mt-1 block w-full rounded-md border border-gray-300 pl-7 px-3 py-2 text-sm focus:border-blue-500 focus:ring-blue-500"
					required
				/>
			</div>
		</div>

		<div>
			<label className="block text-sm font-medium text-gray-700">
				Reward Points
			</label>
			<input
				type="number"
				name="points"
				value={formData.points}
				onChange={handleChange}
				min="0"
				className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:ring-blue-500"
				required
			/>
		</div>
	</div>
);
