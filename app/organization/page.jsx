import React from "react";

export default function OrganizationPage() {
	return (
		<div className="organization-page p-6">
			{/* Organization Overview */}
			<section className="overview-section mb-8">
				<h2 className="text-xl font-bold mb-4">
					Organization Overview
				</h2>
				<div className="stats-grid grid grid-cols-3 gap-6">
					<div className="stat-card p-4 bg-white shadow rounded">
						<h3 className="text-lg">Total Staff</h3>
						<p className="text-2xl font-semibold">150</p>
					</div>
					<div className="stat-card p-4 bg-white shadow rounded">
						<h3 className="text-lg">Departments</h3>
						<p className="text-2xl font-semibold">12</p>
					</div>
					<div className="stat-card p-4 bg-white shadow rounded">
						<h3 className="text-lg">Active Roles</h3>
						<p className="text-2xl font-semibold">8</p>
					</div>
				</div>
			</section>

			{/* Departments/Teams Management */}
			<section className="departments-section mb-8">
				<h2 className="text-xl font-bold mb-4">Departments/Teams</h2>
				<div className="departments-list">
					<ul>
						<li>Sales</li>
						<li>Marketing</li>
						<li>Product Development</li>
						<li>Customer Support</li>
					</ul>
					<button className="mt-4 p-2 bg-blue-500 text-white rounded">
						Add Department
					</button>
				</div>
			</section>

			{/* Roles & Permissions */}
			<section className="roles-section mb-8">
				<h2 className="text-xl font-bold mb-4">Roles & Permissions</h2>
				<div className="roles-grid grid grid-cols-3 gap-6">
					<div className="role-card p-4 bg-white shadow rounded">
						<h3 className="text-lg">Admin</h3>
						<p className="text-sm">Full access to all settings.</p>
					</div>
					<div className="role-card p-4 bg-white shadow rounded">
						<h3 className="text-lg">Manager</h3>
						<p className="text-sm">Manage departments and teams.</p>
					</div>
					<div className="role-card p-4 bg-white shadow rounded">
						<h3 className="text-lg">Employee</h3>
						<p className="text-sm">
							Access limited to specific features.
						</p>
					</div>
				</div>
			</section>

			{/* Staff/Employee Directory */}
			<section className="staff-section mb-8">
				<h2 className="text-xl font-bold mb-4">Staff Directory</h2>
				<div className="staff-list">
					<ul>
						<li>John Doe - Product Manager</li>
						<li>Jane Smith - Marketing Lead</li>
						<li>Michael Johnson - Software Engineer</li>
					</ul>
					<button className="mt-4 p-2 bg-blue-500 text-white rounded">
						Add Employee
					</button>
				</div>
			</section>

			{/* Attendance & Leave Management */}
			<section className="attendance-section mb-8">
				<h2 className="text-xl font-bold mb-4">Attendance & Leave</h2>
				<div className="attendance-tracking">
					<p>Recent Leave Requests</p>
					<ul>
						<li>John Doe - Leave approved</li>
						<li>Jane Smith - Leave pending</li>
					</ul>
				</div>
			</section>

			{/* Announcements & Internal Communication */}
			<section className="announcements-section mb-8">
				<h2 className="text-xl font-bold mb-4">Announcements</h2>
				<div className="announcement-list">
					<p>No new announcements.</p>
					<button className="mt-4 p-2 bg-blue-500 text-white rounded">
						Post Announcement
					</button>
				</div>
			</section>

			{/* Policies & Documents */}
			<section className="policies-section mb-8">
				<h2 className="text-xl font-bold mb-4">Policies & Documents</h2>
				<div className="documents-list">
					<ul>
						<li>Employee Handbook</li>
						<li>Code of Conduct</li>
						<li>Health and Safety Policy</li>
					</ul>
				</div>
			</section>
		</div>
	);
}
