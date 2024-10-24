import React from "react";

const Invoice = ({
	companyDetails,
	invoiceDetails,
	billingAddress,
	shippingAddress,
	products,
	summary,
	paymentDetails,
}) => {
	return (
		<div className="bg-white rounded-lg shadow-lg">
			<div className="p-8">
				{/* Header */}
				<div className="flex justify-between items-start mb-12">
					<div>
						<h1 className="text-3xl font-bold text-green-600">
							{companyDetails.name}
						</h1>
						<div className="mt-2 space-y-1">
							<p className="text-sm text-gray-600">
								{companyDetails.location}
							</p>
							<p className="text-sm text-gray-600">
								Zip-code: {companyDetails.zipCode}
							</p>
						</div>
					</div>
					<div className="text-right space-y-1">
						<span className="inline-block px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded mb-2">
							Reg. No: {companyDetails.regNo}
						</span>
						<p className="text-sm text-gray-600">
							{companyDetails.email}
						</p>
						<p className="text-sm text-gray-600">
							{companyDetails.website}
						</p>
						<p className="text-sm text-gray-600">
							{companyDetails.phone}
						</p>
					</div>
				</div>

				{/* Invoice Details */}
				<div className="grid grid-cols-3 gap-6 mb-8 bg-gray-50 p-4 rounded-lg">
					<div>
						<h2 className="text-xs font-semibold text-gray-500 uppercase">
							Invoice No
						</h2>
						<p className="text-[15px] font-semibold text-gray-900">
							{invoiceDetails.number}
						</p>
					</div>
					<div>
						<h2 className="text-xs font-semibold text-gray-500 uppercase">
							Date
						</h2>
						<p className="text-[15px] font-semibold text-gray-900">
							{invoiceDetails.date}
						</p>
					</div>
					<div className="text-right">
						<h2 className="text-xs font-semibold text-gray-500 uppercase">
							Status
						</h2>
						<span className="inline-block mt-1 px-2 py-1 text-sm bg-green-100 text-green-700 rounded-md">
							{invoiceDetails.status}
						</span>
					</div>
				</div>

				{/* Address Details */}
				<div className="grid grid-cols-2 gap-8 mb-8">
					<div className="p-4 rounded-lg bg-gray-50">
						<h2 className="text-xs font-semibold text-gray-500 uppercase mb-3">
							Billing Address
						</h2>
						<div className="space-y-1">
							<p className="text-sm font-semibold text-gray-900">
								{billingAddress.name}
							</p>
							<p className="text-sm text-gray-600">
								{billingAddress.address}
							</p>
							<p className="text-sm text-gray-600">
								Phone: {billingAddress.phone}
							</p>
							<p className="text-sm text-gray-600">
								Tax: {billingAddress.tax}
							</p>
						</div>
					</div>
					<div className="p-4 rounded-lg bg-gray-50">
						<h2 className="text-xs font-semibold text-gray-500 uppercase mb-3">
							Shipping Address
						</h2>
						<div className="space-y-1">
							<p className="text-sm font-semibold text-gray-900">
								{shippingAddress.name}
							</p>
							<p className="text-sm text-gray-600">
								{shippingAddress.address}
							</p>
							<p className="text-sm text-gray-600">
								Phone: {shippingAddress.phone}
							</p>
						</div>
					</div>
				</div>

				{/* Product Table */}
				<div className="mb-8">
					<table className="w-full">
						<thead className="bg-gray-50">
							<tr>
								<th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase">
									#
								</th>
								<th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase">
									Product Details
								</th>
								<th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase">
									Rate
								</th>
								<th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase">
									Quantity
								</th>
								<th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase">
									Amount
								</th>
							</tr>
						</thead>
						<tbody className="divide-y divide-gray-100">
							{products.map((product, index) => (
								<tr key={index}>
									<td className="px-4 py-4 text-sm">
										{String(index + 1).padStart(2, "0")}
									</td>
									<td className="px-4 py-4">
										<p className="text-sm font-medium text-gray-900">
											{product.name}
										</p>
										<p className="text-xs text-gray-500 mt-1">
											{product.description}
										</p>
									</td>
									<td className="px-4 py-4 text-sm">
										Ksh {product.rate}
									</td>
									<td className="px-4 py-4 text-sm">
										{product.quantity}
									</td>
									<td className="px-4 py-4 text-sm font-medium">
										Ksh {product.amount}
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>

				{/* Summary */}
				<div className="mb-8 bg-gray-50 p-4 rounded-lg">
					<div className="space-y-2">
						<div className="flex justify-between text-sm">
							<span className="text-gray-600">Sub Total</span>
							<span className="font-medium">
								Ksh {summary.subTotal}
							</span>
						</div>
						<div className="flex justify-between text-sm">
							<span className="text-gray-600">Tax</span>
							<span className="font-medium">
								Ksh {summary.tax}
							</span>
						</div>
						<div className="flex justify-between text-sm">
							<span className="text-gray-600">Discount</span>
							<span className="font-medium text-green-600">
								-Ksh {summary.discount}
							</span>
						</div>
						<div className="flex justify-between text-sm">
							<span className="text-gray-600">
								Shipping Charge
							</span>
							<span className="font-medium">
								Ksh {summary.shippingCharge}
							</span>
						</div>
						<div className="border-t border-gray-200 my-2"></div>
						<div className="flex justify-between text-lg font-semibold">
							<span>Total Amount</span>
							<span>Ksh {summary.totalAmount}</span>
						</div>
					</div>
				</div>

				{/* Payment Details */}
				<div className="mb-8 p-4 rounded-lg bg-gray-50">
					<h2 className="text-xs font-semibold text-gray-500 uppercase mb-3">
						Payment Details
					</h2>
					<div className="grid grid-cols-2 gap-4">
						<div className="space-y-1">
							<p className="text-sm text-gray-600">
								Payment Method:{" "}
								<span className="font-medium text-gray-900">
									{paymentDetails.method}
								</span>
							</p>
							<p className="text-sm text-gray-600">
								Holder:{" "}
								<span className="font-medium text-gray-900">
									{paymentDetails.holder}
								</span>
							</p>
						</div>
						<div className="space-y-1">
							<p className="text-sm text-gray-600">
								Phone Number:{" "}
								<span className="font-medium text-gray-900">
									{paymentDetails.phone}
								</span>
							</p>
							<p className="text-sm text-gray-600">
								Total Amount:{" "}
								<span className="font-medium text-gray-900">
									Ksh {paymentDetails.totalAmount}
								</span>
							</p>
						</div>
					</div>
				</div>

				{/* Notes */}
				<div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
					<p className="text-sm text-blue-700 leading-relaxed">
						All accounts are to be paid within 7 days from receipt
						of invoice. To be paid by cheque or credit card or
						direct payment online. If account is not paid within 7
						days the credits details supplied as confirmation of
						work undertaken will be charged the agreed quoted fee
						noted above.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Invoice;
