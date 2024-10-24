import { UserCheck, FilePlus, ClipboardList } from "lucide-react"; // Import icons for Sellers section

const sellersNavigation = {
	type: "section",
	title: "Vendors",
	items: [
		{
			type: "expandable",
			icon: UserCheck,
			title: "Manage Vendors",
			links: [
				{ href: "/vendors/all-vendors", title: "All Vendors" },
				{ href: "/vendors/vendor-requests", title: "Vendor Requests" },
				{
					href: "/vendors/approved-vendors",
					title: "Approved Vendors",
				},
				{
					href: "/vendors/rejected-vendors",
					title: "Rejected Vendors",
				},
			],
		},
		{
			type: "expandable",
			icon: FilePlus,
			title: "Vendor Products",
			links: [
				{
					href: "/vendors/vendor-products",
					title: "All Vendor Products",
				},
				{
					href: "/vendors/pending-products",
					title: "Pending Products",
				},
				{
					href: "/vendors/rejected-products",
					title: "Rejected Products",
				},
				{
					href: "/vendors/approved-products",
					title: "Approved Products",
				},
			],
		},
		{
			type: "expandable",
			icon: ClipboardList,
			title: "Vendor Orders",
			links: [
				{
					href: "/vendors/all-vendor-orders",
					title: "All Vendor Orders",
				},
				{
					href: "/vendors/pending-vendor-orders",
					title: "Pending Orders",
				},
				{
					href: "/vendors/completed-vendor-orders",
					title: "Completed Orders",
				},
				{
					href: "/vendors/returned-vendor-orders",
					title: "Returned Orders",
				},
			],
		},
	],
};

export default sellersNavigation;
