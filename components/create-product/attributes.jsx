import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

export const Attributes = ({ formData, handleChange, sizes, colors }) => {
	const materials = [
		"Cotton",
		"Polyester",
		"Wool",
		"Leather",
		"Denim",
		"Silk",
		"Linen",
		"Nylon",
		"Canvas",
		"Other",
	];

	return (
		<Card>
			<CardHeader>
				<CardTitle>Product Details</CardTitle>
			</CardHeader>
			<CardContent className="space-y-6">
				{/* Product Attributes Section */}
				<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
					<div className="space-y-2">
						<Label htmlFor="size">Size</Label>
						<Select
							value={formData.size || ""}
							onValueChange={(value) =>
								handleChange({
									target: { name: "size", value },
								})
							}
						>
							<SelectTrigger id="size">
								<SelectValue placeholder="Select Size" />
							</SelectTrigger>
							<SelectContent>
								{sizes.map((size) => (
									<SelectItem key={size} value={size}>
										{size}
									</SelectItem>
								))}
							</SelectContent>
						</Select>
					</div>

					<div className="space-y-2">
						<Label htmlFor="color">Color</Label>
						<Select
							value={formData.color || ""}
							onValueChange={(value) =>
								handleChange({
									target: { name: "color", value },
								})
							}
						>
							<SelectTrigger id="color">
								<SelectValue placeholder="Select Color" />
							</SelectTrigger>
							<SelectContent>
								{colors.map((color) => (
									<SelectItem key={color} value={color}>
										{color}
									</SelectItem>
								))}
							</SelectContent>
						</Select>
					</div>

					<div className="space-y-2">
						<Label htmlFor="material">Material</Label>
						<Select
							value={formData.material || ""}
							onValueChange={(value) =>
								handleChange({
									target: { name: "material", value },
								})
							}
						>
							<SelectTrigger id="material">
								<SelectValue placeholder="Select Material" />
							</SelectTrigger>
							<SelectContent>
								{materials.map((material) => (
									<SelectItem key={material} value={material}>
										{material}
									</SelectItem>
								))}
							</SelectContent>
						</Select>
					</div>

					<div className="space-y-2">
						<Label htmlFor="weight">Weight (kg)</Label>
						<Input
							id="weight"
							type="number"
							value={formData.weight || ""}
							onChange={(e) =>
								handleChange({
									target: {
										name: "weight",
										value: e.target.value,
									},
								})
							}
							min="0"
							step="0.1"
						/>
					</div>
				</div>

				<Separator className="my-4" />

				{/* Stock Management Section */}
				<div>
					<h4 className="text-sm font-medium mb-4">
						Stock Management
					</h4>
					<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
						<div className="space-y-2">
							<Label htmlFor="stockQuantity">
								Stock Quantity
							</Label>
							<Input
								id="stockQuantity"
								type="number"
								value={formData.stockQuantity || ""}
								onChange={(e) =>
									handleChange({
										target: {
											name: "stockQuantity",
											value: e.target.value,
										},
									})
								}
								min="0"
							/>
						</div>
						<div className="space-y-2">
							<Label htmlFor="lowStockThreshold">
								Low Stock Alert Threshold
							</Label>
							<Input
								id="lowStockThreshold"
								type="number"
								value={formData.lowStockThreshold || ""}
								onChange={(e) =>
									handleChange({
										target: {
											name: "lowStockThreshold",
											value: e.target.value,
										},
									})
								}
								min="0"
							/>
						</div>
					</div>
				</div>
			</CardContent>
		</Card>
	);
};

export default Attributes;
