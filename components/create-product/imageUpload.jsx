import { ImagePlus } from "lucide-react";

// components/ProductForm/ImageUpload.js
export const ImageUpload = ({ handleImageChange, handleThumbnailChange }) => (
	<div className="space-y-6">
		<div>
			<label className="block text-sm font-medium text-gray-700">
				Thumbnail Image
			</label>
			<div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
				<div className="space-y-1 text-center">
					<ImagePlus className="mx-auto h-12 w-12 text-gray-400" />
					<div className="flex text-sm text-gray-600">
						<label
							htmlFor="thumbnail"
							className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500"
						>
							<span>Upload thumbnail</span>
							<input
								id="thumbnail"
								name="thumbnail"
								type="file"
								className="sr-only"
								accept="image/*"
								onChange={handleThumbnailChange}
							/>
						</label>
					</div>
					<p className="text-xs text-gray-500">PNG, JPG up to 2MB</p>
				</div>
			</div>
		</div>

		<div>
			<label className="block text-sm font-medium text-gray-700">
				Product Images
			</label>
			<div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
				<div className="space-y-1 text-center">
					<ImagePlus className="mx-auto h-12 w-12 text-gray-400" />
					<div className="flex text-sm text-gray-600">
						<label
							htmlFor="images"
							className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500"
						>
							<span>Upload images</span>
							<input
								id="images"
								name="images"
								type="file"
								multiple
								className="sr-only"
								accept="image/*"
								onChange={handleImageChange}
							/>
						</label>
						<p className="pl-1">or drag and drop</p>
					</div>
					<p className="text-xs text-gray-500">
						PNG, JPG, GIF up to 10MB
					</p>
				</div>
			</div>
		</div>
	</div>
);
