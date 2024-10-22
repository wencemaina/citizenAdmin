import { Mail, Bell } from "lucide-react";

const communicationNavigation = {
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
};

export default communicationNavigation;
