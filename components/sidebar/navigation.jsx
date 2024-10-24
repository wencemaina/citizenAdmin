// Rest of your code remains exactly the same...
/* const navigationItems = [
	{
		type: "section",
		title: "General",
		items: [
			{
				type: "link",
				href: "/",
				icon: Home,
				title: "Dashboard",
				active: true,
			},
			{
				type: "link",
				href: "/analytics",
				icon: BarChart2,
				title: "Analytics",
			},
			{
				type: "link",
				href: "/organization",
				icon: Building2,
				title: "Organization",
			},
		],
	},
	{
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
					{
						href: "/products/seller-products",
						title: "Seller Products",
					},

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
	},

	{
		type: "section",
		title: "Sales",
		items: [
			{
				type: "expandable",
				icon: ShoppingCart, // You can import this icon from lucide-react
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
					{
						href: "/sales/orders/returns",
						title: "Return Management",
					},
					{
						href: "/sales/orders/cancellations",
						title: "Order Cancellations",
					},
					{
						href: "/sales/orders/fulfilled",
						title: "Fulfilled Orders",
					},
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
					{
						href: "/sales/reports/completed",
						title: "Completed Sales",
					},
					{
						href: "/sales/reports/revenue",
						title: "Revenue Analysis",
					},
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
					{
						href: "/sales/settings/payment",
						title: "Payment Methods",
					},
					{
						href: "/sales/settings/notifications",
						title: "Notification Settings",
					},
				],
			},
		],
	},
	{
		type: "section",
		title: "Auctions",
		items: [
			{
				type: "expandable",
				icon: Gavel, // We'll need to import this from lucide-react
				title: "Active Auctions",
				links: [
					{ href: "/auctions/live", title: "Live Auctions" },
					{ href: "/auctions/upcoming", title: "Upcoming Auctions" },
					{ href: "/auctions/ending-soon", title: "Ending Soon" },
					{ href: "/auctions/featured", title: "Featured Auctions" },
				],
			},
			{
				type: "expandable",
				icon: PlusCircle,
				title: "Auction Mngt",
				links: [
					{ href: "/auctions/create", title: "Create New Auction" },
					{ href: "/auctions/draft", title: "Draft Auctions" },
					{ href: "/auctions/templates", title: "Auction Templates" },
					{ href: "/auctions/bulk-upload", title: "Bulk Upload" },
				],
			},
			{
				type: "expandable",
				icon: Goal,
				title: "Bidding",
				links: [
					{ href: "/auctions/bids/active", title: "Active Bids" },
					{
						href: "/auctions/bids/auto",
						title: "Auto-Bidding Rules",
					},
					{
						href: "/auctions/bids/watchlist",
						title: "Bid Watchlist",
					},
					{ href: "/auctions/bids/disputes", title: "Bid Disputes" },
				],
			},
			{
				type: "expandable",
				icon: ClipboardList,
				title: "Reporting",
				links: [
					{
						href: "/auctions/reports/performance",
						title: "Auction Performance",
					},
					{
						href: "/auctions/reports/completed",
						title: "Completed Auctions",
					},
					{
						href: "/auctions/reports/revenue",
						title: "Revenue Analysis",
					},
					{
						href: "/auctions/reports/user-activity",
						title: "User Activity",
					},
				],
			},
			{
				type: "expandable",
				icon: Settings2,
				title: "Settings",
				links: [
					{
						href: "/auctions/settings/categories",
						title: "Categories",
					},
					{
						href: "/auctions/settings/rules",
						title: "Auction Rules",
					},
					{ href: "/auctions/settings/fees", title: "Fee Structure" },
					{
						href: "/auctions/settings/notifications",
						title: "Notification Settings",
					},
				],
			},
		],
	},

	{
		type: "section",
		title: "Communication",
		items: [
			{
				type: "expandable",
				icon: Mail,
				title: "Messages",
				links: [
					{ href: "/messages/inbox", title: "Inbox" },
					{ href: "/messages/sent", title: "Sent" },
					{ href: "/messages/drafts", title: "Drafts" },
				],
			},
			{
				type: "link",
				href: "/notifications",
				icon: Bell,
				title: "Notifications",
			},
		],
	},
	{
		type: "section",
		title: "Financials",
		items: [
			{
				type: "link",
				href: "/transactions",
				icon: DollarSign,
				title: "Transactions",
			},
			{
				type: "link",
				href: "/payouts",
				icon: CreditCard,
				title: "Payouts",
			},
			{
				type: "link",
				href: "/revenue-reports",
				icon: PieChart,
				title: "Revenue Reports",
			},
			{
				type: "link",
				href: "/tax-information",
				icon: FileText,
				title: "Tax Information",
			},
		],
	},
	{
		type: "section",
		title: "Support",
		items: [
			{
				type: "link",
				href: "/help",
				icon: FileQuestion,
				title: "Help Center",
			},
			{
				type: "link",
				href: "/support",
				icon: HeadphonesIcon,
				title: "Support Tickets",
			},
		],
	},
	{
		type: "section",
		title: "Marketing",
		items: [
			{
				type: "link",
				href: "/campaigns",
				icon: Megaphone,
				title: "Campaigns",
			},
			{
				type: "link",
				href: "/coupons",
				icon: Tag,
				title: "Discounts & Coupons",
			},
			{
				type: "link",
				href: "/advertising",
				icon: Monitor,
				title: "Advertising Settings",
			},
			{
				type: "link",
				href: "/affiliate",
				icon: UserCheck,
				title: "Affiliate Program",
			},
		],
	},
	{
		type: "section",
		title: "Settings",
		items: [
			{
				type: "expandable",
				icon: Settings,
				title: "Settings",
				links: [
					{ href: "/settings/general", title: "General" },
					{ href: "/settings/security", title: "Security" },
					{ href: "/settings/notifications", title: "Notifications" },
					{ href: "/settings/payment", title: "Payment Settings" },
					{ href: "/settings/shipping", title: "Shipping Settings" },
				],
			},
		],
	},
]; */

