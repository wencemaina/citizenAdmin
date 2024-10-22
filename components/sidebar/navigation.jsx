/* "use client";
import { useState } from "react";

import {
	Home,
	Users,
	ShoppingBag,
	BarChart2,
	Mail,
	ChevronDown,
	ChevronUp,
} from "lucide-react";
import Link from "next/link";

const ExpandableLink = ({ icon: Icon, title, children }) => {
	const [isExpanded, setIsExpanded] = useState(false);

	return (
		<div>
			<button
				onClick={() => setIsExpanded(!isExpanded)}
				className="w-full flex items-center justify-between px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-md group"
			>
				<div className="flex items-center space-x-3">
					<Icon size={20} className="group-hover:text-blue-600" />
					<span className="group-hover:text-blue-600">{title}</span>
				</div>
				{isExpanded ? (
					<ChevronUp size={16} className="text-gray-400" />
				) : (
					<ChevronDown size={16} className="text-gray-400" />
				)}
			</button>
			{isExpanded && <div className="space-y-1">{children}</div>}
		</div>
	);
};

export default function Navigation() {
	return (
		<nav className="flex-1 overflow-y-auto p-4">
			<div className="space-y-1">
				<Link
					href="/"
					className="flex items-center space-x-3 px-3 py-2 bg-blue-50 text-blue-600 rounded-md"
				>
					<Home size={20} />
					<span className="font-medium">Dashboard</span>
				</Link>

				<p className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase mt-4">
					Management
				</p>

				<ExpandableLink icon={Users} title="Users">
					<Link
						href="/users"
						className="block pl-6 py-2 text-gray-600 hover:bg-gray-50 rounded-md group"
					>
						<span className="group-hover:text-blue-600">
							All Users
						</span>
					</Link>
					<Link
						href="/users/createUser"
						className="block pl-6 py-2 text-gray-600 hover:bg-gray-50 rounded-md group"
					>
						<span className="group-hover:text-blue-600">
							Create User
						</span>
					</Link>
					<Link
						href="/users/roles"
						className="block pl-6 py-2 text-gray-600 hover:bg-gray-50 rounded-md group"
					>
						<span className="group-hover:text-blue-600">
							Roles & Permissions
						</span>
					</Link>
				</ExpandableLink>

				<ExpandableLink icon={ShoppingBag} title="Products">
					<Link
						href="/products"
						className="block pl-6 py-2 text-gray-600 hover:bg-gray-50 rounded-md group"
					>
						<span className="group-hover:text-blue-600">
							All Products
						</span>
					</Link>
					<Link
						href="/products/create"
						className="block pl-6 py-2 text-gray-600 hover:bg-gray-50 rounded-md group"
					>
						<span className="group-hover:text-blue-600">
							Create Product
						</span>
					</Link>
					<Link
						href="/products/categories"
						className="block pl-6 py-2 text-gray-600 hover:bg-gray-50 rounded-md group"
					>
						<span className="group-hover:text-blue-600">
							Categories
						</span>
					</Link>
				</ExpandableLink>

				<Link
					href="/analytics"
					className="flex items-center space-x-3 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-md group"
				>
					<BarChart2
						size={20}
						className="group-hover:text-blue-600"
					/>
					<span className="group-hover:text-blue-600">Analytics</span>
				</Link>

				<p className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase mt-4">
					Communication
				</p>

				<Link
					href="/messages"
					className="flex items-center space-x-3 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-md group"
				>
					<Mail size={20} className="group-hover:text-blue-600" />
					<span className="group-hover:text-blue-600">Messages</span>
				</Link>
			</div>
		</nav>
	);
}
 */
"use client";
import { useState } from "react";
import {
	Home,
	Users,
	ShoppingBag,
	BarChart2,
	Mail,
	Settings,
	HeadphonesIcon,
	FileQuestion,
	Building2,
	ChevronUp,
	ChevronDown,
} from "lucide-react";
import Link from "next/link";

const navigationItems = [
	{
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
	},
	{
		type: "section",
		title: "Management",
		items: [
			{
				type: "expandable",
				icon: Users,
				title: "Users",
				links: [
					{ href: "/users", title: "All Users" },
					{ href: "/users/createUser", title: "Create User" },
					{ href: "/users/roles", title: "Roles & Permissions" },
				],
			},
			{
				type: "expandable",
				icon: ShoppingBag,
				title: "Products",
				links: [
					{ href: "/products", title: "All Products" },
					{ href: "/products/create", title: "Create Product" },
					{ href: "/products/categories", title: "Categories" },
				],
			},
		],
	},
	{
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
		],
	},
	{
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
	},
	{
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
				],
			},
		],
	},
];

const ExpandableLink = ({ icon: Icon, title, links }) => {
	const [isExpanded, setIsExpanded] = useState(false);

	return (
		<div>
			<button
				onClick={() => setIsExpanded(!isExpanded)}
				className="w-full flex items-center justify-between px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-md group"
			>
				<div className="flex items-center space-x-3">
					<Icon size={20} className="group-hover:text-blue-600" />
					<span className="group-hover:text-blue-600">{title}</span>
				</div>
				{isExpanded ? (
					<ChevronUp size={16} className="text-gray-400" />
				) : (
					<ChevronDown size={16} className="text-gray-400" />
				)}
			</button>
			{isExpanded && (
				<div className="space-y-1">
					{links.map((link, index) => (
						<Link
							key={index}
							href={link.href}
							className="block pl-6 py-2 text-gray-600 hover:bg-gray-50 rounded-md group"
						>
							<span className="group-hover:text-blue-600">
								{link.title}
							</span>
						</Link>
					))}
				</div>
			)}
		</div>
	);
};

const NavLink = ({ href, icon: Icon, title, active }) => (
	<Link
		href={href}
		className={`flex items-center space-x-3 px-3 py-2 ${
			active
				? "bg-blue-50 text-blue-600"
				: "text-gray-600 hover:bg-gray-50"
		} rounded-md group`}
	>
		<Icon size={20} className={!active && "group-hover:text-blue-600"} />
		<span
			className={`${
				active ? "font-medium" : "group-hover:text-blue-600"
			}`}
		>
			{title}
		</span>
	</Link>
);

const SectionLabel = ({ title }) => (
	<p className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase mt-4">
		{title}
	</p>
);

const renderNavigationItem = (item) => {
	switch (item.type) {
		case "link":
			return <NavLink key={item.href} {...item} />;
		case "expandable":
			return <ExpandableLink key={item.title} {...item} />;
		case "section":
			return (
				<div key={item.title}>
					<SectionLabel title={item.title} />
					{item.items.map((subItem) => renderNavigationItem(subItem))}
				</div>
			);
		default:
			return null;
	}
};

export default function Navigation() {
	return (
		<nav className="flex-1 overflow-y-auto p-4">
			<div className="space-y-1">
				{navigationItems.map((item) => renderNavigationItem(item))}
			</div>
		</nav>
	);
}
