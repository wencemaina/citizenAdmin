import { Megaphone, Tag, Monitor, UserCheck } from "lucide-react";

const marketingNavigation = {
	type: "section",
	title: "Marketing",
	items: [
		{
			type: "expandable",
			icon: Tag,
			title: " Coupons",
			links: [
				{ href: "/coupons/all-coupons", title: "All Coupons" },
				{
					href: "/coupons/generate-coupons",
					title: "Generate Coupons",
				},
			],
		},
		{
			type: "link",
			href: "/campaigns",
			icon: Megaphone,
			title: "Campaigns",
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
};

export default marketingNavigation;
