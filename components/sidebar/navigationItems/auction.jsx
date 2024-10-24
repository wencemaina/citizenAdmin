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
				{ href: "/auctions/live-auctions", title: "Live Auctions" },
				{
					href: "/auctions/upcoming-auctions",
					title: "Upcoming Auctions",
				},
				{
					href: "/auctions/create-new-auction",
					title: "Create New Auction",
				},
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
