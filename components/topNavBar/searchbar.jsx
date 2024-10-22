// components/TopNav/SearchBar.js
import { Search } from "lucide-react";

export default function SearchBar() {
	return (
		<div className="flex-1 max-w-lg">
			<div className="relative">
				<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
					<Search size={20} className="text-gray-400" />
				</div>
				<input
					type="text"
					className="block w-full pl-10 pr-3 py-2 border border-gray-200 rounded-lg text-sm placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
					placeholder="Search..."
				/>
			</div>
		</div>
	);
}
