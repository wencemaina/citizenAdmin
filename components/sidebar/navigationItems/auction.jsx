import {
	Gavel,
	PlusCircle,
	Goal,
	ClipboardList,
	Settings2,
} from "lucide-react";

const auctionsNavigation = {
	type: "section",
	title: "Auctions",
	items: [
		{
			type: "expandable",
			icon: Gavel,
			title: "Active Auctions",
			links: [
				{ href: "/live-auctions", title: "Live Auctions" },
				{ href: "/upcoming-auctions", title: "Upcoming Auctions" },
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
				{ href: "/auctions/bids/auto", title: "Auto-Bidding Rules" },
				{ href: "/auctions/bids/watchlist", title: "Bid Watchlist" },
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
				{ href: "/auctions/settings/categories", title: "Categories" },
				{ href: "/auctions/settings/rules", title: "Auction Rules" },
				{ href: "/auctions/settings/fees", title: "Fee Structure" },
				{
					href: "/auctions/settings/notifications",
					title: "Notification Settings",
				},
			],
		},
	],
};

export default auctionsNavigation;