"use client";
import { useState } from "react";
import {
	Home,
	Users,
	ShoppingBag,
	BarChart2,
	Mail,
	Settings,
	HeadphonesIcon,
	FileQuestion,
	Building2,
	ChevronUp,
	ChevronDown,
	Box,
	Archive,
	Truck,
	Bell,
	DollarSign,
	CreditCard,
	PieChart,
	FileText,
	Megaphone,
	Tag,
	Monitor,
	UserCheck,
	Gavel,
	PlusCircle,
	Goal,
	ClipboardList,
	Settings2,
	ShoppingCart,
	TagIcon,
} from "lucide-react";
import Link from "next/link";
import { reports } from "./navigationItems/reports";
import managementNavigation from "./navigationItems/management";
import generalNavigation from "./navigationItems/general";
import salesNavigation from "./navigationItems/sales";
import auctionsNavigation from "./navigationItems/auction";
import communicationNavigation from "./navigationItems/communication";
import financialsNavigation from "./navigationItems/financials";
import marketingNavigation from "./navigationItems/marketing";
import settingsNavigation from "./navigationItems/settings";
import supportNavigation from "./navigationItems/support";
import refundsNavigation from "./navigationItems/refunds";
import staffNavigation from "./navigationItems/staff";
import sellersNavigation from "./navigationItems/vendors";
import deliveryNavigation from "./navigationItems/delivery";

const navigationItems = [
	generalNavigation,
	managementNavigation,
	salesNavigation,
	auctionsNavigation,
	sellersNavigation,
	communicationNavigation,
	financialsNavigation,
	deliveryNavigation,
	refundsNavigation,
	marketingNavigation,
	supportNavigation,
	staffNavigation,
	settingsNavigation,
];

const ExpandableLink = ({ icon: Icon, title, links }) => {
	const [isExpanded, setIsExpanded] = useState(false);

	return (
		<div>
			<button
				onClick={() => setIsExpanded(!isExpanded)}
				className="w-full flex items-center justify-between px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-md group"
			>
				<div className="flex items-center space-x-3">
					<Icon size={20} className="group-hover:text-blue-600" />
					<span className="group-hover:text-blue-600 font-semibold text-[14px] ">
						{title}
					</span>
				</div>
				{isExpanded ? (
					<ChevronUp size={16} className="text-gray-400" />
				) : (
					<ChevronDown size={16} className="text-gray-400" />
				)}
			</button>
			{isExpanded && (
				<div className="space-y-1">
					{links.map((link, index) => (
						<Link
							key={index}
							href={link.href}
							className="block pl-6 py-2 text-gray-600 hover:bg-gray-50 rounded-md group"
						>
							<span className="group-hover:text-blue-600  font-semibold text-[14px] ">
								{link.title}
							</span>
						</Link>
					))}
				</div>
			)}
		</div>
	);
};

const NavLink = ({ href, icon: Icon, title, active }) => (
	<Link
		href={href}
		className={`flex items-center space-x-3 px-3 py-2 ${
			active
				? "bg-blue-50 text-blue-600"
				: "text-gray-600 hover:bg-gray-50"
		} rounded-md group`}
	>
		<Icon size={20} className={!active && "group-hover:text-blue-600"} />
		<span
			className={`text-sm ${
				active ? "font-medium" : "group-hover:text-blue-600"
			}`}
		>
			{title}
		</span>
	</Link>
);

const SectionLabel = ({ title }) => (
	<p className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase mt-4">
		{title}
	</p>
);

const renderNavigationItem = (item) => {
	switch (item.type) {
		case "link":
			return <NavLink key={item.href} {...item} />;
		case "expandable":
			return <ExpandableLink key={item.title} {...item} />;
		case "section":
			return (
				<div key={item.title}>
					<SectionLabel title={item.title} />
					{item.items.map((subItem) => renderNavigationItem(subItem))}
				</div>
			);
		default:
			return null;
	}
};

export default function Navigation() {
	return (
		<nav className="flex-1 overflow-y-auto p-4">
			<div className="space-y-1">
				{navigationItems.map((item) => renderNavigationItem(item))}
			</div>
		</nav>
	);
}
