// components/Sidebar/UserProfile.js
import { User, Settings } from "lucide-react";

export default function UserProfile() {
	return (
		<div className="border-t border-gray-200 p-4">
			<div className="flex items-center space-x-3">
				<div className="flex-shrink-0">
					<div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
						<User size={20} className="text-gray-500" />
					</div>
				</div>
				<div className="flex-1 min-w-0">
					<p className="text-sm font-medium text-gray-900">
						Admin User
					</p>
					<p className="text-xs text-gray-500 truncate">
						admin@company.com
					</p>
				</div>
				<Settings
					size={20}
					className="text-gray-400 hover:text-gray-600 cursor-pointer"
				/>
			</div>
		</div>
	);
}
