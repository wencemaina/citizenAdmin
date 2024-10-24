"use client";
import { useState, useEffect } from "react";
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
	Box,
	Archive,
	Truck,
	Bell,
	DollarSign,
	CreditCard,
	PieChart,
	FileText,
	Megaphone,
	Tag,
	Monitor,
	UserCheck,
	Gavel,
	PlusCircle,
	Goal,
	ClipboardList,
	Settings2,
	ShoppingCart,
	TagIcon,
} from "lucide-react";
import Link from "next/link";
import { reports } from "./navigationItems/reports";
import managementNavigation from "./navigationItems/management";
import generalNavigation from "./navigationItems/general";
import salesNavigation from "./navigationItems/sales";
import auctionsNavigation from "./navigationItems/auction";
import communicationNavigation from "./navigationItems/communication";
import financialsNavigation from "./navigationItems/financials";
import marketingNavigation from "./navigationItems/marketing";
import settingsNavigation from "./navigationItems/settings";
import supportNavigation from "./navigationItems/support";
import refundsNavigation from "./navigationItems/refunds";
import staffNavigation from "./navigationItems/staff";
import sellersNavigation from "./navigationItems/vendors";
import deliveryNavigation from "./navigationItems/delivery";

const navigationItems = [
	generalNavigation,
	managementNavigation,
	salesNavigation,
	auctionsNavigation,
	sellersNavigation,
	communicationNavigation,
	financialsNavigation,
	deliveryNavigation,
	refundsNavigation,
	marketingNavigation,
	supportNavigation,
	staffNavigation,
	settingsNavigation,
];

const ExpandableLink = ({ icon: Icon, title, links }) => {
	// Initialize with false to match server-side rendering
	const [isExpanded, setIsExpanded] = useState(false);
	const [hasMounted, setHasMounted] = useState(false);

	useEffect(() => {
		setHasMounted(true);
		// Load saved state from localStorage after component mounts
		const savedState = localStorage.getItem(`nav-${title}`);
		if (savedState !== null) {
			setIsExpanded(JSON.parse(savedState));
		}
	}, [title]);

	useEffect(() => {
		// Only save to localStorage after initial mount
		if (hasMounted) {
			localStorage.setItem(`nav-${title}`, JSON.stringify(isExpanded));
		}
	}, [isExpanded, title, hasMounted]);

	// Show loading state or nothing during server-side rendering
	if (!hasMounted) {
		return (
			<div>
				<button className="w-full flex items-center justify-between px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-md group">
					<div className="flex items-center space-x-3">
						<Icon size={20} className="group-hover:text-blue-600" />
						<span className="group-hover:text-blue-600 font-semibold text-[14px]">
							{title}
						</span>
					</div>
					<ChevronDown size={16} className="text-gray-400" />
				</button>
			</div>
		);
	}

	return (
		<div>
			<button
				onClick={() => setIsExpanded(!isExpanded)}
				className="w-full flex items-center justify-between px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-md group"
			>
				<div className="flex items-center space-x-3">
					<Icon size={20} className="group-hover:text-blue-600" />
					<span className="group-hover:text-blue-600 font-semibold text-[14px]">
						{title}
					</span>
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
							<span className="group-hover:text-blue-600 font-semibold text-[14px]">
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
			className={`text-sm ${
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
