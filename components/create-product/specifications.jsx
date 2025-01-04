import { useState } from "react";

const predefinedSpecKeys = [
	"Processor",
	"RAM",
	"Storage",
	"Display",
	"Battery",
	"Camera",
	"Operating System",
	"Dimensions",
	"Weight",
	"Connectivity",
];

export default function Specifications({
	initialSpecifications = {},
	initialKeyFeatures = [],
	onSpecificationChange,
}) {
	const [newSpecKey, setNewSpecKey] = useState("");
	const [newSpecValue, setNewSpecValue] = useState("");
	const [newKeyFeature, setNewKeyFeature] = useState("");
	const [customKey, setCustomKey] = useState("");
	const [isCustomKey, setIsCustomKey] = useState(false);
	const [specifications, setSpecifications] = useState(
		initialSpecifications || {},
	);
	const [keyFeatures, setKeyFeatures] = useState(initialKeyFeatures || []);

	const handleAddSpecification = () => {
		const key = isCustomKey ? customKey : newSpecKey;
		if (key && newSpecValue) {
			const updatedSpecifications = {
				...specifications,
				[key]: newSpecValue,
			};
			setSpecifications(updatedSpecifications);
			onSpecificationChange({
				specifications: updatedSpecifications,
				keyFeatures,
			});

			// Reset input fields
			setNewSpecKey("");
			setNewSpecValue("");
			setCustomKey("");
			setIsCustomKey(false);
		}
	};

	const handleAddKeyFeature = () => {
		if (newKeyFeature) {
			const updatedKeyFeatures = [...keyFeatures, newKeyFeature];
			setKeyFeatures(updatedKeyFeatures);
			onSpecificationChange({
				specifications,
				keyFeatures: updatedKeyFeatures,
			});

			// Reset input field
			setNewKeyFeature("");
		}
	};

	const handleRemoveSpecification = (key) => {
		const updatedSpecifications = { ...specifications };
		delete updatedSpecifications[key];
		setSpecifications(updatedSpecifications);
		onSpecificationChange({
			specifications: updatedSpecifications,
			keyFeatures,
		});
	};

	const handleRemoveKeyFeature = (index) => {
		const updatedKeyFeatures = keyFeatures.filter((_, i) => i !== index);
		setKeyFeatures(updatedKeyFeatures);
		onSpecificationChange({
			specifications,
			keyFeatures: updatedKeyFeatures,
		});
	};

	return (
		<div>
			<h3 className="text-xl font-semibold">Specifications</h3>
			<div className="mb-4">
				<select
					value={newSpecKey}
					onChange={(e) => setNewSpecKey(e.target.value)}
					disabled={isCustomKey}
					className="border p-2 rounded"
				>
					<option value="">Select a key</option>
					{predefinedSpecKeys.map((key) => (
						<option key={key} value={key}>
							{key}
						</option>
					))}
				</select>
				<input
					type="text"
					value={newSpecValue}
					onChange={(e) => setNewSpecValue(e.target.value)}
					placeholder="Value"
					className="border p-2 rounded ml-2"
				/>
				<button
					type="button"
					onClick={handleAddSpecification}
					className="bg-blue-500 text-white px-4 py-2 rounded ml-2"
				>
					Add Specification
				</button>
				<label className="ml-2">
					<input
						type="checkbox"
						checked={isCustomKey}
						onChange={() => setIsCustomKey(!isCustomKey)}
						className="mr-1"
					/>
					Custom Key
				</label>
				{isCustomKey && (
					<input
						type="text"
						value={customKey}
						onChange={(e) => setCustomKey(e.target.value)}
						placeholder="Custom key"
						className="border p-2 rounded ml-2"
					/>
				)}
			</div>
			<ul className="mb-4">
				{Object.entries(specifications).map(([key, value]) => (
					<li key={key} className="flex justify-between items-center">
						<span>
							{key}: {value}
						</span>
						<button
							type="button"
							onClick={() => handleRemoveSpecification(key)}
							className="text-red-500 hover:underline"
						>
							Remove
						</button>
					</li>
				))}
			</ul>

			<h3 className="text-xl font-semibold">Key Features</h3>
			<div className="mb-4">
				<input
					type="text"
					value={newKeyFeature}
					onChange={(e) => setNewKeyFeature(e.target.value)}
					placeholder="Key Feature"
					className="border p-2 rounded"
				/>
				<button
					type="button"
					onClick={handleAddKeyFeature}
					className="bg-blue-500 text-white px-4 py-2 rounded ml-2"
				>
					Add Key Feature
				</button>
			</div>
			<ul>
				{keyFeatures.map((feature, index) => (
					<li
						key={index}
						className="flex justify-between items-center"
					>
						<span>{feature}</span>
						<button
							type="button"
							onClick={() => handleRemoveKeyFeature(index)}
							className="text-red-500 hover:underline"
						>
							Remove
						</button>
					</li>
				))}
			</ul>
		</div>
	);
}
