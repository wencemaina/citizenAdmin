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
				{ href: "/create-user", title: "Create User" },
				{
					href: "/roles-and-permissions",
					title: "Roles & Permissions",
				},
			],
		},
		{
			type: "expandable",
			icon: ShoppingBag,
			title: "Products",
			links: [
				{ href: "/all-products", title: "All Products" },
				{ href: "/create-product", title: "Create Product" },
				{
					href: "/inhouse-products",
					title: "In House Products",
				},

				{ href: "/add-categories", title: "Add Categories" },
				{ href: "/categories", title: "Categories" },
				{ href: "/reviews", title: "Product Reviews" },
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
	],
};

export default managementNavigation;
