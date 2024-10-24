/*

export default function InvoiceDetailsPage() {
	return (
		<div className="max-w-4xl mx-auto my-8 bg-white rounded-lg shadow-lg">
			<div className="p-8">
			
				<div className="flex justify-between items-start mb-12">
					<div>
						<h1 className="text-3xl font-bold  text-green-600    ">
							Citizen
						</h1>
						<div className="mt-2 space-y-1">
							<p className="text-sm text-gray-600">
								California, United States
							</p>
							<p className="text-sm text-gray-600">
								Zip-code: 90201
							</p>
						</div>
					</div>
					<div className="text-right space-y-1">
						<span className="inline-block px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded mb-2">
							Reg. No: 987654
						</span>
						<p className="text-sm text-gray-600">
							velzon@themesbrand.com
						</p>
						<p className="text-sm text-gray-600">
							www.themesbrand.com
						</p>
						<p className="text-sm text-gray-600">
							+1 (01) 234 6789
						</p>
					</div>
				</div>

		
				<div className="grid grid-cols-3 gap-6 mb-8 bg-gray-50 p-4 rounded-lg">
					<div>
						<h2 className="text-xs font-semibold text-gray-500 uppercase">
							Invoice No
						</h2>
						<p className="text-[15px] font-semibold text-gray-900">
							#VL25000355
						</p>
					</div>
					<div>
						<h2 className="text-xs font-semibold text-gray-500 uppercase">
							Date
						</h2>
						<p className="text-[15px] font-semibold text-gray-900">
							23 Nov, 2021
						</p>
					</div>
					<div className="text-right">
						<h2 className="text-xs font-semibold text-gray-500 uppercase">
							Status
						</h2>
						<span className="inline-block mt-1 px-2 py-1 text-sm bg-green-100 text-green-700 rounded-md">
							Paid
						</span>
					</div>
				</div>

	
				<div className="grid grid-cols-2 gap-8 mb-8">
					<div className="p-4 rounded-lg bg-gray-50">
						<h2 className="text-xs font-semibold text-gray-500 uppercase mb-3">
							Billing Address
						</h2>
						<div className="space-y-1">
							<p className="text-sm font-semibold text-gray-900">
								David Nichols
							</p>
							<p className="text-sm text-gray-600">
								305 S San Gabriel Blvd
							</p>
							<p className="text-sm text-gray-600">
								Phone: +1 (123) 456-7890
							</p>
							<p className="text-sm text-gray-600">
								Tax: 12-3456789
							</p>
						</div>
					</div>
					<div className="p-4 rounded-lg bg-gray-50">
						<h2 className="text-xs font-semibold text-gray-500 uppercase mb-3">
							Shipping Address
						</h2>
						<div className="space-y-1">
							<p className="text-sm font-semibold text-gray-900">
								David Nichols
							</p>
							<p className="text-sm text-gray-600">
								305 S San Gabriel Blvd
							</p>
							<p className="text-sm text-gray-600">
								Phone: +1 (123) 456-7890
							</p>
						</div>
					</div>
				</div>

			
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
							<tr>
								<td className="px-4 py-4 text-sm">01</td>
								<td className="px-4 py-4">
									<p className="text-sm font-medium text-gray-900">
										Sweatshirt for Men (Pink)
									</p>
									<p className="text-xs text-gray-500 mt-1">
										Comfortable cotton blend sweatshirt with
										modern cut and design
									</p>
								</td>
								<td className="px-4 py-4 text-sm">
									Ksh 119.99
								</td>
								<td className="px-4 py-4 text-sm">02</td>
								<td className="px-4 py-4 text-sm font-medium">
									Ksh 239.98
								</td>
							</tr>
							<tr>
								<td className="px-4 py-4 text-sm">02</td>
								<td className="px-4 py-4">
									<p className="text-sm font-medium text-gray-900">
										Noise NoiseFit Endure Smart Watch
									</p>
									<p className="text-xs text-gray-500 mt-1">
										Advanced fitness tracking with 10-day
										battery life
									</p>
								</td>
								<td className="px-4 py-4 text-sm">Ksh 94.99</td>
								<td className="px-4 py-4 text-sm">01</td>
								<td className="px-4 py-4 text-sm font-medium">
									Ksh 94.99
								</td>
							</tr>
							<tr>
								<td className="px-4 py-4 text-sm">03</td>
								<td className="px-4 py-4">
									<p className="text-sm font-medium text-gray-900">
										350 ml Glass Grocery Container
									</p>
									<p className="text-xs text-gray-500 mt-1">
										Airtight seal with premium borosilicate
										glass construction
									</p>
								</td>
								<td className="px-4 py-4 text-sm">Ksh 24.99</td>
								<td className="px-4 py-4 text-sm">01</td>
								<td className="px-4 py-4 text-sm font-medium">
									Ksh 24.99
								</td>
							</tr>
							<tr>
								<td className="px-4 py-4 text-sm">04</td>
								<td className="px-4 py-4">
									<p className="text-sm font-medium text-gray-900">
										Fabric Dual Tone Living Room Chair
									</p>
									<p className="text-xs text-gray-500 mt-1">
										Ergonomic design with premium upholstery
										and solid wood frame
									</p>
								</td>
								<td className="px-4 py-4 text-sm">
									Ksh 340.00
								</td>
								<td className="px-4 py-4 text-sm">01</td>
								<td className="px-4 py-4 text-sm font-medium">
									Ksh 340.00
								</td>
							</tr>
						</tbody>
					</table>
				</div>

			
				<div className="mb-8 bg-gray-50 p-4 rounded-lg">
					<div className="space-y-2">
						<div className="flex justify-between text-sm">
							<span className="text-gray-600">Sub Total</span>
							<span className="font-medium">Ksh 699.96</span>
						</div>
						<div className="flex justify-between text-sm">
							<span className="text-gray-600">Tax </span>
							<span className="font-medium">Ksh 44.99</span>
						</div>
						<div className="flex justify-between text-sm">
							<span className="text-gray-600">Discount</span>
							<span className="font-medium text-green-600">
								-Ksh 53.99
							</span>
						</div>
						<div className="flex justify-between text-sm">
							<span className="text-gray-600">
								Shipping Charge
							</span>
							<span className="font-medium">Ksh 65.00</span>
						</div>
						<div className="border-t border-gray-200 my-2"></div>
						<div className="flex justify-between text-lg font-semibold">
							<span>Total Amount</span>
							<span>Ksh 755.96</span>
						</div>
					</div>
				</div>

			
				<div className="mb-8 p-4 rounded-lg bg-gray-50">
					<h2 className="text-xs font-semibold text-gray-500 uppercase mb-3">
						Payment Details
					</h2>
					<div className="grid grid-cols-2 gap-4">
						<div className="space-y-1">
							<p className="text-sm text-gray-600">
								Payment Method:{" "}
								<span className="font-medium text-gray-900">
									Mpesa
								</span>
							</p>
							<p className="text-sm text-gray-600">
								Holder:
								<span className="font-medium text-gray-900">
									David Nichols
								</span>
							</p>
						</div>
						<div className="space-y-1">
							<p className="text-sm text-gray-600">
								Phone Number:{" "}
								<span className="font-medium text-gray-900">
									xxx xxxx xxxx
								</span>
							</p>
							<p className="text-sm text-gray-600">
								Total Amount:{" "}
								<span className="font-medium text-gray-900">
									Ksh 755.96
								</span>
							</p>
						</div>
					</div>
				</div>

		
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
}
 */
