// app/layout.js
import Sidebar from "@/components/sidebar";
import "./globals.css";
import TopNav from "@/components/topNavBar";

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<div className="min-h-screen ">
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
