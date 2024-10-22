import { UserCheck, FilePlus, ClipboardList } from "lucide-react"; // Import icons for Sellers section

const sellersNavigation = {
	type: "section",
	title: "Sellers",
	items: [
		{
			type: "expandable",
			icon: UserCheck,
			title: "Manage Sellers",
			links: [
				{ href: "/sellers", title: "All Sellers" },
				{ href: "/sellers/requests", title: "Seller Requests" },
				{ href: "/sellers/approved", title: "Approved Sellers" },
				{ href: "/sellers/rejected", title: "Rejected Sellers" },
			],
		},
		{
			type: "expandable",
			icon: FilePlus,
			title: "Seller Products",
			links: [
				{ href: "/sellers/products", title: "All Seller Products" },
				{
					href: "/sellers/products/pending",
					title: "Pending Products",
				},
				{
					href: "/sellers/products/approved",
					title: "Approved Products",
				},
			],
		},
		{
			type: "expandable",
			icon: ClipboardList,
			title: "Seller Orders",
			links: [
				{ href: "/sellers/orders", title: "All Seller Orders" },
				{ href: "/sellers/orders/pending", title: "Pending Orders" },
				{
					href: "/sellers/orders/completed",
					title: "Completed Orders",
				},
				{ href: "/sellers/orders/returns", title: "Returned Orders" },
			],
		},
	],
};

export default sellersNavigation;
