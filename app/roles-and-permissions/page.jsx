"use client";
import React, { useState } from "react";
export default function RolesAndPermissionsPage() {
	// Sample roles data
	const [roles, setRoles] = useState([
		{
			id: 1,
			name: "Admin",
			permissions: ["Manage Users", "Manage Products", "View Reports"],
		},
		{
			id: 2,
			name: "Editor",
			permissions: ["Edit Products", "View Reports"],
		},
		{ id: 3, name: "Viewer", permissions: ["View Products"] },
	]);

	const [newRole, setNewRole] = useState("");
	const [newPermissions, setNewPermissions] = useState("");

	const handleAddRole = (e) => {
		e.preventDefault();
		if (newRole && newPermissions) {
			const permissionsArray = newPermissions
				.split(",")
				.map((p) => p.trim());
			setRoles([
				...roles,
				{
					id: roles.length + 1,
					name: newRole,
					permissions: permissionsArray,
				},
			]);
			setNewRole("");
			setNewPermissions("");
		}
	};

	return (
		<div className="container mx-auto px-4 py-8">
			<h1 className="text-2xl font-bold mb-6">Roles and Permissions</h1>

			<form
				onSubmit={handleAddRole}
				className="bg-white p-6 rounded-lg shadow-md mb-6"
			>
				<h2 className="text-lg font-semibold mb-4">Add New Role</h2>
				<div className="mb-4">
					<label
						className="block text-gray-700 text-sm font-bold mb-2"
						htmlFor="roleName"
					>
						Role Name
					</label>
					<input
						type="text"
						value={newRole}
						onChange={(e) => setNewRole(e.target.value)}
						required
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					/>
				</div>
				<div className="mb-4">
					<label
						className="block text-gray-700 text-sm font-bold mb-2"
						htmlFor="permissions"
					>
						Permissions (comma separated)
					</label>
					<input
						type="text"
						value={newPermissions}
						onChange={(e) => setNewPermissions(e.target.value)}
						required
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					/>
				</div>
				<div className="flex items-center justify-between">
					<button
						type="submit"
						className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
					>
						Add Role
					</button>
				</div>
			</form>

			<h2 className="text-lg font-semibold mb-4">Existing Roles</h2>
			<table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
				<thead>
					<tr className="bg-gray-100">
						<th className="py-3 px-4 border-b">Role Name</th>
						<th className="py-3 px-4 border-b">Permissions</th>
					</tr>
				</thead>
				<tbody>
					{roles.map((role) => (
						<tr key={role.id} className="hover:bg-gray-50">
							<td className="py-2 px-4 border-b">{role.name}</td>
							<td className="py-2 px-4 border-b">
								{role.permissions.join(", ")}
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
