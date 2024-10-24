"use client";

import { useState } from "react";
import { CreateCoupon } from "@/components/coupons/createCoupon";
import { ManageCoupons } from "@/components/coupons/ManageCoupons";

export default function CouponManagementPage() {
	const [activeTab, setActiveTab] = useState("create");
	const [coupons, setCoupons] = useState([
		{
			id: 1,
			code: "SUMMER2024",
			type: "store_wide",
			discountType: "percentage",
			discountValue: 20,
			minPurchase: 100,
			expiryDate: "2024-12-31",
			usageLimit: 100,
			usedCount: 45,
			status: "active",
		},
		{
			id: 2,
			code: "SHOES15",
			type: "product_specific",
			products: ["Casual Shoes", "Sport Shoes"],
			discountType: "fixed",
			discountValue: 15,
			minPurchase: 50,
			expiryDate: "2024-08-31",
			usageLimit: 50,
			usedCount: 10,
			status: "active",
		},
	]);

	const handleNewCoupon = (newCoupon) => {
		setCoupons((prev) => [
			...prev,
			{ ...newCoupon, id: prev.length + 1, usedCount: 0 },
		]);
	};

	return (
		<div className="min-h-screen bg-gray-50 py-8 px-4">
			<div className="max-w-6xl mx-auto">
				<div className="bg-white rounded-lg shadow-lg">
					{/* Tabs */}
					<div className="border-b border-gray-200">
						<nav className="flex -mb-px">
							<button
								onClick={() => setActiveTab("create")}
								className={`py-4 px-6 text-sm font-medium ${
									activeTab === "create"
										? "border-b-2 border-blue-500 text-blue-600"
										: "text-gray-500 hover:text-gray-700"
								}`}
							>
								Create Coupon
							</button>
							<button
								onClick={() => setActiveTab("list")}
								className={`py-4 px-6 text-sm font-medium ${
									activeTab === "list"
										? "border-b-2 border-blue-500 text-blue-600"
										: "text-gray-500 hover:text-gray-700"
								}`}
							>
								Manage Coupons
							</button>
						</nav>
					</div>

					{/* Render appropriate component based on active tab */}
					{activeTab === "create" ? (
						<CreateCoupon onSubmit={handleNewCoupon} />
					) : (
						<ManageCoupons coupons={coupons} />
					)}
				</div>
			</div>
		</div>
	);
}
