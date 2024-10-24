"use client";
import React, { useState } from "react";
import { Eye, Trash, ChevronLeft, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";

const auctionsData = [
	{
		id: "AUC1010",
		name: "Portable SSD Auction",
		image: "https://images.pexels.com/photos/5060897/pexels-photo-5060897.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		category: "Storage",
		vendor: "Citizen",
		vendorEmail: "contact@citizen.com",
		lotNumber: "LOT001",
		startingPrice: 89.99,
		currentBid: 95.0,
		bidsCount: 10,
		status: "Scheduled",
		startTime: new Date(Date.now() - 3600000),
		endTime: new Date(Date.now() + 3600000),
	},
	{
		id: "AUC1011",
		name: "Gaming Laptop Auction",
		image: "https://images.pexels.com/photos/5060897/pexels-photo-5060897.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		category: "Electronics",
		vendor: "Techie",
		vendorEmail: "info@techie.com",
		lotNumber: "LOT002",
		startingPrice: 1299.99,
		currentBid: 1300.0,
		bidsCount: 5,
		status: "Scheduled",
		startTime: new Date(Date.now() - 7200000), // 2 hours ago
		endTime: new Date(Date.now() + 1800000), // 30 minutes from now
	},
	{
		id: "AUC1012",
		name: "Smartphone Auction",
		image: "https://images.pexels.com/photos/5060897/pexels-photo-5060897.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		category: "Mobile",
		vendor: "Gadget Hub",
		vendorEmail: "support@gadgethub.com",
		lotNumber: "LOT003",
		startingPrice: 599.99,
		currentBid: 605.0,
		bidsCount: 15,
		status: "Scheduled",
		startTime: new Date(Date.now() - 18000000), // 5 hours ago
		endTime: new Date(Date.now() + 3600000), // 1 hour from now
	},
	{
		id: "AUC1013",
		name: "Bluetooth Headphones Auction",
		image: "https://images.pexels.com/photos/5060897/pexels-photo-5060897.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		category: "Audio",
		vendor: "SoundPro",
		vendorEmail: "sales@soundpro.com",
		lotNumber: "LOT004",
		startingPrice: 49.99,
		currentBid: 55.0,
		bidsCount: 8,
		status: "Scheduled",
		startTime: new Date(Date.now() + 7200000), // 2 hours from now
		endTime: new Date(Date.now() + 10800000), // 3 hours from now
	},
	{
		id: "AUC1014",
		name: "4K TV Auction",
		image: "https://images.pexels.com/photos/5060897/pexels-photo-5060897.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		category: "Home Appliances",
		vendor: "HomeTech",
		vendorEmail: "info@hometech.com",
		lotNumber: "LOT005",
		startingPrice: 899.99,
		currentBid: 900.0,
		bidsCount: 12,
		status: "Scheduled",
		startTime: new Date(Date.now() - 3600000), // 1 hour ago
		endTime: new Date(Date.now() + 7200000), // 2 hours from now
	},
];

export default function LiveAuctionsPage() {
	const router = useRouter();
	const [searchTerm, setSearchTerm] = useState("");
	const [entriesPerPage, setEntriesPerPage] = useState(5);
	const [currentPage, setCurrentPage] = useState(1);

	const handleViewDetails = (auctionId) => {
		router.push(`/auction-details/${auctionId}`);
	};

	const filteredAuctions = auctionsData
		.filter((auction) => {
			const searchLower = searchTerm.toLowerCase();
			return (
				auction.name.toLowerCase().includes(searchLower) ||
				auction.vendor.toLowerCase().includes(searchLower) ||
				auction.status.toLowerCase().includes(searchLower)
			);
		})
		.slice(
			(currentPage - 1) * entriesPerPage,
			currentPage * entriesPerPage,
		);

	React.useEffect(() => {
		setCurrentPage(1);
	}, [searchTerm]);

	const totalFilteredAuctions = auctionsData.filter((auction) => {
		const searchLower = searchTerm.toLowerCase();
		return (
			auction.name.toLowerCase().includes(searchLower) ||
			auction.vendor.toLowerCase().includes(searchLower) ||
			auction.status.toLowerCase().includes(searchLower)
		);
	}).length;

	const totalPages = Math.ceil(totalFilteredAuctions / entriesPerPage);

	return (
		<div className="p-4">
			<div className="flex justify-between mb-6">
				<div className="relative w-80">
					<input
						type="text"
						placeholder="Search by name or vendor..."
						className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm pr-8"
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
					/>
					{searchTerm && (
						<button
							onClick={() => setSearchTerm("")}
							className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
						>
							×
						</button>
					)}
				</div>
				<select
					className="px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm"
					value={entriesPerPage}
					onChange={(e) => setEntriesPerPage(Number(e.target.value))}
				>
					<option value="5">Show 5 entries</option>
					<option value="10">Show 10 entries</option>
					<option value="20">Show 20 entries</option>
				</select>
			</div>

			<div className="overflow-x-auto">
				<table className="w-full text-sm">
					<thead>
						<tr className="bg-gray-100 border-b border-gray-200">
							<th className="py-4 px-4 text-left font-semibold text-gray-700">
								#
							</th>
							<th className="py-4 px-4 text-left font-semibold text-gray-700">
								Item
							</th>
							<th className="py-4 px-4 text-left font-semibold text-gray-700">
								Lot Number
							</th>
							<th className="py-4 px-4 text-left font-semibold text-gray-700">
								Vendor
							</th>

							<th className="py-4 px-4 text-left font-semibold text-gray-700">
								Current Bid
							</th>
							<th className="py-4 px-4 text-left font-semibold text-gray-700">
								Bids Count
							</th>
							<th className="py-4 px-4 text-left font-semibold text-gray-700">
								Status
							</th>
							<th className="py-4 px-4 text-left font-semibold text-gray-700">
								Time
							</th>
							<th className="py-4 px-4 text-left font-semibold text-gray-700">
								Actions
							</th>
						</tr>
					</thead>
					<tbody className="divide-y divide-gray-200 text-[13px]">
						{filteredAuctions.map((auction, index) => (
							<tr key={auction.id} className="hover:bg-gray-50">
								<td className="py-3 px-4">
									{(currentPage - 1) * entriesPerPage +
										index +
										1}
								</td>
								<td className="py-3 px-4">
									<div className="flex items-center space-x-3">
										<div className="w-10 h-10 rounded-lg overflow-hidden">
											<img
												src={auction.image}
												alt={`${auction.name}`}
												className="w-full h-full object-cover"
											/>
										</div>
										<div className="flex flex-col">
											<span className="font-medium">
												{auction.name}
											</span>
											<span className="text-xs text-gray-500">
												{auction.category}
											</span>
										</div>
									</div>
								</td>
								<td className="py-3 px-4">
									{auction.lotNumber}
								</td>
								<td className="py-3 px-4">
									<div className="flex flex-col">
										<span className="font-medium">
											{auction.vendor}
										</span>
										<span className="text-xs text-gray-500">
											{auction.vendorEmail}
										</span>
									</div>
								</td>

								<td className="py-3 px-4">
									Ksh {auction.currentBid.toFixed(2)}
								</td>
								<td className="py-3 px-4">
									{auction.bidsCount}
								</td>
								<td className="py-3 px-4">
									<span
										className={`px-2 py-1 rounded-full text-xs ${
											auction.status === "Active"
												? "bg-green-100 text-green-800"
												: "bg-red-100 text-red-800"
										}`}
									>
										{auction.status}
									</span>
								</td>
								<td className="py-3 px-4">
									<div className="flex flex-col text-[11px] text-gray-500">
										<div className="flex items-center gap-2">
											<span className="text-[13px]">
												Start:
											</span>
											<span>
												{auction.startTime.toLocaleString()}
											</span>
										</div>
										<div className="flex items-center gap-2">
											<span className="text-[11px]">
												End:
											</span>
											<span>
												{auction.endTime.toLocaleString()}
											</span>
										</div>
									</div>
								</td>
								<td className="py-3 px-4">
									<div className="flex items-center space-x-3">
										<button
											onClick={() =>
												handleViewDetails(auction.id)
											}
											className="group flex items-center justify-center w-8 h-8 rounded-lg hover:bg-blue-50 transition-colors"
										>
											<Eye className="w-4 h-4 text-blue-500 group-hover:text-blue-600" />
										</button>
										<button className="group flex items-center justify-center w-8 h-8 rounded-lg hover:bg-red-50 transition-colors">
											<Trash className="w-4 h-4 text-red-500 group-hover:text-red-600" />
										</button>
									</div>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>

			<div className="flex justify-between items-center mt-4 text-sm text-gray-600">
				<div>
					Showing{" "}
					{filteredAuctions.length > 0
						? (currentPage - 1) * entriesPerPage + 1
						: 0}{" "}
					to{" "}
					{Math.min(
						currentPage * entriesPerPage,
						totalFilteredAuctions,
					)}{" "}
					of {totalFilteredAuctions} entries
				</div>
				<div className="flex items-center space-x-2">
					<button
						onClick={() =>
							setCurrentPage((prev) =>
								prev > 1 ? prev - 1 : prev,
							)
						}
						disabled={currentPage === 1}
						className={`${
							currentPage === 1
								? "text-gray-400 cursor-not-allowed"
								: "text-blue-500 hover:text-blue-600"
						}`}
					>
						<ChevronLeft />
					</button>
					<div>
						Page {currentPage} of {totalPages}
					</div>
					<button
						onClick={() =>
							setCurrentPage((prev) =>
								prev < totalPages ? prev + 1 : prev,
							)
						}
						disabled={currentPage === totalPages}
						className={`${
							currentPage === totalPages
								? "text-gray-400 cursor-not-allowed"
								: "text-blue-500 hover:text-blue-600"
						}`}
					>
						<ChevronRight />
					</button>
				</div>
			</div>
		</div>
	);
}
