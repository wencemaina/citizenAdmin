// components/ProductForm/ShippingConfig.js
export const ShippingConfig = ({ formData, handleChange }) => {
	const shippingOptions = [
		{
			id: "free-shipping",
			name: "Free Shipping",
			price: 0,
			duration: "5-7 business days",
		},
		{
			id: "local-pickup",
			name: "Local Pickup",
			price: 0,
			duration: "Pickup from store",
		},
		{
			id: "overnight",
			name: "Overnight",
			price: 25,
			duration: "1 business day",
		},
		{
			id: "scheduled-delivery",
			name: "Scheduled Delivery",
			price: 15,
			duration: "Select a date",
		},
	];

	return (
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
						{option.name} - Ksh {option.price} ({option.duration})
					</label>
				</div>
			))}
		</div>
	);
};
