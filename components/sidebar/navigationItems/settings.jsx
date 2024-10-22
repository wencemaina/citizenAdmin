import { Settings } from "lucide-react";

const settingsNavigation = {
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
};

export default settingsNavigation;
