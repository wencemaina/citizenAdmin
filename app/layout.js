import { Inter } from "next/font/google";
import "./globals.css";

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
						{/* Sidebar */}
						<aside className="w-64 bg-white shadow-md">
							<div className="p-4">
								<h1 className="text-2xl font-bold text-gray-800">
									Admin Panel
								</h1>
							</div>
							<nav className="mt-4">
								<ul className="space-y-2">
									<li>
										<a
											href="/dashboard"
											className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
										>
											<svg
												className="w-5 h-5 mr-2"
												fill="none"
												stroke="currentColor"
												viewBox="0 0 24 24"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth={2}
													d="M4 6h16M4 12h16M4 18h16"
												/>
											</svg>
											Dashboard
										</a>
									</li>
									<li>
										<a
											href="/users"
											className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
										>
											<svg
												className="w-5 h-5 mr-2"
												fill="none"
												stroke="currentColor"
												viewBox="0 0 24 24"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth={2}
													d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
												/>
											</svg>
											Users
										</a>
									</li>
									<li>
										<a
											href="/settings"
											className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
										>
											<svg
												className="w-5 h-5 mr-2"
												fill="none"
												stroke="currentColor"
												viewBox="0 0 24 24"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth={2}
													d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
												/>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth={2}
													d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
												/>
											</svg>
											Settings
										</a>
									</li>
								</ul>
							</nav>
						</aside>

						{/* Main Content */}
						<main className="flex-1 p-8 overflow-y-auto">
							{/* Top Navigation Bar */}
							<div className="mb-8 bg-white shadow rounded-lg p-4">
								<div className="flex justify-between items-center">
									<h2 className="text-xl font-semibold text-gray-800">
										Welcome Back
									</h2>
									<div className="flex items-center space-x-4">
										<button className="p-2 hover:bg-gray-100 rounded-full">
											<svg
												className="w-6 h-6 text-gray-600"
												fill="none"
												stroke="currentColor"
												viewBox="0 0 24 24"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth={2}
													d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
												/>
											</svg>
										</button>
										<div className="w-8 h-8 bg-gray-300 rounded-full"></div>
									</div>
								</div>
							</div>

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
