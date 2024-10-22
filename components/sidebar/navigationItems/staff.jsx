import { Users, ClipboardList, Shield } from "lucide-react"; // Import icons for Staff section

const staffNavigation = {
	type: "section",
	title: "Staff",
	items: [
		{
			type: "expandable",
			icon: Users,
			title: "Manage Staff",
			links: [
				{ href: "/staff", title: "All Staff" },
				{ href: "/staff/add", title: "Add Staff" },
				{ href: "/staff/roles", title: "Roles & Permissions" },
				{ href: "/staff/activity", title: "Staff Activity Log" },
			],
		},
		{
			type: "expandable",
			icon: ClipboardList,
			title: "Staff Tasks",
			links: [
				{ href: "/staff/tasks", title: "All Tasks" },
				{ href: "/staff/tasks/pending", title: "Pending Tasks" },
				{ href: "/staff/tasks/completed", title: "Completed Tasks" },
			],
		},
		{
			type: "expandable",
			icon: Shield,
			title: "Staff Security",
			links: [
				{ href: "/staff/security", title: "Security Settings" },
				{ href: "/staff/2fa", title: "Two-Factor Authentication" },
				{ href: "/staff/access-logs", title: "Access Logs" },
			],
		},
	],
};

export default staffNavigation;
