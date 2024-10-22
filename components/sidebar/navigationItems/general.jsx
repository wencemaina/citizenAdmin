import { Home, BarChart2, Building2 } from "lucide-react"; // Import icons as needed

const generalNavigation = {
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
};

export default generalNavigation;
