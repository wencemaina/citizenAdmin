import Notifications from "./notification";
import SearchBar from "./searchbar";

export default function TopNav() {
	return (
		<header className="h-16 bg-white border-b border-gray-200">
			<div className="flex items-center justify-between px-6 h-full">
				<SearchBar />
				<Notifications />
			</div>
		</header>
	);
}
