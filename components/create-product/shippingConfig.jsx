// components/ProductForm/ShippingConfig.js
export const ShippingConfig = ({ formData, handleChange, shippingOptions }) => (
	<div className="space-y-4">
		<label className="block text-sm font-medium text-gray-700">
			Shipping Options
		</label>
		{shippingOptions.map((option) => (
			<div key={option.id} className="flex items-center">
				<input
					type="checkbox"
					id={option.id}
					name="shippingOptions"
					value={option.id}
					checked={formData.shippingOptions.includes(option.id)}
					onChange={handleChange}
					className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
				/>
				<label
					htmlFor={option.id}
					className="ml-3 text-sm text-gray-700"
				>
					{option.name} - ${option.price} ({option.duration})
				</label>
			</div>
		))}
	</div>
);
