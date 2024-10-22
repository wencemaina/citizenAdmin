import { Users, ShoppingBag, Box, Archive, Truck } from "lucide-react"; // Import necessary icons

const managementNavigation = {
	type: "section",
	title: "Management",
	items: [
		{
			type: "expandable",
			icon: Users,
			title: "Users",
			links: [
				{ href: "/users", title: "All Users" },
				{ href: "/users/createUser", title: "Create User" },
				{ href: "/users/roles", title: "Roles & Permissions" },
			],
		},
		{
			type: "expandable",
			icon: ShoppingBag,
			title: "Products",
			links: [
				{ href: "/products", title: "All Products" },
				{ href: "/products/create", title: "Create Product" },
				{ href: "/products/in-house", title: "In House Products" },
				{ href: "/products/seller-products", title: "Seller Products" },
				{ href: "/products/categories", title: "Categories" },
				{ href: "/products/reviews", title: "Product Reviews" },
			],
		},
		{
			type: "expandable",
			icon: Box,
			title: "Orders",
			links: [
				{ href: "/orders", title: "All Orders" },
				{ href: "/orders/pending", title: "Pending Orders" },
				{ href: "/orders/completed", title: "Completed Orders" },
				{ href: "/orders/returns", title: "Returns & Refunds" },
			],
		},
		{
			type: "expandable",
			icon: Archive,
			title: "Inventory",
			links: [
				{ href: "/inventory", title: "View Inventory" },
				{ href: "/inventory/stock", title: "Stock Management" },
				{ href: "/inventory/restock", title: "Restock Alerts" },
			],
		},
		{
			type: "expandable",
			icon: Truck,
			title: "Vendors",
			links: [
				{ href: "/vendors", title: "All Vendors" },
				{ href: "/vendors/add", title: "Add Vendor" },
				{ href: "/vendors/requests", title: "Vendor Requests" },
			],
		},
	],
};

export default managementNavigation;
