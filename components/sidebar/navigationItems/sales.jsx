import {
	ShoppingCart,
	Tag as TagIcon,
	ClipboardList,
	Settings2,
	ShoppingBag,
} from "lucide-react";

const salesNavigation = {
	type: "section",
	title: "Sales",
	items: [
		{
			type: "expandable",
			icon: ShoppingCart,
			title: "Active Sales",
			links: [
				{ href: "/sales/ongoing", title: "Ongoing Sales" },
				{ href: "/sales/upcoming", title: "Upcoming Sales" },
				{ href: "/sales/ending-soon", title: "Ending Soon" },
				{ href: "/sales/featured", title: "Featured Sales" },
			],
		},
		{
			type: "expandable",
			icon: TagIcon,
			title: "Sales Management",
			links: [
				{ href: "/sales/create", title: "Create New Sale" },
				{ href: "/sales/draft", title: "Draft Sales" },
				{ href: "/sales/templates", title: "Sales Templates" },
				{ href: "/sales/bulk-upload", title: "Bulk Upload" },
			],
		},
		{
			type: "expandable",
			icon: ShoppingBag,
			title: "Orders",
			links: [
				{ href: "/sales/orders/active", title: "Active Orders" },
				{ href: "/sales/orders/returns", title: "Return Management" },
				{
					href: "/sales/orders/cancellations",
					title: "Order Cancellations",
				},
				{ href: "/sales/orders/fulfilled", title: "Fulfilled Orders" },
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
