import { Bell, Menu } from "lucide-react";

export default function Notifications() {
	return (
		<div className="flex items-center space-x-4">
			<button className="p-2 text-gray-400 hover:text-gray-600 relative">
				<Bell size={20} />
				<span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
			</button>
			<button className="p-2 text-gray-400 hover:text-gray-600">
				<Menu size={20} />
			</button>
		</div>
	);
}
