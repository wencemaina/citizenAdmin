// components/ProductForm/Description.js
export const Description = ({ formData, handleChange }) => (
	<div className="space-y-6">
		<div>
			<label className="block text-sm font-medium text-gray-700">
				Short Description
			</label>
			<input
				type="text"
				name="shortDescription"
				value={formData.shortDescription}
				onChange={handleChange}
				maxLength={100}
				className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:ring-blue-500"
				placeholder="Maximum two lines"
				required
			/>
		</div>

		<div>
			<label className="block text-sm font-medium text-gray-700">
				Long Description
			</label>
			<textarea
				name="longDescription"
				value={formData.longDescription}
				onChange={handleChange}
				rows={4}
				className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:ring-blue-500"
				required
			/>
		</div>
	</div>
);
