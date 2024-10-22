import { Megaphone, Tag, Monitor, UserCheck } from "lucide-react";

const marketingNavigation = {
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
};

export default marketingNavigation;
