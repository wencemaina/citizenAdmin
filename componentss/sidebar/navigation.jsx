"use client";
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
