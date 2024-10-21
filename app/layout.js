import Sidebar from "@/componentss/sidebar";
import "./globals.css";
import TopNav from "@/componentss/topNavBar";

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<div className="min-h-screen">
					<Sidebar />
					<div className="ml-64">
						<TopNav />
						<main className="p-6">{children}</main>
					</div>
				</div>
			</body>
		</html>
	);
}
