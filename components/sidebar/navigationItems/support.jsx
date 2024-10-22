import { FileQuestion, Headphones as HeadphonesIcon } from "lucide-react";

const supportNavigation = {
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
};

export default supportNavigation;