"use client";
import React, { useRef } from "react";
import { Printer, Download } from "lucide-react";
import Invoice from "@/components/invoice/invoice";

export default function InvoiceDetailsPage() {
	const invoiceRef = useRef(null);

	const handlePrint = () => {
		const content = invoiceRef.current;
		const printWindow = window.open("", "", "height=600,width=800");

		printWindow.document.write("<html><head><title>Print Invoice</title>");
		printWindow.document.write(
			'<link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">',
		);
		printWindow.document.write("</head><body>");
		printWindow.document.write(content.innerHTML);
		printWindow.document.write("</body></html>");

		printWindow.document.close();
		printWindow.focus();
		printWindow.print();
		printWindow.close();
	};

	const handleDownload = () => {
		const content = invoiceRef.current.innerHTML;
		const blob = new Blob([content], { type: "text/html" });
		const url = window.URL.createObjectURL(blob);
		const link = document.createElement("a");
		link.href = url;
		link.download = "invoice.html";
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
		window.URL.revokeObjectURL(url);
	};

	const invoiceData = {
		companyDetails: {
			name: "Citizen",
			location: "California, United States",
			zipCode: "90201",
			regNo: "987654",
			email: "velzon@themesbrand.com",
			website: "www.themesbrand.com",
			phone: "+1 (01) 234 6789",
		},
		invoiceDetails: {
			number: "#VL25000355",
			date: "23 Nov, 2021",
			status: "Paid",
		},
		billingAddress: {
			name: "David Nichols",
			address: "305 S San Gabriel Blvd",
			phone: "+1 (123) 456-7890",
			tax: "12-3456789",
		},
		shippingAddress: {
			name: "David Nichols",
			address: "305 S San Gabriel Blvd",
			phone: "+1 (123) 456-7890",
		},
		products: [
			{
				name: "Sweatshirt for Men (Pink)",
				description:
					"Comfortable cotton blend sweatshirt with modern cut and design",
				rate: "119.99",
				quantity: "02",
				amount: "239.98",
			},
			{
				name: "Noise NoiseFit Endure Smart Watch",
				description:
					"Advanced fitness tracking with 10-day battery life",
				rate: "94.99",
				quantity: "01",
				amount: "94.99",
			},
			{
				name: "350 ml Glass Grocery Container",
				description:
					"Airtight seal with premium borosilicate glass construction",
				rate: "24.99",
				quantity: "01",
				amount: "24.99",
			},
			{
				name: "Fabric Dual Tone Living Room Chair",
				description:
					"Ergonomic design with premium upholstery and solid wood frame",
				rate: "340.00",
				quantity: "01",
				amount: "340.00",
			},
		],
		summary: {
			subTotal: "699.96",
			tax: "44.99",
			discount: "53.99",
			shippingCharge: "65.00",
			totalAmount: "755.96",
		},
		paymentDetails: {
			method: "Mpesa",
			holder: "David Nichols",
			phone: "xxx xxxx xxxx",
			totalAmount: "755.96",
		},
	};

	return (
		<div className="max-w-4xl mx-auto my-8">
			<div className="flex justify-end gap-4 mb-4">
				<button
					onClick={handlePrint}
					className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
				>
					<Printer size={20} />
					Print Invoice
				</button>
				<button
					onClick={handleDownload}
					className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
				>
					<Download size={20} />
					Download
				</button>
			</div>

			<div ref={invoiceRef}>
				<Invoice {...invoiceData} />
			</div>
		</div>
	);
}
