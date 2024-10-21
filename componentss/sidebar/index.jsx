"use client";

import Logo from "./logo";
import Navigation from "./navigation";
import UserProfile from "./userProfile";

export default function Sidebar() {
	return (
		<aside className="fixed top-0 left-0 h-screen w-64 bg-white border-r border-gray-200">
			<div className="flex flex-col h-full">
				<Logo />
				<Navigation />
				<UserProfile />
			</div>
		</aside>
	);
}
