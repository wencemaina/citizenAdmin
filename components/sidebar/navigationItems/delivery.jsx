import { Truck, ClipboardList, PackageCheck } from "lucide-react"; // Import icons for Delivery section

const deliveryNavigation = {
	type: "section",
	title: "Delivery",
	items: [
		{
			type: "expandable",
			icon: Truck,
			title: "Delivery Mgmt",
			links: [
				{ href: "/delivery", title: "All Deliveries" },
				{ href: "/delivery/pending", title: "Pending Deliveries" },
				{ href: "/delivery/completed", title: "Completed Deliveries" },
				{ href: "/delivery/couriers", title: "Courier Partners" },
			],
		},
		{
			type: "expandable",
			icon: ClipboardList,
			title: "Delivery Tasks",
			links: [
				{ href: "/delivery/tasks", title: "All Tasks" },
				{ href: "/delivery/tasks/pending", title: "Pending Tasks" },
				{ href: "/delivery/tasks/completed", title: "Completed Tasks" },
			],
		},
		{
			type: "expandable",
			icon: PackageCheck,
			title: "Tracking",
			links: [
				{ href: "/delivery/tracking", title: "Delivery Tracking" },
				{ href: "/delivery/updates", title: "Update Status" },
				{ href: "/delivery/issues", title: "Report Delivery Issues" },
			],
		},
	],
};

export default deliveryNavigation;
