import { DollarSign, CreditCard, PieChart, FileText } from "lucide-react";

const financialsNavigation = {
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
};

export default financialsNavigation;
