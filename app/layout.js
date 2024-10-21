// app/layout.jsx
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import TopNav from "@/components/TopNav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Admin Dashboard",
	description: "Admin dashboard using Next.js",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<div className="min-h-screen bg-gray-100">
					<div className="flex h-screen bg-gray-100">
						{/* Sidebar Component */}
						<Sidebar />

						{/* Main Content */}
						<main className="flex-1 p-8 overflow-y-auto">
							{/* Top Navigation Component */}
							<TopNav />

							{/* Page Content */}
							<div className="bg-white shadow rounded-lg p-6">
								{children}
							</div>
						</main>
					</div>
				</div>
			</body>
		</html>
	);
}
