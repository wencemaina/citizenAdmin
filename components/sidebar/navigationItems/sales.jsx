import {
	ShoppingCart,
	Tag as TagIcon,
	ClipboardList,
	Settings2,
	ShoppingBag,
	Box,
} from "lucide-react";

const salesNavigation = {
	type: "section",
	title: "Sales",
	items: [
		{
			type: "expandable",
			icon: Box,
			title: "Orders",
			links: [
				{ href: "/orders/all-orders", title: "All Orders" },
				{ href: "/orders/inhouse-orders", title: "InHouse Orders" },
				{ href: "/orders/all-vendor-orders", title: "Vendor Orders" },
				{
					href: "/orders/pickup-point-orders",
					title: "PickUp Pnt Orders",
				},
				{ href: "/orders/pending-orders", title: "Pending Orders" },
				{ href: "/orders/completed-orders", title: "Completed Orders" },
				{
					href: "/orders/order-cancellations",
					title: "Cancelled Orders",
				},
				{ href: "/orders/order-returns", title: " Order returns" },
				{ href: "orders/fulfilled-orders", title: "Fulfilled Order" },
			],
		},
		{
			type: "expandable",
			icon: ClipboardList,
			title: "Reporting",
			links: [
				{
					href: "/sales/reports/performance",
					title: "Sales Performance",
				},
				{ href: "/sales/reports/completed", title: "Completed Sales" },
				{ href: "/sales/reports/revenue", title: "Revenue Analysis" },
				{
					href: "/sales/reports/user-activity",
					title: "Customer Activity",
				},
			],
		},
		{
			type: "expandable",
			icon: Settings2,
			title: "Settings",
			links: [
				{
					href: "/sales/settings/discounts",
					title: "Discounts & Coupons",
				},
				{
					href: "/sales/settings/shipping",
					title: "Shipping Settings",
				},
				{ href: "/sales/settings/payment", title: "Payment Methods" },
				{
					href: "/sales/settings/notifications",
					title: "Notification Settings",
				},
			],
		},
	],
};

export default salesNavigation;
