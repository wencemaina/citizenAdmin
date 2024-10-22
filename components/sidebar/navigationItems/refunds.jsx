import { CreditCard, RefreshCw, ShieldCheck } from "lucide-react"; // Import icons for Refunds section

const refundsNavigation = {
	type: "section",
	title: "Refunds",
	items: [
		{
			type: "expandable",
			icon: CreditCard,
			title: "Refund Requests",
			links: [
				{ href: "/refunds", title: "All Refund Requests" },
				{ href: "/refunds/pending", title: "Pending Refunds" },
				{ href: "/refunds/completed", title: "Completed Refunds" },
			],
		},
		{
			type: "expandable",
			icon: RefreshCw,
			title: "Return Requests",
			links: [
				{ href: "/returns", title: "All Return Requests" },
				{ href: "/returns/pending", title: "Pending Returns" },
				{ href: "/returns/completed", title: "Completed Returns" },
			],
		},
		{
			type: "expandable",
			icon: ShieldCheck,
			title: "Disputes",
			links: [
				{ href: "/disputes", title: "All Disputes" },
				{ href: "/disputes/active", title: "Active Disputes" },
				{ href: "/disputes/closed", title: "Closed Disputes" },
			],
		},
	],
};

export default refundsNavigation;
