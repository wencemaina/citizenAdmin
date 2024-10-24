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
				{ href: "/vendor-products", title: "Vendor Products" },
				{ href: "/add-categories", title: "Add Categories" },
				{ href: "/categories", title: "Categories" },
				{ href: "/reviews", title: "Product Reviews" },
			],
		},
		{
			type: "expandable",
			icon: Box,
			title: "Orders",
			links: [
				{ href: "/all-orders", title: "All Orders" },
				{ href: "/inhouse-orders", title: "InHouse Orders" },
				{ href: "/seller-orders", title: "Seller Orders" },
				{ href: "/pickup-point-orders", title: "PickUp Pnt Orders" },
				{ href: "/pending-orders", title: "Pending Orders" },
				{ href: "/completed-orders", title: "Completed Orders" },
				{ href: "/order-cancellations", title: "Cancelled Orders" },
				{ href: "/order-returns", title: " Order returns" },
				{ href: "/fulfilled-orders", title: "Fulfilled Order" },
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
				{ href: "/all-vendors", title: "All Vendors" },
				{ href: "/vendors/add", title: "Add Vendor" },
				{ href: "/vendors/requests", title: "Vendor Requests" },
			],
		},
	],
};

export default managementNavigation;
